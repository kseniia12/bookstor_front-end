import styled from "styled-components";

export const StylesWrapper = styled.div`
  .title {
    padding-bottom: 50px;
    ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
  .comment {
    margin-right: 542px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.light};
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    ${({ theme }) => theme.media.tablet} {
      margin-right: 137px;
      padding: 20px 92px 20px 20px;
      gap: 11px;
    }
    ${({ theme }) => theme.media.mobile} {
      margin-right: 0px;
      padding: 13px 0px 10px 10px;
      gap: 15px;
    }
    &__container {
      display: flex;
      gap: 20px;
      ${({ theme }) => theme.media.mobile} {
        gap: 13px;
      }
    }
    &__photo {
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      ${({ theme }) => theme.media.mobile} {
        width: 35px;
        height: 35px;
      }
    }
    &__text {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.darkBlue};
      padding-left: 80px;
      ${({ theme }) => theme.media.tablet} {
        font-size: 14px;
      }
      ${({ theme }) => theme.media.mobile} {
        padding-left: 0px;
        font-size: 12px;
      }
    }
    &__date {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.darkGrey};
      padding-top: 4px;
      ${({ theme }) => theme.media.mobile} {
        font-size: 10px;
    }
    }
    &__user {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.dark};
    ${({ theme }) => theme.media.mobile} {
      font-size: 14px;
    }
    }
  }
`;
