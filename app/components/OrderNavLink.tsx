"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function OrderNavLink() {
  const pathname = usePathname();
  const orderHref = pathname === "/" ? "#order-section" : pathname.startsWith("/product/") ? `${pathname}#order-section` : "/#order-section";

  return (
    <Link href={orderHref} className="header-cta">
      অর্ডার করুন
    </Link>
  );
}
