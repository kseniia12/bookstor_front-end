import styled from "styled-components";

export const StylesWrapper = styled.div`
padding: 73px 80px;
display: flex;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.dark};
color: ${({ theme }) => theme.colors.light};
.contact{
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  gap: 5px;
}
.item{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.map{
  padding-top: 5px;
  width: 413px;
  height: 160px;
}
`;