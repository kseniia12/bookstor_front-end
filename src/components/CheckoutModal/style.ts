import styled from "styled-components";

export const StylesWrapper = styled.div`
  position: absolute;
  margin-left: 350px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.light};
  width: 600px;
  height: 300px;
  border-radius: 16px;
  ${({ theme }) => theme.media.tablet} {
    margin-left: 100px;
  }
  ${({ theme }) => theme.media.mobile} {
    margin-top: 60px;
    margin-left: 0px;
    width: 290px;
    height: 180px;
  }
  .close-button {
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-left: 550px;
    ${({ theme }) => theme.media.mobile} {
      margin-top: 10px;
      margin-left: 258px;
      width: 15px;
      height: 15px;
  }
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
    ${({ theme }) => theme.media.mobile} {
      gap: 15px;
  }
    &__button {
      background-color: ${({ theme }) => theme.colors.light};
      color: ${({ theme }) => theme.colors.darkBlue};
      border: 2px solid ${({ theme }) => theme.colors.light};
      ${({ theme }) => theme.media.mobile} {
      padding: 3px 20px;
  }
    }
  }
`;
