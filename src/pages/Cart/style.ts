import styled from "styled-components";

export const StylesWrapper = styled.div`
  .result {
    &__totalPrice {
      padding-top: 10px;
      font-size: 40px;
      display: flex;
      gap: 12px;
      padding-bottom: 30px;
    }
    &__continue-shopping {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid black;
      color: black;
    }
    &__сhekout {
      margin-left: 20px;
    }
  }
  .dividing-line {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    height: 1px;
  }
`;
