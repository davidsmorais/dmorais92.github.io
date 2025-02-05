interface MainSkill {
	title: string | string[];
	clickableKeys?: { key: string; label: string }[];
	stack: string[];
}

export interface Skill {
	title: string;
	mainSkills: MainSkill[];
	clickables?: Record<
		string,
		{
			type: string;
			content?: string;
			link: string;
			icon: string;
			src?: string;
		}[]
	>;
}
