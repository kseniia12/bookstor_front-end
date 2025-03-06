import styled from "styled-components";

export const StylesWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 10px 8px 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  ${({ theme }) => theme.media.tablet} {
    padding: 10px 8px 10px 15px;
  }
  .arrow {
    display: block;
    transform: rotate(360deg);
    width: 24px;
    height: 24px;
  }
  .arrow.active {
    transform: rotate(90deg);
  }
  .title {
    background-color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
  }
`;
