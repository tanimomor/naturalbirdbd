"use client";

import { useState } from "react";
import { db } from "../data/db";
import { submitOrderToTelegram } from "../actions";
import { Turnstile } from '@marsidev/react-turnstile';

export function OrderForm({ defaultProduct }: { defaultProduct?: string }) {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    address: "",
    product: defaultProduct || Object.values(db)[0]?.name || "",
    qty: "1",
    note: ""
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const isTurnstileEnabled = process.env.NEXT_PUBLIC_ENABLE_TURNSTILE !== 'false';

  const handleFieldChange = (field: string, value: string) => {
    setFormError(null);
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formState.name.trim()) {
      setFormError("দয়া করে আপনার নাম লিখুন।");
      return false;
    }

    const phone = formState.phone.trim();
    if (!phone) {
      setFormError("দয়া করে মোবাইল নম্বর লিখুন।");
      return false;
    }

    if (!/^[0-9]{11}$/.test(phone)) {
      setFormError("মোবাইল নম্বর ১১ সংখ্যার হতে হবে।");
      return false;
    }

    if (!formState.address.trim()) {
      setFormError("দয়া করে ঠিকানা লিখুন।");
      return false;
    }

    if (!formState.qty.trim() || Number(formState.qty) < 1) {
      setFormError("অনুগ্রহ করে সঠিক পরিমাণ দিন।");
      return false;
    }

    return true;
  };

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    if (isTurnstileEnabled && !turnstileToken) {
      setFormError("দয়া করে ক্যাপচা পূরণ করুন।");
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    try {
      const result = await submitOrderToTelegram({ ...formState, turnstileToken: turnstileToken || "" });
      if (result.success) {
        setFormSuccess(true);
      } else {
        setFormError("দুঃখিত, কোনো সমস্যা হয়েছে।");
      }
    } catch (error) {
      setFormError("দুঃখিত, কোনো সমস্যা হয়েছে।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-section">
      <h2>অর্ডার অনুরোধ করুন</h2>
      <p>নিচের ফর্মটি পূরণ করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>

      {!formSuccess ? (
        <form id="order-form" onSubmit={submitOrder}>
          {formError && (
            <div className="form-error">
              {formError}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="f-name">আপনার নাম *</label>
              <input
                type="text"
                id="f-name"
                placeholder="পূর্ণ নাম লিখুন"
                required
                value={formState.name}
                onChange={e => handleFieldChange('name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="f-phone">মোবাইল নম্বর *</label>
              <input
                type="tel"
                id="f-phone"
                placeholder="০১XXXXXXXXX"
                required
                maxLength={11}
                value={formState.phone}
                onChange={e => handleFieldChange('phone', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="f-address">ঠিকানা *</label>
            <input
              type="text"
              id="f-address"
              placeholder="আপনার সম্পূর্ণ ঠিকানা"
              required
              value={formState.address}
              onChange={e => handleFieldChange('address', e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="f-product">পণ্য</label>
              <select
                id="f-product"
                value={formState.product}
                onChange={e => handleFieldChange('product', e.target.value)}
              >
                {Object.values(db).map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="f-qty">পরিমাণ (কেজি)</label>
              <input
                type="number"
                id="f-qty"
                placeholder="যেমন: ২"
                min="1"
                value={formState.qty}
                onChange={e => handleFieldChange('qty', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="f-note">মন্তব্য</label>
            <textarea
              id="f-note"
              placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন..."
              value={formState.note}
              onChange={e => handleFieldChange('note', e.target.value)}
            />
          </div>

          {isTurnstileEnabled && (
            <div className="form-group" style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                onSuccess={(token) => setTurnstileToken(token)}
              />
            </div>
          )}

          <button type="submit" id="submit-btn" disabled={isSubmitting || (isTurnstileEnabled && !turnstileToken)}>
            {isSubmitting ? "পাঠানো হচ্ছে..." : "অনুরোধ পাঠান"}
          </button>
        </form>
      ) : (
        <div id="form-success" style={{ display: 'block' }}>
          <div className="success-icon">✅</div>
          <p><strong>ধন্যবাদ!</strong><br />আপনার অনুরোধটি সফলভাবে গ্রহণ করা হয়েছে।<br />খুব শীঘ্রই আমরা আপনার সঙ্গে যোগাযোগ করব।</p>
        </div>
      )}
    </div>
  );
}
