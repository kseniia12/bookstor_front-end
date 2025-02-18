import styled from "styled-components";

export const StylesWrapper = styled.div`
  position: absolute;
  top: 72px;
  left: 216px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.light};
  width: 413px;
  height: 151px;
  border-radius: 16px;
  .wrapper {
    padding: 40px 17px;
  }
  .css-r64h58-MuiSlider-rail {
    background-color: #d6d8e7;
    height: 12px;
  }
  .MuiSlider-track.css-xvk2i-MuiSlider-track {
    background-color: ${({ theme }) => theme.colors.green};
    border: ${({ theme }) => theme.colors.green};
    height: 12px;
    width: 200px;
  }
  .css-1xcmt9q-MuiSlider-thumb {
    background-color: white;
    width: 32px;
    height: 32px;
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
  .css-1xcmt9q-MuiSlider-thumb:hover,
  .css-1xcmt9q-MuiSlider-thumb.Mui-focusVisible {
    box-shadow: none;
  }
  .price {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
