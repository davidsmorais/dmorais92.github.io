"use client";

import FlexDiv from "Components/FlexDiv";

import { Button } from "@/components/ui/button";
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
import { ProjectEntity, Skill, WorkEntity } from "./types";

const SkillsTerminal = ({
	skills,
}: {
	skills: Skill[];
}) => {
	const t = (key: string) => `👅 ${key}`;
	const [activeSkill, changeActiveSkill] = useState<Skill | null | undefined>(
		skills?.[0],
	);
	const [activeClickable, setClickable] = useState<
		(ProjectEntity | WorkEntity)[] | null | undefined
	>(null);
	const SectionBtns = () => {
		return (
			<SectionsBar justify="flex-start" className="w-full">
				{skills.map((skill) => {
					const { title } = skill;
					const isActive = title === activeSkill?.title;
					return (
						<Button
							type="button"
							size="sm"
							key={`btn-${title}`}
							className={`${isActive ? "active" : ""} px-2 rounded-none`}
							onClick={() => {
								setClickable(null);
								changeActiveSkill(skill.mainSkills && skill);
							}}
						>
							<MonoTitle>
								{isActive ? "🚀" : ""} {t(skill.title)}
							</MonoTitle>
						</Button>
					);
				})}
			</SectionsBar>
		);
	};

	const renderClickableContent = (content: (ProjectEntity & WorkEntity)[]) => {
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
					if (item.content) return <MonoTitle>{t(item.content)}</MonoTitle>;
					return;
				case "label":
					if (item.content)
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
					return;
				case "emoji":
					if (item.content) return <MonoLabel>{t(item.content)}</MonoLabel>;
					return;
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
		if (!activeSkill) return null;
		const { mainSkills, clickables } = activeSkill;
		return (
			<StacksContainer className="w-full mx-2 ">
				{mainSkills?.map((skill) => {
					const { clickableKeys } = skill;
					if (!skill.title) return null;
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
									<Button
										className="my-1"
										key={`clickable-${clickableData.key}-${item}`}
										type="button"
										onClick={() => setClickable(clickables[clickableData.key])}
									>
										<MonoLabel>▶ {t(item)}</MonoLabel>
									</Button>
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
					<TerminalBtn color="green" />
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
