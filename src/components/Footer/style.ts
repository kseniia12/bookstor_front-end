import styled from "styled-components";

export const StylesWrapper = styled.div`
max-width: 1280px;
margin: 0 auto;
display: flex;
justify-content: space-between;
padding: 73px 0px;
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
  max-width: 413px;
  height: 160px;
  border-radius: 16px;
}
.map_icon{
  width: 100%;
}

@media (max-width: 564px){
  flex-direction: column;
  gap: 40px;
  .test{
    flex-wrap: wrap;
  }
  .map {
    flex-wrap: wrap;
  }
}
`;