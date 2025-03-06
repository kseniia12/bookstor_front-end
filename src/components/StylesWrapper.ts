import styled from "styled-components";

export const StylesWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  ${({ theme }) => theme.media.tablet} {
    max-width: 803px;
  }
  ${({ theme }) => theme.media.mobile} {
    max-width: 290px;
  }
`;
