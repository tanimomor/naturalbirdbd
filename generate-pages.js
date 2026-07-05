const fs = require('fs');
const path = require('path');

// Manually define the DB since we can't easily require a TS file
const db = {
  turkey: {
    id: "turkey",
    name: "টার্কি",
    tagline: "খনিজ পদার্থ ও সেলেনিয়াম সমৃদ্ধ, কম চর্বিযুক্ত — বিষণ্নতা প্রতিরোধে সহায়ক",
    emoji: "🦃",
    image: "https://images.unsplash.com/photo-1605335956795-c276329fc39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    whyChoose: "<p>টার্কি একটি অত্যন্ত পুষ্টিকর, কম চর্বিযুক্ত প্রোটিনের উৎস। এটি বিশেষভাবে খনিজ পদার্থ ও সেলেনিয়ামে সমৃদ্ধ। সেলেনিয়ামের ঘাটতি চল্লিশ ঊর্ধ্ব বয়সী নারী-পুরুষদের মধ্যে বিষণ্নতাজনিত উপসর্গের সাথে সম্পর্কিত। সঠিকভাবে প্রক্রিয়াজাত ও গ্রহণ করা হলে, আমাদের অর্গানিক টার্কি সেই ঘাটতি পূরণে সহায়ক হতে পারে।</p>",
    nutrition: [
      { icon: "💪", title: "উচ্চ প্রোটিন", desc: "দৈনিক প্রোটিনের চাহিদা পূরণে সহায়ক" },
      { icon: "❤️", title: "কম চর্বি", desc: "হৃদরোগীদের জন্য নিরাপদ" },
      { icon: "🧠", title: "সেলেনিয়াম সমৃদ্ধ", desc: "বিষণ্নতা প্রতিরোধে উপকারী" },
      { icon: "🦴", title: "খনিজ পদার্থ", desc: "হাড় ও পেশির গঠনে সাহায্য করে" }
    ],
    whyUs: [
      { icon: "🌱", title: "মাঠের খাবার", desc: "সম্পূর্ণ প্রাকৃতিকভাবে নিজস্ব উৎপাদিত খাদ্য" },
      { icon: "🚫", title: "বাণিজ্যিক খাদ্যমুক্ত", desc: "কোনো ধরনের প্যাকেটজাত বাণিজ্যিক ফিড ব্যবহার করা হয় না" },
      { icon: "🩺", title: "অ্যান্টিবায়োটিক বিরতি", desc: "চিকিৎসার প্রয়োজন হলে ৩০ দিনের কঠোর বিরতি প্রোটোকল মানা হয়" }
    ],
    farming: [
      { title: "খাদ্য সংগ্রহ", desc: "মাঠ পর্যায় থেকে সরাসরি সংগৃহীত কৃষি দ্রব্য, যা নিজস্বভাবে প্রক্রিয়াজাত করা হয়।" },
      { title: "অর্গানিক পালন", desc: "প্রজননের কোনো পর্যায়েই বাণিজ্যিক বা প্রস্তুতকৃত খাদ্য ব্যবহার করা হয় গঠন করা হয় না।" },
      { title: "স্বাস্থ্যবিধি", desc: "চিকিৎসাগত প্রয়োজনে অ্যান্টিবায়োটিক ব্যবহার করা হলে, কোর্স শেষ হওয়ার পর ৩০ দিনের একটি বিরতি নিশ্চিত করা হয়, তারপরই পাখিটি খাদ্য শৃঙ্খলে প্রবেশ করে।" }
    ],
    foodCare: "<p>আমাদের টার্কিগুলোকে উন্মুক্ত পরিবেশে, সম্পূর্ণ প্রাকৃতিক ঘাস, পোকামাকড় এবং আমাদের নিজস্ব প্রক্রিয়াজাত খাদ্য খাওয়ানো হয়। এদের রোগ প্রতিরোধ ক্ষমতা প্রাকৃতিকভাবেই বৃদ্ধি পায়, যার ফলে এরা স্বাস্থ্যকর এবং সুস্বাদু হয়। দৈনিক আনুমানিক ১০০ থেকে ২০০ গ্রাম এই মাংস গ্রহণ করলে পর্যাপ্ত প্রাণিজ প্রোটিন পাওয়া যায়।</p>",
    comparison: [
      { name: "টার্কি (Natural Birds BD)", fat: "<span className='good'>কম চর্বি</span>", health: "<span className='good'>খনিজ পদার্থ ও সেলেনিয়াম সরবরাহ করে, উপযোগী</span>" },
      { name: "ব্রয়লার মুরগি", fat: "<span className='bad'>বেশি চর্বি</span>", health: "<span className='bad'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ</span>" },
      { name: "বাণিজ্যিক কক", fat: "<span className='bad'>বেশি চর্বি</span>", health: "<span className='bad'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ</span>" },
      { name: "গরুর মাংস", fat: "<span className='bad'>বেশি চর্বি</span>", health: "<span className='bad'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ</span>" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605335956795-c276329fc39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574347710313-89bd24cbf8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563228913-c3501a35dc4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/0N-Bf2S1oWs?si=UDyBFoQMth86XbN-"
    ],
    faq: [
      { q: "টার্কির মাংস কি ব্রয়লার মুরগির চেয়ে স্বাস্থ্যকর?", a: "হ্যাঁ, টার্কির মাংসে চর্বির পরিমাণ অনেক কম এবং এটি প্রোটিন ও সেলেনিয়ামে ভরপুর যা ব্রয়লার মুরগিতে খুব একটা পাওয়া যায় না।" },
      { q: "প্রতিদিন কতটুকু টার্কির মাংস খাওয়া উচিত?", a: "আমাদের পরামর্শ অনুযায়ী, একজন প্রাপ্তবয়স্ক মানুষের দৈনিক ১০০-২০০ গ্রাম টার্কির মাংস খাওয়া পর্যাপ্ত।" },
      { q: "ডেলিভারি কিভাবে পাবো?", a: "অর্ডার করার পর আমরা আপনার সাথে যোগাযোগ করে ডেলিভারির ব্যবস্থা করবো। খামার থেকে সরাসরি ডেলিভারি দেওয়া হয়।" }
    ]
  },
  duck: {
    id: "duck",
    name: "চীনা হাঁস",
    tagline: "হৃদয় ও বিপাক-বান্ধব, কম চর্বিযুক্ত হাঁসের মাংস",
    emoji: "🦆",
    image: "https://images.unsplash.com/photo-1555852221-f5bc84f475f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    whyChoose: "<p>চীনা হাঁসের মাংস প্রচলিত হাঁস বা মুরগির তুলনায় কম চর্বিযুক্ত। এটি উচ্চ রক্তচাপ, ডায়াবেটিস এবং ফ্যাটি লিভার সমস্যায় আক্রান্ত ব্যক্তিদের জন্য হৃদয় ও বিপাক-বান্ধব একটি চমৎকার প্রোটিনের বিকল্প।</p>",
    nutrition: [
      { icon: "💪", title: "প্রোটিন", desc: "শরীরের গঠনে অপরিহার্য" },
      { icon: "❤️", title: "কম চর্বি", desc: "প্রচলিত হাঁসের তুলনায় অনেক স্বাস্থ্যকর" },
      { icon: "🏃", title: "বিপাক-বান্ধব", desc: "হজম করা সহজ" }
    ],
    whyUs: [
      { icon: "🌱", title: "প্রাকৃতিক খাদ্য", desc: "শামুক, ঝিনুক ও সবুজ ঘাস" },
      { icon: "🚫", title: "বাণিজ্যিক খাদ্যমুক্ত", desc: "কোনো ধরনের প্যাকেটজাত বাণিজ্যিক ফিড ব্যবহার করা হয় না" }
    ],
    farming: [
      { title: "মুক্ত পরিবেশ", desc: "আমাদের হাঁসগুলো বিশাল জলাশয়ে স্বাধীনভাবে বিচরণ করে।" },
      { title: "খাদ্য সংগ্রহ", desc: "মাঠ পর্যায় থেকে সরাসরি সংগৃহীত অর্গানিক খাদ্য।" }
    ],
    foodCare: "<p>আমাদের চীনা হাঁসগুলো সম্পূর্ণ প্রাকৃতিক পরিবেশে, ঘাস এবং নিজস্ব খাবারে বড় হয়। আমরা কোনো ধরনের বাণিজ্যিক ফিড ব্যবহার করি না।</p>",
    comparison: [
      { name: "চীনা হাঁস (Natural Birds BD)", fat: "<span className='good'>কম চর্বি</span>", health: "<span className='good'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য উপযোগী</span>" },
      { name: "সাধারণ হাঁস", fat: "<span className='bad'>বেশি চর্বি</span>", health: "<span className='bad'>সীমিত পরিমাণে খাওয়া উচিত</span>" },
      { name: "ব্রয়লার মুরগি", fat: "<span className='bad'>বেশি চর্বি</span>", health: "<span className='bad'>ঝুঁকিপূর্ণ</span>" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555852221-f5bc84f475f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518174483756-3ff26e3c54d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605335956795-c276329fc39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    videos: [],
    faq: [
      { q: "চীনা হাঁস এবং পাতি হাঁসের মধ্যে পার্থক্য কি?", a: "চীনা হাঁসের মাংসে চর্বির পরিমাণ পাতি হাঁসের তুলনায় উল্লেখযোগ্যভাবে কম থাকে।" }
    ]
  },
  quail: {
    id: "quail",
    name: "কোয়েল",
    tagline: "পাতলা, পুষ্টিগুণ সমৃদ্ধ মাংস — পরিমিত খাদ্যাভ্যাসের উপযোগী",
    emoji: "🐦",
    image: "https://images.unsplash.com/photo-1614013149098-900366eb4b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    whyChoose: "<p>কোয়েলের মাংস অত্যন্ত সুস্বাদু এবং পুষ্টিগুণে ভরপুর। এটি খুবই পাতলা (lean) মাংস, যা পরিমিত খাদ্যাভ্যাস (diet) অনুসরণকারীদের জন্য আদর্শ। এতে কোলেস্টেরল কম এবং প্রোটিন বেশি থাকে।</p>",
    nutrition: [
      { icon: "💪", title: "উচ্চ প্রোটিন", desc: "দৈনিক প্রোটিনের চাহিদা পূরণে সহায়ক" },
      { icon: "❤️", title: "কম কোলেস্টেরল", desc: "হৃদরোগীদের জন্য নিরাপদ" },
      { icon: "🧬", title: "ভিটামিন বি", desc: "স্নায়ুতন্ত্র ভালো রাখে" }
    ],
    whyUs: [
      { icon: "🌱", title: "প্রাকৃতিক খাদ্য", desc: "নিজস্ব উৎপাদিত খাবার" },
      { icon: "🚫", title: "অর্গানিক", desc: "রাসায়নিক মুক্ত পরিবেশ" }
    ],
    farming: [
      { title: "খাদ্য", desc: "সম্পূর্ণ অর্গানিক, নিজস্বভাবে প্রক্রিয়াজাত খাদ্য।" },
      { title: "পরিচর্যা", desc: "নিরাপদ ও স্বাস্থ্যকর পরিবেশে লালন-পালন।" }
    ],
    foodCare: "<p>কোয়েলগুলো একটি নির্দিষ্ট তাপমাত্রায় এবং স্বাস্থ্যকর পরিবেশে বড় করা হয়। এরা বাণিজ্যিক ফিড ছাড়া সম্পূর্ণ প্রাকৃতিক খাবার খায়।</p>",
    comparison: [
      { name: "কোয়েল (Natural Birds BD)", fat: "<span className='good'>কম চর্বি</span>", health: "<span className='good'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য উপযোগী</span>" },
      { name: "ব্রয়লার মুরগি", fat: "<span className='bad'>বেশি চর্বি</span>", health: "<span className='bad'>ঝুঁকিপূর্ণ</span>" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1614013149098-900366eb4b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563228913-c3501a35dc4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    videos: [],
    faq: [
      { q: "কোয়েলের মাংস কি বাচ্চারা খেতে পারবে?", a: "অবশ্যই। কোয়েলের মাংস খুব সহজে হজম হয় এবং বাচ্চাদের শারীরিক ও মানসিক বিকাশে সাহায্য করে।" }
    ]
  },
  francolin: {
    id: "francolin",
    name: "তিতির",
    tagline: "কম চর্বিযুক্ত স্বাস্থ্যকর বন্য স্বাদের মাংস",
    emoji: "🦚",
    image: "https://images.unsplash.com/photo-1549487966-23fb48906bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    whyChoose: "<p>তিতির একটি অসাধারণ অর্গানিক পাখি যার মাংসে চর্বির পরিমাণ খুবই কম। যারা গতানুগতিক মাংসের বাইরে স্বাস্থ্যকর বিকল্প খুঁজছেন, তিতির তাদের জন্য সেরা পছন্দ।</p>",
    nutrition: [
      { icon: "💪", title: "প্রোটিন", desc: "উচ্চমাত্রায় প্রোটিন সমৃদ্ধ" },
      { icon: "❤️", title: "কম চর্বি", desc: "হৃদরোগীদের জন্য নিরাপদ" },
      { icon: "🛡️", title: "রোগ প্রতিরোধ", desc: "রোগ প্রতিরোধ ক্ষমতা বাড়ায়" }
    ],
    whyUs: [
      { icon: "🌱", title: "প্রাকৃতিক ঘাস ও পোকামাকড়", desc: "মুক্ত পরিবেশে প্রাকৃতিক খাদ্য গ্রহণ" },
      { icon: "🚫", title: "বাণিজ্যিক খাদ্যমুক্ত", desc: "কোনো ধরনের প্যাকেটজাত বাণিজ্যিক ফিড ব্যবহার করা হয় না" }
    ],
    farming: [
      { title: "মুক্ত বিচরণ", desc: "আমাদের তিতিরগুলো খামারের খোলা মাঠে ঘুরে বেড়ায়।" },
      { title: "খাদ্য", desc: "প্রাকৃতিক ঘাস এবং পোকামাকড় এদের প্রধান খাবার।" }
    ],
    foodCare: "<p>তিতির পাখিকে সম্পূর্ণ মুক্ত পরিবেশে লালন-পালন করা হয়। এরা তাদের নিজস্ব খাবার মাঠ থেকে সংগ্রহ করে, আমরা শুধু সম্পূরক অর্গানিক খাবার সরবরাহ করি।</p>",
    comparison: [
      { name: "তিতির (Natural Birds BD)", fat: "<span className='good'>কম চর্বি</span>", health: "<span className='good'>উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য উপযোগী</span>" },
      { name: "ব্রয়লার মুরগি", fat: "<span className='bad'>বেশি চর্বি</span>", health: "<span className='bad'>ঝুঁকিপূর্ণ</span>" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1549487966-23fb48906bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605335956795-c276329fc39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    videos: [],
    faq: [
      { q: "তিতিরের মাংসে কি বন্য স্বাদ থাকে?", a: "হ্যাঁ, প্রাকৃতিকভাবে পালিত হওয়ায় এতে চমৎকার একটি প্রাকৃতিক স্বাদ থাকে যা ব্রয়লারে পাওয়া যায় না।" }
    ]
  }
};

const getPageContent = (productData) => {
  return `"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    address: "",
    product: "${productData.name}",
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
      <div id="product-page" className="page-enter">
        <div className="product-hero">
          <img className="product-hero-img" src="${productData.image}" alt="" />
          <div className="product-hero-overlay"></div>
          <Link href="/" className="back-btn">← পণ্য তালিকায় ফিরুন</Link>
          <div className="product-hero-content" style={{ maxWidth: '1100px', left: '50%', transform: 'translateX(-50%)', padding: '2.5rem 2rem' }}>
            <span className="product-emoji">${productData.emoji}</span>
            <h1>${productData.name}</h1>
            <p className="tagline">${productData.tagline}</p>
            <div className="hero-cta-row">
              <button className="btn-primary btn-gold" onClick={scrollToOrder}>অর্ডার করুন →</button>
            </div>
          </div>
        </div>

        <div className="product-content">
          <div className="content-section">
            <h2><span className="sec-icon">💡</span> কেন এই পণ্যটি বেছে নেবেন</h2>
            <div>${productData.whyChoose}</div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🥗</span> পুষ্টিগুণ ও উপকারিতা</h2>
            <div className="nutrition-grid">
              ${productData.nutrition.map(n => `
                <div className="nutrition-card">
                  <div className="icon">${n.icon}</div>
                  <h4>${n.title}</h4>
                  <p>${n.desc}</p>
                </div>`).join('')}
            </div>
            <div className="disclaimer" style={{ marginTop: '1.5rem' }}>
              ⚕️ <strong>শিক্ষামূলক তথ্য:</strong> এই তথ্যগুলো শিক্ষামূলক উদ্দেশ্যে প্রদান করা হয়েছে। যেকোনো স্বাস্থ্যগত সিদ্ধান্তের জন্য আপনার চিকিৎসকের পরামর্শ নিন।
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🌿</span> কেন Natural Birds BD বেছে নেবেন</h2>
            <div className="why-grid">
              ${productData.whyUs.map(w => `
                <div className="why-card">
                  <div className="wi">${w.icon}</div>
                  <div>
                    <h4>${w.title}</h4>
                    <p>${w.desc}</p>
                  </div>
                </div>`).join('')}
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🏡</span> পালন পদ্ধতি</h2>
            <div className="farming-steps">
              ${productData.farming.map((f, i) => `
                <div className="farming-step">
                  <div className="step-num">${i + 1}</div>
                  <div>
                    <h4>${f.title}</h4>
                    <p>${f.desc}</p>
                  </div>
                </div>`).join('')}
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">🌾</span> খাদ্য ও পরিচর্যা</h2>
            <div>${productData.foodCare}</div>
            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table className="comp-table">
                <thead>
                  <tr><th>মাংসের ধরন</th><th>চর্বির মাত্রা</th><th>স্বাস্থ্য উপযোগিতা</th></tr>
                </thead>
                <tbody>
                  ${productData.comparison.map(c => `
                    <tr>
                      <td><strong>${c.name}</strong></td>
                      <td>${c.fat}</td>
                      <td>${c.health}</td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-section">
            <h2><span className="sec-icon">📸</span> ছবির গ্যালারি</h2>
            <div className="gallery-grid">
              ${productData.gallery.map(img => `
                <div className="gallery-item" onClick={() => setLightboxImg("${img}")}>
                  <img src="${img}" alt="Gallery Image" loading="lazy" />
                </div>`).join('')}
            </div>
          </div>

          ${productData.videos && productData.videos.length > 0 ? `
          <div className="content-section">
            <h2><span className="sec-icon">🎬</span> ভিডিও</h2>
            <div className="videos-grid">
              ${productData.videos.map(v => `
                <div className="video-wrap">
                  <iframe src="${v}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                </div>`).join('')}
            </div>
          </div>` : ''}

          <div className="content-section">
            <h2><span className="sec-icon">❓</span> সচরাচর প্রশ্ন</h2>
            <div className="faq-list">
              ${productData.faq.map((f, i) => `
                <div className={\`faq-item \${openFaq === ${i} ? 'open' : ''}\`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === ${i} ? null : ${i})}>
                    ${f.q}
                    <span className="arrow">▼</span>
                  </button>
                  <div className="faq-a">${f.a}</div>
                </div>`).join('')}
            </div>
          </div>

          <div className="content-section" id="order-section">
            <div className="order-section">
              <h2>অর্ডার করুন</h2>
              <p>নিচের ফর্মটি পূরণ করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
              
              {!formSuccess ? (
                <form id="order-form" onSubmit={submitOrder}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="f-name">আপনার নাম *</label>
                      <input type="text" id="f-name" placeholder="পূর্ণ নাম লিখুন" required value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-phone">মোবাইল নম্বর *</label>
                      <input type="tel" id="f-phone" placeholder="০১XXXXXXXXX" required value={formState.phone} onChange={e => setFormState({...formState, phone: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-address">ঠিকানা *</label>
                    <input type="text" id="f-address" placeholder="আপনার সম্পূর্ণ ঠিকানা" required value={formState.address} onChange={e => setFormState({...formState, address: e.target.value})} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="f-product">পণ্য</label>
                      <select id="f-product" value={formState.product} onChange={e => setFormState({...formState, product: e.target.value})}>
                        <option value="টার্কি">টার্কি</option>
                        <option value="চীনা হাঁস">চীনা হাঁস</option>
                        <option value="কোয়েল">কোয়েল</option>
                        <option value="তিতির">তিতির</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="f-qty">পরিমাণ (কেজি)</label>
                      <input type="number" id="f-qty" placeholder="যেমন: ২" min="1" value={formState.qty} onChange={e => setFormState({...formState, qty: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-note">মন্তব্য</label>
                    <textarea id="f-note" placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন..." value={formState.note} onChange={e => setFormState({...formState, note: e.target.value})}></textarea>
                  </div>
                  <button type="submit" id="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "পাঠানো হচ্ছে..." : "অর্ডার পাঠান"}
                  </button>
                </form>
              ) : (
                <div id="form-success" style={{ display: 'block' }}>
                  <div className="success-icon">✅</div>
                  <p><strong>ধন্যবাদ!</strong><br/>আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে。<br/>খুব শীঘ্রই আমরা আপনার সঙ্গে যোগাযোগ করব।</p>
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
`;
};

Object.keys(db).forEach(key => {
  const content = getPageContent(db[key]);
  const filepath = path.join(__dirname, 'app/product', key, 'page.tsx');
  fs.writeFileSync(filepath, content);
});

console.log("Generated hardcoded page.tsx for each product");
