import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: string;
  noindex?: boolean;
  language?: string;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://svrlawfirm.com/thumbnail.png",
  ogType = "website",
  schema,
  noindex = false,
  language = "en"
}: SEOHeadProps) => {
  const fullTitle = title.includes("SVR Law Firm") ? title : `${title} | SVR Law Firm - Houston Attorney`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content={language} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || "https://svrlawfirm.com"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SVR Law Firm" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical || "https://svrlawfirm.com"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema Markup */}
      {schema && <script type="application/ld+json">{schema}</script>}
    </Helmet>
  );
};

// Predefined SEO configurations for different page types
export const SEOConfigs = {
  home: {
    title: "SVR Law Firm - Houston Personal Injury & Criminal Defense Attorney | Free Consultation",
    description: "SVR Law Firm in Houston, TX provides expert personal injury and criminal defense legal services. Car accidents, DWI, domestic violence, wrongful death. Free consultation. Call (281) 249-9835.",
    keywords: "Houston personal injury attorney, Houston criminal defense lawyer, car accident lawyer Houston, DWI attorney Houston, domestic violence lawyer, wrongful death attorney, slip and fall lawyer, truck accident attorney, Houston law firm, free legal consultation",
    canonical: "https://svrlawfirm.com"
  },
  about: {
    title: "About SVR Law Firm - Experienced Houston Attorney | Sanah Roopani",
    description: "Meet Sanah Roopani, lead attorney at SVR Law Firm in Houston. 250+ cases as prosecutor. Expert personal injury and criminal defense representation. Free consultation.",
    keywords: "Sanah Roopani, Houston attorney, SVR Law Firm attorney, experienced lawyer Houston, personal injury attorney Houston, criminal defense lawyer Houston",
    canonical: "https://svrlawfirm.com/about"
  },
  contact: {
    title: "Contact SVR Law Firm - Houston Personal Injury & Criminal Defense Attorney",
    description: "Contact SVR Law Firm in Houston for expert legal representation. Personal injury and criminal defense attorney. Free consultation. Call (281) 249-9835 or visit our office.",
    keywords: "contact SVR Law Firm, Houston law firm contact, personal injury attorney contact, criminal defense lawyer contact, free consultation Houston",
    canonical: "https://svrlawfirm.com/contact"
  },
  practiceAreas: {
    title: "Practice Areas - Personal Injury & Criminal Defense | SVR Law Firm Houston",
    description: "SVR Law Firm handles all types of personal injury and criminal defense cases in Houston. Car accidents, DWI, domestic violence, wrongful death, slip and fall, truck accidents.",
    keywords: "practice areas Houston, personal injury practice areas, criminal defense practice areas, car accident lawyer, DWI attorney, domestic violence lawyer, wrongful death attorney",
    canonical: "https://svrlawfirm.com/practice-areas"
  },
  carAccidents: {
    title: "Car Accident Lawyer Houston - SVR Law Firm | Free Consultation",
    description: "Expert car accident lawyers in Houston. SVR Law Firm helps victims get maximum compensation for injuries, medical bills, and lost wages. Free consultation. No fee unless we win.",
    keywords: "car accident lawyer Houston, car accident attorney Houston, auto accident lawyer, car crash attorney, Houston car accident lawyer, car accident compensation",
    canonical: "https://svrlawfirm.com/practice-areas/car-accidents"
  },
  truckAccidents: {
    title: "18-Wheeler Accident Lawyer Houston - SVR Law Firm | Truck Accident Attorney",
    description: "Expert 18-wheeler and truck accident lawyers in Houston. Serious injuries require serious representation. SVR Law Firm fights for maximum compensation. Free consultation.",
    keywords: "18-wheeler accident lawyer Houston, truck accident attorney, semi truck accident lawyer, commercial truck accident, Houston truck accident attorney",
    canonical: "https://svrlawfirm.com/practice-areas/truck-accidents"
  },
  dwi: {
    title: "DWI Attorney Houston - SVR Law Firm | DUI Defense Lawyer",
    description: "Expert DWI and DUI defense attorney in Houston. Protect your license, freedom, and future. SVR Law Firm provides aggressive DWI defense. Free consultation.",
    keywords: "DWI attorney Houston, DUI lawyer Houston, drunk driving defense, DWI defense attorney, Houston DWI lawyer, DUI defense lawyer",
    canonical: "https://svrlawfirm.com/practice-areas/dwi-dui"
  },
  domesticViolence: {
    title: "Domestic Violence Lawyer Houston - SVR Law Firm | Family Violence Defense",
    description: "Expert domestic violence defense attorney in Houston. Protect your rights and future. SVR Law Firm provides aggressive defense for family violence charges. Free consultation.",
    keywords: "domestic violence lawyer Houston, family violence attorney, domestic assault defense, Houston domestic violence attorney, family violence lawyer",
    canonical: "https://svrlawfirm.com/practice-areas/domestic-violence"
  },
  wrongfulDeath: {
    title: "Wrongful Death Attorney Houston - SVR Law Firm | Fatal Accident Lawyer",
    description: "Compassionate wrongful death attorney in Houston. SVR Law Firm helps families get justice and compensation for their loss. Free consultation. No fee unless we win.",
    keywords: "wrongful death attorney Houston, fatal accident lawyer, wrongful death lawyer, Houston wrongful death attorney, death compensation lawyer",
    canonical: "https://svrlawfirm.com/practice-areas/wrongful-death"
  },
  slipFall: {
    title: "Slip and Fall Lawyer Houston - SVR Law Firm | Premises Liability Attorney",
    description: "Expert slip and fall lawyers in Houston. SVR Law Firm helps victims get compensation for injuries from dangerous property conditions. Free consultation.",
    keywords: "slip and fall lawyer Houston, premises liability attorney, slip and fall attorney, Houston slip and fall lawyer, premises liability lawyer",
    canonical: "https://svrlawfirm.com/practice-areas/slip-fall"
  },
  freeConsultation: {
    title: "Free Legal Consultation Houston - SVR Law Firm | No Cost Case Review",
    description: "Get a free legal consultation with SVR Law Firm in Houston. Personal injury and criminal defense case review. No obligation. Call (281) 249-9835 or schedule online.",
    keywords: "free legal consultation Houston, free lawyer consultation, no cost case review, free attorney consultation, Houston free legal advice",
    canonical: "https://svrlawfirm.com/free-consultation"
  }
}; 