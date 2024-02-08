import { Locale } from "@/config/i18n.config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import pt from "../../../public/brazil.svg";
import en from "../../../public/usa.svg";
import Image from "next/image";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";

export function Header({ lang }: { lang: Locale }) {
	const dict = getDictionaryServerOnly(lang);

	return (
		<header className="flex w-full px-4 py-3 items-center justify-between text-base md:text-lg lg:text-xl">
			<div className="flex items-center">
				<ChevronLeft />
				Alex Marques.{dict.header.title}
				<ChevronRight />
			</div>
			<div className="flex gap-x-3">
                <Link className="hidden lg:block hover:scale-105 hover:text-gray-300 hover:font-semibold duration-150" href={"#about"}>{dict.header.op1}</Link>
                <Link className="hidden lg:block hover:scale-105 hover:text-gray-300 hover:font-semibold duration-150" href={"#services"}>{dict.header.op2}</Link>
                <Link className="hidden lg:block hover:scale-105 hover:text-gray-300 hover:font-semibold duration-150" href={"#projects"}>{dict.header.op3}</Link>
                <Link className="hidden lg:block hover:scale-105 hover:text-gray-300 hover:font-semibold duration-150" href={"#contact"}>{dict.header.op4}</Link>
				<Link href={lang === "pt-BR" ? "/en-US" : "/pt-BR"} className="hover:scale-125 duration-100">
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
