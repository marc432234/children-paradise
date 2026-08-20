import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Admissions from "@/components/Admissions";
import CTABand from "@/components/CTABand";
import PaginatedPosts from "@/components/PaginatedPosts";
import { blogPosts } from "@/data/blog-posts";

export default function BlogIndex({ currentPage = 1 }) {
  const featured = blogPosts.find((post) => post.featured);
  const latestPosts = blogPosts.filter((post) => !post.featured);

  return <div className="min-h-screen bg-white">
    <Header activePage="blog" />
    <section className="relative overflow-hidden bg-[#f7f3ec] px-6 py-20 text-center md:py-24 lg:px-20 lg:py-[120px]"><p className="m-0 font-space-grotesk text-[13px] font-bold tracking-[1.82px] text-[#b98a2e]">CHILDREN&apos;S PARADISE</p><h1 className="mx-auto mt-4 max-w-[760px] font-instrument-serif text-[46px] leading-[1.1] tracking-[-1px] text-[#211f1a] md:text-[64px]">Resources for Growing Families</h1><p className="mx-auto mt-5 max-w-[640px] text-[17px] leading-[1.6] text-[#5b564c]">Helpful ideas, practical guidance, and inspiration for every stage of your child&apos;s learning journey.</p></section>
    <main><section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-20 lg:py-[112px]"><h2 className="font-instrument-serif text-[42px] uppercase leading-[1.1] text-[#211f1a] md:text-[48px]">Featured Articles</h2><div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16"><div className="relative aspect-[628/472] overflow-hidden rounded-2xl"><Image src={featured.image} alt="Children learning through play" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /><span className="absolute left-6 top-6 rounded-full border border-black/15 bg-white px-4 py-2 text-[15px] text-[#5b564c]">{featured.category}</span></div><div><h3 className="text-[32px] font-medium leading-[1.4] text-[#211f1a] md:text-[40px]">{featured.title}</h3><p className="mt-4 text-[18px] leading-[1.6] text-[#5b564c]">{featured.excerpt}</p><Link href={`/blog/${featured.slug}`} className="mt-10 inline-flex rounded-[4px] bg-black px-[29px] py-4 text-[15px] font-semibold text-white no-underline">Read Article →</Link></div></div></section><section id="latest-articles" className="bg-[#f7f3ec] px-6 py-20 lg:px-20 lg:py-[120px]"><div className="mx-auto max-w-[1280px]"><h2 className="text-center font-instrument-serif text-[42px] uppercase leading-[1.1] text-[#211f1a] md:text-[48px]">Latest Articles</h2><div className="mt-10"><PaginatedPosts posts={latestPosts} page={currentPage} /></div></div></section></main>
    <Admissions /><CTABand />
  </div>;
}
