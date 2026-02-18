import Link from "next/link";
import type { BlogPostData } from "@/content/blog/posts";

interface BlogCardProps {
  post: BlogPostData;
}

export default function BlogCard({ post }: BlogCardProps) {
  const href = post.externalUrl || `/blog/${post.slug}`;
  const linkProps = post.externalUrl
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <article className="blog-card group">
      <div className="blog-card__image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage}
          alt={post.title}
          width={602}
          height={451}
          loading="lazy"
        />
        <div className="blog-card__overlay" />
        <Link
          href={href}
          className="absolute inset-0 z-10"
          aria-hidden="true"
          {...linkProps}
        />
      </div>
      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__category">{post.category}</span>
          <span className="blog-card__date">{post.date}</span>
        </div>
        <h4 className="blog-card__title">
          <Link href={href} {...linkProps}>{post.title}</Link>
        </h4>
      </div>
    </article>
  );
}
