import styled from "styled-components";

interface TitleProps {
  width: 630;
}

export const StylesWrapper = styled.input<TitleProps>`
  background-color: ${({ theme }) => theme.colors.light};
  min-height: 64px;
  border-radius: 16px;
  width: ${({ width = 630 }) => width}px;
`;