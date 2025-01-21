import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 90px 0px;
  .title {
    font-size: 40px;
    padding-bottom: 60px;
  }
  .item {
    padding-bottom: 30px;
    &__input {
      background-color: ${({ theme }) => theme.colors.light};
    }
    &__text {
      &.error {
        color: red;
      }
    }
  }
  .button {
    margin-top: 60px;
  }
`;
