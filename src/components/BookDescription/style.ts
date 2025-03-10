import styled from "styled-components";
import heartSave from "../../assets/Heart.png";
import heartNoSave from "../../assets/HeartNotSave.png";
export const StylesWrapper = styled.div<{
  $isBookInFavorites: boolean;
  $isBookInCart: boolean;
}>`
  display: flex;
  gap: 128px;
  padding-top: 60px;
  padding-bottom: 110px;
  ${({ theme }) => theme.media.tablet} {
    gap: 21px;
  }
  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    padding-top: 48px;
    padding-bottom: 50px;
  }
  .book-info {
    ${({ theme }) => theme.media.mobile} {
      display: flex;
      gap: 20px;
    }
  }
  .book {
    position: relative;
    border-radius: 16px;
    &__img {
      width: 552px;
      height: 779px;
      border-radius: 16px;
      ${({ theme }) => theme.media.tablet} {
        width: 391px;
        height: 584px;
      }
      ${({ theme }) => theme.media.mobile} {
        width: 135px;
        height: 202px;
      }
    }
    &__favorites {
      position: absolute;
      top: 30px;
      right: 30px;
      background-image: url(${({ $isBookInFavorites }) =>
        $isBookInFavorites ? heartNoSave : heartSave});
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      padding: 11px;
      background-color: ${({ theme }) => theme.colors.darkBlue};
      opacity: ${({ $isBookInFavorites }) =>
        $isBookInFavorites === true ? "1" : "0.5"};
      width: 48px;
      height: 48px;
      background-size: 26px;
      ${({ theme }) => theme.media.mobile} {
        opacity: 0;
        cursor: default;
      }
    }
  }
  .title {
    font-size: 40px;
  }
  .author {
    font-size: 24px;
    padding-bottom: 30px;
    ${({ theme }) => theme.media.mobile} {
      font-size: 12px;
      padding-top: 14px;
      padding-bottom: 21px;
    }
  }
  .description {
    font-size: 24px;
    padding-top: 30px;
    ${({ theme }) => theme.media.mobile} {
      padding-top: 20px;
      padding-bottom: 15px;
      font-size: 14px;
    }
    &__text {
      padding-top: 10px;
      padding-bottom: 74px;
      color: ${({ theme }) => theme.colors.darkBlue};
      ${({ theme }) => theme.media.mobile} {
        padding-top: 0px;
        padding-bottom: 15px;
        font-size: 12px;
    }
    }
  }
  .button {
    display: flex;
    gap: 82px;
    ${({ theme }) => theme.media.mobile} {
      gap: 20px;
      justify-content: space-between;
    }
    &__title {
      padding-bottom: 14px;
      color: ${({ theme }) => theme.colors.darkBlue};
      ${({ theme }) => theme.media.mobile} {
        padding-bottom: 17px;
    }
    }
    &__cart {
      background-color: ${({ $isBookInCart, theme }) =>
        $isBookInCart ? theme.colors.white : theme.colors.darkBlue};
      color: ${({ $isBookInCart, theme }) =>
        $isBookInCart ? theme.colors.dark : theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.darkBlue};
      ${({ theme }) => theme.media.mobile} {
        padding: 10px 31px;
        font-size: 12px;
    }
    }
  }
  .rating {
    display: flex;
    gap: 40px;
    align-items: center;
    ${({ theme }) => theme.media.mobile} {
      flex-direction: column;
      gap: 20px;

      align-items: flex-start;
      padding-bottom: 9px;
    }
    &__img {
      ${({ theme }) => theme.media.mobile} {
        width: 15px;
        height: 15px;
      }
    }
    &__section-value {
      display: flex;
      gap: 13px;
      align-items: center;
    }
    &__value {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.darkGrey};
      ${({ theme }) => theme.media.mobile} {
        font-size: 13px;
      }
    }
    &__book {
      display: flex;
      gap: 7px;
    }
    &__book-img {
      ${({ theme }) => theme.media.mobile} {
        display: none;
      }
    }
    &__title {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.darkGrey};
      ${({ theme }) => theme.media.mobile} {
        font-size: 12px;
      }
    }
  }
`;
