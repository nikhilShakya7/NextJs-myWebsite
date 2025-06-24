import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
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
