import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { OrderForm } from "../components/OrderForm";
import { contactPageJsonLd, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "../lib/schema";

export const metadata: Metadata = {
  title: "যোগাযোগ করুন",
  description:
    "Natural Birds BD এর সাথে যোগাযোগ করুন — অর্ডার, প্রশ্ন বা মতামতের জন্য ফোন, WhatsApp অথবা অর্ডার ফর্মের মাধ্যমে যোগাযোগ করুন।",
  keywords: [
    "Natural Birds BD যোগাযোগ",
    "contact Natural Birds BD",
    "অর্গানিক পোল্ট্রি অর্ডার বাংলাদেশ",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `যোগাযোগ করুন | ${SITE_NAME}`,
    description: "Natural Birds BD এর সাথে যোগাযোগ করুন — অর্ডার, প্রশ্ন বা মতামতের জন্য।",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="page-enter product-content" style={{ paddingTop: '2.5rem' }}>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd()) }}
      />
      <Script
        id="contact-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "হোম", url: `${SITE_URL}/` },
              { name: "যোগাযোগ", url: `${SITE_URL}/contact` },
            ])
          ),
        }}
      />

      <nav aria-label="ব্রেডক্রাম্ব" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
        <Link href="/">হোম</Link> / <span aria-current="page">যোগাযোগ</span>
      </nav>

      <header className="content-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
        <h1 style={{ color: 'var(--green-dark)', fontSize: 'clamp(1.9rem, 5vw, 2.4rem)' }}>যোগাযোগ করুন</h1>
        <p style={{ color: 'var(--text-mid)', fontSize: '1.1rem' }}>অর্ডার, প্রশ্ন বা মতামতের জন্য আমাদের সাথে যোগাযোগ করুন</p>
      </header>

      <section className="content-section" aria-labelledby="contact-info-heading">
        <h2 id="contact-info-heading"><span className="sec-icon" aria-hidden="true">📇</span> যোগাযোগের তথ্য</h2>
        <div className="why-grid">
          <a href="tel:+8801644292288" className="why-card">
            <div className="wi" aria-hidden="true">📱</div>
            <div>
              <h3>ফোন</h3>
              <p>+৮৮০ ১৬৪৪ ২৯২২৮৮</p>
            </div>
          </a>
          <a href="https://wa.me/8801644292288" target="_blank" rel="noopener noreferrer" className="why-card">
            <div className="wi" aria-hidden="true">💬</div>
            <div>
              <h3>WhatsApp</h3>
              <p>সরাসরি মেসেজ পাঠান</p>
            </div>
          </a>
          <div className="why-card">
            <div className="wi" aria-hidden="true">📍</div>
            <div>
              <h3>অবস্থান</h3>
              <p>বাংলাদেশ — সারা দেশে ডেলিভারি প্রদান করা হয়</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="order-section" aria-labelledby="order-heading">
        <h2 id="order-heading"><span className="sec-icon" aria-hidden="true">📝</span> অর্ডার অনুরোধ পাঠান</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <OrderForm />
        </div>
      </section>

      <section className="content-section" aria-labelledby="explore-heading" style={{ borderBottom: 'none' }}>
        <h2 id="explore-heading"><span className="sec-icon" aria-hidden="true">🐦</span> পণ্যসমূহ দেখুন</h2>
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
    </div>
  );
}
