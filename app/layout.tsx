import { Metadata } from "next";
import { ReduxProvider } from "@/lib/store/ReduxProvider";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Dashboard",
  description: "A dashboard for tracking Bitcoin metrics and analytics.",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Bitcoin Dashboard",
    description: "A dashboard for tracking Bitcoin metrics and analytics.",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Dashboard",
    description: "A dashboard for tracking Bitcoin metrics and analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
