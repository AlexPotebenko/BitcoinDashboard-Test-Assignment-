import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Bitcoin Dashboard</title>
        <meta
          name="description"
          content="A dashboard for tracking Bitcoin metrics and analytics."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Bitcoin Dashboard" />
        <meta
          property="og:description"
          content="A dashboard for tracking Bitcoin metrics and analytics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
