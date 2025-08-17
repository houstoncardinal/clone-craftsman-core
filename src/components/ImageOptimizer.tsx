import { useEffect, useState } from 'react';

interface ImageOptimizerProps {
  images: string[];
  onLoadComplete?: () => void;
  children: React.ReactNode;
}

export const ImageOptimizer = ({ images, onLoadComplete, children }: ImageOptimizerProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((url) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(url);
          img.onerror = () => reject(url);
          img.src = url;
        });
      });

      try {
        const loadedUrls = await Promise.all(promises);
        setLoadedImages(new Set(loadedUrls));
        setIsLoading(false);
        onLoadComplete?.();
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        setIsLoading(false);
        onLoadComplete?.();
      }
    };

    preloadImages();
  }, [images, onLoadComplete]);

  return (
    <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
      {children}
    </div>
  );
};

// Critical images that should be preloaded immediately
export const CRITICAL_IMAGES = [
  '/svr.jpeg', // Logo
  '/wrongfuldeath.jpg', // Default background
  '/caraccident.jpg',
  '/18wheeler.png',
  '/dui.png',
  '/domestic.jpg',
  '/drugpossession.png',
  '/weaponcharges.jpg',
  '/catastrophic.jpg',
  '/hero.png',
  '/lawyers1.jpg',
  '/lawyers2.jpg'
];

// Preload critical images on app start
export const preloadCriticalImages = () => {
  CRITICAL_IMAGES.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}; 