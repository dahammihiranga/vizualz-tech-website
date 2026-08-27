import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vizualztech.com"),

  title: {
    default: "VizualZ Tech",
    template: "%s | VizualZ Tech",
  },

  description:
    "VizualZ Tech builds modern websites, software and digital experiences designed to help businesses stand out and grow.",

  openGraph: {
    title: "VizualZ Tech",
    description: "Ideas Made Visual. Technology Made Powerful.",
    url: "https://vizualztech.com",
    siteName: "VizualZ Tech",
    images: [
      {
        url: "/branding/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VizualZ Tech",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VizualZ Tech",
    description: "Ideas Made Visual. Technology Made Powerful.",
    images: ["/branding/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
