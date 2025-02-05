import styled from "styled-components";

export const StylesWrapper = styled.div`
  padding-bottom: 114px;
  padding-top: 20px;
  .totalPrice {
    padding-top: 10px;
    font-size: 40px;
  }
  .cart-empty {
    padding: 118px 165px 148px 108px;
    display: flex;
    gap: 109px;
    &__image {
      width: 433px;
      height: 261px;
    }
    &__book {
      padding-top: 50px;
      max-width: 100%;
    }
    &__title {
      font-size: 40px;
    }
    &__description {
      font-size: 24px;
      padding-top: 20px;
      padding-bottom: 60px;
    }
  }
`;
