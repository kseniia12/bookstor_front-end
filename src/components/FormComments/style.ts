import styled from "styled-components";
export const StylesWrapper = styled.div`
  padding-top: 60px;
  ${({ theme }) => theme.media.tablet} {
    padding-top: 40px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding-top: 20px;
  }
  .item {
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.colors.light};
    width: 738px;
    height: 128px;
    border-radius: 16px;
    ${({ theme }) => theme.media.mobile} {
      width: 289px;
      height: 87px;
    }
    &__input-field {
      background-color: ${({ theme }) => theme.colors.light};
      padding-top: 20px;
      padding-left: 24px;
      border-radius: 16px;
      width: 738px;
      height: 128px;
      ${({ theme }) => theme.media.mobile} {
      width: 289px;
      height: 87px;
    }
    }
  }
  textarea {
    outline: none;
    resize: none;
  }
  .button {
    padding: 10px 50px;
    font-size: 12px;
  }
`;
