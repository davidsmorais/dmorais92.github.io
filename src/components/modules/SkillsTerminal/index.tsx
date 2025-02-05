"use client";

import FlexDiv from "Components/FlexDiv";

import { Badge, badgeVariants } from "Components/ui/badge";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	ClickablesContainer,
	MonoLabel,
	MonoTitle,
	SectionsBar,
	StacksContainer,
	TerminalBtn,
	TerminalContainer,
	Titlebar,
} from "./styles";
import { Clickable, Skill } from "./types";

const SkillsTerminal = ({
	skills,
}: {
	skills: Skill[];
}) => {
	const t = (key: string) => `👅 ${key}`;
	const [activeSkill, changeActiveSkill] = useState<Skill>(skills?.[0]);
	const [activeClickable, setClickable] = useState<Clickable[] | null>(null);
	const SectionBtns = () => {
		return (
			<SectionsBar>
				{skills.map((skill) => {
					const { title } = skill;
					const isActive = title === activeSkill?.title;
					return (
						<button
							type="button"
							key={`btn-${title}`}
							className={isActive ? "active" : "hidden"}
							onClick={() => {
								setClickable(null);
								changeActiveSkill(skill.mainSkills && skill);
							}}
						>
							<MonoTitle>
								{isActive ? "🚀" : ">"} {t(skill.title)}
							</MonoTitle>
						</button>
					);
				})}
			</SectionsBar>
		);
	};

	const renderClickableContent = (content: Clickable[]) => {
		return content.map((item) => {
			switch (item.type) {
				case "image":
					return (
						<Image
							alt={"Project logo"}
							width={120}
							height={120}
							src={`./projects/${item.src}`}
						/>
					);
				case "title":
					return <MonoTitle>{t(item.content)}</MonoTitle>;
				case "label":
					return item.link ? (
						<Link
							href={item.link}
							className={badgeVariants({ variant: "outline" })}
						>
							{t(item.content)} {item.icon}
						</Link>
					) : (
						<Badge>{t(item.content)}</Badge>
					);
				case "emoji":
					return <MonoLabel>{t(item.content)}</MonoLabel>;
			}
		});
	};

	const Clickables = () => {
		return (
			<ClickablesContainer justify="space-between" flow="column">
				{activeClickable && renderClickableContent(activeClickable)}
			</ClickablesContainer>
		);
	};

	const SkillStacks = () => {
		const { mainSkills, clickables } = activeSkill;
		return (
			<StacksContainer>
				{mainSkills.map((skill) => {
					const { clickableKeys } = skill;
					return (
						<FlexDiv flow="column" key={`skill-${skill.title}`}>
							{Array.isArray(skill.title) ? (
								skill.title.map((title) => (
									<MonoTitle key={`title-${title}`} className={"title"}>
										👉{t(title)}
									</MonoTitle>
								))
							) : (
								<MonoTitle className={"title"}>{t(skill.title)} 👇</MonoTitle>
							)}
							{(skill?.stack ?? []).map((item) => {
								const clickableData = (clickableKeys || []).find(
									(clk) => clk.label === item,
								);
								return clickables &&
									clickableData &&
									clickables[clickableData.key] ? (
									<button
										key={`clickable-${clickableData.key}`}
										type="button"
										onClick={() => setClickable(clickables[clickableData.key])}
									>
										<MonoLabel>▶ {t(item)}</MonoLabel>
									</button>
								) : (
									<MonoLabel key={`mono-label-${item}`}>▶ {t(item)}</MonoLabel>
								);
							})}
						</FlexDiv>
					);
				})}
				{activeClickable && <Clickables />}
			</StacksContainer>
		);
	};
	return (
		<TerminalContainer flow="column">
			<Titlebar>
				<div />
				<MonoTitle>~david 🌍</MonoTitle>
				<FlexDiv>
					<TerminalBtn />
					<TerminalBtn color="yellow" />
					<TerminalBtn color="red" />
				</FlexDiv>
			</Titlebar>
			<SectionBtns />
			<SkillStacks />
		</TerminalContainer>
	);
};

export default SkillsTerminal;
