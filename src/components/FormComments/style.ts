import styled from "styled-components";
export const StylesWrapper = styled.div`
  padding-top: 60px;
  .item {
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    width: 738px;
    height: 128px;
    border-radius: 16px;
    &__input-field {
      background-color: ${({ theme }) => theme.colors.light};
      padding-top: 20px;
      padding-left: 24px;
      border-radius: 16px;
      width: 738px;
      height: 128px;
    }
  }
  textarea {
    outline: none;
    resize: none;
  }
`;
