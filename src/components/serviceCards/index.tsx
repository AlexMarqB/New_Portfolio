interface CardProps {
	title: string;
	desc: string;
}

export function ServiceCards({ desc, title }: CardProps) {
	return (
		<div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
			<svg
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeWidth="2"
				stroke="#292929"
				fill="none"
				viewBox="0 0 24 24"
				className="text-5xl h-12 w-12 stroke-gray-300 group-hover:stroke-gray-100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
				<line y2="21" x2="16" y1="21" x1="8"></line>
				<line y2="21" x2="12" y1="17" x1="12"></line>
			</svg>

			<p className="font-bold text-2xl group-hover:text-gray-100 text-gray-300/80">
				{title}
			</p>
			<p className="text-gray-400 text-sm">{desc}</p>
		</div>
	);
}
