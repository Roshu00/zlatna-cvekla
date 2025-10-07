import type { Metadata } from "next";
import { Carattere, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar-01/navbar-01";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${carattere.variable} ${inter.variable} antialiased `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
