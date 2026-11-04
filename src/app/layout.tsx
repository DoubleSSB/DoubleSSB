import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Tech Brothers Lab",
  description: "두 남매가 함께 만드는 개발 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">

        <Header />

        {/* 페이지 콘텐츠 */}
        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html> 
  )
}