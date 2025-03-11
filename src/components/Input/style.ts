import styled from "styled-components";

export const StylesWrapper = styled.label`
  display: block;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  gap: 16px;
  align-items: center;
  border-radius: 16px;
  padding: 14px 24px;
  .icon {
    display: block;
    width: 24px;
    height: 24px;
  }

`;
