import { title } from "process";

export const enUS = {
	header: {
		title: "Web_Developer",
		button: "Language",
		op1: "About Me",
		op2: "Stacks",
		op3: "Projects",
		op4: "Contact Me",
	},
	about: {
		role: "Fullstack Developer",
		present: "I am a",
		title: "About me",
		text1: "Welcome to my portfolio! First and foremost, I'm confident in stating that I'm a web developer striving to become as comprehensive as possible.",
		text2: "I'm following the TypeScript stack, with NextJS (the framework used for this portfolio), NodeJS for APIs, PostgreSQL or Oracle for databases and React Native for native mobile development. Even though I have this knowledge, I'm always seeking more and more, honing my clean code skills, architecture, technologies, frameworks, methodologies, and interpersonal skills, aiming to become a smart developer in both soft and hard skills, capable of working in teams and, eventually, leading them."
	},
	services: {
		title: "Stacks",
		next: {
			title: "Next.js",
			desc: "I create responsive and intuitive websites using Next.js and Tailwind CSS for an exceptional user experience."
		},
		node: {
			title: "Node.js",
			desc: "I build robust and secure APIs in Node.js to ensure efficient communication between different parts of a system."
		},
		native: {
			title: "React Native",
			desc: "I develop native applications with React Native, combining exceptional performance with an intuitive interface."
		}	
	  },
	  projects: {
		title: "Projects",
		pizza: {
			title: "Pizzeria system",
			desc: "Simulating a pizzeria system to learn more about APIs and their connections to the frontend."
		},
		solid_api: {
			title: "SOLID NodeJS API",
			desc: "API developed with SOLID principles, TDD, Clean Architecture, Dependency Injection, and ORM."
		},
		daily_diet: {
			title: "Daily Diet app",
			desc: "An app to help you control your daily diet."
		},
		find_friend: {
			title: "Find a Friend",
			desc: "A social network for finding pets to adopt with different filters beeing the main one the city."
		}
	  },
	  footer: {
		text: 'All rights reserved',
	  },
	  contact: {
		title: "Contact me",
		stoast: "Email sent successfully",
		ftoast: "Error sending email",
		labels: {
			op1: "Name",
			op2: "Message",
			error: "Fill in all fields",
			button: "Send"
				}
	},
	toast: {
		copied: "Copied to clipboard",
	}
};
