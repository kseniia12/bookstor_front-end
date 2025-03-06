import styled from "styled-components";

export const StylesWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  gap: 126px;
  justify-content: space-between;
  padding-left: 108px;
  padding-right: 98px;
  ${({ theme }) => theme.media.tablet} {
    padding-left: 40px;
    padding-right: 14px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding-left: 20px;
    padding-right: 40px;
  }
  .content {
    padding-top: 80px;
    padding-bottom: 96px;
    z-index: 2;
    ${({ theme }) => theme.media.tablet} {
      padding-top: 45px;
      padding-bottom: 49px;
    }
    ${({ theme }) => theme.media.mobile} {
      padding-top: 20px;
      padding-bottom: 338px;
    }
    &__title {
      font-size: 40px;
    }
    &__subtitle {
      padding: 10px 305px 50px 0px;
      overflow-x: hidden;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
    &__description {
      margin: 10px 857px 50px 0px;

      color: ${({ theme }) => theme.colors.darkBlue};
      ${({ theme }) => theme.media.tablet} {
        margin: 15px 547px 40px 0px;
      }
      ${({ theme }) => theme.media.mobile} {
        margin: 20px 53px 20px 0px;
      }
    }
  }
  .img {
    display: block;
    &__book {
      position: absolute;
      top: 135px;
      left: 0px;
      ${({ theme }) => theme.media.tablet} {
        width: 361px;
        height: 218px;
        top: 74px;
      }
      ${({ theme }) => theme.media.mobile} {
        width: 220px;
        height: 140px;
        top: 17px;
        left: 70px;
      }
    }
    &__girl {
      position: absolute;
      left: 776px;
      ${({ theme }) => theme.media.tablet} {
        width: 328px;
        height: 364px;
        left: 462px;
        bottom: 0;
      }
      ${({ theme }) => theme.media.mobile} {
        left: 18px;
        bottom: 0px;
        width: 253px;
        height: 282px;
      }
    }
  }
`;
