import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Locale, i18n } from "@/config/i18n.config";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alex Marques Beraldo",
	description: "Portfolio",
};

export async function generateStaticParams() {
  const language = i18n.locales.map(lang => ({lang}));
  return language
}

export default function RootLayout({
	children,
  params
}: Readonly<{
	children: React.ReactNode,
  params: {lang: Locale}
}>) {
	return (
		<html lang={params.lang}>
			<body className={`${inter.className} bg-gray-100 text-gray-200`}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
		</html>
	);
}
