import type { Metadata } from "next";
import { Inter,Hanken_Grotesk,Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSI SB MBCET",
  description: "Computer Society of India Student Branch at Mar Baselios College of Engineering & Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={grotesk.className}>
        <Navigation/>
        {children}
      <Footer/>
       
      </body>
    </html>
  );
}
