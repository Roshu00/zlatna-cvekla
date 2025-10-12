import type { Metadata } from "next";
import { Carattere, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar-01/navbar-01";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/contexts/language-context";

const carattere = Carattere({
  variable: "--font-carattere",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zlatna Cvekla",
  description: "Authentic Serbian cuisine - where tradition meets taste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${carattere.variable} ${inter.variable} antialiased `}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
