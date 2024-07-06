import type { Metadata } from "next";
import { Ma_Shan_Zheng, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cnFont = Ma_Shan_Zheng({ subsets: ["latin"], weight: "400" });
const enFont = Source_Sans_3({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Eric <3 Angela",
  description: "Come celebrate with us!",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { language: string };
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
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={
          params.language === "cn" ? cnFont.className : enFont.className
        }
      >
        {children}
      </body>
    </html>
  );
}
