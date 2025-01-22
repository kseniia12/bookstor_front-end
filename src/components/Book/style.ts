import styled from "styled-components";
import heartSave from "../../img/Heart.png";
import heartNoSave from "../../img/HeartNotSave.png";

export const StylesWrapper = styled.div<{src: boolean}>`
display: flex;
flex-direction: column;
gap: 30px;
  .book{
    position: relative;
    &__favorites{
      position: absolute;
      top: 20px;
      left: 20px;

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