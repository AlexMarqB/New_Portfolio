"use client";

import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";

export function Footer({ lang }: { lang: Locale }) {
    const dict = getDictionaryUseClient(lang);

	return (
		<footer className="flex items-center justify-center w-full px-4 py-3 text-base md:text-lg lg:text-xl border-t border-gray-300 dark:border-zinc-900 text-gray-800 dark:text-gray-100">
			<h1>Copyright @ 2022 - {dict.footer.text}</h1>
			<span className="mx-4">|</span>
			<h1>
				CNPJ:{" "}
				<span
					className="text-orange-500 dark:text-[#FFA500] hover:cursor-pointer underline"
					onClick={() =>
						navigator.clipboard.writeText("55.076.513/0001-42")
					}
				>
					55.076.513/0001-42
				</span>
			</h1>
		</footer>
	);
}
