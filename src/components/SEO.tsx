import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/navigation';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "AMULA GROUP provides professional Job Consultancy & Career Guidance alongside Tours, Travel, and Car Rental services across Dubai, Hyderabad, Nizamabad, and Basar.",
  canonical,
  keywords = "Amula Group, Job consultancy Hyderabad, Job consultancy Ameerpet, Job consultancy Nizamabad, Job consultancy Basar, Overseas job consultancy, Car rental Hyderabad, Tours and travels Hyderabad"
}) => {
  const fullTitle = title 
    ? `${title} | ${COMPANY_INFO.name}` 
    : `${COMPANY_INFO.name} | Tours • Travel • Job Consultancy • Car Rental`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.legalName,
    "image": "/logo.jpg",
    "telephone": [`+91${COMPANY_INFO.primaryPhone}`, `+91${COMPANY_INFO.secondaryPhone}`],
    "email": COMPANY_INFO.email,
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Prime Medical Building, 5th Floor, Exit 2, Salauddin Metro Station",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Ameerpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Vinayak Nagar, Next to Bajaj Electronics",
        "addressLocality": "Nizamabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Near Bus Stand",
        "addressLocality": "Basar",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    ],
    "description": description
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.jpg" />
      <meta property="og:type" content="website" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
