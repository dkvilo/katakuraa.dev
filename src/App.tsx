import React, { useState } from "react";

import DraggableCard from "./components/DraggableCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EasterEgg from "./components/EasterEgg";

import { IDraggableCardProps } from "./interfaces";

function App() {
	const [userData] = useState<IDraggableCardProps>(() =>
		require("./dummy/user.json")
	);

	return (
		<>
			<Header />
			<EasterEgg />
			<DraggableCard {...userData} />
			<Footer />
		</>
	);
}

export default App;
