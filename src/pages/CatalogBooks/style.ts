import styled from "styled-components";

export const StylesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 150px;
  ${({ theme }) => theme.media.tablet} {
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding-bottom: 70px;
  }

  .container {
    margin-top: 110px;
    display: flex;
    justify-content: space-between;
    ${({ theme }) => theme.media.tablet} {
      flex-direction: column;
      margin-top: 60px;
    }
    ${({ theme }) => theme.media.mobile} {
      flex-direction: column;
      margin-top: 20px;
    }
    &__filter {
      display: flex;
      gap: 20px;
      ${({ theme }) => theme.media.tablet} {
        justify-content: space-between;
        margin-top: 20px;
      }
      ${({ theme }) => theme.media.mobile} {
        margin-top: 13px;
        flex-direction: column;
      }
    }
  }
  .books {
    display: flex;
    flex-wrap: wrap;
    padding-top: 38px;
    cursor: pointer;
    gap: 60px 20px;
    ${({ theme }) => theme.media.tablet} {
      gap: 30px 20px;
      padding-top: 24px;
    }
    ${({ theme }) => theme.media.mobile} {
      padding-top: 17px;
    }
  }
  .button-filter {
    width: 196px;
    height: 48px;
    color: ${({ theme }) => theme.colors.darkBlue};
    ${({ theme }) => theme.media.tablet} {
      width: 254px;
    }
    ${({ theme }) => theme.media.mobile} {
      width: 290px;
    }
  }
  .button-sort {
    width: 196px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.media.tablet} {
      width: 254px;
    }
    ${({ theme }) => theme.media.mobile} {
      width: 290px;
    }
    .title {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
