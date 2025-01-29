import styled from "styled-components";

export const StylesWrapper = styled.div<{ open: boolean }>`
  .container {
    background-color: ${({ theme }) => theme.colors.light};
    padding: 10px 12px 10px 15px;
    border-radius: 16px;
    display: flex;
    gap: 91px;
  }
  .arrow {
    display: block;
    transform: ${({ open }) =>
      open === true ? "rotate(90deg)" : "rotate(360deg)"};
  }

  /* position: relative;
  margin: 12px 433px 12px 651px;

  .title-filter {
    padding: 10px 123px 10px 15px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 16px;
  }
  .arrow {
    position: absolute;
    top: 12px;
    left: 164px;
    transform: ${({ open }) =>
    open === true ? "rotate(90deg)" : "rotate(360deg)"};
  }
  .sort {
    visibility: ${({ open }) => (open === true ? "visible" : "hidden")};
    background-color: ${({ theme }) => theme.colors.light};
    margin-top: 16px;
    border-radius: 16px;
    padding: 15px;
    position: absolute;
    z-index: 6;
    top: 45px;
    width: 305px;
  }
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
  } */
`;
