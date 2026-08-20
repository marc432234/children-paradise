import ScrollReveal from "@/components/ScrollReveal";

export default function Admissions() {
  const steps = [
    { num: "01", title: "Explore", description: "Find the right programme for your child." },
    { num: "02", title: "Choose", description: "Find the location that works for your family." },
    { num: "03", title: "Visit", description: "Schedule a visit and meet the community." },
    { num: "04", title: "Begin", description: "Take the next step toward enrolment." },
  ];

  return (
    <section id="admissions" className="bg-gradient-to-l from-[#efdd95] via-[#ba923a] to-[#f6ce56] py-20 md:py-24 lg:py-[112px] px-6 lg:px-20">
      <ScrollReveal>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-14 items-center">
        <header className="max-w-[640px] text-center">
          <p className="font-semibold text-[15px] text-black/65 tracking-[2.45px] uppercase m-0 mb-2">Admissions</p>
          <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-black uppercase leading-[1.2] m-0 font-normal">Ready to take the next step?</h2>
        </header>
        <ol className="relative flex flex-col md:flex-row gap-8 md:gap-6 w-full max-w-[900px] list-none p-0 m-0">
          <div className="hidden md:block absolute top-[22px] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] h-px border-t border-dashed border-black/25 z-0" />
          {steps.map((step) => (
            <li key={step.num} className="flex-1 flex flex-col items-center gap-1.5 relative z-10">
              <div className="w-[44px] h-[44px] rounded-full bg-black flex items-center justify-center shrink-0">
                <span className="font-fraunces font-semibold text-[15px] text-white">{step.num}</span>
              </div>
              <h3 className="font-instrument-serif text-[22px] text-black uppercase text-center mt-2.5 m-0 font-normal">{step.title}</h3>
              <p className="text-[15px] text-black text-center leading-[1.4] m-0">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
      </ScrollReveal>
    </section>
  );
}
