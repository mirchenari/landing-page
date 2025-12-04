import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body dir="rtl">{children}</body>
    </html>
  );
}
