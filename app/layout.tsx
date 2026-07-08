import type { Metadata } from "next";
import { Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { OrderNavLink } from "./components/OrderNavLink";
import { SITE_URL, SITE_NAME } from "./lib/schema";
import "./globals.css";

const notoSans = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — খাঁটি অর্গানিক পোল্ট্রি ফার্ম বাংলাদেশ`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Natural Birds BD — টার্কি, চীনা হাঁস, কোয়েল ও তিতির। ১০০% অর্গানিক, বাণিজ্যিক খাদ্যমুক্ত ও অ্যান্টিবায়োটিকমুক্ত পোল্ট্রি খামার, খামার থেকে সরাসরি ডেলিভারি সারা বাংলাদেশে।",
  keywords: [
    "Natural Birds BD",
    "অর্গানিক পোল্ট্রি বাংলাদেশ",
    "organic poultry Bangladesh",
    "টার্কি বাংলাদেশ",
    "চীনা হাঁস বাংলাদেশ",
    "কোয়েল বাংলাদেশ",
    "তিতির বাংলাদেশ",
    "antibiotic free poultry Bangladesh",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — খাঁটি অর্গানিক পোল্ট্রি ফার্ম বাংলাদেশ`,
    description: "স্বাস্থ্যকর জীবনের জন্য প্রাকৃতিক প্রোটিন। ১০০% অর্গানিক, বাণিজ্যিক খাদ্যমুক্ত পোল্ট্রি।",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "bn_BD",
    type: "website",
    images: ["/logos/logo-gemini-cropped.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — খাঁটি অর্গানিক পোল্ট্রি ফার্ম বাংলাদেশ`,
    description: "স্বাস্থ্যকর জীবনের জন্য প্রাকৃতিক প্রোটিন। ১০০% অর্গানিক, বাণিজ্যিক খাদ্যমুক্ত পোল্ট্রি।",
    images: ["/logos/logo-gemini-cropped.jpeg"],
  },
  icons: {
    icon: "/logos/logo-gemini-cropped.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${notoSans.variable} ${notoSerif.variable} antialiased`}>
        <header id="site-header">
          <div className="header-inner">
            <Link href="/" className="logo-wrap" aria-label={`${SITE_NAME} — হোমপেজে যান`}>
              <Image
                src="/logos/turkey.jpg"
                alt="Natural Birds BD লোগো"
                className="logo-icon"
                width={50}
                height={50}
                priority
              />
              <div className="logo-text">
                <span className="name">Natural Birds BD</span>
                <span className="tagline">খাঁটি অর্গানিক পোল্ট্রি খামার</span>
              </div>
            </Link>
            <nav aria-label="প্রধান নেভিগেশন">
              <OrderNavLink />
            </nav>
          </div>
        </header>

        <main id="app">
          {children}
        </main>

        <a id="wa-btn" href="https://wa.me/8801644292288" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp এ যোগাযোগ করুন" title="WhatsApp এ যোগাযোগ করুন">💬</a>

        <footer id="site-footer">
          <div className="footer-logo">🐦 Natural Birds BD</div>
          <div className="footer-tagline">খাঁটি অর্গানিক পোল্ট্রি — স্বাস্থ্যকর জীবনের জন্য প্রাকৃতিক প্রোটিন</div>
          <nav className="footer-links" aria-label="ফুটার নেভিগেশন">
            <Link href="/">হোম</Link>
            <Link href="/turkey">টার্কি</Link>
            <Link href="/chinese-duck">চীনা হাঁস</Link>
            <Link href="/quail">কোয়েল</Link>
            <Link href="/pheasant">তিতির</Link>
            <Link href="/blog">ব্লগ</Link>
            <Link href="/about">আমাদের সম্পর্কে</Link>
            <Link href="/contact">যোগাযোগ</Link>
          </nav>
          <div className="copy">© ২০২৬ Natural Birds BD. সমস্ত অধিকার সংরক্ষিত।</div>
        </footer>
      </body>
    </html>
  );
}
