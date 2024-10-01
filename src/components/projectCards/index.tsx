import { Link, ScreenShare, Smartphone } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";

interface CardProps {
	title: string;
	desc: string;
	image?: StaticImageData; // Adicionada prop para imagem
	frepo?: string;
	brepo?: string;
	link?: string;
	mlink?: string;
	icons: string[];
}

type ButtonProps = ComponentProps<"button">;

function LinkButton(props: ButtonProps) {
	return (
		<button
			className="select-none rounded-lg bg-orange-500 dark:bg-[#FFA500] py-3 px-6 text-center align-middle items-center font-sans text-sm lg:text-xs font-bold uppercase text-gray-300 shadow-lg
			  shadow-gray-500/30
			  transition-transform
			  transform
			  hover:shadow-xl
			  dark:hover:shadow-[#FFA500]/40"
			{...props}
		/>
	);
}

export function ProjectCards({
	title,
	desc,
	image, // Recebendo a imagem como prop
	frepo,
	brepo,
	link,
	mlink,
	icons,
}: CardProps) {
	return (
		<div className="relative flex flex-col mt-6 w-auto rounded-xl bg-white dark:bg-zinc-900 bg-clip-border text-gray-300 shadow-md dark:shadow-zinc-800">
			{/* Imagem do Card */}
			{image && (
				<div className="relative h-56 mx-4 -mt-6 overflow-hidden rounded-xl shadow-lg bg-blue-gray-500 shadow-blue-gray-500/40">
					<Image
						src={image} // Utilizando a prop de imagem
						alt="card-image"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			)}

			{/* Conteúdo do Card */}
			<div className="p-6">
				<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 dark:text-gray-100 antialiased">
					{title}
				</h5>
				<p className="block font-sans text-base font-light dark:text-gray-400 leading-relaxed text-inherit antialiased">
					{desc}
				</p>
			</div>

			{/* Ícones do Card */}
			{icons.length > 0 && (
				<div className="flex w-full p-4 pt-0 gap-2 text-orange-500 dark:text-[#FFA500] text-2xl">
					{icons.map((item, index) => (
						<div
							key={index}
							className="
			  select-none
			  rounded-lg
			  border
			  border-orange-500
			  dark:border-[#FFA500]
			  bg-white
			  dark:bg-gray-300
			  w-fit
			  h-fit
			  p-2
			  text-center
			  text-orange-500
			  dark:text-[#FFA500]
			  font-sans
			  text-sm
			  font-medium
			  uppercase
			  shadow-lg
			  shadow-gray-500/30
			"
						>
							{item}
						</div>
					))}
				</div>
			)}

			{/* Botões de Ação */}
			<div className="flex w-full justify-around py-4">
				{frepo && (
					<LinkButton
						type="button"
						title="Frontend repository"
						onClick={() => window.open(frepo)}
					>
						<ScreenShare />
					</LinkButton>
				)}
				{brepo && (
					<LinkButton
						type="button"
						title="Backend repository"
						onClick={() => window.open(brepo)}
					>
						API
					</LinkButton>
				)}
				{mlink && (
					<LinkButton
						type="button"
						title="Mobile repository"
						onClick={() => window.open(mlink)}
					>
						<Smartphone />
					</LinkButton>
				)}
				{link && (
					<LinkButton
						type="button"
						title="Direct link"
						onClick={() => window.open(link)}
					>
						<Link />
					</LinkButton>
				)}
			</div>
		</div>
	);
}
