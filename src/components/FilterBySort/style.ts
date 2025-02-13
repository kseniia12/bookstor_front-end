import styled from "styled-components";

export const StylesWrapper = styled.div<{ open: boolean}>`
.arrow{
  display: block;
}
.container{
  background-color: ${({ theme }) => theme.colors.light};
  padding: 10px 12px 10px 15px;
    border-radius: 16px;
    display: flex;
    gap: 91px;
    &__white{
      background-color: ${({ theme }) => theme.colors.light};
    }
}
.arrow {
    display: block;
    transform: ${({ open }) =>
      open === true ? "rotate(90deg)" : "rotate(360deg)"};
  }
`;
