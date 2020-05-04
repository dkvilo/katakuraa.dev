import React, { memo, useCallback } from "react";

const EasterEgg: React.FC = (): JSX.Element => {
	const loadResume = useCallback(() => {
		window.location.href = encodeURI("David Kviloria - Resume.pdf");
	}, []);

	return (
		<div
			className="fixed"
			style={{
				top: window.innerHeight / 2 - 50,
				left: window.innerWidth / 2 - 60,
			}}
		>
			<button
				onClick={loadResume}
				className="p-2 bg-warning text-primary rounded"
			>
				My Resume{" "}
				<span aria-label="Yey!" role="img">
					👏
				</span>
			</button>
		</div>
	);
};
export default memo(EasterEgg);
