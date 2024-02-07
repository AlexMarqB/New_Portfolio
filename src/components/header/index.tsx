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
		<header className="flex w-full px-4 py-3 items-center justify-between bg-blue-600 text-base md:text-lg lg:text-xl">
			<div className="flex items-center">
				<ChevronLeft />
				Alex Marques.{dict.header.title}
				<ChevronRight />
			</div>
			<div className="flex gap-x-3">
                <Link className="hidden lg:block" href={"#about"}>{dict.header.op1}</Link>
                <Link className="hidden lg:block" href={"#services"}>{dict.header.op2}</Link>
                <Link className="hidden lg:block" href={"#projects"}>{dict.header.op3}</Link>
                <Link className="hidden lg:block" href={"#contact"}>{dict.header.op4}</Link>
				<Link href={lang === "pt-BR" ? "/en-US" : "/pt-BR"}>
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
