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
    product: "তিতির",
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
          <img className="product-hero-img" src="https://images.unsplash.com/photo-1701717546877-4a262ff7b9e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHx3aGl0ZSUyMGR1Y2slMjBuYXR1cmV8ZW58MHx8fHwxNzgzMTk2Njk5fDA&ixlib=rb-4.1.0&q=85" alt="" />
          <div className="product-hero-overlay"></div>
          <Link href="/" className="back-btn">← পণ্য তালিকায় ফিরুন</Link>
          <div className="product-hero-content" style={{ maxWidth: '1100px', left: '50%', transform: 'translateX(-50%)', padding: '2.5rem 2rem' }}>
            <span className="product-emoji">🦚</span>
            <h1>তিতির</h1>
            <p className="tagline">কম চর্বিযুক্ত স্বাস্থ্যকর বন্য স্বাদের মাংস</p>
            <div className="hero-cta-row">
              <button className="btn-primary btn-gold" onClick={scrollToOrder}>অর্ডারের অনুরোধ করুন →</button>
            </div>
          </div>
        </div>

        <div className="product-content">
          <div className="content-section">
            <h2><span className="sec-icon">💡</span> কেন এই পণ্যটি বেছে নেবেন</h2>
            <div><p>তিতির একটি অসাধারণ অর্গানিক পাখি যার মাংসে চর্বির পরিমাণ খুবই কম। যারা গতানুগতিক মাংসের বাইরে স্বাস্থ্যকর বিকল্প খুঁজছেন, তিতির তাদের জন্য সেরা পছন্দ।</p></div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🥗</span> পুষ্টিগুণ ও উপকারিতা</h2>
            <div className="nutrition-grid">

              <div className="nutrition-card">
                <div className="icon">💪</div>
                <h4>প্রোটিন</h4>
                <p>উচ্চমাত্রায় প্রোটিন সমৃদ্ধ</p>
              </div>
              <div className="nutrition-card">
                <div className="icon">❤️</div>
                <h4>কম চর্বি</h4>
                <p>হৃদরোগীদের জন্য নিরাপদ</p>
              </div>
              <div className="nutrition-card">
                <div className="icon">🛡️</div>
                <h4>রোগ প্রতিরোধ</h4>
                <p>রোগ প্রতিরোধ ক্ষমতা বাড়ায়</p>
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
                  <h4>প্রাকৃতিক ঘাস ও পোকামাকড়</h4>
                  <p>মুক্ত পরিবেশে প্রাকৃতিক খাদ্য গ্রহণ</p>
                </div>
              </div>
              <div className="why-card">
                <div className="wi">🚫</div>
                <div>
                  <h4>বাণিজ্যিক খাদ্যমুক্ত</h4>
                  <p>কোনো ধরনের প্যাকেটজাত বাণিজ্যিক ফিড ব্যবহার করা হয় না</p>
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
                  <h4>মুক্ত বিচরণ</h4>
                  <p>আমাদের তিতিরগুলো খামারের খোলা মাঠে ঘুরে বেড়ায়।</p>
                </div>
              </div>
              <div className="farming-step">
                <div className="step-num">2</div>
                <div>
                  <h4>খাদ্য</h4>
                  <p>প্রাকৃতিক ঘাস এবং পোকামাকড় এদের প্রধান খাবার।</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🌾</span> খাদ্য ও পরিচর্যা</h2>
            <div><p>তিতির পাখিকে সম্পূর্ণ মুক্ত পরিবেশে লালন-পালন করা হয়। এরা তাদের নিজস্ব খাবার মাঠ থেকে সংগ্রহ করে, আমরা শুধু সম্পূরক অর্গানিক খাবার সরবরাহ করি।</p></div>
            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table className="comp-table">
                <thead>
                  <tr><th>মাংসের ধরন</th><th>চর্বির মাত্রা</th><th>স্বাস্থ্য উপযোগিতা</th></tr>
                </thead>
                <tbody>

                  <tr>
                    <td><strong>তিতির (Natural Birds BD)</strong></td>
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

              <div className="gallery-item" onClick={() => setLightboxImg("https://images.unsplash.com/photo-1549487966-23fb48906bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}>
                <img src="https://images.unsplash.com/photo-1549487966-23fb48906bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gallery Image" loading="lazy" />
              </div>
              <div className="gallery-item" onClick={() => setLightboxImg("https://images.unsplash.com/photo-1605335956795-c276329fc39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}>
                <img src="https://images.unsplash.com/photo-1605335956795-c276329fc39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gallery Image" loading="lazy" />
              </div>
            </div>
          </div>



          <div className="content-section">
            <h2><span className="sec-icon">❓</span> সচরাচর প্রশ্ন</h2>
            <div className="faq-list">

              <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
                  তিতিরের মাংসে কি বন্য স্বাদ থাকে?
                  <span className="arrow">▼</span>
                </button>
                <div className="faq-a">হ্যাঁ, প্রাকৃতিকভাবে পালিত হওয়ায় এতে চমৎকার একটি প্রাকৃতিক স্বাদ থাকে যা ব্রয়লারে পাওয়া যায় না।</div>
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
