"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PRODUCT_PATHS = ["/turkey", "/chinese-duck", "/quail", "/titir"];

export function OrderNavLink() {
  const pathname = usePathname();
  const orderHref = pathname === "/" ? "#order-section" : PRODUCT_PATHS.includes(pathname) ? `${pathname}#order-section` : "/#order-section";

  return (
    <Link href={orderHref} className="header-cta">
      অর্ডার করুন
    </Link>
  );
}
