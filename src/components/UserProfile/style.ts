import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 0px 110px 0px;
  gap: 128px;
  .icon {
    position: relative;
    inline-size: 6;
    &__profile {
      width: 305px;
      height: 305px;
    }
    &__photo {
      position: absolute;
      top: 237px;
      left: 237px;
      width: 48px;
      height: 48px;
    }
  }
  .user-profile {
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
    }
    &__link {
      color: ${({ theme }) => theme.colors.darkGreen};
      font-size: 14px;
    }
    &__input {
      background-color: ${({ theme }) => theme.colors.light};
    }
  }
  
`;
