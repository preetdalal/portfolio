import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preet Dalal - DevOps / Cloud Engineering",
  description:
    "B.Tech IT student at DJSCE Mumbai building toward DevOps and Cloud Engineering, with a backend foundation and applied AI/ML work. Kubernetes, Docker, Spring Boot, FastAPI, PyTorch.",
  metadataBase: new URL("https://preetdalal.dev"),
  openGraph: {
    title: "Preet Dalal - DevOps / Cloud Engineering",
    description:
      "B.Tech IT student building toward DevOps and Cloud Engineering, with a backend foundation and applied AI/ML work.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink font-sans antialiased selection:bg-signal/30 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
