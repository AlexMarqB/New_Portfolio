import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Locale, i18n } from "@/config/i18n.config";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToastContainer } from "react-toastify";
import { Tprovider } from "@/contexts/tprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alex Marques Beraldo",
	description: "Portfolio",
};

export async function generateStaticParams() {
	const language = i18n.locales.map((lang) => ({ lang }));
	return language;
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: Locale };
}>) {
	return (
		<html lang={params.lang} className="scroll-smooth" suppressHydrationWarning>
			<body className={`${inter.className} bg-gray-100 dark:bg-[#292929] text-gray-200 dark:gray-[#707070]`}>
				<Tprovider>
					<Header lang={params.lang} />
					<main>{children}</main>
					<Footer lang={params.lang}/>
					<ToastContainer autoClose={3000} />
				</Tprovider>
			</body>
		</html>
	);
}
