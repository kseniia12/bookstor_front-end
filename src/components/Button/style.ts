import styled from "styled-components";
export const StylesWrapper = styled.button`
  padding: 10px 50px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  border-radius: 16px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};

`;
