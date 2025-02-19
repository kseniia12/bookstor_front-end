import styled from "styled-components";
export const StylesWrapper = styled.div<{
  backdArrowState: boolean;
  forwardArrowState: boolean;
}>`
  padding-top: 78px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  .circle {
    border: 2px solid black;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }
  .circle.active {
    background-color: black;
  }
  .forwardArrowState {
    opacity: ${({ forwardArrowState }) => (forwardArrowState ? "1" : "0.5")};
  }
  .backdArrowState {
    opacity: ${({ backdArrowState }) => (backdArrowState ? "1" : "0.5")};
  }
`;
