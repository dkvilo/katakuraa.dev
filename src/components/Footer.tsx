import React, { memo } from "react";

const Footer: React.FC = (): JSX.Element => {
	return (
		<div className="absolute text-primary bottom-0 p-4 flex w-full justify-between bg-warning">
			<a href="https://github.com/dkvilo">@Github</a>
			<a href="https://instagram.com/katakuraa">@Instagram</a>
			<a href="https://twitter.com/dkvilo">@Twitter</a>
		</div>
	);
};

export default memo(Footer);
