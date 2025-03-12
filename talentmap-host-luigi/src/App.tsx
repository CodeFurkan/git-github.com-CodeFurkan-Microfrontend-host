import "@luigi-project/core";
import "@luigi-project/core/luigi.css";
import "@luigi-project/client"; // ✅ Luigi Client importieren
import { useEffect } from "react";

function App() {
	Luigi.setConfig({
		navigation: {
			validWebcomponentUrls: [".*?"],
			nodes: [
				{
					pathSegment: "test",
					label: "test",
					children: [
						{
							pathSegment: "Talents",
							label: "Talents",
							icon: "home",
							viewUrl: "http://localhost:3001/talent-view.js",
							webcomponent: true,
						},
					],
				},
			],
		},
		routing: {
			useHashRouting: false,
		},
		settings: {
			hideNavigation: false,
		},
	});

	return <div id="luigi-container" />;
}

export default App;
