"use client";

import { useRouter } from "next/navigation";

export function SocialButton({ social }: { social: "github" | "linkedin" }) {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push(social === 'github' ? "https://github.com/AlexMarqB" : "https://www.linkedin.com/in/alex-marques-87050726a/")}
			className={`flex gap-3 w-fit items-center cursor-pointer text-white font-semibold ${
                social === "github"
                    ? "bg-gradient-to-r from-gray-800 to-black border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                    : "bg-gradient-to-r from-blue-600 to-blue-800 border border-blue-600 hover:scale-105 duration-200 hover:text-white hover:border-blue-800 hover:from-blue-800 hover:to-blue-900"
            } px-7 py-3 rounded-full`}
		>
			{social === "github" ? (
				<svg
					viewBox="0 0 24 24"
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#FFFFFF"
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					></path>
				</svg>
                
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					height="24"
					width="24"
					fill="#0077B5"
				>
					<path d="M21.17 0H2.83C1.28 0 0 1.28 0 2.83v18.34C0 22.72 1.28 24 2.83 24H21.2c1.56 0 2.8-1.28 2.8-2.83V2.83C24 1.28 22.72 0 21.17 0zM7.58 20.67H4.25V9.34h3.33v11.33h-.01zM5.91 7.91a2.09 2.09 0 11.01-4.18 2.09 2.09 0 01-.01 4.18zm14.76 12.76h-3.34v-5.6c0-1.33-.48-2.24-1.68-2.24-1.5 0-2.4 1.02-2.8 2-.15.35-.19.85-.19 1.35v4.5H10V9.34h3.23v1.13h.05c.45-.85 1.56-1.74 3.2-1.74 3.42 0 4.05 2.26 4.05 5.2v5.67z" />
				</svg>
			)}
			{social === "github" ? "Github" : "Linkedin"}
		</button>
	);
}
