export const db = {
  turkey: {
    id: "turkey",
    name: "টার্কি",
    tagline: "খনিজ পদার্থ ও সেলেনিয়াম সমৃদ্ধ, কম চর্বিযুক্ত — বিষণ্নতা প্রতিরোধে সহায়ক",
    emoji: "🦃",
    image: "https://images.unsplash.com/photo-1649954275372-94324e64a54b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHx0dXJrZXklMjBiaXJkJTIwbmF0dXJlfGVufDB8fHx8MTc4MzE5NjY5MHww&ixlib=rb-4.1.0&q=85",
    whyChoose: "টার্কি একটি অত্যন্ত পুষ্টিকর, কম চর্বিযুক্ত প্রোটিনের উৎস। এটি বিশেষভাবে খনিজ পদার্থ ও সেলেনিয়ামে সমৃদ্ধ। সেলেনিয়ামের ঘাটতি চল্লিশ ঊর্ধ্ব বয়সী নারী-পুরুষদের মধ্যে বিষণ্নতাজনিত উপসর্গের সাথে সম্পর্কিত। সঠিকভাবে প্রক্রিয়াজাত ও গ্রহণ করা হলে, আমাদের অর্গানিক টার্কি সেই ঘাটতি পূরণে সহায়ক হতে পারে।",
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
      { title: "অর্গানিক পালন", desc: "প্রজননের কোনো পর্যায়েই বাণিজ্যিক বা প্রস্তুতকৃত খাদ্য ব্যবহার করা হয় অপমান।" },
      { title: "স্বাস্থ্যবিধি", desc: "চিকিৎসাগত প্রয়োজনে অ্যান্টিবায়োটিক ব্যবহার করা হলে, কোর্স শেষ হওয়ার পর ৩০ দিনের একটি বিরতি নিশ্চিত করা হয়, তারপরই পাখিটি খাদ্য শৃঙ্খলে প্রবেশ করে।" }
    ],
    foodCare: "আমাদের টার্কিগুলোকে উন্মুক্ত পরিবেশে, সম্পূর্ণ প্রাকৃতিক ঘাস, পোকামাকড় এবং আমাদের নিজস্ব প্রক্রিয়াজাত খাদ্য খাওয়ানো হয়। এদের রোগ প্রতিরোধ ক্ষমতা প্রাকৃতিকভাবেই বৃদ্ধি পায়, যার ফলে এরা স্বাস্থ্যকর এবং সুস্বাদু হয়। দৈনিক আনুমানিক ১০০ থেকে ২০০ গ্রাম এই মাংস গ্রহণ করলে পর্যাপ্ত প্রাণিজ প্রোটিন পাওয়া যায়।",
    comparison: [
      { name: "টার্কি (Natural Birds BD)", fat: "কম চর্বি", fatStatus: "good", health: "খনিজ পদার্থ ও সেলেনিয়াম সরবরাহ করে, উপযোগী", healthStatus: "good" },
      { name: "ব্রয়লার মুরগি", fat: "বেশি চর্বি", fatStatus: "bad", health: "উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ", healthStatus: "bad" },
      { name: "বাণিজ্যিক কক", fat: "বেশি চর্বি", fatStatus: "bad", health: "উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ", healthStatus: "bad" },
      { name: "গরুর মাংস", fat: "বেশি চর্বি", fatStatus: "bad", health: "উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য ঝুঁকিপূর্ণ", healthStatus: "bad" }
    ],
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Wild_Turkey_%286801931899%29.jpg/800px-Wild_Turkey_%286801931899%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Wild_Turkey_strut.jpg/800px-Wild_Turkey_strut.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wild_Turkey.jpg/800px-Wild_Turkey.jpg"
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
    image: "https://images.unsplash.com/photo-1706458605571-b8dcd3d2c5ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHx3aGl0ZSUyMGR1Y2slMjBuYXR1cmV8ZW58MHx8fHwxNzgzMTk2Njk5fDA&ixlib=rb-4.1.0&q=85",
    whyChoose: "চীনা হাঁসের মাংস প্রচলিত হাঁস বা মুরগির তুলনায় কম চর্বিযুক্ত। এটি উচ্চ রক্তচাপ, ডায়াবেটিস এবং ফ্যাটি লিভার সমস্যায় আক্রান্ত ব্যক্তিদের জন্য হৃদয় ও বিপাক-বান্ধব একটি চমৎকার প্রোটিনের বিকল্প।",
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
    foodCare: "আমাদের চীনা হাঁসগুলো সম্পূর্ণ প্রাকৃতিক পরিবেশে, ঘাস এবং নিজস্ব খাবারে বড় হয়। আমরা কোনো ধরনের বাণিজ্যিক ফিড ব্যবহার করি বায় না।",
    comparison: [
      { name: "চীনা হাঁস (Natural Birds BD)", fat: "কম চর্বি", fatStatus: "good", health: "উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য উপযোগী", healthStatus: "good" },
      { name: "সাধারণ হাঁস", fat: "বেশি চর্বি", fatStatus: "bad", health: "সীমিত পরিমাণে খাওয়া উচিত", healthStatus: "bad" },
      { name: "ব্রয়লার মুরগি", fat: "বেশি চর্বি", fatStatus: "bad", health: "ঝুঁকিপূর্ণ", healthStatus: "bad" }
    ],
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pekin_duck_%28Anas_platyrhynchos_domestica%29.jpg/800px-Pekin_duck_%28Anas_platyrhynchos_domestica%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pekin_duckling.jpg/800px-Pekin_duckling.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pekin_Duck_in_water.jpg/800px-Pekin_Duck_in_water.jpg"
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
    image: "https://images.unsplash.com/photo-1676826518828-ab2e5899b99c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxxdWFpbCUyMGJpcmR8ZW58MHx8fHwxNzgzMTk2NjkwfDA&ixlib=rb-4.1.0&q=85",
    whyChoose: "কোয়েলের মাংস অত্যন্ত সুস্বাদু এবং পুষ্টিগুণে ভরপুর। এটি খুবই পাতলা (lean) মাংস, যা পরিমিত খাদ্যাভ্যাস (diet) অনুসরণকারীদের জন্য আদর্শ। এতে কোলেস্টেরল কম এবং প্রোটিন বেশি থাকে।",
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
    foodCare: "কোয়েলগুলো একটি নির্দিষ্ট তাপমাত্রায় এবং স্বাস্থ্যকর পরিবেশে বড় করা হয়। এরা বাণিজ্যিক ফিড ছাড়া সম্পূর্ণ প্রাকৃতিক খাবার খায়।",
    comparison: [
      { name: "কোয়েল (Natural Birds BD)", fat: "কম চর্বি", fatStatus: "good", health: "উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য উপযোগী", healthStatus: "good" },
      { name: "ব্রয়লার মুরগি", fat: "বেশি চর্বি", fatStatus: "bad", health: "ঝুঁকিপূর্ণ", healthStatus: "bad" }
    ],
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coturnix_coturnix_2.jpg/800px-Coturnix_coturnix_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Japanese_Quail_%28Coturnix_japonica%29_male.jpg/800px-Japanese_Quail_%28Coturnix_japonica%29_male.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/California_Quail_%28Callipepla_californica%29_male.jpg/800px-California_Quail_%28Callipepla_californica%29_male.jpg"
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
    image: "https://images.unsplash.com/photo-1701717546877-4a262ff7b9e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxndWluZWElMjBmb3dsJTIwYmlyZHxlbnwwfHx8fDE3ODMxOTY2OTl8MA&ixlib=rb-4.1.0&q=85",
    whyChoose: "তিতির একটি অসাধারণ অর্গানিক পাখি যার মাংসে চর্বির পরিমাণ খুবই কম। যারা গতানুগতিক মাংসের বাইরে স্বাস্থ্যকর বিকল্প খুঁজছেন, তিতির তাদের জন্য সেরা পছন্দ।",
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
    foodCare: "তিতির পাখিকে সম্পূর্ণ মুক্ত পরিবেশে লালন-পালন করা হয়। এরা তাদের নিজস্ব খাবার মাঠ থেকে সংগ্রহ করে, আমরা শুধু সম্পূরক অর্গানিক খাবার সরবরাহ করি।",
    comparison: [
      { name: "তিতির (Natural Birds BD)", fat: "কম চর্বি", fatStatus: "good", health: "উচ্চ রক্তচাপ/ডায়াবেটিসের জন্য উপযোগী", healthStatus: "good" },
      { name: "ব্রয়লার মুরগি", fat: "বেশি চর্বি", fatStatus: "bad", health: "ঝুঁকিপূর্ণ", healthStatus: "bad" }
    ],
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Black_Francolin_%28Francolinus_francolinus%29.jpg/800px-Black_Francolin_%28Francolinus_francolinus%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Grey_Francolin_%28Francolinus_pondicerianus%29_in_Hyderabad%2C_AP_W_IMG_0083.jpg/800px-Grey_Francolin_%28Francolinus_pondicerianus%29_in_Hyderabad%2C_AP_W_IMG_0083.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Painted_Francolin_Francolinus_pictus.jpg/800px-Painted_Francolin_Francolinus_pictus.jpg"
    ],
    videos: [],
    faq: [
      { q: "তিতিরের মাংসে কি বন্য স্বাদ থাকে?", a: "হ্যাঁ, প্রাকৃতিকভাবে পালিত হওয়ায় এতে চমৎকার একটি প্রাকৃতিক স্বাদ থাকে যা ব্রয়লারে পাওয়া যায় না।" }
    ]
  }
};
