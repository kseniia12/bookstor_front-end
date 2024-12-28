import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: grid;
  align-items: center;
  padding: 24px 76px 0px 80px;
  grid-template-columns: auto 1fr auto;
  gap: 43px;
  .logo{
    display: flex;
    gap: 250px;
    align-items: center;
  }
  .search{
    display: flex;
    align-items: center;
    padding-left: 24px;
    width: 630px;
    gap: 16px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 16px;
  }
  .search__icon{
    width: 24px;
    height: 24px;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 88px;
  height: 46px;
`;