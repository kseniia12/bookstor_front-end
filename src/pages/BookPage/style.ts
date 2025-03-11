import styled from "styled-components";

export const StylesWrapper = styled.div`
  .recommendations {
    padding-top: 108px;
    padding-bottom: 150px;
    ${({ theme }) => theme.media.tablet} {
      padding-top: 90px;
      padding-bottom: 100px;
    }
    ${({ theme }) => theme.media.mobile} {
      padding-top: 60px;
      padding-bottom: 100px;
    }
    &__title {
      padding-bottom: 50px;
      ${({ theme }) => theme.media.mobile} {
        padding-bottom: 30px;
      }
    }
    &__books {
      display: flex;
      gap: 20px;
      ${({ theme }) => theme.media.tablet} {
        gap: 18px;
        width: 804px;
        overflow-y: auto;
      }
      ${({ theme }) => theme.media.mobile} {
        gap: 18px;
        width: 289px;
        overflow-y: auto;
      }
    }
  }
`;
