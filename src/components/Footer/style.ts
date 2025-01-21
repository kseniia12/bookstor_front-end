import styled from "styled-components";

export const StylesWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  .container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 73px 0px;
    color: ${({ theme }) => theme.colors.light};
    &__contact {
      flex-direction: column;
      padding-top: 40px;
      gap: 5px;
    }
    &___item {
      flex-direction: column;
      gap: 5px;
    }
    &___map {
      padding-top: 5px;
      max-width: 413px;
      border-radius: 16px;
    }
    &__icon {
      width: 100%;
    }
  }
  a {
    color: ${({ theme }) => theme.colors.light};
    display: block;
  }
`;
