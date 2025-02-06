import styled from "styled-components";
export const StylesWrapper = styled.div`
padding-top: 60px;
.input{ 
  background-color: ${({ theme }) => theme.colors.light};
  width: 738px;
  height: 128px;
  border-radius: 16px;
}
`;
