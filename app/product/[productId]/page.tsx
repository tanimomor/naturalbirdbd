"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "../../data/db";
import { submitOrderToTelegram } from "../../actions";
import { Turnstile } from '@marsidev/react-turnstile';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = use(params);
  const product = db[productId as keyof typeof db];

  if (!product) {
    notFound();
  }

  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    address: "",
    product: product.name,
    qty: "1",
    note: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const isTurnstileEnabled = process.env.NEXT_PUBLIC_ENABLE_TURNSTILE !== 'false';

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isTurnstileEnabled && !turnstileToken) {
      alert("দয়া করে ক্যাপচা পূরণ করুন।");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await submitOrderToTelegram({ ...formState, turnstileToken: turnstileToken || "" });
      if (result.success) {
        setFormSuccess(true);
      } else {
        alert("দুঃখিত, কোনো সমস্যা হয়েছে: " + result.error);
      }
    } catch (error) {
      alert("দুঃখিত, কোনো সমস্যা হয়েছে।");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="page-enter">
        <div className="product-hero">
          <img className="product-hero-img" src={product.image} alt={product.name} />
          <div className="product-hero-overlay"></div>
          <Link href="/" className="back-btn">← পণ্য তালিকায় ফিরুন</Link>
          <div className="product-hero-content">
            <span className="product-emoji">{product.emoji}</span>
            <h1>{product.name}</h1>
            <p className="tagline">{product.tagline}</p>
            <div className="hero-cta-row">
              <button className="btn-primary btn-gold" onClick={scrollToOrder}>অর্ডারের অনুরোধ করুন →</button>
            </div>
          </div>
        </div>

        <div className="product-content">
          <div className="content-section">
            <h2><span className="sec-icon">💡</span> কেন এই পণ্যটি বেছে নেবেন</h2>
            <div><p>{product.whyChoose}</p></div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🥗</span> পুষ্টিগুণ ও উপকারিতা</h2>
            <div className="nutrition-grid">
              {product.nutrition.map((item, i) => (
                <div key={i} className="nutrition-card">
                  <div className="icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="disclaimer" style={{ marginTop: '1.5rem' }}>
              ⚕️ <strong>শিক্ষামূলক তথ্য:</strong> এই তথ্যগুলো শিক্ষামূলক উদ্দেশ্যে প্রদান করা হয়েছে। যেকোনো স্বাস্থ্যগত সিদ্ধান্তের জন্য আপনার চিকিৎসকের পরামর্শ নিন।
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🌿</span> কেন Natural Birds BD বেছে নেবেন</h2>
            <div className="why-grid">
              {product.whyUs.map((item, i) => (
                <div key={i} className="why-card">
                  <div className="wi">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🏡</span> পালন পদ্ধতি</h2>
            <div className="farming-steps">
              {product.farming.map((step, i) => (
                <div key={i} className="farming-step">
                  <div className="step-num">{i + 1}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🌾</span> খাদ্য ও পরিচর্যা</h2>
            <div><p>{product.foodCare}</p></div>
            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table className="comp-table">
                <thead>
                  <tr><th>মাংসের ধরন</th><th>চর্বির মাত্রা</th><th>স্বাস্থ্য উপযোগিতা</th></tr>
                </thead>
                <tbody>
                  {product.comparison.map((comp, i) => (
                    <tr key={i}>
                      <td><strong>{comp.name}</strong></td>
                      <td><span className={comp.fatStatus}>{comp.fat}</span></td>
                      <td><span className={comp.healthStatus}>{comp.health}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">📸</span> ছবির গ্যালারি</h2>
            <div className="gallery-grid">
              {product.gallery.map((img, i) => (
                <div key={i} className="gallery-item" onClick={() => setLightboxImg(img)}>
                  <img src={img} alt="Gallery Image" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {product.videos && product.videos.length > 0 && (
            <div className="content-section">
              <h2><span className="sec-icon">🎥</span> ভিডিও গ্যালারি</h2>
              <div className="videos-grid">
                {product.videos.map((vid, i) => (
                  <div key={i} className="video-wrap">
                    <iframe src={vid} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="content-section">
            <h2><span className="sec-icon">❓</span> সচরাচর প্রশ্ন</h2>
            <div className="faq-list">
              {product.faq.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <span className="arrow">▼</span>
                  </button>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section" id="order-section">
            <div className="order-section">
              <h2>অর্ডারের অনুরোধ করুন</h2>
              <p>নিচের ফর্মটি পূরণ করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>

              {!formSuccess ? (
                <form id="order-form" onSubmit={submitOrder}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="f-name">আপনার নাম *</label>
                      <input type="text" id="f-name" placeholder="পূর্ণ নাম লিখুন" required value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-phone">মোবাইল নম্বর *</label>
                      <input type="tel" id="f-phone" placeholder="০১XXXXXXXXX" required value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-address">ঠিকানা *</label>
                    <input type="text" id="f-address" placeholder="আপনার সম্পূর্ণ ঠিকানা" required value={formState.address} onChange={e => setFormState({ ...formState, address: e.target.value })} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="f-product">পণ্য</label>
                      <select id="f-product" value={formState.product} onChange={e => setFormState({ ...formState, product: e.target.value })}>
                        {Object.values(db).map((p) => (
                          <option key={p.id} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-qty">পরিমাণ (কেজি)</label>
                      <input type="number" id="f-qty" placeholder="যেমন: ২" min="1" value={formState.qty} onChange={e => setFormState({ ...formState, qty: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-note">মন্তব্য</label>
                    <textarea id="f-note" placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন..." value={formState.note} onChange={e => setFormState({ ...formState, note: e.target.value })}></textarea>
                  </div>
                  {isTurnstileEnabled && (
                    <div className="form-group" style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                        onSuccess={(token) => setTurnstileToken(token)}
                      />
                    </div>
                  )}
                  <button type="submit" id="submit-btn" disabled={isSubmitting || (isTurnstileEnabled && !turnstileToken)}>
                    {isSubmitting ? "পাঠানো হচ্ছে..." : "অনুরোধ পাঠান"}
                  </button>
                </form>
              ) : (
                <div id="form-success" style={{ display: 'block' }}>
                  <div className="success-icon">✅</div>
                  <p><strong>ধন্যবাদ!</strong><br />আপনার অনুরোধটি সফলভাবে গ্রহণ করা হয়েছে。<br />খুব শীঘ্রই আমরা আপনার সঙ্গে যোগাযোগ করব।</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="lightbox" className={lightboxImg ? 'active' : ''} onClick={() => setLightboxImg(null)}>
        <button id="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
        {lightboxImg && <img id="lightbox-img" src={lightboxImg} alt="গ্যালারি ছবি" />}
      </div>
    </>
  );
}
