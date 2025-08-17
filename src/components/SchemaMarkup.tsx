export const LawFirmSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://svrlawfirm.com/#legal-service",
        "name": "SVR Law Firm",
        "description": "SVR Law Firm provides expert personal injury and criminal defense legal services in Houston, Texas. We handle car accidents, DWI, domestic violence, wrongful death, slip and fall, and truck accident cases.",
        "url": "https://svrlawfirm.com",
        "telephone": "+1-281-249-9835",
        "email": "info@svrlawfirm.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2100 West Loop South Suite 1410",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "postalCode": "77027",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 29.7604,
          "longitude": -95.3698
        },
        "openingHours": "Mo-Fr 09:00-17:00, Sa 09:00-17:00",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Check",
        "currenciesAccepted": "USD",
        "areaServed": {
          "@type": "City",
          "name": "Houston"
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 29.7604,
            "longitude": -95.3698
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Legal Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Personal Injury Law",
                "description": "Car accidents, truck accidents, slip and fall, wrongful death, catastrophic injury, dog bites"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Criminal Defense Law",
                "description": "DWI/DUI, drug possession, domestic violence, assault, weapon cases, theft and robbery"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "John Smith"
            },
            "reviewBody": "SVR Law Firm helped me get the compensation I deserved after my car accident. Professional and caring attorneys."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Maria Garcia"
            },
            "reviewBody": "Excellent criminal defense attorneys. They fought hard for my case and got the charges reduced."
          }
        ]
      },
      {
        "@type": "Attorney",
        "@id": "https://svrlawfirm.com/#attorney",
        "name": "Sanah Roopani",
        "jobTitle": "Lead Attorney",
        "worksFor": {
          "@id": "https://svrlawfirm.com/#legal-service"
        },
        "description": "Experienced attorney with 250+ cases as prosecutor. Specializes in personal injury and criminal defense law.",
        "telephone": "+1-281-249-9835",
        "email": "info@svrlawfirm.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2100 West Loop South Suite 1410",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "postalCode": "77027",
          "addressCountry": "US"
        },
        "knowsAbout": [
          "Personal Injury Law",
          "Criminal Defense Law",
          "Car Accident Law",
          "DWI Defense",
          "Domestic Violence Defense",
          "Wrongful Death Law",
          "Truck Accident Law",
          "Slip and Fall Law"
        ],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "University of Houston Law Center"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://svrlawfirm.com/#organization",
        "name": "SVR Law Firm",
        "url": "https://svrlawfirm.com",
        "logo": "https://svrlawfirm.com/svr-logo.png",
        "sameAs": [
          "https://www.facebook.com/svrlawfirm",
          "https://www.linkedin.com/company/svr-law-firm"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-281-249-9835",
          "contactType": "customer service",
          "availableLanguage": ["English", "Vietnamese"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const PracticeAreaSchema = ({ practiceArea, description }: { practiceArea: string; description: string }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${practiceArea} Legal Services`,
    "description": description,
    "provider": {
      "@type": "LegalService",
      "name": "SVR Law Firm",
      "url": "https://svrlawfirm.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Houston"
    },
    "serviceType": "Legal Services",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free consultation for legal services",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ContactPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SVR Law Firm",
    "description": "Contact SVR Law Firm in Houston for expert legal representation. Personal injury and criminal defense attorneys.",
    "url": "https://svrlawfirm.com/contact",
    "mainEntity": {
      "@type": "LegalService",
      "name": "SVR Law Firm",
      "telephone": "+1-281-249-9835",
      "email": "info@svrlawfirm.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2100 West Loop South Suite 1410",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "postalCode": "77027",
        "addressCountry": "US"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}; 