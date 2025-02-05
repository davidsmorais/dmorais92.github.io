interface MainSkill {
	title: string | string[];
	clickableKeys?: { key: string; label: string }[];
	stack?: string[];
}

export enum ClickableType {
	Image = "image",
	Title = "title",
	Label = "label",
	Emoji = "emoji",
	Spacer = "spacer",
}

type ImageClickable = {
	src: string;
	type: ClickableType.Image;
};
type TitleClickable = {
	content: string;
	type: ClickableType.Title;
};
type LabelClickable = {
	type: ClickableType.Label;
	icon?: string;
	link?: string;
	content: string;
};

type EmojiClickable = {
	content: string;
	type: ClickableType.Emoji;
};
type Spacer = {
	type: ClickableType.Spacer;
};
export type Clickable =
	| ImageClickable
	| TitleClickable
	| LabelClickable
	| EmojiClickable
	| Spacer;
export interface Skill {
	title: string;
	mainSkills: MainSkill[];
	clickables?: Record<string, Clickable[]>;
}
