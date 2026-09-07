import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saniya-resort-concept.vercel.app"),
  title: { default: "Saniya Resort & Hotel | Independent Website Concept", template: "%s | Saniya Resort Concept" },
  description: "An independent digital experience concept for a welcoming tropical family resort.",
  openGraph: { title: "Saniya Resort & Hotel — Independent Website Concept", description: "A portfolio concept exploring a modern, family-friendly resort booking experience.", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f7f3e9", colorScheme: "light" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
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
