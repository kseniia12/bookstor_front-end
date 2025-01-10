import styled from "styled-components";

export const StylesWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .button {
    margin-top: 30px;
  }
  .label {
    padding-top: 9px;
  }
  @media (max-width: 564px) {
    padding: 0px 15px;
    .button {
      margin-top: 10px;
    }
  }
`;
