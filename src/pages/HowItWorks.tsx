import { Button } from "@/components/ui/button";
import { AFFILIATE_LINK } from "@/lib/constants";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "1",
    title: "Create Your Free Inbox",
    desc: "Sign up in seconds — completely free. No credit card required. Just an email address and you're ready to go.",
  },
  {
    num: "2",
    title: "Choose Your Dedicated Number",
    desc: "Pick a phone number from the US, UK, or Canada. Numbers start at $4.50/month with yearly billing. Each number is exclusively yours.",
  },
  {
    num: "3",
    title: "Use It for Verification",
    desc: "Enter your dedicated number on any website or app that requires phone verification. Works with WhatsApp, Google, Telegram, and thousands more.",
  },
  {
    num: "4",
    title: "Receive SMS Privately",
    desc: "Your verification code appears in your private inbox within seconds. Only you can see it. Optionally, forward messages to your email or webhook URL.",
  },
];

const HowItWorks = () => (
  <main className="container py-12">
    <SEO
      title="How It Works — Get a Dedicated Virtual Number in Minutes"
      description="Learn how to get your own dedicated virtual phone number for SMS verification. 4 simple steps: sign up free, choose number, verify, receive SMS privately."
      canonical="/how-it-works"
    />

    <div className="text-center mb-14">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
        How It <span className="text-gradient">Works</span>
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Get your own dedicated phone number and start receiving SMS privately in under 5 minutes.
      </p>
    </div>

    <div className="max-w-3xl mx-auto space-y-8">
      {steps.map((s) => (
        <div key={s.num} className="flex gap-6 items-start rounded-xl bg-card border p-6 shadow-card">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-cta-gradient font-display text-xl font-bold text-primary-foreground">
            {s.num}
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h2>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
        <Button variant="cta" size="lg" className="text-lg px-8 py-6">Create Your Free Inbox →</Button>
      </a>
      <p className="mt-3 text-sm text-muted-foreground">Free signup • Numbers from $4.50/mo</p>
    </div>

    <section className="max-w-3xl mx-auto mt-20">
      <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Learn More</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/blog/receive-sms-online-free" className="rounded-xl border bg-card p-4 shadow-card hover:shadow-card-hover transition-all">
          <h3 className="font-display font-semibold text-foreground hover:text-primary transition-colors">Free vs Dedicated Numbers →</h3>
        </Link>
        <Link to="/blog/fake-phone-number-for-whatsapp" className="rounded-xl border bg-card p-4 shadow-card hover:shadow-card-hover transition-all">
          <h3 className="font-display font-semibold text-foreground hover:text-primary transition-colors">Virtual Number for WhatsApp →</h3>
        </Link>
      </div>
    </section>

    <CTABanner />
  </main>
);

export default HowItWorks;
