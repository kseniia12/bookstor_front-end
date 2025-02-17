import styled from "styled-components";

export const StylesWrapper = styled.div`
  margin-right: 542px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 30px;
  display: flex;
  gap: 20px;
  border-radius: 16px;
  .photo {
    width: 60px;
    height: 60px;
    &__user {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .comment {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  .date {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkGrey};
    padding-top: 4px;
    padding-bottom: 9px;
  }
  .user {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.dark};
  }
`;
