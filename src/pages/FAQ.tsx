import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import { AFFILIATE_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const faqs = [
  { q: "What is a dedicated virtual phone number?", a: "A dedicated virtual phone number is a phone number exclusively assigned to you. Unlike free shared numbers, only you can see messages sent to it. It works just like a regular phone number for receiving SMS." },
  { q: "How much does it cost?", a: "Numbers start at $4.50/month with yearly billing, or $9/month with monthly billing. This includes unlimited SMS reception, private inbox, email forwarding, and 24/7 support." },
  { q: "Is signing up free?", a: "Yes! Creating your account and inbox is completely free. You only pay when you choose to get a dedicated phone number." },
  { q: "Why not use free temporary numbers?", a: "Free numbers are shared publicly — anyone can read your messages. They get blocked frequently by platforms like WhatsApp and Google, messages are often delayed or lost, and there's no support. Dedicated numbers are private, reliable, and exclusively yours." },
  { q: "Which platforms work with these numbers?", a: "Dedicated numbers work with WhatsApp, Telegram, Google, Facebook, Instagram, Twitter/X, TikTok, Tinder, Uber, PayPal, and thousands more services." },
  { q: "Which countries are available?", a: "Currently, dedicated numbers are available from the United States (+1), United Kingdom (+44), and Canada (+1). More countries are being added regularly." },
  { q: "Can I cancel anytime?", a: "Absolutely. There are no long-term contracts. Cancel any number anytime and receive instant credit back." },
  { q: "How fast do messages arrive?", a: "Messages arrive in real-time — typically within 5-10 seconds of being sent. Much faster and more reliable than free shared numbers." },
  { q: "Can I forward SMS to my email?", a: "Yes! You can automatically forward incoming SMS messages to your email address or a webhook URL. This way you get notified instantly on your phone." },
  { q: "Is using a virtual number legal?", a: "Yes, using virtual phone numbers for verification is completely legal. It's a common and accepted practice for privacy protection, testing, and business purposes." },
  { q: "Can I have multiple numbers?", a: "Yes, you can have as many dedicated numbers as you need. Each number has its own private inbox and can be managed independently." },
  { q: "What if a number doesn't work with a specific service?", a: "Cancel the number instantly and get credit back. Then try a different number. The service ensures you only pay for numbers that work for you." },
];

const FAQ = () => (
  <main className="container py-12">
    <SEO
      title="FAQ — Virtual Phone Numbers & SMS Verification"
      description="Frequently asked questions about dedicated virtual phone numbers, pricing, privacy, and how online SMS verification services work."
      canonical="/faq"
    />

    <div className="text-center mb-14">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Everything you need to know about dedicated virtual phone numbers.
      </p>
    </div>

    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((item) => (
        <details key={item.q} className="group rounded-xl border bg-card p-6 shadow-card">
          <summary className="cursor-pointer font-display font-semibold text-foreground flex items-center justify-between">
            {item.q}
            <span className="text-primary transition-transform group-open:rotate-45 text-xl ml-4 flex-shrink-0">+</span>
          </summary>
          <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>

    <div className="text-center mt-12">
      <p className="text-muted-foreground mb-4">Ready to get started? Sign up is free!</p>
      <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
        <Button variant="cta" size="lg">Create Your Free Inbox →</Button>
      </a>
    </div>

    <CTABanner />
  </main>
);

export default FAQ;
