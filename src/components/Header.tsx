import React, { memo } from "react";
import { useThemeSwitch } from "../hooks";

const Header: React.FC = (): JSX.Element => {
	const [theme, switchTheme] = useThemeSwitch(
		window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	return (
		<div className="flex justify-center fixed w-full">
			<div
				className="cursor-pointer text-center outline-none"
				onClick={switchTheme}
			>
				<span
					className="p-2"
					style={{
						fontSize: 30,
					}}
				>
					{theme ? "🌞" : "🌙"}
				</span>
			</div>
		</div>
	);
};

export default memo(Header);
