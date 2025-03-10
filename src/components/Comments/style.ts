import styled from "styled-components";

export const StylesWrapper = styled.div`
  .title {
    padding-bottom: 60px;
  }
  .comment {
    margin-right: 542px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.light};
    padding: 30px;
    display: flex;
    gap: 20px;
    border-radius: 16px;
    ${({ theme }) => theme.media.tablet} {
      margin-right: 137px;

    }
    ${({ theme }) => theme.media.mobile} {
      margin-right: 0px;

    }
    &__photo {
      width: 60px;
      height: 60px;
    }
    &__photo--user {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    &__text {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
    &__date {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.darkGrey};
      padding-top: 4px;
      padding-bottom: 9px;
    }
    &__user {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;
