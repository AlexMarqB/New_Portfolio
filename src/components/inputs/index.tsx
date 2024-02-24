type TextInputProps = {
	name: string;
	value: string;
	input_type: "email" | "text";
	OnChange: (value: string) => void;
};

export function TextInput({
	name,
	value,
	input_type,
	OnChange,
}: TextInputProps) {
	return (
		<div className="flex w-full items-center justify-center">
			<div className="relative w-full lg:w-1/3">
				<input
					id={name}
					name={name}
					value={value}
					onChange={(e) => OnChange(e.target.value)}
					type={input_type}
					className="w-full border-b border-gray-300 dark:border-gray-400 py-1 focus:border-b-2 focus:border-orange-700 transition-colors focus:outline-none peer bg-inherit"
				/>
				<label
					htmlFor={name}
					className={`absolute left-0 cursor-text  ${
						value != ""
							? "text-xs -top-4 text-orange-500 dark:text-[#FFA500]"
							: "top-1 peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-orange-500 dark:peer-focus:text-[#FFA500]"
					} `}
				>
					{name}
				</label>
			</div>
		</div>
	);
}

type TextareaProps = {
	name: string;
	value: string;
	OnChange: (value: string) => void;
};

export function Textarea({ name, value, OnChange }: TextareaProps) {
	return (
		<div className="flex w-full h-auto items-center mt-3 justify-center">
			<div className="relative w-full lg:w-1/3">
				<textarea
					id={name}
					name={name}
					value={value}
					onChange={(e) => OnChange(e.target.value)}
					className="border w-full h-40 border-gray-300 dark:border-gray-400 p-2 focus:border-2 focus:border-orange-700 transition-colors focus:outline-none resize-none peer bg-inherit"
				/>
				<label
					htmlFor={name}
					className={`absolute  cursor-text  ${
						value != ""
							? "text-xs left-1 -top-5 text-orange-500 dark:text-[#FFA500]"
							: "left-2 top-1 peer-focus:text-xs peer-focus:-top-5 peer-focus:left-1 transition-all peer-focus:text-orange-500 dark:peer-focus:text-[#FFA500]"
					} `}
				>
					{name}
				</label>
			</div>
		</div>
	);
}
