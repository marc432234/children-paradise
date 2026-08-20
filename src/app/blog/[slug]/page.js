import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import CTABand from "@/components/CTABand";
import { blogPosts, getBlogPost } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const body = post.body || [
    {
      heading: post.title,
      paragraphs: [post.excerpt, "More family resources and updates from Children's Paradise are coming soon."],
    },
  ];
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="blog" />
      <article>
        <header id="main-content" className="bg-[#f7f3ec] px-6 py-16 text-center md:py-24 lg:px-20 lg:py-[104px]">
          <Link href="/blog" className="text-[15px] font-semibold text-[#5b564c]">
            ← Back to resources
          </Link>
          <p className="mt-9 text-[13px] font-bold uppercase tracking-[1.8px] text-[#b98a2e]">{post.category}</p>
          <h1 className="mx-auto mt-4 max-w-[920px] font-instrument-serif text-[46px] leading-[1.08] tracking-[-1px] text-[#211f1a] md:text-[64px]">
            {post.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] text-[18px] leading-[1.6] text-[#5b564c]">{post.excerpt}</p>
        </header>

        <div className="mx-auto max-w-[1060px] px-6 py-12 lg:px-20 lg:py-20">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1024px) 1060px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mx-auto mt-16 max-w-[760px] space-y-12">
            {body.map((section) => (
              <section key={section.heading}>
                <h2 className="text-[28px] font-medium leading-[1.4] text-[#211f1a]">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-[18px] leading-[1.6] text-[#5b564c]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-[#f7f3ec] px-6 py-20 lg:px-20 lg:py-[120px]" aria-labelledby="related-heading">
        <div className="mx-auto max-w-[1280px]">
          <h2 id="related-heading" className="font-instrument-serif text-[42px] uppercase text-[#211f1a] md:text-[48px]">
            You may also like
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-2xl border border-black/20 bg-white p-6 no-underline">
                <div className="relative aspect-[628/472] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-[22px] font-medium leading-[1.4] text-[#211f1a]">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-[#5b564c]">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
