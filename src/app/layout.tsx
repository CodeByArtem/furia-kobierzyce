import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "@/styles/globals.scss";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furia Kobierzyce | Oficjalna Strona Drużyny",
  description: "Pasja, wspólny rozwój, dobra energia. Amatorska drużyna siatkówki z Kobierzyc. Dołącz do nas i rozwijaj się razem z nami!",
  keywords: ["Furia Kobierzyce", "siatkówka", "amatorska drużyna", "Kobierzyce", "sport", "volleyball", "treningi", "turnieje"],
  authors: [{ name: "Furia Kobierzyce" }],
  creator: "Furia Kobierzyce",
  openGraph: {
    title: "Furia Kobierzyce | Oficjalna Strona Drużyny",
    description: "Pasja, wspólny rozwój, dobra energia. Amatorska drużyna siatkówki z Kobierzyc.",
    type: "website",
    locale: "pl_PL",
    siteName: "Furia Kobierzyce",
    url: "https://furia-kobierzyce.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furia Kobierzyce | Oficjalna Strona Drużyny",
    description: "Pasja, wspólny rozwój, dobra energia. Amatorska drużyna siatkówki z Kobierzyc.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
