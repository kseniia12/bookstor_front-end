import styled from "styled-components";
import heartSave from "../../assets/Heart.png";
import heartNoSave from "../../assets/HeartNotSave.png";
import { Rating } from "@mui/material";

export const StylesWrapper = styled.div<{ isBookInFavorites: boolean, isBookInCart: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 305px;
  .book {
    width: 305px;
    height: 448px;
    position: relative;
    &__img {
      width: 305px;
      height: 448px;
      max-width: 100%;
      border-radius: 16px;
    }
    &__favorites {
      position: absolute;
      top: 20px;
      left: 20px;
      background-image: url(${({ isBookInFavorites }) => (isBookInFavorites ? heartNoSave : heartSave )});
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      padding: 11px;
      background-color: ${({ theme }) => theme.colors.darkBlue};
      opacity: ${({ isBookInFavorites }) => (isBookInFavorites === true ? "1" : "0.5")};
      width: 48px;
      height: 48px;
      background-size: 26px;
    }
  }
  .genre {
    overflow: hidden;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  .author {
    color: ${({ theme }) => theme.colors.darkGrey};
    white-space: nowrap;
    overflow: hidden;
    padding-bottom: 20px;
  }
  .button{
    background-color: ${({ isBookInCart, theme }) =>
    isBookInCart ? theme.colors.white : theme.colors.darkBlue};
    color: ${({ isBookInCart, theme }) =>
    isBookInCart ? theme.colors.dark : theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  }
  .simple-controlled{
    display: flex;
    gap: 30px;
    color: ${({ theme }) => theme.colors.green};
  }
  .averageRating__block{
    display: flex;
    gap: 24px;
    align-items: center;
    font-size: 16px;

  }
  .averageRating{
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledRating = styled(Rating)`
  & .MuiRating-icon {
    font-size: 26px;
    color:${({ theme }) => theme.colors.green};
  }
`;