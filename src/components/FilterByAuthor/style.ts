import styled from "styled-components";

export const StylesWrapper = styled.div<{ open: boolean }>`
  display: flex;
  gap: 20px;

  .arrow {
    display: block;
  }
  .container {
    width: 197px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.light};
    &__white {
      background-color: ${({ theme }) => theme.colors.light};
    }
    &__select{
      appearance: none;
      width: 100%;
      padding: 10px 12px 10px 15px;
      border: 1px solid ${({ theme }) => theme.colors.light};
      border-radius: 16px;
      background-color: ${({ theme }) => theme.colors.light};;
    }
  }
  .arrow {
    position: absolute;
    top: 12px;
    right: 12px;
    display: block;
    transform: ${({ open }) =>
      open === true ? "rotate(90deg)" : "rotate(360deg)"};
  }
`;
