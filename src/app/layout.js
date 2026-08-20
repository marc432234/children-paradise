import { Inter, Instrument_Serif, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionModal from "@/components/AdmissionModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

const siteUrl = "https://michildrensparadise.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Children's Paradise Learning Academies | Hialeah & Miami Lakes, FL",
    template: "%s | Children's Paradise Learning Academies",
  },
  description:
    "Children's Paradise offers early learning through high school programmes across 9 locations in Hialeah and Miami Lakes, Florida. 25+ years serving local families.",
  keywords: [
    "children's paradise",
    "learning academy hialeah",
    "miami lakes school",
    "early learning florida",
    "elementary school hialeah",
    "private school miami lakes",
    "childcare hialeah",
    "high school hialeah",
  ],
  authors: [{ name: "Children's Paradise Learning Academies" }],
  creator: "Children's Paradise Learning Academies",
  publisher: "Children's Paradise Learning Academies",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Children's Paradise Learning Academies",
    title: "Children's Paradise Learning Academies | Hialeah & Miami Lakes, FL",
    description:
      "Children's Paradise offers early learning through high school programmes across 9 locations in Hialeah and Miami Lakes, Florida. 25+ years serving local families.",
    images: [
      {
        url: "/images/hero-photo-new.png",
        width: 680,
        height: 620,
        alt: "Children's Paradise Learning Academies — students learning together in Hialeah, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Children's Paradise Learning Academies | Hialeah & Miami Lakes, FL",
    description:
      "Children's Paradise offers early learning through high school programmes across 9 locations in Hialeah and Miami Lakes, Florida.",
    images: ["/images/hero-photo-new.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: "Children's Paradise Learning Academies",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/logo.png`,
    width: 60,
    height: 60,
  },
  description:
    "Children's Paradise offers early learning through high school programmes across 9 locations in Hialeah and Miami Lakes, Florida. 25+ years serving local families.",
  foundingDate: "1999",
  areaServed: ["Hialeah, FL", "Miami Lakes, FL"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Educational Programs",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Early Learning", description: "Early development and foundational learning, ages 4–5" },
      { "@type": "OfferCatalog", name: "Elementary School", description: "Academic foundations for grades K–5" },
      { "@type": "OfferCatalog", name: "Junior High School", description: "Independence and confidence for grades 6–8" },
      { "@type": "OfferCatalog", name: "High School", description: "College and career preparation for grades 9–12" },
    ],
  },
  location: [
    {
      "@type": "LocalBusiness",
      name: "CP Learning Academy #1",
      telephone: "+13058271772",
      email: "learningparadise1@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "7755 West 4 Avenue #107", addressLocality: "Hialeah", addressRegion: "FL", postalCode: "33014", addressCountry: "US" },
    },
    {
      "@type": "LocalBusiness",
      name: "CP Learning Academy #2",
      telephone: "+13058277811",
      email: "learningparadise2@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "21 East 59 Street", addressLocality: "Hialeah", addressRegion: "FL", postalCode: "33013", addressCountry: "US" },
    },
    {
      "@type": "LocalBusiness",
      name: "CP Learning Academy #3",
      telephone: "+13058234040",
      email: "learningparadise3@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "2400 West 80 Street Bay 1", addressLocality: "Hialeah", addressRegion: "FL", postalCode: "33016", addressCountry: "US" },
    },
    {
      "@type": "LocalBusiness",
      name: "CP Learning Academy #4",
      telephone: "+13059928696",
      email: "learningparadise4@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "470-B West 49 Street", addressLocality: "Hialeah", addressRegion: "FL", postalCode: "33012", addressCountry: "US" },
    },
    {
      "@type": "LocalBusiness",
      name: "CP Learning Academy #5",
      telephone: "+13058213023",
      email: "learningparadise5@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "15520 Northwest 77 Court", addressLocality: "Miami Lakes", addressRegion: "FL", postalCode: "33016", addressCountry: "US" },
    },
    {
      "@type": "LocalBusiness",
      name: "CP Learning Academy #6",
      telephone: "+13058261379",
      email: "learningparadisecenter6@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "1927 W 68th St", addressLocality: "Hialeah", addressRegion: "FL", postalCode: "33014", addressCountry: "US" },
    },
    {
      "@type": "LocalBusiness",
      name: "Aladdin's Paradise Academy",
      telephone: "+13055568223",
      email: "aladdinparadise@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "7605 West 10th Avenue", addressLocality: "Hialeah", addressRegion: "FL", postalCode: "33014", addressCountry: "US" },
    },
    {
      "@type": "LocalBusiness",
      name: "CP Learning Academy #8",
      telephone: "+13058183044",
      email: "learningparadise8@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "3168 W 76th Street", addressLocality: "Hialeah", addressRegion: "FL", postalCode: "33018", addressCountry: "US" },
    },
    {
      "@type": "LocalBusiness",
      name: "CP Learning Academy #9",
      telephone: "+13058290005",
      email: "lovingstartcenter@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "8567 NW 186th St", addressLocality: "Miami Lakes", addressRegion: "FL", postalCode: "33015", addressCountry: "US" },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${spaceGrotesk.variable} ${fraunces.variable} antialiased`}
    >
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-[#1f3d30] focus:text-white focus:rounded focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
        <Footer />
        <AdmissionModal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
