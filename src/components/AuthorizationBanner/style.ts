import styled from "styled-components";

export const StylesWrapper = styled.div`
  margin-top: 92px;
  padding: 0px 108px;
  gap: 128px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  display: flex;
  position: relative;
  ${({ theme }) => theme.media.tablet} {
    gap: 21px;
    padding: 0px;
  }
  .content {
    z-index: 2;
    padding-top: 80px;
    padding-bottom: 96px;
    ${({ theme }) => theme.media.tablet} {
      padding-bottom: 118px;
    }
    &__title {
      font-size: 40px;
    }
    &__subtitle {
      padding-top: 10px;
      padding-bottom: 50px;
    }
  }
  .img {
    display: block;
    &__fairy {
      display: block;
      position: absolute;
      bottom: 0px;
      right: 0px;
      ${({ theme }) => theme.media.tablet} {
        gap: 21px;
        padding: 0px;
      }
    }
  }
`;
