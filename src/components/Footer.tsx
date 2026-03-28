import { Link } from "react-router-dom";
import { AFFILIATE_LINK, SITE_NAME } from "@/lib/constants";
import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card mt-20">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <Phone className="h-5 w-5 text-primary" />
            {SITE_NAME}
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Private dedicated phone numbers for SMS verification. Protect your privacy with your own virtual number.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Pages</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Popular Articles</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/blog/receive-sms-online-free" className="hover:text-foreground transition-colors">Free vs Dedicated Numbers</Link></li>
            <li><Link to="/blog/temporary-phone-number-verification" className="hover:text-foreground transition-colors">Temp Number for Verification</Link></li>
            <li><Link to="/blog/disposable-phone-number-guide" className="hover:text-foreground transition-colors">Disposable Number Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Get Started</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Create your free inbox and get a dedicated number today.
          </p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
            Sign Up Free →
          </a>
        </div>
      </div>

      <div className="border-t mt-8 pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
