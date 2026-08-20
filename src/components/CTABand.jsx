import ScrollReveal from "@/components/ScrollReveal";

export default function CTABand() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-[120px]">
      <ScrollReveal>
      <div className="max-w-[600px] mx-auto px-5 flex flex-col gap-6 items-center text-center">
        <p className="font-space-grotesk font-bold text-[15px] text-black tracking-[2.52px] uppercase m-0">Children&apos;s Paradise</p>
        <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-black leading-[1.1] m-0 font-normal tracking-[-0.48px]">Your child&apos;s next chapter starts here.</h2>
        <p className="text-[17px] text-black leading-[1.6] m-0">Discover a school community built to help children learn, grow and move confidently toward their future.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/#admissions" className="bg-black rounded px-6 py-3.5 font-semibold text-[15px] text-white no-underline inline-flex items-center justify-center">Schedule a Visit</a>
          <a href="/programs" className="border border-black/40 rounded px-6 py-3.5 font-semibold text-[15px] text-black no-underline inline-flex items-center justify-center">Explore Our Programmes</a>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
