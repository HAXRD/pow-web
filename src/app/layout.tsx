import type { Metadata } from "next";
import "@/styles/mordern-normalize.css"
import "@/styles/utils.css";
import "@/styles/style.css";

export const metadata: Metadata = {
  title: "Illustration of PoW",
  description: "An illustration of Proof of Work (PoW) consensus algorithm",
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
