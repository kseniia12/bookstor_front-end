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
  .book {
    position: relative;
    border-radius: 16px;
    &__img {
      width: 552px;
      height: 779px;
      border-radius: 16px;
    }
    &__favorites {
      position: absolute;
      top: 30px;
      right: 30px;
      background-image: url(${({ $isBookInFavorites }) => ($isBookInFavorites ? heartNoSave :  heartSave)});
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      padding: 11px;
      background-color: ${({ theme }) => theme.colors.darkBlue};
      opacity: ${({ $isBookInFavorites }) => ($isBookInFavorites === true ? "1" : "0.5")};
      width: 48px;
      height: 48px;
      background-size: 26px;
    }
  }
  .title {
    font-size: 40px;
  }
  .author {
    font-size: 24px;
    padding-bottom: 30px;
  }
  .description {
    font-size: 24px;
    padding-top: 30px;
    &__text {
      padding-top: 10px;
      padding-bottom: 74px;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
  .button {
    display: flex;
    gap: 82px;
    &__title {
      padding-bottom: 14px;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
    &__cart {
      background-color: ${({ $isBookInCart, theme }) =>
        $isBookInCart ? theme.colors.white : theme.colors.darkBlue};
      color: ${({ $isBookInCart, theme }) =>
        $isBookInCart ? theme.colors.dark : theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    }
  }
  .rating {
    display: flex;
    gap: 40px;
    align-items: center;
    &__section-value {
      display: flex;
      gap: 13px;
      align-items: center;
    }
    &__value {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.darkGrey};
    }
    &__book {
      display: flex;
      gap: 7px;
    }
    &__title {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;
