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
`;
