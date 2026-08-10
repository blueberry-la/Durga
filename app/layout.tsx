import type { Metadata } from "next";
import { Inter, Bodoni_Moda, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Durga S. — Full-Stack Developer | CTO & Co-Founder | DevOps Engineer",
  description:
    "Durga S. is a Full-Stack Developer and CTO & Co-Founder from Trivandrum, Kerala, building digital products and transitioning into DevOps and cloud engineering.",
  keywords: [
    "Durga S",
    "Durga S Trivandrum",
    "Full Stack Developer Kerala",
    "PHP Developer Kerala",
    "CTO Co-Founder Kerala",
    "DevOps Engineer Trivandrum",
    "DevOps Engineer Kerala",
    "Full Stack Developer Trivandrum",
  ],
  authors: [{ name: "Durga S." }],
  metadataBase: new URL("https://durgas.dev"),
  openGraph: {
    title: "Durga S. — Full-Stack Developer | CTO & Co-Founder | DevOps Engineer",
    description:
      "Durga S. is a Full-Stack Developer and CTO & Co-Founder from Trivandrum, Kerala, building digital products and transitioning into DevOps and cloud engineering.",
    url: "https://durgas.dev",
    siteName: "Durga S. Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durga S. — Full-Stack Developer | CTO & Co-Founder | DevOps Engineer",
    description:
      "Full-Stack Developer & CTO & Co-Founder from Trivandrum, Kerala, transitioning into DevOps & Cloud Engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bodoniModa.variable} ${jetbrainsMono.variable} antialiased bg-[#08080a] text-white relative min-h-screen selection:bg-red-600 selection:text-white overflow-x-clip`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
