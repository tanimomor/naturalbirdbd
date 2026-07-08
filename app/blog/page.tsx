import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./data";
import { SITE_URL, SITE_NAME } from "../lib/schema";

export const metadata: Metadata = {
  title: "ব্লগ",
  description:
    "টার্কি, চীনা হাঁস, কোয়েল ও তিতির পালন পদ্ধতি, দাম ও পরিচর্যা নিয়ে Natural Birds BD এর তথ্যমূলক ব্লগ।",
  keywords: [
    "পোল্ট্রি পালন ব্লগ বাংলাদেশ",
    "poultry farming blog Bangladesh",
    "টার্কি পালন",
    "চীনা হাঁস পালন",
    "কোয়েল পালন",
    "তিতির পরিচর্যা",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `ব্লগ | ${SITE_NAME}`,
    description: "টার্কি, চীনা হাঁস, কোয়েল ও তিতির পালন পদ্ধতি নিয়ে তথ্যমূলক ব্লগ।",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="page-enter product-content" style={{ paddingTop: '2.5rem' }}>
      <nav aria-label="ব্রেডক্রাম্ব" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
        <Link href="/">হোম</Link> / <span aria-current="page">ব্লগ</span>
      </nav>

      <header className="content-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
        <h1 style={{ color: 'var(--green-dark)', fontSize: 'clamp(1.9rem, 5vw, 2.4rem)' }}>ব্লগ</h1>
        <p style={{ color: 'var(--text-mid)', fontSize: '1.1rem' }}>পোল্ট্রি পালন, দাম ও পরিচর্যা নিয়ে তথ্যমূলক আর্টিকেল</p>
      </header>

      <section className="content-section" style={{ borderBottom: 'none' }} aria-label="সকল ব্লগ পোস্ট">
        <div className="why-grid">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="why-card">
              <div className="wi" aria-hidden="true">📰</div>
              <div>
                <h2 style={{ fontSize: '1.1rem', color: 'var(--green-dark)', fontWeight: 600, marginBottom: '0.3rem' }}>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
