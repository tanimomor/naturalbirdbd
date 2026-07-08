import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { aboutPageJsonLd, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "../lib/schema";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে",
  description:
    "Natural Birds BD এর গল্প, লক্ষ্য এবং ১০০% অর্গানিক, বাণিজ্যিক খাদ্যমুক্ত পোল্ট্রি পালন পদ্ধতি সম্পর্কে জানুন।",
  keywords: [
    "Natural Birds BD সম্পর্কে",
    "about Natural Birds BD",
    "অর্গানিক পোল্ট্রি খামার বাংলাদেশ",
    "organic poultry farm Bangladesh",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `আমাদের সম্পর্কে | ${SITE_NAME}`,
    description: "Natural Birds BD এর গল্প, লক্ষ্য এবং ১০০% অর্গানিক পোল্ট্রি পালন পদ্ধতি সম্পর্কে জানুন।",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="page-enter product-content" style={{ paddingTop: '2.5rem' }}>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd()) }}
      />
      <Script
        id="about-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "হোম", url: `${SITE_URL}/` },
              { name: "আমাদের সম্পর্কে", url: `${SITE_URL}/about` },
            ])
          ),
        }}
      />

      <nav aria-label="ব্রেডক্রাম্ব" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
        <Link href="/">হোম</Link> / <span aria-current="page">আমাদের সম্পর্কে</span>
      </nav>

      <header className="content-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
        <h1 style={{ color: 'var(--green-dark)', fontSize: 'clamp(1.9rem, 5vw, 2.4rem)' }}>Natural Birds BD সম্পর্কে</h1>
        <p style={{ color: 'var(--text-mid)', fontSize: '1.1rem' }}>খাঁটি অর্গানিক পোল্ট্রি, স্বাস্থ্যকর জীবনের জন্য প্রাকৃতিক প্রোটিন</p>
      </header>

      <section className="content-section" aria-labelledby="story-heading">
        <h2 id="story-heading"><span className="sec-icon" aria-hidden="true">📖</span> আমাদের গল্প</h2>
        <p>Natural Birds BD বাংলাদেশে একটি ১০০% অর্গানিক পোল্ট্রি খামার যা টার্কি, চীনা হাঁস, কোয়েল ও তিতির পালন করে। আমরা বিশ্বাস করি স্বাস্থ্যকর জীবনযাপনের জন্য প্রাকৃতিক ও নিরাপদ প্রোটিনের উৎস থাকা প্রয়োজন, যা বর্তমান বাজারের বেশিরভাগ বাণিজ্যিক পোল্ট্রি পণ্যে পাওয়া যায় না।</p>
        <p>আমাদের যাত্রা শুরু হয়েছিল একটি সাধারণ লক্ষ্য নিয়ে — কোনো বাণিজ্যিক প্যাকেটজাত ফিড বা অপ্রয়োজনীয় অ্যান্টিবায়োটিক ছাড়াই, সম্পূর্ণ প্রাকৃতিক পরিবেশে পাখি পালন করা।</p>
      </section>

      <section className="content-section" aria-labelledby="mission-heading">
        <h2 id="mission-heading"><span className="sec-icon" aria-hidden="true">🎯</span> আমাদের লক্ষ্য</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="wi" aria-hidden="true">🌿</div>
            <div>
              <h3>১০০% অর্গানিক পালন</h3>
              <p>কোনো বাণিজ্যিক ফিড ব্যবহার না করে মাঠ থেকে সংগৃহীত প্রাকৃতিক খাদ্যে পাখি লালন-পালন।</p>
            </div>
          </div>
          <div className="why-card">
            <div className="wi" aria-hidden="true">🩺</div>
            <div>
              <h3>দায়িত্বশীল স্বাস্থ্যসেবা</h3>
              <p>প্রয়োজন হলে অ্যান্টিবায়োটিক ব্যবহারের ক্ষেত্রে কঠোর ৩০ দিনের বিরতি প্রোটোকল অনুসরণ।</p>
            </div>
          </div>
          <div className="why-card">
            <div className="wi" aria-hidden="true">🚚</div>
            <div>
              <h3>সরাসরি খামার থেকে ডেলিভারি</h3>
              <p>মধ্যস্বত্বভোগী ছাড়াই খামার থেকে সরাসরি গ্রাহকের ঠিকানায় পণ্য পৌঁছে দেওয়া।</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="different-heading">
        <h2 id="different-heading"><span className="sec-icon" aria-hidden="true">✨</span> কেন আমরা ভিন্ন</h2>
        <p>প্রচলিত ব্রয়লার ও বাণিজ্যিক পোল্ট্রি খামারের বিপরীতে, Natural Birds BD প্রতিটি পাখিকে উন্মুক্ত পরিবেশে, প্রাকৃতিক খাদ্যে বড় করে। এর ফলে মাংসে চর্বির পরিমাণ কম থাকে এবং পুষ্টিগুণ বজায় থাকে, যা উচ্চ রক্তচাপ, ডায়াবেটিস ও ফ্যাটি লিভারের রোগীদের জন্য একটি স্বাস্থ্যকর বিকল্প হয়ে ওঠে।</p>
      </section>

      <section className="content-section" aria-labelledby="products-cta-heading">
        <h2 id="products-cta-heading"><span className="sec-icon" aria-hidden="true">🐦</span> আমাদের পণ্যসমূহ দেখুন</h2>
        <div className="why-grid">
          <Link href="/turkey" className="why-card">
            <div className="wi" aria-hidden="true">🦃</div>
            <div><h3>টার্কি</h3><p>বিস্তারিত জানুন</p></div>
          </Link>
          <Link href="/chinese-duck" className="why-card">
            <div className="wi" aria-hidden="true">🦆</div>
            <div><h3>চীনা হাঁস</h3><p>বিস্তারিত জানুন</p></div>
          </Link>
          <Link href="/quail" className="why-card">
            <div className="wi" aria-hidden="true">🐦</div>
            <div><h3>কোয়েল</h3><p>বিস্তারিত জানুন</p></div>
          </Link>
          <Link href="/titir" className="why-card">
            <div className="wi" aria-hidden="true">🦚</div>
            <div><h3>তিতির</h3><p>বিস্তারিত জানুন</p></div>
          </Link>
        </div>
      </section>

      <section className="content-section" aria-labelledby="contact-cta-heading" style={{ borderBottom: 'none' }}>
        <h2 id="contact-cta-heading"><span className="sec-icon" aria-hidden="true">📞</span> আরও জানতে চান?</h2>
        <p>আমাদের পালন পদ্ধতি বা পণ্য সম্পর্কে কোনো প্রশ্ন থাকলে <Link href="/contact" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>যোগাযোগ পাতায়</Link> গিয়ে আমাদের সাথে সরাসরি যোগাযোগ করুন।</p>
      </section>
    </div>
  );
}
