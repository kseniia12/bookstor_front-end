import styled from "styled-components";

export const Main = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 90px 0px;
  display: flex;
  justify-content: space-between;
  .form {
    flex-direction: column;
    gap: 60px;
  }
  .form-title {
    font-size: 40px;
    font-weight: bold;
  }
  .search {
    width: 612px;
  }
  .search_icon {
    max-width: 100%;
  }
  .button {
    width: 151px;
  }
  @media (max-width: 564px) {
    flex-direction: column;
    padding: 0px 15px;
   .form-title{
      padding-bottom: 30px;
    }
    .search {
      max-width: 100%;
      margin: 0 auto;
      padding: 70px 0px;
    }
  }
`;
