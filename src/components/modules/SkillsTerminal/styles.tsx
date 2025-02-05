import FlexDiv from "Components/FlexDiv";
import Link from "next/link";

import { TypographyLead, TypographySmall } from "Components/Typo";
import styled from "styled-components";

export const TerminalContainer = styled(FlexDiv)`
  border: 1px solid var(--color-accent);
  background: var(--color-background);
  @media only screen and (max-width: 480px) {
    margin-left: 1rem;
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
  background: var(--color-background);
`;
export const ClickablesContainer = styled(FlexDiv)`
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  img {
    margin: 1rem auto;
  }
`;

export const StyledMonoLink = styled(Link)`
  font-size: 14px;
  display: flex;
  font-family: "caskaydiaCode";
  flex-flow: flexDiv nowrap;
  margin-bottom: 0.5rem;
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
  background: var(--color-${({ color }) => color}-600);
  border-radius: 50px;
  margin: 0.25rem 0.25rem
    0.25rem 0;
`;
export const SectionsBar = styled(FlexDiv)`
  & > button {
    background: var(--color-muted);
    border: 1px solid var(--color-accent);
    outline: none;
    display: flex;
    flex-flow: flexDiv nowrap;
    padding: 0.5rem;
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
      > *  {
        color: var(--color-muted);
      }
    }
  }
`;

export const StacksContainer = styled(FlexDiv)`
  && {
    margin-top: 0.125rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }
  justify-content: flex-start;
  > div {
    align-items: flex-start;
    flex: 1;
    span {
      text-align: left;
    }
    span.title {
      margin-bottom: 0.125rem;
    }
    span:not(.title),
    a {
      font-size: 18px;
      padding-left: 0.5rem;
      @media only screen and (max-width: 480px) {
        padding-left: 0.5rem;
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
