import styled from "styled-components";

export const StylesWrapper = styled.div`
  margin-top: 130px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  position: relative;
  ${({ theme }) => theme.media.tablet} {
    gap: 21px;
    padding: 0px;
  }
  ${({ theme }) => theme.media.mobile} {
    margin-top: 60px;
  }
  .content {
    position: relative;
    z-index: 1;
    padding: 80px 108px 96px 757px;
    ${({ theme }) => theme.media.tablet} {
      padding-bottom: 118px;
    }
    ${({ theme }) => theme.media.mobile} {
      padding: 20px 20px 328px 20px;
    }
    &__title {
      font-size: 40px;
    }
    &__subtitle {
      padding-top: 10px;
      padding-bottom: 50px;
      ${({ theme }) => theme.media.mobile} {
        padding: 20px 0px;
    }
    }
  }
  .img {
    &__fairy {
      z-index: 0;
      position: absolute;
      bottom: 0px;
      right: 0px;
      ${({ theme }) => theme.media.tablet} {
        gap: 21px;
        padding: 0px;
      }
      ${({ theme }) => theme.media.mobile} {
      width: 246px;
      height: 351px;
      left: 60px;
      top: -52px;
    }
     
    }
    &__castle {
      position: absolute;
      left: 108px;
      bottom: 0px;
      ${({ theme }) => theme.media.mobile} {
      width: 282px;
      height: 250px;
      left: 0px;
    }
    }
  }
  .button {
    ${({ theme }) => theme.media.mobile} {
      padding: 10px 50px;
    }
    
  }
`;
