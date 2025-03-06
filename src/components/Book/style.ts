import styled from "styled-components";
import heartSave from "../../assets/Heart.png";
import heartNoSave from "../../assets/HeartNotSave.png";
import { Rating } from "@mui/material";

export const StylesWrapper = styled.div<{
  $isBookInFavorites: boolean;
  // isBookInCart: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 305px;
  position: relative;
  cursor: pointer;
  .book {
    width: 305px;
    height: 448px;
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
      background-image: url(${({ $isBookInFavorites }) => ($isBookInFavorites ? heartNoSave : heartSave )});
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
  .button {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  }
  .rating-block {
    display: flex;
    gap: 24px;
    align-items: center;
    font-size: 16px;
    &__star {
      display: flex;
      gap: 30px;
      color: ${({ theme }) => theme.colors.green};
    }
    &__value {
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
  .bestseller {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    padding: 10px 50px;
    left: 20px;
    top: 398px;
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-style: italic;
    font-size: 16px;
  }
`;

export const StyledRating = styled(Rating)`
  & .MuiRating-icon {
    font-size: 26px;
    color: ${({ theme }) => theme.colors.green};
  }
`;
