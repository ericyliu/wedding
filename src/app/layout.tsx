import type { Metadata } from "next";
import { Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";

const font1 = Ma_Shan_Zheng({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Eric <3 Angela",
  description: "Come celebrate with us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font1.className}>{children}</body>
    </html>
  );
}
