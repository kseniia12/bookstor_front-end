import styled from "styled-components";
import heartSave from "../../assets/Heart.png";
import heartNoSave from "../../assets/HeartNotSave.png";
import { Rating } from "@mui/material";

export const StylesWrapper = styled.div<{
  $isBookInFavorites: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 305px;
  position: relative;
  cursor: pointer;
  ${({ theme }) => theme.media.tablet} {
    width: 254px;
  }
  ${({ theme }) => theme.media.mobile} {
    width: 135px;
  }
  .book {
    &__img {
      width: 100%;
      border-radius: 16px;
      width: 305px;
      height: 448px;
      ${({ theme }) => theme.media.tablet} {
        width: 254px;
        height: 372px;
      }
      ${({ theme }) => theme.media.mobile} {
        width: 135px;
        height: 192px;
      }
    }
    &__favorites {
      position: absolute;
      top: 20px;
      left: 20px;
      background-image: url(${({ $isBookInFavorites }) => $isBookInFavorites ? heartNoSave : heartSave});
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
      ${({ theme }) => theme.media.tablet} {
        width: 38px;
        height: 38px;
        background-size: 21px;
      }
      ${({ theme }) => theme.media.mobile} {
        width: 25px;
        height: 25px;
        background-size: 14px;
      }
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
    ${({ theme }) => theme.media.mobile} {
      padding: 3px 17px;
      font-size: 14px;
    }
  }
  .f {
    ${({ theme }) => theme.media.mobile} {
      padding: 3px 22px;
      font-size: 14px;
    }
  }
  .rating-block {
    display: flex;
    gap: 24px;
    align-items: center;
    font-size: 16px;
    ${({ theme }) => theme.media.tablet} {
      gap: 34px;
    }
    ${({ theme }) => theme.media.mobile} {
      gap: 12px;
    }
    &__star {
      display: flex;
      gap: 30px;
      color: ${({ theme }) => theme.colors.green};
      ${({ theme }) => theme.media.tablet} {
        gap: 24px;
      }
      ${({ theme }) => theme.media.mobile} {
        gap: 7px;
      }
    }
    &__value {
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: 16px;
      ${({ theme }) => theme.media.mobile} {
        font-size: 13px;
      }
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
    ${({ theme }) => theme.media.tablet} {
      left: 16px;
      top: 320px;
    }
    ${({ theme }) => theme.media.mobile} {
      left: 12px;
      top: 153px;
      padding: 10px 29px;
      font-size: 10px;
    }
  }
`;

export const StyledRating = styled(Rating)`
  & .MuiRating-icon {
    font-size: 26px;
    color: ${({ theme }) => theme.colors.green};
    ${({ theme }) => theme.media.tablet} {
      font-size: 20px;
    }
    ${({ theme }) => theme.media.tablet} {
      font-size: 15px;
    }
  }
`;
