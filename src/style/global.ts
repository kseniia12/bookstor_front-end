import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    ul, ol {
      list-style-type:  none;
    }
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    input {outline:none;}
    font-family: "Poppins", sans-serif;
    font-weight: medium;
  }
  .big-title{
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    text-align: left;
    ${({ theme }) => theme.media.tablet} {
      font-size: 32px;
      font-weight: 700;
      line-height: 48px;
    }
    ${({ theme }) => theme.media.mobile} {
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
    }
  }
  .normal-title{
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    ${({ theme }) => theme.media.tablet} {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
    ${({ theme }) => theme.media.mobile} {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
    }
  }
  .base-text{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
  .darkBlue-text{
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
