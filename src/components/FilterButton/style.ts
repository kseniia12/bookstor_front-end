import styled from "styled-components";

export const StylesWrapper = styled.div<{ open: true }>`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 3px 8px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  width: 197px;
  .img {
    display: block;
    transform: ${({ open }) =>
    open === true ? "rotate(90deg)" : "rotate(360deg)"};
    width: 24px;
    height: 24px;
  }
  .title {
    background-color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
  }
`;
