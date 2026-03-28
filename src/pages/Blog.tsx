import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import CTABanner from "@/components/CTABanner";
import { blogPosts } from "@/lib/blog-data";

const Blog = () => (
  <main className="container py-12">
    <SEO
      title="Blog — Free SMS Verification Tips & Guides"
      description="Expert guides, tutorials, and tips about temporary phone numbers, SMS verification, and online privacy. Updated for 2026."
      canonical="/blog"
    />

    <div className="text-center mb-14">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
        Blog & <span className="text-gradient">Guides</span>
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Expert tips, tutorials, and in-depth guides about temporary phone numbers, SMS verification, and protecting your online privacy.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {blogPosts.map((post) => (
        <Link
          key={post.slug}
          to={`/blog/${post.slug}`}
          className="group rounded-xl bg-card border p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>
          <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
            {post.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
          <span className="inline-block mt-4 text-sm text-primary font-medium">Read More →</span>
        </Link>
      ))}
    </div>

    <CTABanner />
  </main>
);

export default Blog;
