import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import "./custom.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tawny",
  description:
    "A private, keyboard-first voice layer for Windows, macOS, and Linux. Dictate, rewrite, and generate with one shortcut.",
  icons: {
    icon: "/tawny-mark.svg",
    shortcut: "/tawny-mark.svg",
    apple: "/tawny-mark.svg",
  },
  openGraph: {
    title: "Tawny",
    description: "A private, keyboard-first voice layer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}
