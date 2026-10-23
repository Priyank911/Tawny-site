import type { Metadata } from "next";
import { siteAsset } from "../site-paths";
import "./globals.css";
import "./custom.css";

export const metadata: Metadata = {
  title: "Tawny",
  description:
    "A private, keyboard-first voice layer for Windows, macOS, and Linux. Dictate, rewrite, and generate with one shortcut.",
  icons: {
    icon: siteAsset("/tawny-mark.svg"),
    shortcut: siteAsset("/tawny-mark.svg"),
    apple: siteAsset("/tawny-mark.svg"),
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
