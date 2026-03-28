import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug, blogPosts } from "@/lib/blog-data";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { AFFILIATE_LINK } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || "");

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.tags?.some((t) => post.tags?.includes(t)))
    .slice(0, 3);
  const fallbackRelated = related.length >= 3 ? related : [
    ...related,
    ...blogPosts.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 3 - related.length),
  ];

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("## ")) return <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith("### ")) return <h3 key={i} className="font-display text-xl font-semibold text-foreground mt-8 mb-3">{trimmed.slice(4)}</h3>;
      if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*(.*)$/);
        if (match) return <li key={i} className="ml-4 text-muted-foreground mb-2"><strong className="text-foreground">{match[1]}</strong>{match[2]}</li>;
      }
      if (trimmed.startsWith("- ")) return <li key={i} className="ml-4 text-muted-foreground mb-2">{trimmed.slice(2)}</li>;
      if (trimmed.startsWith("1. ") || trimmed.match(/^\d+\.\s/)) {
        const text = trimmed.replace(/^\d+\.\s/, "");
        const boldMatch = text.match(/^\*\*(.+?)\*\*(.*)$/);
        if (boldMatch) return <li key={i} className="ml-4 text-muted-foreground mb-2 list-decimal"><strong className="text-foreground">{boldMatch[1]}</strong>{boldMatch[2]}</li>;
        return <li key={i} className="ml-4 text-muted-foreground mb-2 list-decimal">{text}</li>;
      }
      if (trimmed.startsWith("|")) return null; // skip tables for simplicity

      // Inline bold
      const parts = trimmed.split(/\*\*(.+?)\*\*/g);
      return (
        <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part)}
        </p>
      );
    });
  };

  return (
    <main className="container py-12">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        type="article"
        publishedDate={post.date}
      />

      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
            <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">{post.title}</h1>
        </div>

        {/* Mid-article CTA */}
        <div className="rounded-xl border bg-primary/5 p-6 mb-8 text-center">
          <p className="text-sm font-medium text-foreground mb-3">🔒 Need a private dedicated number? From $4.50/mo</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="sm">Get Your Dedicated Number →</Button>
          </a>
        </div>

        <div className="prose-content">
          {renderContent(post.content)}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-xl border bg-primary/5 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">Get Your Private Dedicated Number</h3>
          <p className="text-muted-foreground mb-4">US, UK & Canada numbers from $4.50/mo. Private inbox, instant delivery, cancel anytime.</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg">Get Started Now →</Button>
          </a>
        </div>
      </article>

      {/* Related Posts */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fallbackRelated.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group rounded-xl bg-card border p-4 shadow-card hover:shadow-card-hover transition-all">
              <span className="text-xs text-primary font-semibold">{p.category}</span>
              <h3 className="font-display text-sm font-semibold text-foreground mt-1 group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
              <span className="inline-block mt-2 text-xs text-primary font-medium">Read More →</span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default BlogPost;
