"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/db";
import { OrderForm } from "./OrderForm";

const ALL_PRODUCT_LINKS = [
  { slug: "turkey", name: "টার্কি", emoji: "🦃" },
  { slug: "chinese-duck", name: "চীনা হাঁস", emoji: "🦆" },
  { slug: "quail", name: "কোয়েল", emoji: "🐦" },
  { slug: "titir", name: "তিতির", emoji: "🦚" },
];

export function ProductDetail({ product }: { product: Product }) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const otherProducts = ALL_PRODUCT_LINKS.filter((p) => p.slug !== product.slug);

  return (
    <>
      <div className="page-enter">
        <div className="product-hero">
          <Image
            className="product-hero-img"
            src={product.image}
            alt={`${product.name} — ১০০% অর্গানিক পোল্ট্রি, Natural Birds BD`}
            fill
            priority
            sizes="100vw"
          />
          <div className="product-hero-overlay"></div>
          <Link href="/" className="back-btn">← পণ্য তালিকায় ফিরুন</Link>
          <div className="product-hero-content">
            <span className="product-emoji" aria-hidden="true">{product.emoji}</span>
            <h1>{product.name}</h1>
            <p className="tagline">{product.tagline}</p>
            <div className="hero-cta-row">
              <button className="btn-primary btn-gold" onClick={scrollToOrder}>অর্ডার করুন →</button>
            </div>
          </div>
        </div>

        <div className="product-content">
          <nav aria-label="ব্রেডক্রাম্ব" style={{ padding: '1.2rem 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Link href="/">হোম</Link> / <span aria-current="page">{product.name}</span>
          </nav>

          <section className="content-section" aria-labelledby="overview-heading">
            <h2 id="overview-heading"><span className="sec-icon" aria-hidden="true">💡</span> পণ্যের বিবরণ</h2>
            <div><p>{product.whyChoose}</p></div>
          </section>

          <section className="content-section" aria-labelledby="nutrition-heading">
            <h2 id="nutrition-heading"><span className="sec-icon" aria-hidden="true">🥗</span> বৈশিষ্ট্য ও পুষ্টিগুণ</h2>
            <p>পুষ্টির মধ্যে বিভিন্ন ভিটামিন যেমন বি১২, মিনারেল যেমন জিংক ইত্যাদি থাকে, প্রচুর শাকসব্জী ফিড হিসেবে খায় বলে চর্বি থাকে অনেক কম, বাণিজ্যিক খাবার খায় না বলে ক্ষতিকর ভারি ধাতু যেমন ক্যাডমিয়াম, ক্রোমিয়াম ইত্যাদি নেই তাই হাড়সহ পোল্ট্রির সকল অংশ অত্যন্ত স্বাস্থ্যকর নিরাপদ খাদ্য।</p>
            <div className="nutrition-grid">
              {product.nutrition.map((item, i) => (
                <div key={i} className="nutrition-card">
                  <div className="icon" aria-hidden="true">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="disclaimer" style={{ marginTop: '1.5rem' }}>
              ⚕️ <strong>শিক্ষামূলক তথ্য:</strong> এই তথ্যগুলো শিক্ষামূলক উদ্দেশ্যে প্রদান করা হয়েছে। যেকোনো স্বাস্থ্যগত সিদ্ধান্তের জন্য আপনার চিকিৎসকের পরামর্শ নিন।
            </div>
          </section>

          <section className="content-section" aria-labelledby="benefits-heading">
            <h2 id="benefits-heading"><span className="sec-icon" aria-hidden="true">🌿</span> উপকারিতা ও কেন Natural Birds BD বেছে নেবেন</h2>
            <div className="why-grid">
              {product.whyUs.map((item, i) => (
                <div key={i} className="why-card">
                  <div className="wi" aria-hidden="true">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section" aria-labelledby="farming-heading">
            <h2 id="farming-heading"><span className="sec-icon" aria-hidden="true">🏡</span> পালন পদ্ধতি ও খামার তথ্য</h2>
            <div className="farming-steps">
              {product.farming.map((step, i) => (
                <div key={i} className="farming-step">
                  <div className="step-num" aria-hidden="true">{i + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section" aria-labelledby="foodcare-heading">
            <h2 id="foodcare-heading"><span className="sec-icon" aria-hidden="true">🌾</span> খাদ্য ও পরিচর্যা</h2>
            <div><p>{product.foodCare}</p></div>
            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table className="comp-table">
                <caption className="sr-only">{product.name} বনাম প্রচলিত মাংসের তুলনা</caption>
                <thead>
                  <tr><th scope="col">মাংসের ধরন</th><th scope="col">চর্বির মাত্রা</th><th scope="col">স্বাস্থ্য উপযোগিতা</th></tr>
                </thead>
                <tbody>
                  {product.comparison.map((comp, i) => (
                    <tr key={i}>
                      <th scope="row"><strong>{comp.name}</strong></th>
                      <td><span className={comp.fatStatus}>{comp.fat}</span></td>
                      <td><span className={comp.healthStatus}>{comp.health}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="content-section" aria-labelledby="difference-heading">
            <h2 id="difference-heading"><span className="sec-icon" aria-hidden="true">📊</span> সাধারণ পোল্ট্রির সাথে পার্থক্য</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="comp-table">
                <caption className="sr-only">সাধারণ পোল্ট্রি বনাম অর্গানিক পোল্ট্রির তুলনা</caption>
                <thead>
                  <tr><th scope="col">বৈশিষ্ট্য</th><th scope="col">সাধারণ পোল্ট্রি</th><th scope="col">অর্গানিক পোল্ট্রি</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><strong>খাদ্য</strong></th>
                    <td><span className="bad">রাসায়নিক মিশ্রিত বাণিজ্যিক ফিড</span></td>
                    <td><span className="good">কীটনাশক ও রাসায়নিক মুক্ত অর্গানিক ফিড</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>ওষুধ</strong></th>
                    <td><span className="bad">প্রয়োজন ও অপ্রয়োজনে অ্যান্টিবায়োটিক</span></td>
                    <td><span className="good">প্রাকৃতিক বিকল্প ও কঠোর স্বাস্থ্যবিধি</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--green-dark)', margin: '1.8rem 0 0.8rem' }}>অর্গানিক পোল্ট্রির মূল বৈশিষ্ট্য</h3>
            <div className="why-grid">
              <div className="why-card">
                <div className="wi" aria-hidden="true">🚫</div>
                <div>
                  <h3>অ্যান্টিবায়োটিক ও হরমোন মুক্ত</h3>
                  <p>মুরগি বাড়াতে কোনো কৃত্রিম গ্রোথ হরমোন বা অ্যান্টিবায়োটিক ব্যবহার করা হয় না।</p>
                </div>
              </div>
              <div className="why-card">
                <div className="wi" aria-hidden="true">🌾</div>
                <div>
                  <h3>প্রাকৃতিক খাদ্য</h3>
                  <p>কৃত্রিম কীটনাশক বা রাসায়নিক সার ছাড়া উৎপাদিত শস্য ও প্রাকৃতিকভাবে তৈরি খাবার দেওয়া হয়।</p>
                </div>
              </div>
              <div className="why-card">
                <div className="wi" aria-hidden="true">🐓</div>
                <div>
                  <h3>মুক্ত পরিবেশ</h3>
                  <p>খাঁচায় বন্দি না রেখে প্রাকৃতিকভাবে চলাফেরা করার সুযোগ নিশ্চিত করা হয়।</p>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section" aria-labelledby="availability-heading">
            <h2 id="availability-heading"><span className="sec-icon" aria-hidden="true">📦</span> প্রাপ্যতা ও ডেলিভারি</h2>
            <div>
              <p>{product.name} বর্তমানে সারা বাংলাদেশে অর্ডার নেওয়া হচ্ছে। খামার থেকে সরাসরি প্যাকেজিং করে গ্রাহকের ঠিকানায় পৌঁছে দেওয়া হয়। নিচের ফর্মের মাধ্যমে অথবা <a href="https://wa.me/8801644292288" target="_blank" rel="noopener noreferrer">WhatsApp</a> এ যোগাযোগ করে অর্ডার নিশ্চিত করতে পারবেন।</p>
            </div>
          </section>

          <section className="content-section" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading"><span className="sec-icon" aria-hidden="true">📸</span> ছবির গ্যালারি</h2>
            <div className="gallery-grid">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className="gallery-item"
                  onClick={() => setLightboxImg(img)}
                  aria-label={`${product.name} এর ছবি ${i + 1} বড় করে দেখুন`}
                >
                  <Image src={img} alt={`${product.name} — খামারের ছবি ${i + 1}`} fill loading="lazy" sizes="(max-width: 480px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </section>

          {product.videos && product.videos.length > 0 && (
            <section className="content-section" aria-labelledby="videos-heading">
              <h2 id="videos-heading"><span className="sec-icon" aria-hidden="true">🎥</span> ভিডিও গ্যালারি</h2>
              <div className="videos-grid">
                {product.videos.map((vid, i) => (
                  <div key={i} className="video-wrap">
                    <iframe
                      src={vid}
                      title={`${product.name} — Natural Birds BD ভিডিও ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="content-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading"><span className="sec-icon" aria-hidden="true">❓</span> সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)</h2>
            <div className="faq-list">
              {product.faq.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <h3 style={{ margin: 0 }}>
                    <button
                      className="faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-answer-${product.slug}-${i}`}
                    >
                      {faq.q}
                      <span className="arrow" aria-hidden="true">▼</span>
                    </button>
                  </h3>
                  <div className="faq-a" id={`faq-answer-${product.slug}-${i}`}>{faq.a}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section" aria-labelledby="related-heading">
            <h2 id="related-heading"><span className="sec-icon" aria-hidden="true">🔗</span> আরও দেখুন</h2>
            <div className="why-grid">
              {otherProducts.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} className="why-card">
                  <div className="wi" aria-hidden="true">{p.emoji}</div>
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.name} সম্পর্কে বিস্তারিত জানুন</p>
                  </div>
                </Link>
              ))}
              <Link href="/about" className="why-card">
                <div className="wi" aria-hidden="true">🌱</div>
                <div>
                  <h3>আমাদের সম্পর্কে</h3>
                  <p>Natural Birds BD এর গল্প জানুন</p>
                </div>
              </Link>
              <Link href="/contact" className="why-card">
                <div className="wi" aria-hidden="true">📞</div>
                <div>
                  <h3>যোগাযোগ করুন</h3>
                  <p>প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="content-section" id="order-section" aria-labelledby="order-heading">
            <h2 id="order-heading" className="sr-only">অর্ডার ফর্ম</h2>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <OrderForm defaultProduct={product.name} />
            </div>
          </section>
        </div>
      </div>

      <div id="lightbox" className={lightboxImg ? 'active' : ''} onClick={() => setLightboxImg(null)} role="dialog" aria-modal="true" aria-label={`${product.name} ছবির প্রিভিউ`}>
        <button id="lightbox-close" onClick={() => setLightboxImg(null)} aria-label="ছবি প্রিভিউ বন্ধ করুন">✕</button>
        {lightboxImg && (
          <div style={{ position: 'relative', width: '90vw', height: '85vh' }}>
            <Image id="lightbox-img" src={lightboxImg} alt={`${product.name} — বড় গ্যালারি ছবি`} fill style={{ objectFit: 'contain' }} />
          </div>
        )}
      </div>
    </>
  );
}
