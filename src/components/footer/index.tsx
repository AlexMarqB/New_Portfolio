export function Footer() {
	return (
		<footer className="flex flex-col items-center w-full px-4 py-3 text-base md:text-lg lg:text-xl">
			<h1 className="texxt-gray-300">
				Email:{" "}
				<span
					className="text-orange-500"
					onClick={() =>
						navigator.clipboard.writeText("beraldoalex07@gmail.com")
					}
				>
					beraldoalex07@gmail.com
				</span>
			</h1>
			<h1 className="texxt-gray-300">
				Cellphone:{" "}
				<span
					className="text-orange-500"
					onClick={() =>
						navigator.clipboard.writeText("beraldoalex07@gmail.com")
					}
				>
					+55 16 9 9761-5881
				</span>
			</h1>
		</footer>
	);
}
