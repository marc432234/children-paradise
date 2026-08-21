import Link from "next/link";

import { listPages, listPosts } from "@/lib/admin-data";

export default async function AdminDashboard() {
  const [posts, pages] = await Promise.all([listPosts(), listPages()]);

  const cards = [
    {
      href: "/admin/blog",
      title: "Blog posts",
      count: posts.length,
      description: "Create, edit, and delete articles.",
    },
    {
      href: "/admin/pages",
      title: "Pages",
      count: pages.length,
      description: "Edit page content stored in Supabase.",
    },
  ];

  return (
    <div>
      <h1 className="mb-8 font-['Instrument_Serif',serif] text-3xl">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-lg border border-[#211f1a]/10 bg-white p-6 transition hover:border-[#ba923a]"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl">{card.title}</h2>
              <span className="text-2xl text-[#ba923a]">{card.count}</span>
            </div>
            <p className="mt-2 text-sm text-[#5b564c]">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
