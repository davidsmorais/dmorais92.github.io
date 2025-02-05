import { ClickableType } from "@/components/modules/SkillsTerminal/types";

export default [
	{
		title: "Front-End",
		mainSkills: [
			{
				title: "JavaScript",
				stack: [
					"React",
					"Redux",
					"React Native",
					"Electron",
					"D3.js",
					"jQuery",
					"Typescript",
				],
			},
			{
				title: "CSS",
				stack: ["Bootstrap", "LESS", "Sass", "Styled Components"],
			},
			{
				title: "GameDev",
				stack: ["PhaserJS", "Aseprite", "Typescript"],
			},
			{
				title: "Other",
				stack: [
					"Webpack",
					"CRA",
					"Material UI",
					"Grommet UI",
					"Wordpress",
					"Netlify",
					"Gatsby",
					"JAM Stack",
				],
			},
		],
	},
	{
		title: "Back-End",
		mainSkills: [
			{
				title: "Languages",
				stack: ["Python", "Ruby", "Node JS", "PHP"],
			},
			{
				title: "Databases",
				stack: ["PostgreSQL", "MongoDB"],
			},
			{
				title: "Frameworks",
				stack: ["Node ~ Express", "Python ~ Flask", "Ruby ~ Rails"],
			},
			{
				title: "Other",
				stack: [
					"CircleCI",
					"CRA",
					"Material UI",
					"Grommet UI",
					"Wordpress",
					"Netlify",
					"Gatsby",
					"JAM Stack",
				],
			},
		],
	},
	{
		title: "Design",
		mainSkills: [
			{
				title: [
					"I can deliver prototypes for web and mobile apps.",
					"I can deliver all kinds of graphics for your project including media kits and branding",
				],
			},
			{
				title: "Software",
				stack: [
					"Figma",
					"Affinity Designer / Adobe Illustrator",
					"Affinity Photo / Adobe Photoshop",
					"Krita",
					"GIMP",
				],
			},
			{
				title: "Other",
				stack: ["Prototyping", "Wireframing", "Social Media Kit", "Branding"],
			},
		],
	},
	{
		title: "Projects & Work",
		clickables: {
			work: [
				{
					type: ClickableType.Title,
					content: "Pennylane",
				},
				{
					type: ClickableType.Label,
					content: "dec 2021 ~ present",
				},
				{
					type: ClickableType.Title,
					content: "Gaspard+Bruno",
				},
				{
					type: ClickableType.Label,
					content: "jan 2020 - dec 2021",
				},
				{
					type: ClickableType.Title,
					content: "Intrasurance Group",
				},
				{
					type: ClickableType.Label,
					content: "sep 2018 - jan 2020",
				},
				{
					type: ClickableType.Title,
					content: "Frames",
				},
				{
					type: ClickableType.Label,
					content: "apr 2017 - sep 2018",
				},
				{
					type: ClickableType.Spacer,
				},
				{
					type: ClickableType.Label,
					link: "https://www.linkedin.com/in/dmorais92/",
					content: "for more info =>",
					icon: "linked-in.svg",
				},
			],
			mdyna: [
				{
					type: ClickableType.Title,
					content: "MDyna (Legacy)",
				},
				{
					type: ClickableType.Label,
					link: "https://mdyna.netlify.app",
					content: "mdyna.netlify.app",
				},
				{
					type: ClickableType.Label,
					content:
						"MDyna is a markdown notes, cross-platform app, with GitHub Sync",
				},
				{
					type: ClickableType.Image,
					src: "mdyna.png",
				},
				{
					type: ClickableType.Emoji,
					content: "🔨",
				},
				{
					type: ClickableType.Label,
					content:
						"Electron, React, Circle CI, Grommet UI Webpack, Redux, Github Actions, Netlify",
				},
			],
			"farn-l": [
				{
					type: ClickableType.Title,
					content: "Le Farn L",
				},
				{
					type: ClickableType.Label,
					link: "https://farn-l.netlify.com",
					content: "farn-l.netlify.com",
				},
				{
					type: ClickableType.Label,
					content:
						"This is a food menus service with an API and a backoffice, serving restaurant websites with daily menus.",
				},
				{
					type: ClickableType.Image,
					src: "farnl.svg",
				},
				{
					type: ClickableType.Emoji,
					content: "🔨",
				},
				{
					type: ClickableType.Label,
					content:
						"React, Styled Components, Netlify, Ruby on Rails, Heroku, PostgreSQL",
				},
			],
			"epoch-rift": [
				{
					type: ClickableType.Title,
					content: "Epoch Rift",
				},
				{
					type: ClickableType.Label,
					link: "https://epochrift.com",
					content: "epochrift.com",
				},
				{
					type: ClickableType.Label,
					content:
						"Pixel art roguelike game with a fantasy theme. Play as a wizard or a witch in this fun platformer game.",
				},
				{
					type: ClickableType.Image,
					src: "epochrift.png",
				},
				{
					type: ClickableType.Emoji,
					content: "🔨",
				},
				{
					type: ClickableType.Label,
					content: "Typescript, PhaserJS, Webpack, Electron, Pixel Art",
				},
			],
			kuro: [
				{
					type: ClickableType.Title,
					content: "Kuro",
				},
				{
					type: ClickableType.Label,
					link: "https://github.com/davidsmorais/kuro/",
					content: "🌳 GitHub",
				},
				{
					type: ClickableType.Label,
					content:
						"Elegant Microsoft To-Do desktop client for Linux with dark themes and other features.",
				},
				{
					type: ClickableType.Image,
					src: "kuro.png",
				},
				{
					type: ClickableType.Emoji,
					content: "🔨",
				},
				{
					type: ClickableType.Label,
					content: "Electron, Javascript, CSS, Node",
				},
			],
		},
		mainSkills: [
			{
				title: "Projects",
				stack: ["Epoch Rift", "MDyna 💀", "Le Farn L 💀", "Kuro"],
				clickableKeys: [
					{
						label: "Epoch Rift",
						key: "epoch-rift",
					},
					{
						label: "Kuro",
						key: "kuro",
					},
					{
						label: "MDyna 💀",
						key: "mdyna",
					},
					{
						label: "Le Farn L 💀",
						key: "farn-l",
					},
				],
			},
			{
				title: "Work",
				stack: ["Pennylane", "Gaspard + Bruno", "Intrasurance", "Frames"],
				clickableKeys: [
					{
						label: "Pennylane",
						key: "work",
					},
					{
						label: "Gaspard + Bruno",
						key: "work",
					},
					{
						label: "Intrasurance",
						key: "work",
					},
					{
						label: "Frames",
						key: "work",
					},
				],
			},
		],
	},
];
