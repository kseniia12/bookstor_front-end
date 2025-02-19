import styled from "styled-components";

export const StylesWrapper = styled.div`
  margin-top: 92px;
  padding-left: 108px;
  padding-right: 108px;
  gap: 128px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  display: flex;
  position: relative;
  .content {
    z-index: 2;
    padding-top: 80px;
    padding-bottom: 96px;
    &__title {
      font-size: 40px;
    }
    &__subtitle {
      padding-top: 10px;
      padding-bottom: 50px;
    }
  }
  .img {
    display: block;
    &__fairy {
      display: block;
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
  }
`;
