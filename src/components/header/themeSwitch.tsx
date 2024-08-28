"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
	const [isMounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if(!isMounted) {
		return <div className=" justify-center items-center cursor-pointer" onClick={() => setTheme('light')}><Sun /></div>;
	}

	if (resolvedTheme === "dark") {
		return <div className=" justify-center items-center cursor-pointer transition ease-in-out hover:scale-110 text-gray-100 dark:hover:text-gray-100" onClick={() => setTheme('light')}><Sun /></div>;
	}

	if (resolvedTheme === "light") {
		return <div className=" justify-center items-center cursor-pointer transition ease-in-out hover:scale-110 dark:hover:text-gray-300" onClick={() => setTheme('dark')}><Moon /></div>;
	}
}
