import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html
      lang="en"
      className={cn(
        "antialiased bg-background text-foreground",
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body className="antialiased tracking-tight">
        <Analytics />
        <SpeedInsights />
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
