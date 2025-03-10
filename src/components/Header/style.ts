import styled from "styled-components";

export const StylesWrapper = styled.div<{
  src: { cart: string; userProfile: string; heart: string };
}>`
  padding-top: 24px;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "logo input button";
  gap: 43px;

  ${({ theme }) => theme.media.tablet} {
    gap: 52px;
  }
  ${({ theme }) => theme.media.mobile} {
    gap: 17px;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "logo button"
      "input input";
    gap: 17px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 128px;
    grid-area: logo;

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

  .dkjk {
    grid-area: button;
    ${({ theme }) => theme.media.mobile} {
      grid-column-start: 2;
    }
  }

  .input {
   
    background-color: ${({ theme }) => theme.colors.light};
    grid-area: "input";

    ${({ theme }) => theme.media.mobile} {
      grid-column-start: 1; // Инпут занимает всю ширину
      width: 100%; // Убедитесь, что инпут растягивается на всю ширину
    }
  }
.button__authorization{
  ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
    padding: 10px 17px;
    }
  
}
  .menu {
    display: flex;
    gap: 27px;

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
  }`
;
