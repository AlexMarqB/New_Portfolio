"use client";
import { ServiceCards } from "@/components/serviceCards";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import { useParams } from "next/navigation";
import Image from "next/image";

import git from "../../../public/github.svg";
import linke from "../../../public/linkedin.svg";
import { ProjectCards } from "@/components/projectCards";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextInput, Textarea } from "@/components/inputs";

export default function Home() {
	const params = useParams<{ lang: Locale }>();
	const dict = getDictionaryUseClient(params.lang);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [error, setError] = useState(false);

	useEffect(() => {
		if (name === "" || email === "" || message === "") {
			setError(true);
		} else {
			setError(false);
		}
	}, [name, email, message]);

	const handleSubmit = () => {
		if (!error) {
			const formData = {
				from_name: name,
				email: email,
				message: message,
			};

			emailjs
				.send(
					"service_dqrmprs",
					"template_7y2t63d",
					formData,
					"i2EzdfotfhOsV8WZh"
				)
				.then(
					() => {
						console.log("SUCCESS!");
						setName("");
						setEmail("");
						setMessage("");
					},
					(error) => {
						console.log("FAILED...", error.text);
					}
				);
		}
	};

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
							icons={["typescript", "nodejs", "nextjs"]}
						/>
					</div>
				</div>
			</section>
			<section className="flex flex-col w-full items-center" id="contact">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					className="w-2/3 h-auto flex flex-col items-center gap-y-6"
				>
					<h1 className="text-orange-500 font-bold text-xl mb-6 self-start">
						{params.lang === "en-US" ? "Contact" : "Entre em contato"}
					</h1>
					<TextInput
						input_type="text"
						value={name}
						OnChange={(value) => setName(value)}
						name={params.lang === "en-US" ? "name" : "nome"}
					/>
					<TextInput
						input_type="email"
						value={email}
						OnChange={(value) => setEmail(value)}
						name="email"
					/>
					<Textarea
						value={message}
						name={params.lang === "en-US" ? "message" : "mensagem"}
						OnChange={(value) => setMessage(value)}
					/>
					{error && (
						<span className="text-red-100 absolute">
							{params.lang === "en-US"
								? "Fill in all fields"
								: "Preencha todos os campos"}
						</span>
					)}
					<button
						className="`w-full flex items-center justify-center cursor-pointer disabled:opacity-50 
              ${error ? '' : 'group-hover:opacity-100'}`"
						type="submit"
						disabled={error}
						style={{ pointerEvents: error ? "none" : "auto" }}
					>
						<div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-orange-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-300 dark:text-white dark:hover:text-gray-100 dark:shadow-none group">
							<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-500 group-hover:h-full"></span>
							<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									stroke="currentColor"
									fill="none"
									className="w-5 h-5 text-green-400"
								>
									<path
										d="M14 5l7 7m0 0l-7 7m7-7H3"
										strokeWidth="2"
										strokeLinejoin="round"
										strokeLinecap="round"
									></path>
								</svg>
							</span>
							<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									stroke="currentColor"
									fill="none"
									className="w-5 h-5 text-green-400"
								>
									<path
										d="M14 5l7 7m0 0l-7 7m7-7H3"
										strokeWidth="2"
										strokeLinejoin="round"
										strokeLinecap="round"
									></path>
								</svg>
							</span>
							<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-300">
								{params.lang === "en-US" ? "Send" : "Enviar"}
							</span>
						</div>
					</button>
				</form>
			</section>
		</div>
	);
}
