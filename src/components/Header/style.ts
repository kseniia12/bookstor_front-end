import styled from "styled-components";

export const StylesWrapper = styled.div<{
  src: { cart: string; userProfile: string; heart: string };
}>`
  padding-top: 24px;
  display: grid;
  align-items: center;
  grid-template-columns: 325px 630px 324px;
  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 276px 247px 279px;
  }
  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 155px 135px;
    grid-template-rows: 36px 47px;
    grid-row-gap: 20px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 128px;
    &__img {
      ${({ theme }) => theme.media.mobile} {
        width: 62px;
        height: 31px;
      }
    }
    &__page {
      color: ${({ theme }) => theme.colors.dark};
      text-decoration: none;
    }

    ${({ theme }) => theme.media.tablet} {
      gap: 51px;
    }
    ${({ theme }) => theme.media.mobile} {
      gap: 18px;
    }
  }

  .input {
    background-color: ${({ theme }) => theme.colors.light};
    .label {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.light};
      font-size: 16px;
    }
    ${({ theme }) => theme.media.mobile} {
      grid-area: 2 / 1 / 3 / 3;
    }
  }
  .button__authorization {
    ${({ theme }) => theme.media.mobile} {
      font-size: 12px;
      padding: 10px 17px;
    }
  }
  .menu {
    display: flex;
    gap: 27px;
    padding-left: 127px;
    ${({ theme }) => theme.media.tablet} {
      padding-left: 81px;
    }
    ${({ theme }) => theme.media.mobile} {
      gap: 18px;
      padding-left: 0px;
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
    &__cart {
      z-index: 1;
    }

    &__cart-container {
      position: relative;
    }

    &__cart-favorites {
      position: relative;
    }

    &__count-heart,
    &__count-favorites {
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
      ${({ theme }) => theme.media.mobile} {
        padding: 1px 6px;
        font-size: 10px;
      }
    }

    &__button {
      border-radius: 50%;
      padding: 11px;
      background-color: ${({ theme }) => theme.colors.darkBlue};
      width: 48px;
      height: 48px;
      background-size: 26px;
      background-position: center;
      background-repeat: no-repeat;
      ${({ theme }) => theme.media.mobile} {
        width: 33px;
        height: 33px;
        background-size: 18px;
      }
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
