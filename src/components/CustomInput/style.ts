import styled from "styled-components";

interface TitleProps {
  width: 558;
}

export const StylesWrapper = styled.input<TitleProps>`
  background-color: ${({ theme }) => theme.colors.light};
  min-height: 64px;
  border-radius: 16px;
  width: ${({ width }) => width}px;
`;