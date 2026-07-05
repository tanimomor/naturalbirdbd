import { db } from "./data/db";
import Link from "next/link";
import { OrderForm } from "./components/OrderForm";

export default function Home() {
  return (
    <div id="home-page" className="page-enter">
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

      <section className="products-section">
        <div className="section-header">
          <h2>আমাদের পণ্যসমূহ</h2>
          <div className="section-divider"></div>
          <p>আপনার পছন্দের পণ্যটি বেছে নিন</p>
        </div>
        <div className="products-grid">
          {Object.values(db).map(p => (
            <Link href={`/product/${p.id}`} key={p.id} className="product-card">
              <div className="product-card-img">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="product-card-body">
                <div className="product-card-emoji">{p.emoji}</div>
                <h3>{p.name}</h3>
                <p>{p.tagline.substring(0, 60)}...</p>
                <div className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>বিস্তারিত দেখুন</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🌱</div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.3rem' }}>১০০% অর্গানিক</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>মাঠ থেকে সংগৃহীত খাদ্য, নিজস্বভাবে প্রক্রিয়াজাত</p>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🏥</div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.3rem' }}>স্বাস্থ্য উপকারী</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>উচ্চ রক্তচাপ, ডায়াবেটিস ও ফ্যাটি লিভারের জন্য উপযোগী</p>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🔬</div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.3rem' }}>বিজ্ঞানসম্মত পরিচর্যা</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>৩০ দিনের অ্যান্টিবায়োটিক বিরতি প্রোটোকল</p>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>📦</div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.3rem' }}>সরাসরি ডেলিভারি</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>খামার থেকে সরাসরি আপনার দরজায়</p>
          </div>
        </div>
      </section>

      <section id="order-section" className="content-section" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <OrderForm defaultProduct={Object.values(db)[0]?.name || ""} />
        </div>
      </section>
    </div>
  );
}
