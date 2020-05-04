import React, { useState, useMemo, useCallback, memo } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";

import { IDraggableCardProps } from "../interfaces";

const DraggableCard: React.FC<IDraggableCardProps> = ({
	avatar,
	headline,
	note,
	address,
	signature,
	date,
}): JSX.Element => {
	const [position, setPosition] = useState({
		x: window.innerWidth / 2 - 140,
		y: window.innerHeight / 2 - 200,
	});

	const [isLifted, setIsLifted] = useState(false);

	const memorizedPosition = useMemo(() => position, [position]);
	const memorizedIsLifted = useMemo(() => isLifted, [isLifted]);
	const onDrag = useCallback(
		(e: DraggableEvent, data: DraggableData) =>
			setPosition({ x: data.x, y: data.y }),
		[]
	);

	const handleLift = useCallback(
		() => setIsLifted((oldIsLifted) => !oldIsLifted),
		[]
	);

	return (
		<Draggable
			onStart={handleLift}
			onStop={handleLift}
			position={memorizedPosition}
			onDrag={onDrag}
		>
			<div
				className={`m-4 ${
					memorizedIsLifted ? "shadow-lg" : "shadow-md"
				} w-64 h-auto bg-secondary z-10`}
			>
				<div className="bg-secondary-soft p-2 my-2 rounded-t-md cursor-move">
					<div className="flex w-16 justify-between cursor-default">
						<div
							className="bg-red-500 p-2 rounded-full"
							onClick={window.close}
						></div>
						<div className="bg-yellow-500 p-2 rounded-full"></div>
						<div className="bg-green-500 p-2 rounded-full"></div>
					</div>
				</div>
				<div className="p-2 flex justify-center">
					<img
						className="w-24 h-24 rounded-full border-4 border-secondary-soft bg-warning"
						src={avatar}
						alt="dkvilo"
					/>
				</div>
				<div className="p-2 text-primary text-center">
					<h1 className="jet-brains mb-4 uppercase">{headline}</h1>
					<p className="jet-brains text-sm mb-4 uppercase">{note}</p>
					<p className="jet-brains text-xs">Address: {address}</p>
					<p className="jet-brains text-sm mt-4 uppercase">{signature}</p>
					<p className="jet-brains text-sm mt-4 uppercase">{date}</p>
				</div>
			</div>
		</Draggable>
	);
};

export default memo(DraggableCard);
