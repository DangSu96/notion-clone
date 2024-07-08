import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where better, faster work happens",
  // 라이트 모드 & 다크 모드 아이콘 설정
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/next-light.svg",
        href: "/next-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/next-dark.svg",
        href: "/next-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
