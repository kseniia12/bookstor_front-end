import styled from "styled-components";

export const StylesWrapper = styled.div`
  margin: 118px 165px 148px 108px;
  display: flex;
  gap: 109px;
  ${({ theme }) => theme.media.tablet} {
      margin: 100px 82px 104px 0px;
      gap: 62px;
    }
  .image {
    width: 433px;
    height: 261px;
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
    }
    ${({ theme }) => theme.media.mobile} {
      padding-top: 15px;
      padding-bottom: 30px;
    }
  }
`;
