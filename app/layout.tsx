import "./globals.css";
import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `${profile.fullName} — Portfolio`,
  description: `${profile.fullName} • ${profile.role}`,
  metadataBase: new URL("https://portfolio-beta-teal-88.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
