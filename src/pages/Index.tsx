import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AFFILIATE_LINK } from "@/lib/constants";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import { Shield, Globe, Zap, CheckCircle, MessageSquare, Lock } from "lucide-react";

const features = [
  { icon: Globe, title: "US, UK & Canada Numbers", description: "Get dedicated phone numbers from the United States, United Kingdom, and Canada — real numbers that work with any service." },
  { icon: Zap, title: "Instant SMS Delivery", description: "Receive verification codes and messages in seconds. Real-time delivery to your private inbox — no delays." },
  { icon: Shield, title: "100% Private Inbox", description: "Unlike free shared numbers, your messages are private. Only you can see your SMS — nobody else." },
  { icon: Lock, title: "Dedicated Numbers", description: "Your number is exclusively yours. No sharing with strangers, no missed codes, no security risks." },
  { icon: MessageSquare, title: "All Platforms Supported", description: "Works with WhatsApp, Telegram, Google, Facebook, Tinder, Uber, PayPal, and thousands more services." },
  { icon: CheckCircle, title: "Cancel Anytime", description: "No long-term contracts. Cancel any number anytime and get instant credit back. Only pay for what you use." },
];

const steps = [
  { num: "01", title: "Create Your Free Inbox", desc: "Sign up in seconds — no personal phone number required. Your inbox is ready instantly." },
  { num: "02", title: "Choose Your Number", desc: "Pick a dedicated number from the US, UK, or Canada. Starting at just $4.50/month." },
  { num: "03", title: "Receive SMS Privately", desc: "All messages go to your private inbox. Forward them to email or webhook URL automatically." },
];

const comparisons = [
  { feature: "Privacy", free: "❌ Public — anyone can read", paid: "✅ Private inbox — only you" },
  { feature: "Reliability", free: "❌ Numbers get blocked often", paid: "✅ Dedicated, always working" },
  { feature: "SMS Delivery", free: "⚠️ Slow, often missed", paid: "✅ Instant real-time delivery" },
  { feature: "Number Ownership", free: "❌ Shared with thousands", paid: "✅ Exclusively yours" },
  { feature: "SMS Forwarding", free: "❌ Not available", paid: "✅ Email & webhook forwarding" },
  { feature: "Support", free: "❌ None", paid: "✅ 24/7 support" },
];

const Index = () => (
  <main>
    <SEO
      title="Receive SMS Online — Private Dedicated Phone Numbers"
      description="Get dedicated virtual phone numbers to receive SMS online privately. US, UK & Canada numbers from $4.50/mo. Private inbox, instant delivery, cancel anytime."
      canonical="/"
    />

    {/* Hero */}
    <section className="bg-hero py-20 md:py-32">
      <div className="container text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
          Trusted by Millions • 12+ Years of Service
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
          Receive SMS Online with{" "}
          <span className="text-gradient">Private Dedicated Numbers</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Stop using your real phone number for online verifications. Get a dedicated virtual number with a private inbox — your messages, your eyes only.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Create Your Free Inbox →
            </Button>
          </a>
          <Link to="/how-it-works">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              How It Works
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Free signup • Numbers from $4.50/mo • Cancel anytime
        </p>
      </div>
    </section>

    {/* Why Not Free Numbers */}
    <section className="container py-20">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Why Free SMS Numbers Are a <span className="text-gradient">Bad Idea</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Free temporary numbers are public — anyone can read your messages. Here's why dedicated numbers are worth it.
        </p>
      </div>
      <div className="max-w-3xl mx-auto rounded-xl border bg-card shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted">
              <th className="p-4 text-left font-display font-semibold text-foreground">Feature</th>
              <th className="p-4 text-left font-display font-semibold text-destructive">Free Shared Numbers</th>
              <th className="p-4 text-left font-display font-semibold text-primary">Dedicated Numbers</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row) => (
              <tr key={row.feature} className="border-b last:border-0">
                <td className="p-4 font-medium text-foreground">{row.feature}</td>
                <td className="p-4 text-muted-foreground">{row.free}</td>
                <td className="p-4 text-muted-foreground">{row.paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-8">
        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
          <Button variant="cta">Get a Dedicated Number →</Button>
        </a>
      </div>
    </section>

    {/* Features */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Choose Dedicated Virtual Numbers?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Premium features that free services simply can't offer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-card p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border">
              <f.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="container py-20">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Get Started in 3 Simple Steps
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <span className="inline-block font-display text-5xl font-bold text-primary/20 mb-4">{s.num}</span>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg">Create Your Free Inbox →</Button>
        </a>
      </div>
    </section>

    {/* Pricing Preview */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">No hidden fees. Cancel anytime. Save 50% with yearly billing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { country: "🇺🇸 United States", price: "$9", yearly: "$4.50" },
            { country: "🇬🇧 United Kingdom", price: "$9", yearly: "$4.50" },
            { country: "🇨🇦 Canada", price: "$9", yearly: "$4.50" },
          ].map((plan) => (
            <div key={plan.country} className="rounded-xl bg-card border p-6 shadow-card text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{plan.country}</h3>
              <div className="mb-1">
                <span className="text-3xl font-display font-bold text-foreground">{plan.yearly}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">with yearly billing (or {plan.price}/mo monthly)</p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> Unlimited SMS Reception</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> Private Inbox</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> Email & URL Forwarding</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> 24/7 Support</li>
              </ul>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" className="w-full">Get This Number →</Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Blog Preview */}
    <section className="container py-20">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Latest from Our Blog
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tips, guides, and tutorials about virtual phone numbers and online privacy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { slug: "receive-sms-online-free", title: "Receive SMS Online — Free vs Dedicated Numbers", cat: "Guides" },
          { slug: "fake-phone-number-for-whatsapp", title: "How to Create WhatsApp Without Your Real Phone Number", cat: "Tutorials" },
          { slug: "virtual-number-for-telegram", title: "Use Telegram Without Your Real Phone Number", cat: "Tutorials" },
          { slug: "receive-otp-online-guide", title: "How to Receive OTP Online — Complete Guide", cat: "Guides" },
          { slug: "best-sms-verification-sites-2026", title: "Best SMS Verification Services in 2026", cat: "Reviews" },
          { slug: "stop-spam-calls-virtual-number", title: "How to Stop Spam Calls Using Virtual Numbers", cat: "Privacy" },
        ].slice(0, 3).map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group rounded-xl bg-card border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <span className="text-xs font-semibold text-primary">{post.cat}</span>
            <h3 className="font-display text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">{post.title}</h3>
            <span className="inline-block mt-4 text-sm text-primary font-medium">Read More →</span>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/blog">
          <Button variant="outline">View All Articles →</Button>
        </Link>
      </div>
    </section>

    {/* FAQ */}
    <section className="container py-20">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {[
          { q: "How much does a dedicated number cost?", a: "Numbers start at $4.50/month with yearly billing, or $9/month if you pay monthly. This includes unlimited SMS reception, private inbox, email forwarding, and 24/7 support." },
          { q: "Is signing up free?", a: "Yes! Creating your inbox and account is completely free. You only pay when you choose to get a dedicated phone number." },
          { q: "Why not use free temporary numbers?", a: "Free numbers are shared publicly — anyone can read your messages. They get blocked frequently by platforms, messages are often delayed or lost, and there's no support. Dedicated numbers are private, reliable, and exclusively yours." },
          { q: "Which platforms work with these numbers?", a: "Our numbers work with WhatsApp, Telegram, Google, Facebook, Instagram, Twitter/X, TikTok, Tinder, Uber, PayPal, and thousands more services." },
          { q: "Can I cancel anytime?", a: "Absolutely. There are no long-term contracts. Cancel any number anytime and receive instant credit back. You're never locked in." },
          { q: "Which countries are available?", a: "Currently, dedicated numbers are available from the United States (+1), United Kingdom (+44), and Canada (+1). More countries are being added regularly." },
        ].map((item) => (
          <details key={item.q} className="group rounded-xl border bg-card p-6 shadow-card">
            <summary className="cursor-pointer font-display font-semibold text-foreground flex items-center justify-between">
              {item.q}
              <span className="text-primary transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>

    {/* CTA */}
    <div className="container">
      <CTABanner
        title="Protect Your Privacy Today"
        description="Get your own dedicated phone number with a private inbox. Sign up free, choose your number, and start receiving SMS in minutes."
      />
    </div>
  </main>
);

export default Index;
