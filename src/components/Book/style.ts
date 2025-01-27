import styled from "styled-components";
import heartSave from "../../assets/Heart.png";
import heartNoSave from "../../assets/HeartNotSave.png";

export const StylesWrapper = styled.div<{ src: boolean }>`
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
      background-image: url(${({ src }) => (src ? heartSave : heartNoSave)});
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      padding: 11px;
      background-color: ${({ theme }) => theme.colors.darkBlue};
      opacity: ${({ src }) => (src === true ? "0.5" : "1")};
      width: 48px;
      height: 48px;
      background-size: 26px;
    }
  }
  .genre {
    overflow: hidden;
    white-space: nowrap;
  }
  .author {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
