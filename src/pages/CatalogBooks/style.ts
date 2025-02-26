import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 110px;
  padding-bottom: 150px;
  .container {
    display: flex;
    justify-content: space-between;
    &__filter {
      position: relative;
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
`;
