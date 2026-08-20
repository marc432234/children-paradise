import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Children's Paradise Learning Academies",
  description: "Get in touch with Children's Paradise. Whether you're exploring programmes, looking for a location or ready to schedule a visit, we're here to help.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header activePage="contact" />

      {/* Hero */}
      <section className="bg-white pt-20 md:pt-24 lg:pt-[80px] px-6 lg:px-20" aria-label="Contact hero">
        <ScrollReveal>
        <div className="max-w-[680px] mx-auto flex flex-col gap-4 items-center text-center">
          <p className="font-space-grotesk font-bold text-[13px] text-[#b98a2e] tracking-[1.82px] uppercase m-0">CONTACT</p>
          <h1 className="font-instrument-serif text-[36px] md:text-[52px] lg:text-[64px] text-[#211f1a] uppercase leading-[1.1] m-0 font-normal tracking-[-1.02px]">Let&apos;s Connect</h1>
          <p className="text-[17px] text-[#5b564c] leading-[1.6] m-0">Whether you&apos;re exploring programmes, looking for a location or ready to schedule a visit, we&apos;re here to help you take the next step.</p>
        </div>
        </ScrollReveal>
      </section>

      {/* Contact Form */}
      <section className="bg-white pb-20 md:pb-24 lg:pb-[120px] pt-12 px-6 lg:px-20" aria-labelledby="form-heading">
        <ScrollReveal>
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#f7f3ec] border border-[#211f1a]/8 rounded-[12px] p-8 md:p-12 lg:p-14">
            <h2 id="form-heading" className="font-instrument-serif text-[32px] md:text-[36px] text-[#211f1a] uppercase text-center m-0 mb-10 font-normal tracking-[0.5px]">Drop a Line</h2>
            <ContactForm />
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Location CTA */}
      <section className="bg-white pb-20 md:pb-24 lg:pb-[120px] px-6 lg:px-20" aria-labelledby="location-cta-heading">
        <ScrollReveal>
        <div className="max-w-[600px] mx-auto flex flex-col gap-4 items-center text-center">
          <p className="font-space-grotesk font-bold text-[13px] text-[#5b564c] tracking-[2.52px] uppercase m-0">CHILDREN&apos;S PARADISE</p>
          <h2 id="location-cta-heading" className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[48px] text-[#211f1a] uppercase leading-[1.1] m-0 font-normal tracking-[-0.48px]">Looking for a Location?</h2>
          <p className="text-[17px] text-[#5b564c] leading-[1.6] m-0">With nine locations across Hialeah and Miami Lakes, there&apos;s a Children&apos;s Paradise near your family.</p>
          <a href="/schools" className="bg-black rounded px-7 py-3.5 font-semibold text-[15px] text-white no-underline inline-flex items-center mt-2">Find Your Location</a>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
