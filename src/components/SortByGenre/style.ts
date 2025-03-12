import styled from "styled-components";

export const StylesWrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.light};
  top: 630px;
  left: 650px;
  z-index: 2;
  width: 305px;
  padding: 15px;
  border-radius: 16px;
  ${({ theme }) => theme.media.tablet} {
    top: 520px;
    left: 0px;
    width: 290px;
    }
    ${({ theme }) => theme.media.mobile} {
    top: 680px;
    left: 0px;
    width: 290px;
    }
  .filter-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__checkbox {
      appearance: none;
      width: 24px;
      height: 24px;
      border: 1px solid ${({ theme }) => theme.colors.darkBlue};
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      position: relative;
      background-color: white;
      &:checked {
        background-color: ${({ theme }) => theme.colors.darkBlue};
      }
      &:checked::after {
        content: "";
        position: absolute;
        top: 40%;
        left: 50%;
        width: 10px;
        height: 14px;
        border-radius: 2px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        transform: translate(-50%, -50%) rotate(40deg);
      }
    }
    &__item {
      display: flex;
      align-items: center;
    }
    &__label {
      padding-left: 10px;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`;
