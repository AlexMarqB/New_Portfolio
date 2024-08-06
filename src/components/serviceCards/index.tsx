interface CardProps {
	title: string;
	desc: string;
}

export function ServiceCards({ desc, title }: CardProps) {
	return (
		<div className="service-card w-[300px] shadow-lg dark:shadow-zinc-800 snap-start rounded-xl shrink-0 py-8 px-6 bg-white dark:bg-zinc-900 flex flex-col items-start gap-3 transition-all duration-300">
			<p className="font-bold text-2xl text-gray-300/80 dark:text-gray-100">
				{title}
			</p>
			<p className="text-gray-400 text-sm">{desc}</p>
		</div>
	);
}
