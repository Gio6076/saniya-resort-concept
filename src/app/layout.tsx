import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteDescription, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Saniya Resort & Hotel | Independent Website Concept", template: "%s | Saniya Resort Concept" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: { title: "Saniya Resort & Hotel | Independent Website Concept", description: siteDescription, type: "website", url: siteUrl },
  twitter: { card: "summary", title: "Saniya Resort & Hotel | Independent Website Concept", description: siteDescription },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f7f3e9", colorScheme: "light" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full scroll-smooth antialiased"
    >
      <body className="flex min-h-full flex-col">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
