import { Poppins, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Savanth Sanju | Portfolio - B.Tech IT Student & Developer",
  description: "Portfolio of Savanth Sanju, a B.Tech Information Technology student at CUSAT. Focused on React, Next.js, Tailwind CSS, AI integrations, and full-stack web development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${oswald.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#F8FAFC] text-[#111827] font-sans antialiased overflow-x-hidden selection:bg-[#00BD7D]/30 selection:text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}

