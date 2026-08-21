import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/admin-auth";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await isAuthenticated()) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f3ec] px-6">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 font-['Instrument_Serif',serif] text-3xl text-[#211f1a]">Children&apos;s Paradise Admin</h1>
        <p className="mb-8 text-sm text-[#5b564c]">Sign in to manage site content.</p>
        <LoginForm />
      </div>
    </main>
  );
}
