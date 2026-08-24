import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { site } from "@/data/site";
import { jsonLdBlocks, seoDescription } from "@/lib/json-ld";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Suzette Sun | Digital Marketing, Campaigns & Marketing Operations",
    template: "%s | Suzette Sun",
  },
  description: seoDescription,
  applicationName: site.name,
  keywords: [
    "Suzette Sun",
    "digital marketing",
    "email marketing",
    "campaigns",
    "marketing operations",
    "CRM automation",
    "Mailchimp",
    "HubSpot",
    "virtual assistant",
    "Philippines remote marketer",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  category: "marketing",
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-PH": site.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: site.url,
    siteName: site.name,
    title: "Suzette Sun | Digital Marketing, Campaigns & Marketing Operations",
    description: seoDescription,
    images: [
      {
        url: "/assets/og.jpg",
        width: 1200,
        height: 630,
        alt: "Suzette Sun, digital marketing portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suzette Sun | Digital Marketing, Campaigns & Marketing Operations",
    description: seoDescription,
    images: ["/assets/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PH" className={`${geist.variable} ${playfair.variable}`}>
      <body className="grain">
        {jsonLdBlocks.map((block) => (
          <script
            key={block["@id"] as string}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))}
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
