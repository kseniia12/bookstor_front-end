import styled from "styled-components";
export const StylesWrapper = styled.div<{backdArrowState: boolean, forwardArrowState: boolean}>`
  padding-top: 78px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
  .circle {
    border: 3px solid black;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .circle.active {
    background-color: black;
  }
  .forwardArrowState{
    opacity: ${({ forwardArrowState }) => forwardArrowState ? '1' : '0.5'};
  }
  .backdArrowState{
    opacity: ${({ backdArrowState }) => backdArrowState ? '1' : '0.5'};
  }
`;
