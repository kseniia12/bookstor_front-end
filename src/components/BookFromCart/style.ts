import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 0px;
  ${({ theme }) => theme.media.tablet} {
    gap: 17px;
  }
  ${({ theme }) => theme.media.mobile} {
    gap: 17px;
    padding: 30px 0px;
  }
  .book {
    width: 197px;
    height: 289px;
    border-radius: 16px;
    ${({ theme }) => theme.media.tablet} {
      width: 255px;
      height: 375px;
    }
    ${({ theme }) => theme.media.mobile} {
      width: 135px;
      height: 202px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__author {
      font-size: 24px;
      ${({ theme }) => theme.media.tablet} {
        font-size: 24px;
      }
      ${({ theme }) => theme.media.mobile} {
        font-size: 12px;
      }
    }
    &__price {
      font-size: 36px;
      ${({ theme }) => theme.media.mobile} {
        font-size: 18px;
      }
    }
  }
  .counter {
    display: flex;
    gap: 58px;
    align-items: center;
    ${({ theme }) => theme.media.mobile} {
      gap: 24px;
    }
    &__controls {
      display: flex;
      gap: 15px;
      align-items: center;
    }
    &__button {
      background-color: ${({ theme }) => theme.colors.light};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .counter__button.not-active {
    opacity: 0.5;
  }
  .cart {
    display: block;
    height: 20px;
    width: 20px;
    ${({ theme }) => theme.media.mobile} {
      height: 18px;
      width: 18px;
    }
    cursor: pointer;
  }
`;
