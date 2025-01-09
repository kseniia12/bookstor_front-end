import styled from "styled-components";

export const StylesWrapper = styled.div<{ width: number }>`
display: flex;
align-items: center;
gap: 16px;
background-color: ${({ theme }) => theme.colors.light};
border-radius: 16px;
padding-left: 24px;
.input{
  min-height: 64px;
  width: ${props => props.width}px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
}
.icon{
  width: 24px;
  height: 24px;
}
`;