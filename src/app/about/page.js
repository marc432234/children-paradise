import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Admissions from "@/components/Admissions";
import CTABand from "@/components/CTABand";
import Experience from "@/components/Experience";

export const metadata = {
  title: "About | Children's Paradise Learning Academies",
  description: "For more than 25 years, Children's Paradise has helped children learn, grow and thrive across Hialeah and Miami Lakes, Florida.",
};

function TwoCol({ reversed, label, title, paragraphs, image, imageAlt, children }) {
  return (
    <section className={`${reversed ? "bg-white" : "bg-[#f7f3ec]"} py-20 md:py-24 lg:py-[120px] px-6 lg:px-20`}>
      <ScrollReveal>
        <div className={`max-w-[1280px] mx-auto flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-[105px] items-center`}>
        <div className="flex-1 flex flex-col gap-4">
          <p className="font-medium text-[18px] text-[#5b564c] tracking-[2.45px] uppercase m-0">{label}</p>
          <div className="flex flex-col gap-4">
            <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[48px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">{title}</h2>
            <div className="text-[18px] text-[#5b564c] leading-[1.6] flex flex-col gap-4">
              {paragraphs.map((p, i) => <p key={i} className="m-0">{p}</p>)}
            </div>
          </div>
          {children}
        </div>
        <div className="w-full lg:w-[547px] h-[260px] lg:h-[575px] rounded-[10px] overflow-hidden shrink-0">
          <Image src={image} alt={imageAlt} width={547} height={575} className="w-full h-full object-cover" />
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header activePage="about" />

      {/* Hero */}
      <section className="bg-[#f7f3ec] py-20 md:py-24 lg:py-[120px] px-6 lg:px-20 relative overflow-hidden">
        <Image src="/images/hero-deco.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-y-[-1] w-[1441px] h-[1025px] pointer-events-none select-none" width={1441} height={1025} aria-hidden="true" />
        <ScrollReveal>
        <div className="max-w-[800px] mx-auto text-center relative flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-4 items-center">
            <p className="font-space-grotesk font-bold text-[13px] text-[#b98a2e] tracking-[1.82px] uppercase m-0">About Children&apos;s Paradise</p>
            <h1 className="font-instrument-serif text-[40px] md:text-[52px] lg:text-[64px] text-[#211f1a] uppercase tracking-[-1.02px] leading-[1.2] m-0 font-normal">More Than a School. A Place to Grow.</h1>
            <p className="text-[18px] text-[#5b564c] leading-[1.6] m-0 max-w-[720px]">For more than 25 years, Children&apos;s Paradise has been part of the lives of families across Hialeah and Miami Lakes, creating a caring environment where children can learn, grow and build confidence at every stage of their education.</p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="/programs" className="btn-gold">Explore Our Programs</a>
            <a href="/#admissions" className="btn-outline-black">Schedule a Visit</a>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <TrustBar />

      <TwoCol
        label="Our Story"
        title="Built Around the Way Children Grow"
        paragraphs={[
          "Children's Paradise was built around a simple idea: children do their best learning when they feel safe, known and supported.",
          "Today, that idea continues to shape the experience we create for children and families across our Hialeah and Miami Lakes locations.",
          "From the early years through high school, our focus is on supporting the whole child — academically, socially and personally — while giving families a school community they can trust.",
        ]}
        image="/images/about-story.png"
        imageAlt="Children's Paradise graduation ceremony"
      />

      <TwoCol
        reversed
        label="Our Approach"
        title="Learning Starts With Feeling Supported"
        paragraphs={[
          "Every child is different. They learn differently, grow at their own pace and discover their strengths in different ways.",
          "That's why Children's Paradise creates learning environments that adapt to the child — not the other way around. Our educators focus on building genuine relationships with students, understanding what motivates each child and creating space for them to grow with confidence.",
        ]}
        image="/images/about-photo-new.png"
        imageAlt="Children engaged in a classroom activity"
      />

      <Experience />

      <TwoCol
        label="The Whole Child"
        title="Education Is About More Than the Classroom"
        paragraphs={[
          "A child's development isn't measured only by grades. Children also grow through relationships, experiences, challenges, creativity and the confidence that comes from knowing they belong somewhere.",
          "At Children's Paradise, learning happens in every interaction — with teachers, classmates and the wider school community — because we believe the best education supports the whole person, not just the student.",
        ]}
        image="/images/sl-1.png"
        imageAlt="Students celebrating at Children's Paradise"
      />

      <TwoCol
        reversed
        label="Our Commitment"
        title="A School Community Built on Trust"
        paragraphs={[
          "For families, choosing a school is about more than finding a place for their child to spend the day. It's about finding people they can trust.",
          "At Children's Paradise, we take that responsibility seriously. For over 25 years, we have worked to be the kind of school that families return to — and that children are proud to be part of. A place where every child is known, not just enrolled.",
        ]}
        image="/images/sl-2.png"
        imageAlt="Student working on a project at Children's Paradise"
      />

      <Admissions />
      <CTABand />
    </div>
  );
}
