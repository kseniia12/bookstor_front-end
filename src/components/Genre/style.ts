import styled from "styled-components";

export const StylesWrapper = styled.div`
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
