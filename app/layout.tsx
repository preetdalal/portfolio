import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preet Dalal // System Control Center & Live Ops Dashboard",
  description:
    "System Control Center & Engineering Portfolio of Preet Dalal. DevOps, Cloud Engineering, Java & Spring Boot backend microservices, Kubernetes, Docker, and Applied AI/ML pipelines.",
  metadataBase: new URL("https://preetdalal.dev"),
  openGraph: {
    title: "Preet Dalal // System Control Center & Live Ops Dashboard",
    description:
      "DevOps, Cloud, Java & Spring Boot Microservices, Kubernetes, Docker, and Applied AI/ML engineering portfolio.",
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink font-sans antialiased selection:bg-spring/25 selection:text-spring-light min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

