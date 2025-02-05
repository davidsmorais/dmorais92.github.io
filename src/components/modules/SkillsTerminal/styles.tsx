import FlexDiv from "Components/FlexDiv";
import Link from "next/link";

import { TypographyLead, TypographySmall } from "Components/Typo";
import styled from "styled-components";

export const TerminalContainer = styled(FlexDiv)`
  border: 1px solid var(--color-accent);
  background: var(--color-background);
  @media only screen and (max-width: 480px) {
    margin-left: ${({ theme }) => theme.margin * 4}px;
  }
  padding: 0;
  span {
    color: var(--color-secondary);
  }
  > div {
    margin: 0;
    padding: 0;
  }
`;

export const Titlebar = styled(FlexDiv)`
  margin: 0;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-accent);
  background: var(--color-muted);
`;
export const ClickablesContainer = styled(FlexDiv)`
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  img {
    margin: ${({ theme }) => theme.margin * 4}px auto;
  }
`;

export const StyledMonoLink = styled(Link)`
  font-size: 14px;
  display: flex;
  font-family: "caskaydiaCode";
  flex-flow: flexDiv nowrap;
  margin-bottom: ${({ theme }) => theme.margin}px;
  align-items: flex-end;
  svg {
    margin-left: 16px;
  }
  && {
    :hover {
      div svg path {
        fill: var(--color-accent);
      }
    }
  }
`;

export const MonoTitle = styled(TypographyLead)`
  font-size: 18px;
  font-family: "caskaydiaCode";
  color: var(--color-accent);
`;
export const MonoLabel = styled(TypographySmall)`
  font-size: 14px;
  font-family: "caskaydiaCode";
  color: var(--color-accent);
  white-space: pre;
`;
export const TerminalBtn = styled.span`
  width: 16px;
  height: 16px;
  background: var(--color-${({ props }) => props.color}-600);
  border-radius: 50px;
  margin: ${({ theme }) => theme.margin}px ${({ theme }) => theme.margin}px
    ${({ theme }) => theme.margin}px 0;
`;
export const SectionsBar = styled(FlexDiv)`
  & > button {
    background: var(--color-muted);
    border: 1px solid var(--color-accent);
    outline: none;
    display: flex;
    flex-flow: flexDiv nowrap;
    padding: ${({ theme }) => theme.margin / 2}px;
    cursor: pointer;
    transition: all 0.5s;
    > span {
      transition: all 0.5s;
    }
    &:hover {
      background: var(--color-secondary);
      > span {
        color: var(--color-muted);
      }
    }
    &.active {
      background: var(--color-accent);
      border: none;
      > span {
        color: var(--color-muted);
      }
    }
  }
`;

export const StacksContainer = styled(FlexDiv)`
  && {
    margin-top: ${({ theme }) => theme.margin / 2}px;
    margin-left: ${({ theme }) => theme.margin * 2}px;
    margin-bottom: ${({ theme }) => theme.margin * 4}px;
  }
  justify-content: flex-start;
  > div {
    align-items: flex-start;
    flex: 1;
    span {
      text-align: left;
    }
    span.title {
      margin-bottom: ${({ theme }) => theme.margin / 2}px;
    }
    span:not(.title),
    a {
      font-size: 18px;
      padding-left: ${({ theme }) => theme.margin * 2}px;
      @media only screen and (max-width: 480px) {
        padding-left: ${({ theme }) => theme.margin}px;
      }
    }
    button {
      border: none;
      background: var(--color-muted);
      cursor: pointer;
      span {
        color: var(--color-accent);
        &:hover {
          color: var(--color-secondary);
        }
      }
    }
  }
`;
