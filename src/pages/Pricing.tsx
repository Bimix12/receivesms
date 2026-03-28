import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import { AFFILIATE_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const plans = [
  { country: "🇺🇸 United States", code: "+1", price: "$9", yearly: "$4.50", yearlyTotal: "$54" },
  { country: "🇬🇧 United Kingdom", code: "+44", price: "$9", yearly: "$4.50", yearlyTotal: "$54" },
  { country: "🇨🇦 Canada", code: "+1", price: "$9", yearly: "$4.50", yearlyTotal: "$54" },
];

const Pricing = () => (
  <main className="container py-12">
    <SEO
      title="Pricing — Dedicated Virtual Phone Numbers"
      description="Get dedicated virtual phone numbers from $4.50/month. US, UK & Canada numbers with private inbox, email forwarding, and 24/7 support. Cancel anytime."
      canonical="/pricing"
    />

    <div className="text-center mb-14">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
        Simple, Transparent <span className="text-gradient">Pricing</span>
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        No hidden fees. No surprises. Cancel any number anytime and get instant credit back.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
      {plans.map((plan) => (
        <div key={plan.country} className="rounded-xl bg-card border p-8 shadow-card hover:shadow-card-hover transition-all text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-1">{plan.country}</h2>
          <p className="text-sm text-muted-foreground mb-6">{plan.code}</p>

          <div className="mb-2">
            <span className="text-4xl font-display font-bold text-foreground">{plan.yearly}</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            Billed {plan.yearlyTotal}/year • Save 50%
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            Or {plan.price}/mo paid monthly
          </p>

          <ul className="text-sm text-muted-foreground space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> Unlimited SMS Reception</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> Private Secure Inbox</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> Forward SMS to Email</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> Forward SMS to Webhook URL</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> 24/7 Support</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> Cancel Anytime</li>
          </ul>

          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" className="w-full">Get This Number →</Button>
          </a>
        </div>
      ))}
    </div>

    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Pricing FAQ</h2>
      {[
        { q: "Is signing up free?", a: "Yes! Creating your account and inbox is completely free. You only pay when you choose to get a dedicated phone number." },
        { q: "Can I cancel anytime?", a: "Absolutely. Cancel any number at any time and receive instant credit back. No lock-in contracts, no cancellation fees." },
        { q: "What payment methods are accepted?", a: "Major credit cards and various payment methods are accepted. Check the platform for the full list of options." },
        { q: "Can I have multiple numbers?", a: "Yes! You can have as many dedicated numbers as you need. Each number has its own private inbox." },
        { q: "What happens if a number doesn't work for me?", a: "Cancel it instantly and get credit back. Then try a different number. You only pay for numbers that work for you." },
      ].map((item) => (
        <details key={item.q} className="group rounded-xl border bg-card p-6 shadow-card">
          <summary className="cursor-pointer font-display font-semibold text-foreground flex items-center justify-between">
            {item.q}
            <span className="text-primary transition-transform group-open:rotate-45 text-xl ml-4 flex-shrink-0">+</span>
          </summary>
          <p className="mt-3 text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>

    <CTABanner />
  </main>
);

export default Pricing;
