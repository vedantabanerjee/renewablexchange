import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Renewablexchange",
  description: "A platform to discover, learn and trade renewable energy for the future!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background  font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main className="flex grainy-light flex-col min-h-screen">
          <div className="flex-1 flex flex-col h-full">{children}</div>{" "}
        </main>
        <Footer />
      </body>
    </html>
  );
}