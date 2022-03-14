import { css } from "styled-components";
import { Colors } from "./Colors";
import { Fonts } from "./Fonts";

export const Flex = css`
  display: flex;
  align-items: center;
`;
export const CardListStyle = css`
  padding: 1rem;
  box-shadow: 0rem 0.1rem 1rem #e6e6e6;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;
export const Grid = css`
  display: grid;
  place-items: center;
`;
export const ButtonP = css`
  gap: 3rem;
  text-transform: capitalize;
  border-radius: .7rem;
  border: none;
  background-color: ${Colors.primaryColor};
  color: #fff;
  cursor: pointer;
  padding: 0.5em 1.5em;
  font-family: ${Fonts.primaryFont};
  &:active {
    background-color: rgba(10, 135, 145, 0.8);
  }
`;
