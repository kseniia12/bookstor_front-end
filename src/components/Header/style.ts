import styled from "styled-components";

export const StylesWrapper = styled.div`
  padding-top: 24px;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: 43px;
  .logo{
    display: flex;
    align-items: center;
    gap: 128px;
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