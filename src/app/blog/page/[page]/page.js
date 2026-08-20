import { notFound, redirect } from "next/navigation";
import BlogIndex from "@/components/BlogIndex";
import { blogPosts } from "@/data/blog-posts";
import { POSTS_PER_PAGE } from "@/components/PaginatedPosts";

const totalPages = Math.ceil(blogPosts.filter((post) => !post.featured).length / POSTS_PER_PAGE);

export function generateStaticParams() {
  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({ page: String(index + 2) }));
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  return { title: `Blog – Page ${page} | Children's Paradise Learning Academies`, alternates: { canonical: `/blog/page/${page}` } };
}

export default async function BlogPaginationPage({ params }) {
  const { page: rawPage } = await params;
  const page = Number(rawPage);
  if (page === 1) redirect("/blog");
  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound();
  return <BlogIndex currentPage={page} />;
}
