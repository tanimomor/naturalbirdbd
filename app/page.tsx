import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { db, products } from "./data/db";
import { OrderForm } from "./components/OrderForm";
import { organizationJsonLd, websiteJsonLd, SITE_URL, SITE_NAME } from "./lib/schema";

export const metadata: Metadata = {
  title: `${SITE_NAME} — খাঁটি অর্গানিক পোল্ট্রি ফার্ম বাংলাদেশ`,
  description:
    "১০০% অর্গানিক খাদ্যে লালিত টার্কি, চীনা হাঁস, কোয়েল ও তিতির — কোনো বাণিজ্যিক খাদ্য নেই, কোনো অ্যান্টিবায়োটিক নেই। খামার থেকে সরাসরি ডেলিভারি সারা বাংলাদেশে।",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — খাঁটি অর্গানিক পোল্ট্রি ফার্ম বাংলাদেশ`,
    description: "১০০% অর্গানিক খাদ্যে লালিত টার্কি, চীনা হাঁস, কোয়েল ও তিতির। খামার থেকে সরাসরি ডেলিভারি।",
    url: SITE_URL,
    type: "website",
  },
};

export default function Home() {
  return (
    <div id="home-page" className="page-enter">
      <Script
        id="home-organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <Script
        id="home-website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />

      <section className="home-hero">
        <div className="home-hero-content">
          <h1>খাঁটি অর্গানিক পোল্ট্রি<br />স্বাস্থ্যকর জীবনের জন্য</h1>
          <p>১০০% অর্গানিক খাদ্যে লালিত টার্কি, চীনা হাঁস, কোয়েল ও তিতির — কোনো বাণিজ্যিক খাদ্য নেই, কোনো অ্যান্টিবায়োটিক নেই</p>
          <div className="hero-badges">
            <span className="badge">🌿 ১০০% অর্গানিক</span>
            <span className="badge">🚫 বাণিজ্যিক খাদ্যমুক্ত</span>
            <span className="badge">💊 অ্যান্টিবায়োটিকমুক্ত</span>
            <span className="badge">🏡 খামার থেকে সরাসরি</span>
          </div>
        </div>
      </section>

      <div className="hero-divider-wrap" aria-hidden="true">
        <div className="hero-divider-ring">
          <div className="hero-divider-circle">
            <div className="hero-divider-half">
              <Image
                src="/farm_images/owner/adv-al-mamun-img1.jpeg"
                alt=""
                fill
                sizes="180px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="hero-divider-half">
              <Image
                src="/farm_images/owner/adv-al-mamun-img2.jpeg"
                alt=""
                fill
                sizes="180px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="products-section" aria-labelledby="products-heading">
        <div className="section-header">
          <h2 id="products-heading">আমাদের পণ্যসমূহ</h2>
          <div className="section-divider"></div>
          <p>আপনার পছন্দের পণ্যটি বেছে নিন</p>
        </div>
        <div className="products-grid">
          {products.map(p => (
            <Link href={`/${p.slug}`} key={p.id} className="product-card">
              <div className="product-card-img" style={{ position: 'relative' }}>
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 480px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'top center' }} loading="lazy" />
              </div>
              <div className="product-card-body">
                <div className="product-card-emoji" aria-hidden="true">{p.emoji}</div>
                <h3>{p.name}</h3>
                <p>{p.tagline.substring(0, 60)}...</p>
                <div className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>বিস্তারিত দেখুন</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }} aria-labelledby="highlights-heading">
        <h2 id="highlights-heading" className="sr-only">কেন Natural Birds BD</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }} aria-hidden="true">🌱</div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.3rem' }}>১০০% অর্গানিক</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>মাঠ থেকে সংগৃহীত খাদ্য, নিজস্বভাবে প্রক্রিয়াজাত</p>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }} aria-hidden="true">🏥</div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.3rem' }}>স্বাস্থ্য উপকারী</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>উচ্চ রক্তচাপ, ডায়াবেটিস ও ফ্যাটি লিভারের জন্য উপযোগী</p>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }} aria-hidden="true">🔬</div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.3rem' }}>বিজ্ঞানসম্মত পরিচর্যা</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>৩০ দিনের অ্যান্টিবায়োটিক বিরতি প্রোটোকল</p>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }} aria-hidden="true">📦</div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.3rem' }}>সরাসরি ডেলিভারি</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>খামার থেকে সরাসরি আপনার দরজায়</p>
          </div>
        </div>
      </section>

      <section id="order-section" className="content-section" style={{ paddingTop: '2rem', paddingBottom: '3rem' }} aria-labelledby="order-heading">
        <h2 id="order-heading" className="sr-only">অর্ডার ফর্ম</h2>
        <div className="product-content">
          <OrderForm defaultProduct={db.turkey.name} />
        </div>
      </section>
    </div>
  );
}
