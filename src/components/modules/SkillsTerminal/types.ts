interface MainSkill {
	title: string | string[];
	clickableKeys?: { key: string; label: string }[];
	stack: string[];
}

type ImageClickable = {
	src: string;
	type: "image";
};
type TitleClickable = {
	content: string;
	type: "title";
};
type LabelClickable = {
	link?: string;
	content: string;
	type: "label";
	icon?: string;
};

type EmojiClickable = {
	content: string;
	type: "emoji";
};
export type Clickable =
	| ImageClickable
	| TitleClickable
	| LabelClickable
	| EmojiClickable;
export interface Skill {
	title: string;
	mainSkills: MainSkill[];
	clickables?: Record<string, Clickable[]>;
}
