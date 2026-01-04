import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { STIX_Two_Text } from "next/font/google";

const fontSans = STIX_Two_Text({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mahmudul-hasan.com"),
  title: {
    default: "Mahmudul Hasan",
    template: "%s | Mahmudul Hasan",
  },
  description: "",
  openGraph: {
    title: "Mahmudul Hasan",
    description: "",
    url: "https://www.mahmudul-hasan.com",
    siteName: "Mahmudul Hasan",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Mahmudul Hasan",
    card: "summary_large_image",
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-background text-foreground",
          fontSans.className
        )}
      >
        <Analytics />
        <SpeedInsights />

        <main className="w-full mt-0 md:mt-16 max-w-xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
