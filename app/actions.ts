"use server";

export async function submitOrderToTelegram(formData: {
  name: string;
  phone: string;
  address: string;
  product: string;
  qty: string;
  note: string;
  turnstileToken: string;
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram credentials are not set in environment variables.");
    return { success: false, error: "Server configuration error" };
  }

  const isTurnstileEnabled = process.env.NEXT_PUBLIC_ENABLE_TURNSTILE !== 'false';

  if (isTurnstileEnabled) {
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error("Turnstile secret key is not set.");
      return { success: false, error: "Server configuration error" };
    }

    const verifyFormData = new URLSearchParams();
    verifyFormData.append('secret', turnstileSecret);
    verifyFormData.append('response', formData.turnstileToken);

    try {
      const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: verifyFormData,
      });
      const outcome = await res.json();
      if (!outcome.success) {
        return { success: false, error: "ক্যাপচা যাচাইকরণ ব্যর্থ হয়েছে" }; // Captcha verification failed
      }
    } catch (err) {
      return { success: false, error: "ক্যাপচা যাচাইকরণে ত্রুটি" }; // Error verifying captcha
    }
  }

  const message = `
🔔 *নতুন অর্ডার এসেছে!*
👤 *নাম:* ${formData.name}
📱 *ফোন:* ${formData.phone}
📍 *ঠিকানা:* ${formData.address}
🛒 *পণ্য:* ${formData.product}
⚖️ *পরিমাণ:* ${formData.qty}
📝 *মন্তব্য:* ${formData.note || "নেই"}
`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API Error:", errorData);
      return { success: false, error: "Failed to send message to Telegram" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting order to Telegram:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
