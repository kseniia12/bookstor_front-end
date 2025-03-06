import styled from "styled-components";

export const StylesWrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 110px;
  padding-bottom: 150px;
  .container {
    display: flex;
    justify-content: space-between;
    &__filter {
      display: flex;
      gap: 20px;
    }
  }
  .books {
    display: flex;
    flex-wrap: wrap;
    gap: 60px 20px;
    padding-top: 38px;
    cursor: pointer;
  }
  .button-filter {
    width: 196px;
    height: 48px;
    color:  ${({ theme }) => theme.colors.darkBlue};
  }
  .button-sort {
    width: 196px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.white};
    .title {
    background-color: ${({ theme }) => theme.colors.white};
   
  }
  }
`;
