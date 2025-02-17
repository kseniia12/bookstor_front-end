import styled from "styled-components";
export const StylesWrapper = styled.div`
  padding-top: 60px;
  .item {
    background-color: ${({ theme }) => theme.colors.light};
    width: 738px;
    height: 128px;
    border-radius: 16px;
  }
  .input {
    background-color: ${({ theme }) => theme.colors.light};
    padding-top: 20px;
    padding-left: 24px;
    border-radius: 16px;
  }
  textarea {
    outline: none;
  }
`;
