import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "MangaCenter",
  description: "Um site que dá informações sobre sites de mangás atualmente disponíveis",
  authors: {name: "Walisson (Sileniz)", url: "https://github.com/Sileniz"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
