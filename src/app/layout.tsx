
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ReceiveSMS - Free Temporary Phone Numbers for SMS Verification",
    template: "%s | ReceiveSMS",
  },
  description: "Receive SMS online for free with ReceiveSMS. Get temporary, disposable, and virtual phone numbers from the USA, UK, Canada, and more to verify services like WhatsApp, Google, Facebook, and Telegram without using your real number.",
  keywords: [
    "temporary phone number",
    "free sms verification",
    "receive sms online",
    "disposable phone number",
    "fake phone number",
    "virtual phone number",
    "temp number",
    "sms receiver",
    "USA temp number",
    "UK temp number",
  ],
  metadataBase: new URL('https://receivesms.biz'),
  openGraph: {
    title: "ReceiveSMS - Free Temporary Phone Numbers",
    description: "Instantly get a free temporary number to receive SMS online and protect your privacy.",
    url: 'https://receivesms.biz',
    siteName: 'ReceiveSMS',
    images: [
      {
        url: 'https://receivesms.biz/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
