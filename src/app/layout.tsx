import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rflex Dashboard",
  description: "Rflex Admin Dashboard - Analytics and Management",
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
