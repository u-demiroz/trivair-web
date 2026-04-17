import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrivAir — Aviation Trivia Game",
  description: "Test your aviation knowledge. Airport codes, aircraft types, airline logos and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
