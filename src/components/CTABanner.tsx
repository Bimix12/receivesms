import { Button } from "@/components/ui/button";
import { AFFILIATE_LINK } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  description?: string;
}

const CTABanner = ({
  title = "Protect Your Privacy with Dedicated Numbers",
  description = "Get your own private phone number for SMS verification. Free signup, numbers from $4.50/mo, cancel anytime. Your messages stay private."
}: CTABannerProps) => (
  <section className="my-16 rounded-2xl bg-cta-gradient p-8 md:p-12 text-center">
    <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">{title}</h2>
    <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6">{description}</p>
    <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
      <Button variant="secondary" size="lg" className="font-semibold text-base shadow-lg">
        Create Your Free Inbox →
      </Button>
    </a>
  </section>
);

export default CTABanner;
