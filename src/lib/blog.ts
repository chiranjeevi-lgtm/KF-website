import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author?: string;
  category?: string;
  coverImage?: string;
}

/**
 * Get all blog posts sorted by date (newest first).
 *
 * Reads MDX files from src/content/blog/ and parses frontmatter.
 * Each MDX file should have this frontmatter format:
 *
 * ---
 * title: "Post Title"
 * date: "2024-01-15"
 * excerpt: "A brief summary..."
 * author: "Author Name"
 * category: "Hydroponics"
 * coverImage: "/images/blog/cover.jpg"
 * ---
 */
export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
      author: data.author,
      category: data.category,
      coverImage: data.coverImage,
    } satisfies BlogPost;
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Get a single blog post by slug.
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
