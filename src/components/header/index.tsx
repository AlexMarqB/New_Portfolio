"use client";
import { Locale } from "@/config/i18n.config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import pt from "../../../public/brazil.svg";
import en from "../../../public/usa.svg";
import Image from "next/image";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import { ThemeSwitch } from "./themeSwitch";

export function Header({ lang }: { lang: Locale }) {
	const dict = getDictionaryUseClient(lang);

	const scrollToAnchor = (event: any, anchor: any) => {
		event.preventDefault();
		const targetElement = document.querySelector(anchor);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	};

	return (
		<header className="flex w-full px-4 py-3 items-center justify-between text-base md:text-lg lg:text-xl shadow-md">
			<div className="flex items-center text-gray-300 dark:text-gray-100">
				<ChevronLeft />
				Alex Marques<span className="hidden min-[500px]:block">.{dict.header.title}</span>
				<ChevronRight />
			</div>
			<div className="flex gap-x-3">
				<button
					className="hidden min-[1000px]:block hover:scale-105 hover:text-gray-300 dark:text-gray-100 hover:font-semibold duration-150"
					onClick={(e) => scrollToAnchor(e, "#about")}
				>
					{dict.header.op1}
				</button>
				<button
					className="hidden min-[1000px]:block hover:scale-105 hover:text-gray-300 dark:text-gray-100 hover:font-semibold duration-150"
					onClick={(e) => scrollToAnchor(e, "#services")}
				>
					{dict.header.op2}
				</button>
				<button
					className="hidden min-[1000px]:block hover:scale-105 hover:text-gray-300 dark:text-gray-100 hover:font-semibold duration-150"
					onClick={(e) => scrollToAnchor(e, "#projects")}
				>
					{dict.header.op3}
				</button>
				<button
					className="hidden min-[1000px]:block hover:scale-105 hover:text-gray-300 dark:text-gray-100 hover:font-semibold duration-150"
					onClick={(e) => scrollToAnchor(e, "#contact")}
				>
					{dict.header.op4}
				</button>
				<ThemeSwitch />
				<Link
					href={lang === "pt-BR" ? "/en-US" : "/pt-BR"}
					className="hover:scale-125 duration-100 items-center"
				>
					{lang === "en-US" ? (
						<Image
							src={en}
							alt="USA"
							style={{ width: "24px", height: "24px" }}
						/>
					) : (
						<Image
							src={pt}
							alt="Brazil"
							style={{ width: "24px", height: "24px" }}
						/>
					)}
				</Link>
			</div>
		</header>
	);
}
