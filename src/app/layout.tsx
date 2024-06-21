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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={font1.className}>{children}</body>
    </html>
  );
}
