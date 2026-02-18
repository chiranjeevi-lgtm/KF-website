import type { Metadata } from "next";
import { SectionWrapper, Heading } from "@/components/ui";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getPaginatedPosts } from "@/content/blog/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles, case studies, and insights on hydroponics, sustainable agriculture, and smart farming from Kamala Farms.",
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const currentPage = page ? parseInt(page, 10) : 1;
  const { posts, totalPages, currentPage: validPage } =
    getPaginatedPosts(currentPage);

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[calc(90vh-88px)] min-h-[512px] mt-[88px] items-center justify-center bg-dark">
        <img
          src="/images/hero/blog-hero.jpg"
          alt="Blog"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl uppercase mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Insights, case studies, and tips on sustainable agriculture
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <SectionWrapper>
        <Heading
          as="h2"
          subtitle="Stay updated with the latest in sustainable farming"
        >
          Latest Articles
        </Heading>

        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination currentPage={validPage} totalPages={totalPages} />
      </SectionWrapper>
    </>
  );
}
