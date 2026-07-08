import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../data";
import { blogPostingJsonLd, breadcrumbJsonLd, SITE_URL } from "../../lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "পোস্ট পাওয়া যায়নি" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="page-enter product-content" style={{ paddingTop: '2.5rem' }}>
      <Script
        id={`blog-${post.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd(post)) }}
      />
      <Script
        id={`blog-${post.slug}-breadcrumb-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "হোম", url: `${SITE_URL}/` },
              { name: "ব্লগ", url: `${SITE_URL}/blog` },
              { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <nav aria-label="ব্রেডক্রাম্ব" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
        <Link href="/">হোম</Link> / <Link href="/blog">ব্লগ</Link> / <span aria-current="page">{post.title}</span>
      </nav>

      <header className="content-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
        <h1 style={{ color: 'var(--green-dark)', fontSize: 'clamp(1.7rem, 5vw, 2.3rem)' }}>{post.title}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          প্রকাশিত: {post.publishedDate} • হালনাগাদ: {post.updatedDate}
        </p>
      </header>

      <article>
        {post.content.map((section, i) => (
          <section key={i} className="content-section" aria-labelledby={`section-heading-${i}`}>
            <h2 id={`section-heading-${i}`}>{section.heading}</h2>
            {section.body.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </section>
        ))}
      </article>

      <section className="content-section" aria-labelledby="related-product-heading" style={{ borderBottom: 'none' }}>
        <h2 id="related-product-heading"><span className="sec-icon" aria-hidden="true">🔗</span> সম্পর্কিত পণ্য</h2>
        <div className="why-grid">
          <Link href={`/${post.relatedProductSlug}`} className="why-card">
            <div className="wi" aria-hidden="true">🐦</div>
            <div>
              <h3>{post.relatedProductName}</h3>
              <p>{post.relatedProductName} সম্পর্কে বিস্তারিত জানুন ও অর্ডার করুন</p>
            </div>
          </Link>
          <Link href="/blog" className="why-card">
            <div className="wi" aria-hidden="true">📰</div>
            <div>
              <h3>আরও আর্টিকেল পড়ুন</h3>
              <p>ব্লগ পাতায় ফিরে যান</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
