import Link from "next/link";

import { listPosts } from "@/lib/admin-data";

export default async function AdminBlogList() {
  const posts = await listPosts();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-['Instrument_Serif',serif] text-3xl">Blog posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-md bg-[#ba923a] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          New post
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#211f1a]/10 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f7f3ec] text-[#5b564c]">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Categories</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-[#948d7e]">
                  No posts yet.
                </td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.slug} className="border-t border-[#211f1a]/5 hover:bg-[#f7f3ec]/50">
                <td className="px-4 py-3">
                  {post.featured_image ? (
                    <img
                      src={post.featured_image}
                      alt=""
                      className="h-10 w-16 rounded border border-[#211f1a]/10 object-cover"
                    />
                  ) : (
                    <div className="h-10 w-16 rounded border border-[#211f1a]/10 bg-[#f7f3ec]" />
                  )}
                </td>
                <td className="px-4 py-3">
                  <Link href={`/admin/blog/${post.slug}`} className="hover:text-[#ba923a]">
                    {post.title}
                  </Link>
                  <div className="text-xs text-[#948d7e]">/{post.slug}</div>
                </td>
                <td className="px-4 py-3 text-[#5b564c]">{post.categories.join(", ")}</td>
                <td className="px-4 py-3 text-[#948d7e]">
                  {new Date(post.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
