import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Greenville SC Guide | Your Complete Guide to Greenville & Spartanburg",
  description: "Discover the best tennis courts, golf courses, massage therapy, RV parks, and more in Greenville and Spartanburg, South Carolina. Your local guide to Upstate SC.",
  keywords: ["Greenville SC", "Spartanburg SC", "Upstate South Carolina", "local guide", "things to do"],
  verification: {
    google: "Th5bMNCHWTy_wiWfkrCnzbmfJvviL_sCOeZX6CU-JHc",
  },
  other: {
    'google-adsense-account': 'ca-pub-7562326547855611',
  },
  openGraph: {
    title: "The Greenville SC Guide",
    description: "Your complete guide to Greenville & Spartanburg, SC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
