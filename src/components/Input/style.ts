import styled from "styled-components";

export const StylesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  padding: 14px 24px;
  .icon {
    display: block;
    width: 24px;
    height: 24px;
  }
`;
