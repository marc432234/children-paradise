import { Inter, Instrument_Serif, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionModal from "@/components/AdmissionModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "600",
});

export const metadata = {
  title: "Children's Paradise Learning Academies | Hialeah & Miami Lakes, FL",
  description:
    "Children's Paradise offers early learning through high school programmes across 9 locations in Hialeah and Miami Lakes, Florida. 25+ years serving local families.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${spaceGrotesk.variable} ${fraunces.variable} antialiased`}
    >
      <body suppressHydrationWarning>{children}<Footer /><AdmissionModal /></body>
    </html>
  );
}
