export const SITE_URL = "https://naturalbirdsbd.com";
export const SITE_NAME = "Natural Birds BD";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo-gemini-cropped.jpeg`,
    description:
      "Natural Birds BD একটি ১০০% অর্গানিক পোল্ট্রি খামার যা বাংলাদেশে টার্কি, চীনা হাঁস, কোয়েল ও তিতির সরবরাহ করে, কোনো বাণিজ্যিক খাদ্য বা অ্যান্টিবায়োটিক ছাড়া।",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801644292288",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["bn", "en"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "bn",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `আমাদের সম্পর্কে | ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801644292288",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["bn", "en"],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function productJsonLd(product: {
  name: string;
  seoDescription: string;
  image: string;
  slug: string;
}) {
  const image = product.image.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    image,
    url: `${SITE_URL}/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  updatedDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/logo-gemini-cropped.jpeg`,
      },
    },
  };
}
