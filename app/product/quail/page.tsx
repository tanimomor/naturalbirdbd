"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    address: "",
    product: "কোয়েল",
    qty: "1",
    note: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(r => setTimeout(r, 1000));
      setFormSuccess(true);
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
          <img className="product-hero-img" src="https://images.unsplash.com/photo-1676826518828-ab2e5899b99c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxxdWFpbCUyMGJpcmR8ZW58MHx8fHwxNzgzMTk2NjkwfDA&ixlib=rb-4.1.0&q=85" alt="" />
          <div className="product-hero-overlay"></div>
          <Link href="/" className="back-btn">← পণ্য তালিকায় ফিরুন</Link>
          <div className="product-hero-content" style={{ maxWidth: '1100px', left: '50%', transform: 'translateX(-50%)', padding: '2.5rem 2rem' }}>
            <span className="product-emoji">🐦</span>
            <h1>কোয়েল</h1>
            <p className="tagline">পাতলা, পুষ্টিগুণ সমৃদ্ধ মাংস — পরিমিত খাদ্যাভ্যাসের উপযোগী</p>
            <div className="hero-cta-row">
              <button className="btn-primary btn-gold" onClick={scrollToOrder}>অর্ডারের অনুরোধ করুন →</button>
            </div>
          </div>
        </div>

        <div className="product-content">
          <div className="content-section">
            <h2><span className="sec-icon">💡</span> কেন এই পণ্যটি বেছে নেবেন</h2>
            <div><p>কোয়েলের মাংস অত্যন্ত সুস্বাদু এবং পুষ্টিগুণে ভরপুর। এটি খুবই পাতলা (lean) মাংস, যা পরিমিত খাদ্যাভ্যাস (diet) অনুসরণকারীদের জন্য আদর্শ। এতে কোলেস্টেরল কম এবং প্রোটিন বেশি থাকে।</p></div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🥗</span> পুষ্টিগুণ ও উপকারিতা</h2>
            <div className="nutrition-grid">

              <div className="nutrition-card">
                <div className="icon">💪</div>
                <h4>উচ্চ প্রোটিন</h4>
                <p>দৈনিক প্রোটিনের চাহিদা পূরণে সহায়ক</p>
              </div>
              <div className="nutrition-card">
                <div className="icon">❤️</div>
                <h4>কম কোলেস্টেরল</h4>
                <p>হৃদরোগীদের জন্য নিরাপদ</p>
              </div>
              <div className="nutrition-card">
                <div className="icon">🧬</div>
                <h4>ভিটামিন বি</h4>
                <p>স্নায়ুতন্ত্র ভালো রাখে</p>
              </div>
            </div>
            <div className="disclaimer" style={{ marginTop: '1.5rem' }}>
              ⚕️ <strong>শিক্ষামূলক তথ্য:</strong> এই তথ্যগুলো শিক্ষামূলক উদ্দেশ্যে প্রদান করা হয়েছে। যেকোনো স্বাস্থ্যগত সিদ্ধান্তের জন্য আপনার চিকিৎসকের পরামর্শ নিন।
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🌿</span> কেন Natural Birds BD বেছে নেবেন</h2>
            <div className="why-grid">

              <div className="why-card">
                <div className="wi">🌱</div>
                <div>
                  <h4>প্রাকৃতিক খাদ্য</h4>
                  <p>নিজস্ব উৎপাদিত খাবার</p>
                </div>
              </div>
              <div className="why-card">
                <div className="wi">🚫</div>
                <div>
                  <h4>অর্গানিক</h4>
                  <p>রাসায়নিক মুক্ত পরিবেশ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🏡</span> পালন পদ্ধতি</h2>
            <div className="farming-steps">

              <div className="farming-step">
                <div className="step-num">1</div>
                <div>
                  <h4>খাদ্য</h4>
                  <p>সম্পূর্ণ অর্গানিক, নিজস্বভাবে প্রক্রিয়াজাত খাদ্য।</p>
                </div>
              </div>
              <div className="farming-step">
                <div className="step-num">2</div>
                <div>
                  <h4>পরিচর্যা</h4>
                  <p>নিরাপদ ও স্বাস্থ্যকর পরিবেশে লালন-পালন।</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🌾</span> খাদ্য ও পরিচর্যা</h2>
            <div><p>কোয়েলগুলো একটি নির্দিষ্ট তাপমাত্রায় এবং স্বাস্থ্যকর পরিবেশে বড় করা হয়। এরা বাণিজ্যিক ফিড ছাড়া সম্পূর্ণ প্রাকৃতিক খাবার খায়।</p></div>
            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table className="comp-table">
                <thead>
                  <tr><th>মাংসের ধরন</th><th>চর্বির মাত্রা</th><th>স্বাস্থ্য উপযোগিতা</th></tr>
                </thead>
                <tbody>

                  <tr>
                    <td><strong>কোয়েল (Natural Birds BD)</strong></td>
                    <td><span className='good'>কম চর্বি</span></td>
                    <td><span className='good'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য উপযোগী</span></td>
                  </tr>
                  <tr>
                    <td><strong>ব্রয়লার মুরগি</strong></td>
                    <td><span className='bad'>বেশি চর্বি</span></td>
                    <td><span className='bad'>ঝুঁকিপূর্ণ</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">📸</span> ছবির গ্যালারি</h2>
            <div className="gallery-grid">

              <div className="gallery-item" onClick={() => setLightboxImg("https://images.unsplash.com/photo-1614013149098-900366eb4b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}>
                <img src="https://images.unsplash.com/photo-1614013149098-900366eb4b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gallery Image" loading="lazy" />
              </div>
              <div className="gallery-item" onClick={() => setLightboxImg("https://images.unsplash.com/photo-1563228913-c3501a35dc4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}>
                <img src="https://images.unsplash.com/photo-1563228913-c3501a35dc4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gallery Image" loading="lazy" />
              </div>
            </div>
          </div>



          <div className="content-section">
            <h2><span className="sec-icon">❓</span> সচরাচর প্রশ্ন</h2>
            <div className="faq-list">

              <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
                  কোয়েলের মাংস কি বাচ্চারা খেতে পারবে?
                  <span className="arrow">▼</span>
                </button>
                <div className="faq-a">অবশ্যই। কোয়েলের মাংস খুব সহজে হজম হয় এবং বাচ্চাদের শারীরিক ও মানসিক বিকাশে সাহায্য করে।</div>
              </div>
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
                        <option value="টার্কি">টার্কি</option>
                        <option value="চীনা হাঁস">চীনা হাঁস</option>
                        <option value="কোয়েল">কোয়েল</option>
                        <option value="তিতির">তিতির</option>
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
                  <button type="submit" id="submit-btn" disabled={isSubmitting}>
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
