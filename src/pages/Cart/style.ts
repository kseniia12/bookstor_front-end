import styled from "styled-components";

export const StylesWrapper = styled.div`
  .result {
    &__totalPrice {
      padding-top: 10px;
      font-size: 36px;
      display: flex;
      gap: 12px;
      padding-bottom: 30px;
      align-items: center;
      ${({ theme }) => theme.media.mobile} {
        font-size: 24px;
      }
    }
    &__button {
      display: flex;
      ${({ theme }) => theme.media.mobile} {
        flex-direction: column;
        gap: 18px;
      }
    }
    &__continue-shopping {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid black;
      color: black;
    }
  }
  .dividing-line {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    height: 1px;
  }
`;
