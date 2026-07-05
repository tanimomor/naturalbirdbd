import type { Metadata } from "next";
import { Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import Link from "next/link";
import { OrderNavLink } from "./components/OrderNavLink";
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
  title: "Natural Birds BD — খাঁটি অর্গানিক পোল্ট্রি",
  description: "Natural Birds BD — টার্কি, চীনা হাঁস, কোয়েল ও তিতির। ১০০% অর্গানিক, বাণিজ্যিক খাদ্যমুক্ত পোল্ট্রি খামার।",
  openGraph: {
    title: "Natural Birds BD — খাঁটি অর্গানিক পোল্ট্রি",
    description: "স্বাস্থ্যকর জীবনের জন্য প্রাকৃতিক প্রোটিন। ১০০% অর্গানিক পোল্ট্রি।",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23C9A84C'/><text x='50' y='70' font-size='60' text-anchor='middle'>🐦</text></svg>",
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
            <Link href="/" className="logo-wrap">
              <div className="logo-icon">🐦</div>
              <div className="logo-text">
                <span className="name">Natural Birds BD</span>
                <span className="tagline">খাঁটি অর্গানিক পোল্ট্রি খামার</span>
              </div>
            </Link>
            <OrderNavLink />
          </div>
        </header>

        <div id="app">
          {children}
        </div>

        <a id="wa-btn" href="https://wa.me/8801716165878" target="_blank" rel="noopener noreferrer" title="WhatsApp এ যোগাযোগ করুন">💬</a>

        <footer id="site-footer">
          <div className="footer-logo">🐦 Natural Birds BD</div>
          <div className="footer-tagline">খাঁটি অর্গানিক পোল্ট্রি — স্বাস্থ্যকর জীবনের জন্য প্রাকৃতিক প্রোটিন</div>
          <div className="footer-links">
            <Link href="/">হোম</Link>
            <Link href="/product/turkey">টার্কি</Link>
            <Link href="/product/duck">চীনা হাঁস</Link>
            <Link href="/product/quail">কোয়েল</Link>
            <Link href="/product/francolin">তিতির</Link>
          </div>
          <div className="copy">© ২০২৬ Natural Birds BD. সমস্ত অধিকার সংরক্ষিত।</div>
        </footer>
      </body>
    </html>
  );
}
