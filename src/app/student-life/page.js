import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Admissions from "@/components/Admissions";
import CTABand from "@/components/CTABand";
import Experience from "@/components/Experience";

export const metadata = {
  title: "Student Life",
  description: "Student life at Children's Paradise goes beyond the classroom. Explore learning, friendships, creative experiences and community moments across our schools.",
  alternates: { canonical: "/student-life" },
  openGraph: {
    title: "Student Life at Children's Paradise Learning Academies",
    description: "Student life at Children's Paradise goes beyond the classroom. Explore learning, friendships, creative experiences and community moments across our schools.",
    url: "/student-life",
    images: [{ url: "/images/sl-outing.png", width: 640, height: 520, alt: "Children's Paradise students on a school outing" }],
  },
  twitter: {
    title: "Student Life at Children's Paradise Learning Academies",
    description: "Student life at Children's Paradise goes beyond the classroom. Real classrooms, real teachers and real moments.",
    images: ["/images/sl-outing.png"],
  },
};

export default function StudentLifePage() {
  return (
    <div className="min-h-screen">
      <Header activePage="student life" />

      {/* Hero */}
      <section id="main-content" className="bg-[#f7f3ec] relative overflow-hidden py-20 md:py-24 lg:py-[120px] px-6 lg:px-20" aria-label="Student Life hero">
        <Image src="/images/hero-deco.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-y-[-1] w-[1441px] h-[1025px] pointer-events-none select-none opacity-[0.18]" width={1441} height={1025} aria-hidden="true" />
        <ScrollReveal>
        <div className="max-w-[680px] mx-auto flex flex-col gap-4 items-center text-center relative z-10">
          <p className="font-space-grotesk font-bold text-[13px] text-[#b98a2e] tracking-[1.82px] uppercase m-0">STUDENT LIFE</p>
          <h1 className="font-instrument-serif text-[36px] md:text-[52px] lg:text-[64px] text-[#211f1a] leading-[1.1] m-0 font-normal tracking-[-1.02px]">Life at Children&apos;s Paradise</h1>
          <p className="text-[17px] text-[#5b564c] leading-[1.6] m-0">Learning doesn&apos;t stop when the lesson ends. Every day brings opportunities for students to learn, explore, create, connect and grow.</p>
          <a href="/schools" className="btn-outline-black mt-2">See Our Schools</a>
        </div>
        </ScrollReveal>
      </section>

      <TrustBar />

      {/* More Than the Classroom */}
      <section className="bg-white py-20 md:py-24 lg:py-[120px] px-6 lg:px-20">
        <ScrollReveal>
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-[15px] text-[#5b564c] tracking-[2.45px] uppercase m-0">ABOUT CHILDREN&apos;S PARADISE</p>
              <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">More Than the Classroom</h2>
            </div>
            <p className="text-[17px] text-[#5b564c] leading-[1.65] m-0">School life is made up of the moments between lessons — the conversations with teachers, the friendships students build and the experiences they remember. At Children&apos;s Paradise, students have opportunities to develop beyond academics while becoming more confident and independent.</p>
            <a href="/about" className="btn-outline-black self-start">Learn About Us</a>
          </div>
          <div className="w-full lg:flex-1 h-[320px] lg:h-[520px] rounded-[12px] overflow-hidden shrink-0">
            <Image src="/images/sl-outing.png" alt="Students on a school outing at Children's Paradise" width={640} height={520} className="w-full h-full object-cover" />
          </div>
        </div>
        </ScrollReveal>
      </section>

      <Experience />

      {/* Learning Happens Everywhere - Photo Mosaic */}
      <section className="bg-[#242855] py-20 md:py-24 lg:py-[120px] px-6 lg:px-20 relative overflow-hidden" aria-labelledby="mosaic-heading">
        <Image src="/images/testimonials-deco.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-y-[-1] w-[1441px] h-[1025px] pointer-events-none select-none opacity-[0.12]" width={1441} height={1025} aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12 relative z-10">
          <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-[706px] flex flex-col gap-4">
              <p className="font-medium text-[15px] text-white/68 tracking-[2.45px] uppercase m-0">STUDENT LIFE</p>
              <div className="flex flex-col gap-2">
                <h2 id="mosaic-heading" className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-white uppercase leading-[1.2] m-0 font-normal">Learning happens everywhere</h2>
                <p className="text-[17px] text-white/68 leading-[1.55] m-0">A look at real classrooms, real teachers and real moments from Children&apos;s Paradise.</p>
              </div>
            </div>
            <a href="/schools" className="btn-outline-gold shrink-0">See Life at Children&apos;s Paradise &rarr;</a>
          </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {/* Row 1: 3 images */}
            <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:h-[300px]">
              <div className="h-[200px] md:h-auto flex-1 rounded-[8px] overflow-hidden">
                <Image src="/images/sl-1.png" alt="Students celebrating at Children's Paradise" width={600} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row gap-6">
                <div className="h-[200px] md:h-auto w-full md:w-[340px] shrink-0 rounded-[8px] overflow-hidden">
                  <Image src="/images/sl-2.png" alt="Student working on a project" width={340} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-row md:flex-col gap-6">
                  <div className="h-[120px] md:h-auto flex-1 rounded-[8px] overflow-hidden">
                    <Image src="/images/sl-teacher.png" alt="Teacher with students in class" width={300} height={150} className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[120px] md:h-auto flex-1 rounded-[8px] overflow-hidden">
                    <Image src="/images/sl-outing.png" alt="Students on a school outing" width={300} height={150} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            </ScrollReveal>

            {/* Row 2: 2 images */}
            <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:h-[220px]">
              <div className="h-[160px] md:h-auto flex-1 rounded-[8px] overflow-hidden">
                <Image src="/images/sl-christmas.png" alt="Children's Paradise Christmas group photo" width={600} height={220} className="w-full h-full object-cover" />
              </div>
              <div className="h-[160px] md:h-auto flex-1 rounded-[8px] overflow-hidden">
                <Image src="/images/sl-6.png" alt="School performance at Children's Paradise" width={600} height={220} className="w-full h-full object-cover" />
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Admissions />
      <CTABand />
    </div>
  );
}
