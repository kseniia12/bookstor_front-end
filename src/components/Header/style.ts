import styled from "styled-components";

export const StylesWrapper = styled.div<{
  src: { cart: string; userProfile: string; heart: string };
}>`
  padding-top: 24px;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: 43px;
  .logo {
    display: flex;
    align-items: center;
    gap: 128px;
    &__page {
      color: ${({ theme }) => theme.colors.dark};
      text-decoration: none;
    }
  }
  .input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.light};
  }
  .menu {
    display: flex;
    gap: 27px;
    &__cart {
      position: relative;
      z-index: 1;
    }
    &__count {
      background-color: ${({ theme }) => theme.colors.darkGreen};
      padding: 3px 9px;
      text-align: center;
      font-size: 12px;
      border-radius: 50%;
      position: absolute;
      z-index: 2;
      top: 10;
      right: 0;
      transform: translate(40%, -15%);
    }
    &__button {
      border-radius: 50%;
      padding: 11px;
      background-color: ${({ theme }) => theme.colors.darkBlue};
      width: 48px;
      height: 48px;
      background-image: url(${({ src }) => src.cart});
      background-size: 26px;
      background-position: center;
      background-repeat: no-repeat;
      &.cart {
        background-image: url(${({ src }) => src.cart});
      }
      &.user {
        background-image: url(${({ src }) => src.userProfile});
      }
      &.heart {
        background-image: url(${({ src }) => src.heart});
      }
    }
  }
`;
