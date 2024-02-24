"use client"

export function Footer() {
    return (
        <footer className="flex flex-col items-start w-full px-4 py-3 text-base md:text-lg lg:text-xl border-t border-gray-300 dark:border-zinc-900">
            <h1 className="text-gray-300 dark:text-gray-100">
                Email:{" "}
                <span
                    className="text-orange-500 dark:text-[#FFA500] hover:cursor-pointer underline"
                    onClick={() =>
                        navigator.clipboard.writeText("beraldoalex07@gmail.com")
                    }
                >
                    beraldoalex07@gmail.com
                </span>
            </h1>
            <h1 className="text-gray-300 dark:text-gray-100">
                Cellphone:{" "}
                <span
                    className="text-orange-500 dark:text-[#FFA500] hover:cursor-pointer underline"
                    onClick={() =>
                        navigator.clipboard.writeText("+55 16 9 9761-5881")
                    }
                >
                    +55 16 9 9761-5881
                </span>
            </h1>
        </footer>
    );
}
