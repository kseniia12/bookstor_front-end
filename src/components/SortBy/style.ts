import styled from "styled-components";

export const StylesWrapper = styled.select`

  position: absolute;
  background-color: ${({ theme }) => theme.colors.light};
  top: 72px;
  left: 432px;
  z-index: 2;
  width: 305px;
  padding: 15px;
  width: 197px;
  .filter-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__checkbox {
      width: 24px;
      height: 24px;
      border-radius: 16px;
    }
    &__label {
      padding-left: 10px;
    }
  }
`;
