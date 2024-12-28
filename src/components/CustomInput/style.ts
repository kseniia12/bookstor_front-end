import styled from "styled-components";

interface TitleProps {
  width: 558;
}

export const StylesWrapper = styled.div<TitleProps>`
display: flex;
align-items: center;
gap: 16px;
.input{
  background-color: ${({ theme }) => theme.colors.light};
  min-height: 64px;
  border-radius: 16px;
  width: ${({ width }) => width}px;
}
.search__icon{
  width: 24px;
  height: 24px;
}

`;