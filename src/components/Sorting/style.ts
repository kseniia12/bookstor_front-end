import styled from "styled-components";

export const StylesWrapper = styled.div<{ open: true }>`
  position: absolute;
  top: 690px;
  left: 1100px;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 3px 8px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  width: 197px;
  z-index: 2;
  .img {
    display: block;
    transform: ${({ open }) =>
      open === true ? "rotate(90deg)" : "rotate(360deg)"};
    width: 24px;
    height: 24px;
  }
  .menu {
    background-color: ${({ theme }) => theme.colors.light};
    width: 197px;
    padding: 15px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .menu .input {
    width: 0;
    height: 0;
  }
  .title {
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
  .label {
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
  }
  .label.selected {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
