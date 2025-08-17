import React, { createContext, useContext, useEffect, useState } from 'react';

interface TranslationContextType {
  currentLanguage: string;
  switchLanguage: (lang: string) => void;
  isTranslating: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: React.ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    // Initialize Google Translate
    const loadGoogleTranslate = () => {
      // Check if script is already loaded
      if (document.querySelector('script[src*="translate.google.com"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,vi,es',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
            gaTrack: false,
          }, 'google_translate_element');
          
          // Force the widget to be visible
          setTimeout(() => {
            const element = document.getElementById('google_translate_element');
            if (element) {
              element.style.display = 'block';
              element.style.visibility = 'visible';
              element.style.opacity = '1';
            }
          }, 1000);
        }
      };

      document.head.appendChild(script);
    };

    loadGoogleTranslate();

    return () => {
      // Cleanup
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit;
      }
    };
  }, []);

  const switchLanguage = (targetLang: string) => {
    setIsTranslating(true);
    setCurrentLanguage(targetLang);

    if (targetLang === 'es') {
      // Use Google Translate for Spanish
      setTimeout(() => {
        try {
          // Method 1: Try to find and use the Google Translate dropdown
          const googleTranslateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
          if (googleTranslateElement) {
            googleTranslateElement.value = 'es';
            googleTranslateElement.dispatchEvent(new Event('change'));
            setIsTranslating(false);
            return;
          }

          // Method 2: Try to find the Google Translate widget
          const translateWidget = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
          if (translateWidget && translateWidget.contentWindow) {
            try {
              const selectElement = translateWidget.contentWindow.document.querySelector('select') as HTMLSelectElement;
              if (selectElement) {
                selectElement.value = 'es';
                selectElement.dispatchEvent(new Event('change'));
                setIsTranslating(false);
                return;
              }
            } catch (e) {
              console.log('Could not access iframe content');
            }
          }

          // Method 3: Try to trigger Google Translate programmatically
          if (window.google && window.google.translate) {
            try {
              // Try to access the translate API directly
              const translateElement = document.querySelector('#google_translate_element');
              if (translateElement) {
                const selectElement = translateElement.querySelector('select') as HTMLSelectElement;
                if (selectElement) {
                  selectElement.value = 'es';
                  selectElement.dispatchEvent(new Event('change'));
                  setIsTranslating(false);
                  return;
                }
              }
            } catch (e) {
              console.log('Could not access translate element');
            }
          }

          // Method 4: Create a temporary Google Translate element
          const tempDiv = document.createElement('div');
          tempDiv.id = 'temp_google_translate';
          tempDiv.style.position = 'absolute';
          tempDiv.style.left = '-9999px';
          tempDiv.style.top = '-9999px';
          document.body.appendChild(tempDiv);

          if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'es',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            }, 'temp_google_translate');

            setTimeout(() => {
              const tempSelect = document.querySelector('#temp_google_translate select') as HTMLSelectElement;
              if (tempSelect) {
                tempSelect.value = 'es';
                tempSelect.dispatchEvent(new Event('change'));
                document.body.removeChild(tempDiv);
              }
              setIsTranslating(false);
            }, 500);
          } else {
            document.body.removeChild(tempDiv);
            setIsTranslating(false);
          }

        } catch (error) {
          console.error('Error with Google Translate:', error);
          setIsTranslating(false);
          
          // Fallback: Show a message to the user
          alert('Spanish translation is currently unavailable. Please try refreshing the page or contact us for assistance.');
        }
      }, 100);
    } else {
      setIsTranslating(false);
    }
  };

  const value: TranslationContextType = {
    currentLanguage,
    switchLanguage,
    isTranslating,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}; 