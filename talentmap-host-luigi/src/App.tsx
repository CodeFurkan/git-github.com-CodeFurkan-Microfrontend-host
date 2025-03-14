import "@luigi-project/core";
import "@luigi-project/core/luigi.css";
import "@luigi-project/client";
import { addInitListener } from "@luigi-project/client";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		addInitListener(() => {
			console.log("Luigi Client initialized.");
		});
	}, []);

	return (
		<div>
			<div id="luigi-container" />
			{/* <p>Luigi läuft...</p> */}
		</div>
	);
}

export default App;
