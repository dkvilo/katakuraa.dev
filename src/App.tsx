import React from "react";
import Draggable from "react-draggable";

function App() {
	const [theme, setTheme] = React.useState("light");
	const [position, setPosition] = React.useState({ x: 0, y: 0 });
	const [isLifted, setIsLifted] = React.useState(false);

	React.useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			setTheme("dark");
		}
	}, [theme, setTheme]);

	return (
		<div>
			<Draggable
				onStart={() => {
					setIsLifted(!isLifted);
				}}
				onStop={() => {
					setIsLifted(!isLifted);
				}}
				position={position}
				onDrag={(e: any, data: any) => {
					setPosition({ x: data.x, y: data.y });
				}}
			>
				<div
					className={`m-4 ${
						isLifted ? "shadow-lg" : "shadow-md"
					} w-64 h-auto bg-gray-100 z-10`}
				>
					<div className="bg-gray-400 text-white p-2 my-2 rounded-t-md cursor-move">
						<div className="flex w-16 justify-between cursor-default">
							<div
								className="bg-red-500 p-2 rounded-full"
								onClick={window.close}
							></div>
							<div className="bg-yellow-500 p-2 rounded-full"></div>
							<div className="bg-green-500 p-2 rounded-full"></div>
						</div>
					</div>
					<div className="p-2">
						<h1 className="jet-brains mb-4 uppercase">
							Hello, I Left The Planet and Moved To The Mars.
						</h1>
						<p className="jet-brains text-sm text-gray-700 mb-4 uppercase">
							You can still send me a Voicemail via MARS-TCM
						</p>
						<p className="jet-brains text-xs text-gray-700">
							Address: MRS-1341-AFA-331-KTKR
						</p>
						<p className="jet-brains text-sm text-gray-700 mt-4 uppercase">
							Regards, David
						</p>
						<p className="jet-brains text-sm text-gray-700 mt-4 uppercase">
							2k20 [FROM:MARS] (STOP)
						</p>
					</div>
				</div>
			</Draggable>
			<div className="fixed bottom-0 p-4 flex w-full justify-between z-0">
				<a className="text-gray-500" href="https://github.com/dkvilo">
					@Github
				</a>
				<a className="text-gray-500" href="https://instagram.com/katakuraa">
					@Instagram
				</a>
				<a className="text-gray-500" href="https://twitter.com/dkvilo">
					@Twitter
				</a>
			</div>
		</div>
	);
}

export default App;
