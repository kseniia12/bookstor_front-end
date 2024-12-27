import styled from "styled-components";
export const StylesWrapper = styled.button`
  height: 44px;
  width: 231px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
`;