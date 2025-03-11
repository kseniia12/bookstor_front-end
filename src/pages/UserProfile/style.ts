import styled from "styled-components";

export const StylesWrapper = styled.div<{
  $isEditable: boolean;
  $changePassword: boolean;
}>`
  display: flex;
  margin: 60px 325px 104px 0px;
  justify-content: space-between;
  ${({ theme }) => theme.media.tablet} {
    margin: 59px 0px 104px 0px;
  }
  ${({ theme }) => theme.media.mobile} {
    margin: 50px 0px 100px 0px;
    flex-direction: column;
  }
  .button {
    margin-top: 50px;
  }
  .avatar {
    position: relative;
    inline-size: 6;
    &__image {
      width: 305px;
      height: 305px;
      ${({ theme }) => theme.media.tablet} {
        width: 255px;
        height: 255px;
      }
      ${({ theme }) => theme.media.mobile} {
        width: 290px;
        height: 290px;
      }
    }
    &__icon {
      position: absolute;
      top: 237px;
      left: 237px;
      width: 48px;
      height: 48px;
      cursor: pointer;
      ${({ theme }) => theme.media.tablet} {
        width: 40px;
        height: 40px;
        top: 200px;
        left: 200px;
      }
      ${({ theme }) => theme.media.mobile} {
        width: 40px;
        height: 40px;
        top: 230px;
        left: 230px;
      }
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 48px;
    &__section {
      display: flex;
      flex-direction: column;
      gap: 30px;
      ${({ theme }) => theme.media.mobile} {
          gap: 10px
        }
    }
    &__header {
      display: flex;
      justify-content: space-between;
      ${({ theme }) => theme.media.mobile} {
        flex-wrap: wrap;
        }
      &.password {
        margin-top: 40px;
      }
    }
    &__input-info {
        pointer-events: ${({ $isEditable }) =>
    $isEditable === true ? "" : "none"};
        background-color: ${({ theme }) => theme.colors.light};
        opacity: ${({ $isEditable }) => ($isEditable === true ? "1" : "0.5")};
        width: 522px;
        height: 64px;
        border-radius: 16px;
        ${({ theme }) => theme.media.tablet} {
          width: 529px;
        }
        ${({ theme }) => theme.media.mobile} {
          width: 290px;
          height: 47px;
        }
        .label {
          background-color:  ${({ theme }) => theme.colors.light};
          width: 100%;
          ${({ theme }) => theme.media.mobile} {
            font-size: 14px;
        }
         

        }
    }
    &__editing {
      color: ${({ theme }) => theme.colors.darkGreen};
      text-decoration: underline;
      cursor: pointer;
      ${({ theme }) => theme.media.mobile} {
          font-size: 12px;
        }

    }
  }
  .item {
    display: ${({ $changePassword }) =>
    $changePassword === true ? "" : "none"};
    &__text {
      ${({ theme }) => theme.media.mobile} {
       font-size: 14px;
        }
      &.error {
        color: red;
      }
    }
  }
`;
