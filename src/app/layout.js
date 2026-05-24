import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Savanth Sanju | Portfolio - B.Tech IT Student & Developer",
  description: "Portfolio of Savanth Sanju, a B.Tech Information Technology student at CUSAT. Focused on React, Next.js, Tailwind CSS, AI integrations, and full-stack web development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#030014] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
