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

export interface Skill {
	title: string;
	mainSkills?: MainSkillsEntity[] | null;
	clickables?: Clickables | null;
}

export interface MainSkillsEntity {
	title?: string[] | null | string;
	stack?: string[] | null;
	clickableKeys?: ClickableKeysEntity[] | null;
}
export interface ClickableKeysEntity {
	label: string;
	key: string;
}
export type Clickables = Record<string, WorkEntity[] | ProjectEntity[] | null>;
export interface WorkEntity {
	type: string;
	content?: string | null;
	link?: string | null;
	icon?: string | null;
}
export interface ProjectEntity {
	type: string;
	content?: string | null;
	link?: string | null;
	src?: string | null;
}
