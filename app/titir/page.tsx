import type { Metadata } from "next";
import Script from "next/script";
import { db } from "../data/db";
import { ProductDetail } from "../components/ProductDetail";
import { productJsonLd, breadcrumbJsonLd, SITE_URL } from "../lib/schema";

const product = db.francolin;

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  keywords: product.keywords,
  alternates: {
    canonical: "/titir",
  },
  openGraph: {
    title: product.seoTitle,
    description: product.seoDescription,
    url: `${SITE_URL}/titir`,
    type: "website",
    images: [product.image],
  },
  twitter: {
    card: "summary_large_image",
    title: product.seoTitle,
    description: product.seoDescription,
    images: [product.image],
  },
};

export default function TitirPage() {
  return (
    <>
      <Script
        id="titir-product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
      <Script
        id="titir-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "হোম", url: `${SITE_URL}/` },
              { name: product.name, url: `${SITE_URL}/titir` },
            ])
          ),
        }}
      />
      <ProductDetail product={product} />
    </>
  );
}
