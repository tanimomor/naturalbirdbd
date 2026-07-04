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
    product: "টার্কি",
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
      <div >
        <div className="product-hero">
          <img className="product-hero-img" src="https://images.unsplash.com/photo-1649954275372-94324e64a54b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHx0dXJrZXklMjBiaXJkJTIwbmF0dXJlfGVufDB8fHx8MTc4MzE5NjY5MHww&ixlib=rb-4.1.0&q=85" alt="" />
          <div className="product-hero-overlay"></div>
          <Link href="/" className="back-btn">← পণ্য তালিকায় ফিরুন</Link>
          <div className="product-hero-content" style={{ maxWidth: '1100px', left: '50%', transform: 'translateX(-50%)', padding: '2.5rem 2rem' }}>
            <span className="product-emoji">🦃</span>
            <h1>টার্কি</h1>
            <p className="tagline">খনিজ পদার্থ ও সেলেনিয়াম সমৃদ্ধ, কম চর্বিযুক্ত — বিষণ্নতা প্রতিরোধে সহায়ক</p>
            <div className="hero-cta-row">
              <button className="btn-primary btn-gold" onClick={scrollToOrder}>অর্ডারের অনুরোধ করুন →</button>
            </div>
          </div>
        </div>

        <div className="product-content">
          <div className="content-section">
            <h2><span className="sec-icon">💡</span> কেন এই পণ্যটি বেছে নেবেন</h2>
            <div><p>টার্কি একটি অত্যন্ত পুষ্টিকর, কম চর্বিযুক্ত প্রোটিনের উৎস। এটি বিশেষভাবে খনিজ পদার্থ ও সেলেনিয়ামে সমৃদ্ধ। সেলেনিয়ামের ঘাটতি চল্লিশ ঊর্ধ্ব বয়সী নারী-পুরুষদের মধ্যে বিষণ্নতাজনিত উপসর্গের সাথে সম্পর্কিত। সঠিকভাবে প্রক্রিয়াজাত ও গ্রহণ করা হলে, আমাদের অর্গানিক টার্কি সেই ঘাটতি পূরণে সহায়ক হতে পারে।</p></div>
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
                <h4>কম চর্বি</h4>
                <p>হৃদরোগীদের জন্য নিরাপদ</p>
              </div>
              <div className="nutrition-card">
                <div className="icon">🧠</div>
                <h4>সেলেনিয়াম সমৃদ্ধ</h4>
                <p>বিষণ্নতা প্রতিরোধে উপকারী</p>
              </div>
              <div className="nutrition-card">
                <div className="icon">🦴</div>
                <h4>খনিজ পদার্থ</h4>
                <p>হাড় ও পেশির গঠনে সাহায্য করে</p>
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
                  <h4>মাঠের খাবার</h4>
                  <p>সম্পূর্ণ প্রাকৃতিকভাবে নিজস্ব উৎপাদিত খাদ্য</p>
                </div>
              </div>
              <div className="why-card">
                <div className="wi">🚫</div>
                <div>
                  <h4>বাণিজ্যিক খাদ্যমুক্ত</h4>
                  <p>কোনো ধরনের প্যাকেটজাত বাণিজ্যিক ফিড ব্যবহার করা হয় না</p>
                </div>
              </div>
              <div className="why-card">
                <div className="wi">🩺</div>
                <div>
                  <h4>অ্যান্টিবায়োটিক বিরতি</h4>
                  <p>চিকিৎসার প্রয়োজন হলে ৩০ দিনের কঠোর বিরতি প্রোটোকল মানা হয়</p>
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
                  <h4>খাদ্য সংগ্রহ</h4>
                  <p>মাঠ পর্যায় থেকে সরাসরি সংগৃহীত কৃষি দ্রব্য, যা নিজস্বভাবে প্রক্রিয়াজাত করা হয়।</p>
                </div>
              </div>
              <div className="farming-step">
                <div className="step-num">2</div>
                <div>
                  <h4>অর্গানিক পালন</h4>
                  <p>প্রজননের কোনো পর্যায়েই বাণিজ্যিক বা প্রস্তুতকৃত খাদ্য ব্যবহার করা হয় গঠন করা হয় না।</p>
                </div>
              </div>
              <div className="farming-step">
                <div className="step-num">3</div>
                <div>
                  <h4>স্বাস্থ্যবিধি</h4>
                  <p>চিকিৎসাগত প্রয়োজনে অ্যান্টিবায়োটিক ব্যবহার করা হলে, কোর্স শেষ হওয়ার পর ৩০ দিনের একটি বিরতি নিশ্চিত করা হয়, তারপরই পাখিটি খাদ্য শৃঙ্খলে প্রবেশ করে।</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🌾</span> খাদ্য ও পরিচর্যা</h2>
            <div><p>আমাদের টার্কিগুলোকে উন্মুক্ত পরিবেশে, সম্পূর্ণ প্রাকৃতিক ঘাস, পোকামাকড় এবং আমাদের নিজস্ব প্রক্রিয়াজাত খাদ্য খাওয়ানো হয়। এদের রোগ প্রতিরোধ ক্ষমতা প্রাকৃতিকভাবেই বৃদ্ধি পায়, যার ফলে এরা স্বাস্থ্যকর এবং সুস্বাদু হয়। দৈনিক আনুমানিক ১০০ থেকে ২০০ গ্রাম এই মাংস গ্রহণ করলে পর্যাপ্ত প্রাণিজ প্রোটিন পাওয়া যায়।</p></div>
            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table className="comp-table">
                <thead>
                  <tr><th>মাংসের ধরন</th><th>চর্বির মাত্রা</th><th>স্বাস্থ্য উপযোগিতা</th></tr>
                </thead>
                <tbody>

                  <tr>
                    <td><strong>টার্কি (Natural Birds BD)</strong></td>
                    <td><span className='good'>কম চর্বি</span></td>
                    <td><span className='good'>খনিজ পদার্থ ও সেলেনিয়াম সরবরাহ করে, উপযোগী</span></td>
                  </tr>
                  <tr>
                    <td><strong>ব্রয়লার মুরগি</strong></td>
                    <td><span className='bad'>বেশি চর্বি</span></td>
                    <td><span className='bad'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ</span></td>
                  </tr>
                  <tr>
                    <td><strong>বাণিজ্যিক কক</strong></td>
                    <td><span className='bad'>বেশি চর্বি</span></td>
                    <td><span className='bad'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ</span></td>
                  </tr>
                  <tr>
                    <td><strong>গরুর মাংস</strong></td>
                    <td><span className='bad'>বেশি চর্বি</span></td>
                    <td><span className='bad'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">📸</span> ছবির গ্যালারি</h2>
            <div className="gallery-grid">

              <div className="gallery-item" onClick={() => setLightboxImg("https://images.unsplash.com/photo-1605335956795-c276329fc39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}>
                <img src="https://images.unsplash.com/photo-1605335956795-c276329fc39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gallery Image" loading="lazy" />
              </div>
              <div className="gallery-item" onClick={() => setLightboxImg("https://images.unsplash.com/photo-1574347710313-89bd24cbf8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}>
                <img src="https://images.unsplash.com/photo-1574347710313-89bd24cbf8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gallery Image" loading="lazy" />
              </div>
              <div className="gallery-item" onClick={() => setLightboxImg("https://images.unsplash.com/photo-1563228913-c3501a35dc4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}>
                <img src="https://images.unsplash.com/photo-1563228913-c3501a35dc4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Gallery Image" loading="lazy" />
              </div>
            </div>
          </div>


          <div className="content-section">
            <h2><span className="sec-icon">🎬</span> ভিডিও</h2>
            <div className="videos-grid">

              <div className="video-wrap">
                <iframe src="https://www.youtube.com/embed/sFXOhxkrmxo?si=xIvqfMRCqsGXoy1d" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>

              </div>
            </div>
          </div>




          <div className="content-section">
            <h2><span className="sec-icon">❓</span> সচরাচর প্রশ্ন</h2>
            <div className="faq-list">

              <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
                  টার্কির মাংস কি ব্রয়লার মুরগির চেয়ে স্বাস্থ্যকর?
                  <span className="arrow">▼</span>
                </button>
                <div className="faq-a">হ্যাঁ, টার্কির মাংসে চর্বির পরিমাণ অনেক কম এবং এটি প্রোটিন ও সেলেনিয়ামে ভরপুর যা ব্রয়লার মুরগিতে খুব একটা পাওয়া যায় না।</div>
              </div>
              <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                  প্রতিদিন কতটুকু টার্কির মাংস খাওয়া উচিত?
                  <span className="arrow">▼</span>
                </button>
                <div className="faq-a">আমাদের পরামর্শ অনুযায়ী, একজন প্রাপ্তবয়স্ক মানুষের দৈনিক ১০০-২০০ গ্রাম টার্কির মাংস খাওয়া পর্যাপ্ত।</div>
              </div>
              <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                  ডেলিভারি কিভাবে পাবো?
                  <span className="arrow">▼</span>
                </button>
                <div className="faq-a">অর্ডার করার পর আমরা আপনার সাথে যোগাযোগ করে ডেলিভারির ব্যবস্থা করবো। খামার থেকে সরাসরি ডেলিভারি দেওয়া হয়।</div>
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
