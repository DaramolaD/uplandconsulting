interface OrganizationStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  address: {
    "@type": string;
    addressCountry: string;
    addressRegion: string;
    addressLocality: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
  };
  sameAs: string[];
  foundingDate: string;
  numberOfEmployees: string;
  industry: string[];
}

interface ServiceStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed: string[];
  serviceType: string[];
}

interface WebPageStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  isPartOf: {
    "@type": string;
    name: string;
    url: string;
  };
  breadcrumb: {
    "@type": string;
    itemListElement: Array<{
      "@type": string;
      position: number;
      name: string;
      item: string;
    }>;
  };
}

export const organizationStructuredData: OrganizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Upland Consulting",
  description: "Executive-level strategy and technology consultants specializing in oil & gas, utilities, and public sector organizations.",
  url: "https://uplandconsulting.com",
  logo: "https://uplandconsulting.com/logo.png",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "Texas",
    addressLocality: "Houston"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-713-555-0123",
    contactType: "customer service"
  },
  sameAs: [
    "https://linkedin.com/company/upland-consulting",
    "https://twitter.com/uplandconsulting"
  ],
  foundingDate: "2008",
  numberOfEmployees: "50-100",
  industry: ["Management Consulting", "Technology Consulting", "Energy", "Utilities", "Public Sector"]
};

export const servicesStructuredData: ServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Strategic Consulting Services",
  description: "Comprehensive strategy and technology consulting for high-stakes industries including oil & gas, utilities, and public sector organizations.",
  provider: {
    "@type": "Organization",
    name: "Upland Consulting"
  },
  areaServed: ["United States", "Canada", "Europe"],
  serviceType: [
    "Strategic Planning",
    "Digital Transformation",
    "Regulatory Compliance",
    "Technology Implementation",
    "Process Optimization"
  ]
};

export const createWebPageStructuredData = (pageName: string, pageUrl: string, description: string): WebPageStructuredData => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageName,
  description: description,
  url: pageUrl,
  isPartOf: {
    "@type": "WebSite",
    name: "Upland Consulting",
    url: "https://uplandconsulting.com"
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://uplandconsulting.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: pageUrl
      }
    ]
  }
});
