import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: flex;
  padding: 90px 0px;
  gap: 256px;
  ${({ theme }) => theme.media.tablet} {
    padding: 0px 0px;
    padding-top: 95px;
    padding-bottom: 104px;
    gap: 20px;
  }
  ${({ theme }) => theme.media.mobile} {
    gap: 60px;
    padding: 0px 0px;
    padding-top: 30px;
    padding-bottom: 70px;
    flex-direction: column;
  }
  .title {
    padding-bottom: 60px;
    ${({ theme }) => theme.media.tablet} {
      padding-bottom: 50px;
    }
    ${({ theme }) => theme.media.mobile} {
      padding-bottom: 30px;
    }
  }
  .item {
    width: 413px;
    padding-bottom: 30px;
    ${({ theme }) => theme.media.tablet} {
      width: 392px;
      padding-bottom: 15px;
    }
    ${({ theme }) => theme.media.mobile} {
      width: 290px;
      padding-bottom: 21px;
    }
    &__input {
      background-color: ${({ theme }) => theme.colors.light};
      width: 100%;
      height: 64px;
      .label {
        background-color: ${({ theme }) => theme.colors.light};
        font-size: 16px;
      }
    }
    &__text {
      &.error {
        color: red;
      }
    }
  }
  .button {
    margin-top: 60px;
    padding: 10px 50px;
    ${({ theme }) => theme.media.tablet} {
    }
    ${({ theme }) => theme.media.mobile} {
      margin-top: 40px;
      padding: 10px 17px;

    }
  }
  .search__icon {
    ${({ theme }) => theme.media.tablet} {
      width: 390px;
      height: 333px;
    }
    ${({ theme }) => theme.media.mobile} {
      width: 290px;
      height: 247px;
    }
  }
`;
