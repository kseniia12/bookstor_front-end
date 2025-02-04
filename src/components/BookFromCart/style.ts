import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 0px;
  .book{
    width: 197px;
    height: 289px;
    &__img{
      max-width: 100%;
      border-radius: 16px;
    }
  }
  .info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title{ 
      font-size: 40px;
    }
    &__author{
      font-size: 24px;
    }
    &__price{
      font-size: 36px;
    }
  }
  .counter{
    display: flex;
    gap: 58px;
    align-items: center;
    &__u{
      display: flex;
      gap: 15px;
    }
    &__v{
      background-color: ${({ theme }) => theme.colors.light};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      text-align: center;
    }
  }
  .cart{
    height:20px;
    width: 20px;
    cursor: pointer;
  }
`;
