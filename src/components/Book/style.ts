import styled from "styled-components";
import heartSave from "../../assets/Heart.png";
import heartNoSave from "../../assets/HeartNotSave.png";

export const StylesWrapper = styled.div<{src: boolean}>`
display: flex;
flex-direction: column;
gap: 30px;
  .book{
    width: 305px;
    height: 448px;
    position: relative;
    &__img{
      width: 100%;
    }
    &__favorites{
      position: absolute;
      top: 20px;
      left: 20px;
      background-image: url(${heartNoSave});
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      padding: 11px;
      background-color: ${({ theme }) => theme.colors.darkBlue};
      width: 48px;
      height: 48px;
      background-size: 26px;
    }
  }
`;