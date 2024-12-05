import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-body bg-cover bg-no-repeat`}>{children}</body>
    </html>
  );
}
