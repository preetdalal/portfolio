import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preet Dalal — DevOps, Cloud & MLOps Infrastructure Engineer",
  description:
    "Preet Dalal - IT Student at DJSCE Mumbai with Honours in DevOps & Cloud Engineering. Specializing in Kubernetes orchestration, CI/CD automation, production telemetry with Prometheus/Grafana, and applied MLOps pipelines.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#080a0f] text-[#f1f5f9] min-h-screen relative selection:bg-brand-cobalt selection:text-white">
        {children}
      </body>
    </html>
  );
}
