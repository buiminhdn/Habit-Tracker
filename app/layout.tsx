import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shape Your Days",
  description: "Build habits. Stay consistent. Improve daily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50">{children}</body>
    </html>
  );
}
