import styled from "styled-components";

export const StylesWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  .container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 73px;
    padding-bottom: 73px;
    color: ${({ theme }) => theme.colors.light};
    ${({ theme }) => theme.media.tablet} {
      max-width: 803px;
      padding-bottom: 79px;
    }
    ${({ theme }) => theme.media.mobile} {
      max-width: 291px;
      padding-bottom: 30px;
      flex-direction: column;
      gap: 40px;
    }
    &__contact {
      flex-direction: column;
      padding-top: 40px;
      gap: 5px;
      ${({ theme }) => theme.media.tablet} {
        padding-top: 30px;
      }
    }
    &___item {
      flex-direction: column;
      gap: 5px;
      ${({ theme }) => theme.media.tablet} {
        gap: 11px;
      }
      ${({ theme }) => theme.media.mobile} {
        gap: 11px;
        font-size: 16px;
      }
    }
    &___map {
      padding-top: 5px;
      max-width: 413px;
      border-radius: 16px;
      ${({ theme }) => theme.media.tablet} {
        max-width: 392px;
      }
    }
    &__icon {
      width: 100%;
    }
  }
  a {
    color: ${({ theme }) => theme.colors.light};
    display: block;
  }
`;
