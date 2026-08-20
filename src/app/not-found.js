import Header from "@/components/Header";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#f7f3ec] min-h-[calc(100vh-85px)] flex items-center justify-center px-6 py-24">
        <div className="max-w-[600px] mx-auto flex flex-col items-center text-center gap-6">
          <p className="font-space-grotesk font-bold text-[13px] text-[#b98a2e] tracking-[1.82px] uppercase m-0">404</p>
          <h1 className="font-instrument-serif text-[48px] md:text-[64px] text-[#211f1a] uppercase leading-[1.1] tracking-[-1px] m-0 font-normal">
            Page not found.
          </h1>
          <p className="text-[17px] text-[#5b564c] leading-[1.6] m-0 max-w-[480px]">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Head back to our homepage or find a location near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href="/" className="btn-gold">Back to Homepage</a>
            <a href="/schools" className="btn-outline-black">Find a Location</a>
          </div>
        </div>
      </main>
    </>
  );
}
