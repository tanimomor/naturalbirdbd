"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { OrderForm } from "./OrderForm";

export function OrderFabButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="order-fab-wrap">
        <button
          type="button"
          id="order-fab"
          onClick={() => setOpen(true)}
          aria-label="অর্ডার ফর্ম খুলুন"
          title="অর্ডার করুন"
        >
          <Image src="/button/customer.png" alt="" fill sizes="54px" style={{ objectFit: "cover" }} />
        </button>
        {/* <span className="order-fab-label" aria-hidden="true">অর্ডার করুন</span> */}
      </div>

      {open && (
        <div
          className="order-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="অর্ডার ফর্ম"
          onClick={() => setOpen(false)}
        >
          <div className="order-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="order-modal-close"
              onClick={() => setOpen(false)}
              aria-label="বন্ধ করুন"
            >
              ×
            </button>
            <OrderForm />
          </div>
        </div>
      )}
    </>
  );
}
