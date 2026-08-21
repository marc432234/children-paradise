import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/admin-auth";
import { logout } from "../actions";

export const metadata: Metadata = {
  title: "Children's Paradise Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#211f1a]">
      <header className="border-b border-[#211f1a]/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/admin" className="font-['Instrument_Serif',serif] text-lg">
              Admin
            </Link>
            <Link href="/admin/blog" className="text-[#5b564c] hover:text-[#211f1a]">
              Blog
            </Link>
            <Link href="/admin/pages" className="text-[#5b564c] hover:text-[#211f1a]">
              Pages
            </Link>
            <Link href="/admin/settings" className="text-[#5b564c] hover:text-[#211f1a]">
              Settings
            </Link>
            <Link href="/" className="text-[#948d7e] hover:text-[#211f1a]" target="_blank">
              View site ↗
            </Link>
          </nav>
          <form action={logout}>
            <button type="submit" className="text-sm text-[#948d7e] hover:text-[#211f1a]">
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
