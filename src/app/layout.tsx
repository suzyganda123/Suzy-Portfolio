import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const description =
  "Suzette Sun is a digital marketing professional specializing in campaigns, email marketing, CRM and automation, content, and marketing operations. View real campaign work and case studies.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Suzette Sun | Digital Marketing, Campaigns & Marketing Operations",
    template: "%s | Suzette Sun",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Suzette Sun",
    title: "Suzette Sun | Digital Marketing, Campaigns & Marketing Operations",
    description,
    images: [{ url: "/assets/og.jpg", width: 1200, height: 630, alt: "Suzette Sun, digital marketing portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suzette Sun | Digital Marketing, Campaigns & Marketing Operations",
    description,
    images: ["/assets/og.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: "Digital Marketing Professional",
  description,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dasmariñas",
    addressRegion: "Cavite",
    addressCountry: "PH",
  },
  knowsAbout: [
    "Digital Marketing",
    "Email Marketing",
    "Campaign Strategy",
    "Marketing Operations",
    "CRM & Automation",
    "Content Marketing",
    "SEO",
    "Social Media Marketing",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Polytechnic University of the Philippines",
  },
  url: site.url,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
