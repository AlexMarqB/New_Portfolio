import { Link, ScreenShare, Smartphone } from "lucide-react";
import Image from "next/image";
import { ComponentProps } from "react";

interface CardProps {
	title: string;
	desc: string;
	image?: string;
	frepo?: string;
	brepo?: string;
	link?: string;
	mlink?: string;
	icons: string[];
}

type buttonProps = ComponentProps<"button">;

function LinkButton(props: buttonProps) {
	return (
		<button
			className="select-none rounded-lg bg-orange-500 dark:bg-[#FFA500] py-3 px-6 text-center align-middle items-center font-sans text-sm lg:text-xs font-bold uppercase text-gray-300 shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 hover:scale-110 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			{...props}
		/>
	);
}

export function ProjectCards({
	title,
	desc,
	image,
	frepo,
	brepo,
	link,
	mlink,
	icons,
}: CardProps) {
	return (
		<div className="relative flex w-96 flex-col rounded-xl bg-white dark:bg-zinc-900 bg-clip-border text-gray-300 shadow-md dark:shadow-zinc-700">
			<div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-400 to-orange-500">
				{image && (
					<Image src={image} alt={title} width={500} height={300} />
				)}
			</div>
			<div className="p-5">
				<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 dark:text-gray-100 antialiased">
					{title}
				</h5>
				<p className="block font-sans text-base font-light dark:text-gray-400 leading-relaxed text-inherit antialiased">
					{desc}
				</p>
			</div>
			{icons.length > 0 && (
				<div className="flex w-full p-4 pt-0 gap-2 text-orange-500 dark:text-[#FFA500] text-2xl">
					{icons.map((item, index) => (
						<div
							key={index}
							className="select-none rounded-lg border border-orange-500 dark:border-[#FFA500] w-fit h-fit p-1 text-center text-orange-500 dark:text-[#FFA500] align-middle items-center font-sans text-sm font-medium uppercase shadow-md shadow-blue-500/20 "
						>
							{item}
						</div>
					))}
				</div>
			)}
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
