import Link from "next/link";
import Image from "next/image";

export const POSTS_PER_PAGE = 3;

export default function PaginatedPosts({ posts, page = 1 }) {
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visiblePosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const hrefForPage = (number) => number === 1 ? "/blog" : `/blog/page/${number}`;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-[16px] border border-black/20 p-6 no-underline transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="relative aspect-[628/472] overflow-hidden rounded-[8px]">
              <Image src={post.image} alt="" fill sizes="(min-width: 1280px) 361px, (min-width: 768px) 42vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <p className="m-0 text-[13px] font-semibold uppercase tracking-[1.4px] text-[#b98a2e]">{post.category}</p>
              <h3 className="m-0 text-[24px] font-medium leading-[1.4] text-[#211f1a]">{post.title}</h3>
              <p className="m-0 text-[17px] leading-[1.6] text-[#5b564c]">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
        {page === 1 ? <span className="flex size-11 cursor-not-allowed items-center justify-center rounded-full border border-black opacity-35" aria-hidden="true">←</span> : <Link href={hrefForPage(page - 1)} scroll={false} className="flex size-11 items-center justify-center rounded-full border border-black" aria-label="Previous page">←</Link>}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <Link key={number} href={hrefForPage(number)} scroll={false} aria-current={page === number ? "page" : undefined} className={`flex size-11 items-center justify-center rounded-full border text-[15px] font-semibold ${page === number ? "border-[#b98a2e] bg-[#b98a2e] text-white" : "border-black text-[#211f1a]"}`}>{number}</Link>
        ))}
        {page === totalPages ? <span className="flex size-11 cursor-not-allowed items-center justify-center rounded-full border border-black opacity-35" aria-hidden="true">→</span> : <Link href={hrefForPage(page + 1)} scroll={false} className="flex size-11 items-center justify-center rounded-full border border-black" aria-label="Next page">→</Link>}
      </nav>
    </>
  );
}
