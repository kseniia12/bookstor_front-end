import styled from "styled-components";

export const StylesWrapper = styled.div<{ open: boolean }>`
  display: flex;
  gap: 20px;
  margin: 12px 433px 12px 651px;
  .title-filter {
    padding: 10px 150px 10px 15px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 16px;
    font-size: 18px;
    &__sort{
      padding: 10px 50px 10px 15px;
    }
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
`;
