import Link from "next/link";

import { listPages } from "@/lib/admin-data";

export default async function AdminPagesList() {
  const pages = await listPages();

  return (
    <div>
      <h1 className="mb-8 font-['Instrument_Serif',serif] text-3xl">Pages</h1>
      <div className="overflow-hidden rounded-lg border border-[#211f1a]/10 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f7f3ec] text-[#5b564c]">
            <tr>
              <th className="px-4 py-3">Page</th>
              <th className="px-4 py-3">Last updated</th>
            </tr>
          </thead>
          <tbody>
            {pages.length === 0 && (
              <tr>
                <td colSpan={2} className="px-4 py-6 text-center text-[#948d7e]">
                  No pages yet.
                </td>
              </tr>
            )}
            {pages.map((page) => (
              <tr key={page.key} className="border-t border-[#211f1a]/5 hover:bg-[#f7f3ec]/50">
                <td className="px-4 py-3">
                  <Link href={`/admin/pages/${page.key}`} className="capitalize hover:text-[#ba923a]">
                    {page.key}
                  </Link>
                </td>
                <td className="px-4 py-3 text-[#948d7e]">
                  {new Date(page.updated_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
