import styled from "styled-components";

export const StylesWrapper = styled.div`
  position: absolute;
  margin-top: 100px;
  margin-left: 370px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.light};
  width: 600px;
  height: 300px;
  border-radius: 16px;
  .close-button {
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-left: 550px;
  }
  .line {
    background-color: ${({ theme }) => theme.colors.light};
    width: 100%;
    height: 1px;
  }
  .modal-content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;
    &__button {
      background-color: ${({ theme }) => theme.colors.light};
      color: ${({ theme }) => theme.colors.darkBlue};
      border: 2px solid ${({ theme }) => theme.colors.light};
    }
  }
`;
