import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Script from "next/script";
export const metadata = {
  title: "Nikhil | Professional Portfolio",

  description: "Showcase of my work and skills",
  icon: "/images/business-man.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/images/bussiness-man.png"
          type="image/png"
          sizes="32x32"
        />
        {/*  Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R3VNKY9THX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R3VNKY9THX');
          `}
        </Script>
      </head>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="min-h-[calc(100vh-128px)]">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
