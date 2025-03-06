import styled from "styled-components";

export const StylesWrapper = styled.div<{
  $isEditable: boolean;
  $changePassword: boolean;
}>`
  display: flex;
  padding: 66px 0px 110px 0px;
  gap: 128px;
  .button {
    margin-top: 50px;
  }
  .avatar {
    position: relative;
    inline-size: 6;
    &__image {
      width: 305px;
      height: 305px;
    }
    &__icon {
      position: absolute;
      top: 237px;
      left: 237px;
      width: 48px;
      height: 48px;
      cursor: pointer;
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
    }
    &__header {
      display: flex;
      justify-content: space-between;
      &.password {
        margin-top: 40px;
      }
    }
    &__input {
      &.info {
        pointer-events: ${({ $isEditable }) =>
          $isEditable === true ? "" : "none"};
        background-color: ${({ theme }) => theme.colors.light};
        opacity: ${({ $isEditable }) => ($isEditable === true ? "1" : "0.5")};
      }
      &.password {
        pointer-events: ${({ $changePassword }) =>
          $changePassword === true ? "" : "none"};
        background-color: ${({ theme }) => theme.colors.light};
        opacity: ${({ $changePassword }) =>
          $changePassword === true ? "1" : "0.5"};
      }
    }
    &__editing {
      color: ${({ theme }) => theme.colors.darkGreen};
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .item {
    display: ${({ $changePassword }) => ($changePassword === true ? "" : "none")};
    &__text {
      &.error {
        color: red;
      }
    }
  }
`;
