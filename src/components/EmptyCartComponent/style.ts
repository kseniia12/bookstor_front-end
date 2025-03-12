import styled from "styled-components";

export const StylesWrapper = styled.div`
  margin: 118px 165px 148px 108px;
  display: flex;
  gap: 109px;
  ${({ theme }) => theme.media.tablet} {
    margin: 100px 82px 104px 0px;
    gap: 62px;
  }
  ${({ theme }) => theme.media.mobile} {
    margin: 49px 0px 100px 0px;
    gap: 40px;
    flex-direction: column-reverse;
  }
  .image {
    width: 433px;
    height: 261px;
    ${({ theme }) => theme.media.tablet} {
      width: 350px;
      height: 212px;
    }
    ${({ theme }) => theme.media.mobile} {
      width: 290px;
      height: 176px;
    }
  }
  .book {
    padding-top: 50px;
    max-width: 100%;
  }
  .title {
    font-size: 40px;
  }
  .description {
    font-size: 24px;
    padding-top: 20px;
    padding-bottom: 60px;
    ${({ theme }) => theme.media.tablet} {
      padding-bottom: 50px;
      font-size: 16px;
    }
    ${({ theme }) => theme.media.mobile} {
      padding-top: 15px;
      padding-bottom: 30px;
      font-size: 12px;
    }
  }
  .button {
    ${({ theme }) => theme.media.mobile} {
      padding: 9px 99px;
      text-align: center;
      font-size: 12px;
    }
  }
`;
