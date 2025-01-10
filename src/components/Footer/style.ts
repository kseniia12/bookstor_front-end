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
    .container_contact {
      flex-direction: column;
      padding-top: 40px;
      gap: 5px;
    }
    .container_item {
      flex-direction: column;
      gap: 5px;
    }
    .container_map {
      padding-top: 5px;
      max-width: 413px;
      border-radius: 16px;
    }
    .container_map_icon {
      width: 100%;
    }
    @media (max-width: 564px) {
      flex-direction: column;
      gap: 40px;
      padding: 30px 15px;
      max-width: 100%;
      .container_map {
        max-width: 100%;
      }
      .container_contact {
        word-wrap: break-word;
      }
    }
  }
`;
