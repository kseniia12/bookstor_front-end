import styled from "styled-components";

export const StylesWrapper = styled.div`
  position: relative;
  margin-bottom: 110px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  gap: 126px;
  justify-content: space-between;
  padding-left: 108px;
  padding-right: 98px;
  .content {
    padding-top: 80px;
    padding-bottom: 96px;
    z-index: 2;
    &__title {
      font-size: 40px;
    }
    &__subtitle {
      padding: 10px 305px 50px 0px;
      overflow-x: hidden;
      color: ${({ theme }) => theme.colors.dark};
    }
  }
  .img {
    display: block;
    &__book {
      display: block;
      position: absolute;
      top: 135px;
      left: 0px;
    }
  }
`;
