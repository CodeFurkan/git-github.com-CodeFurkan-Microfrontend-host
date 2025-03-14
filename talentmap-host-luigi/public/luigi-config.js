Luigi.setConfig({
	navigation: {
		validWebcomponentUrls: [".*?"],
		nodes: [
			{
				pathSegment: "home",
				label: "Home",
				icon: "home",
				children: [
					{
						pathSegment: "Talents",
						label: "Talents",
						icon: "home",
						viewUrl: "http://localhost:3001/talent-view.js",
						webcomponent: {
							selfRegistered: true,
							tagName: "talent-view",
						},
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
