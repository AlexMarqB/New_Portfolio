"use client";
import { SocialButton } from "@/components/buttons";
import { ServiceCards } from "@/components/serviceCards";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";
import { useParams } from "next/navigation";

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
							Console.log(
							<span className="text-orange-500">"Hello World"</span>)
						</h1>
						<h2>{dict.about.role}</h2>
						<SocialButton social="github" />
					</div>
					<div></div>
				</div>
			</section>
			<section
				id="about"
				className="flex items-center w-full bg-purple-400 justify-around"
			>
				<h1>{dict.about.title}</h1>
				<p>{dict.about.text1}</p>
				<br />
				<p>{dict.about.text2}</p>
			</section>
			<section className="flex justify-around" id="services">
				<ServiceCards title={dict.cards.next.title} desc={dict.cards.next.desc} />
				<ServiceCards title={dict.cards.node.title} desc={dict.cards.node.desc} />
				<ServiceCards title={dict.cards.native.title} desc={dict.cards.native.desc} />
			</section>
			<section id="projects"></section>
			<section id="contact"></section>
		</div>
	);
}
