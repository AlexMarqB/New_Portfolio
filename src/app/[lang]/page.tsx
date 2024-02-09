"use client";
import { ServiceCards } from "@/components/serviceCards";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import { useParams } from "next/navigation";
import Image from "next/image";

import git from "../../../public/github.svg";
import linke from "../../../public/linkedin.svg";
import { ProjectCards } from "@/components/projectCards";

export default function Home() {
	const params = useParams<{ lang: Locale }>();
	const dict = getDictionaryUseClient(params.lang);

	return (
		<div className="flex flex-col w-full min-h-screen text-black">
			<section className="flex justify-around">
				<div className=" w-full lg:w-2/3 flex items-center gap-6">
					<img
						src={"/Alex.jpeg"}
						alt="Profile Picture"
						className="flex rounded-full w-3/12 xl:w-2/12"
					/>
					<div className="flex flex-col text-lg md:text-xl lg:text-2xl">
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
							<button
								className="w-fit h-8 lg:h-10"
								onClick={() =>
									window.open("https://github.com/AlexMarqB")
								}
							>
								<Image
									src={git}
									alt="Github icon"
									style={{ width: "100%", height: "100%" }}
								/>
							</button>
							<button
								className="w-fit h-8 lg:h-10"
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/alex-marques-87050726a/"
									)
								}
							>
								<Image
									src={linke}
									alt="Linkedin icon"
									style={{ width: "100%", height: "100%" }}
								/>
							</button>
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
						{dict.services.title}
					</h1>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 xl:gap-28 w-fit justify-center items-center self-center">
						<ServiceCards
							title={dict.services.next.title}
							desc={dict.services.next.desc}
						/>
						<ServiceCards
							title={dict.services.node.title}
							desc={dict.services.node.desc}
						/>
						<ServiceCards
							title={dict.services.native.title}
							desc={dict.services.native.desc}
						/>
						<ServiceCards
							title={dict.services.tutoring.title}
							desc={dict.services.tutoring.desc}
						/>
					</div>
				</div>
			</section>
			<section className="flex justify-around" id="projects">
				<div className="flex flex-col gap-y-4 w-2/3">
					<h1 className="text-orange-500 font-bold text-xl mb-6">
						{dict.projects.title}
					</h1>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 xl:gap-28 w-fit justify-center items-center self-center">
						<ProjectCards
							title={dict.projects.pizza.title}
							desc={dict.projects.pizza.desc}
							image={"/pizzaria.jpg"}
							brepo="https://github.com/AlexMarqB/projeto_pizzaria_backend"
							frepo="https://github.com/AlexMarqB/projeto_pizzaria_frontend_web"
							link="https://projeto-pizzaria-frontend-web.vercel.app"
							icons={[
								"typescript",
								"nodejs",
								"nextjs"
							]}
						/>
					</div>
				</div>
			</section>
			<section id="contact"></section>
		</div>
	);
}
