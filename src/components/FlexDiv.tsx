"use client";
import styled from "styled-components";

const FlexDiv = styled.div<
	Partial<{
		size: number;
		justify: string;
		margin: number;
		align: string;
		hidden: boolean;
		background: string;
		flow: string;
		mx: string;
		my: string;
		mt: string;
		mb: string;
		ml: string;
		mr: string;
		width: string;
		height: string;
	}>
>`
  display: flex;
  flex-flow: ${(props) => props.flow || "row wrap"};
  flex: ${(props) => props.size};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  margin-top: ${(props) => props.mt || props.my || props.margin};
  margin-bottom: ${(props) => props.mb || props.my || props.margin};
  margin-left: ${(props) => props.ml || props.mx || props.margin};
  margin-right: ${(props) => props.mr || props.mx || props.margin};
  width: ${(props) => (props.hidden && "0") || props.width};
  height: ${(props) => (props.hidden && "0") || props.height};
  transition: all 0.25s;
  background: ${(props) => props.background};
`;

export default FlexDiv;
