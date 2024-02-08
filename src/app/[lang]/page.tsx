"use client";
import { ServiceCards } from "@/components/serviceCards";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import { useParams } from "next/navigation";
import Image from "next/image";

import git from '../../../public/github.svg'
import linke from '../../../public/linkedin.svg'

export default function Home() {
	const params = useParams<{ lang: Locale }>();
	const dict = getDictionaryUseClient(params.lang);

	return (
		<div className="flex flex-col w-full min-h-screen text-black">
			<section className="flex justify-around">
				<div className="w-2/3 flex items-center gap-6">
					<img
						src={"/Alex.jpeg"}
						alt="Profile Picture"
						className="flex rounded-full w-3/12 xl:w-2/12"
					/>
					<div className="flex flex-col md:text-xl lg:text-2xl">
						<h1>
							console.log(
							<span className="text-orange-500">
								"Hello World,{" "}
								{params.lang === "en-US" ? "I am a" : "eu sou um"}"
							</span>
							)
						</h1>
						<h2>{dict.about.role}</h2>
						<div className="flex gap-6 mt-2">
							<button className="w-fit h-10" onClick={() => window.open("https://github.com/AlexMarqB")}><Image src={git} alt="Github icon" style={{ width: "100%", height: "100%" }}/></button>
							<button className="w-fit h-10" onClick={() => window.open("https://www.linkedin.com/in/alex-marques-87050726a/")}><Image src={linke} alt="Linkedin icon" style={{ width: "100%", height: "100%" }}/></button>
						</div>
					</div>
				</div>
			</section>
			<section id="about" className="flex w-fit items-center justify-around">
				<div className="flex flex-col w-2/3 items-start">
					<h1 className="text-orange-500 font-bold text-xl">
						{dict.about.title}
					</h1>
					<p>{dict.about.text1}</p>
					<br />
					<p>{dict.about.text2}</p>
				</div>
			</section>
			<section className="flex justify-around" id="services">
				<div className="flex flex-col gap-y-4 w-2/3">
					<h1 className="text-orange-500 font-bold text-xl">
						{dict.cards.title}
					</h1>
					<div className="flex flex-col items-center xl:flex-row gap-y-6 justify-around">
						<ServiceCards
							title={dict.cards.next.title}
							desc={dict.cards.next.desc}
							index={"01"}
						/>
						<ServiceCards
							title={dict.cards.node.title}
							desc={dict.cards.node.desc}
							index={"02"}
						/>
						<ServiceCards
							title={dict.cards.native.title}
							desc={dict.cards.native.desc}
							index={"03"}
						/>
					</div>
				</div>
			</section>
			<section id="projects"></section>
			<section id="contact"></section>
		</div>
	);
}
