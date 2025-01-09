import styled from "styled-components";

export const Main = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 90px 0px;
  display: flex;
  justify-content: space-between;
  .form {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .form-title {
    font-size: 40px;
    font-weight: bold;
  }
  .search {
    width: 612px;
    height: 522px;
  }
  .button {
    width: 151px;
  }
  @media (max-width: 564px) {
    flex-direction: column;
    .search {
      max-width: 290px;
      height: 247px;
      margin: 0 auto;
      .search_icon {
        width: 100%;
      }
    }
  }
`;
