import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import type { JSX } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSC-daisyUI - Kitchen Sink",
  description: "daisyUI for React Server Component - Kitchen Sink",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
