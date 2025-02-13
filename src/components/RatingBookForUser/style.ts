import { Rating } from "@mui/material";
import styled from "styled-components";

export const StylesWrapper = styled.div`
.simple-controlled{
  display: flex;
  gap: 15px;
  color: ${({ theme }) => theme.colors.green};
  font-size: '3rem';
}
`;
export const StyledRating = styled(Rating)`
  & .MuiRating-icon {
    font-size: 30px;
    color:${({ theme }) => theme.colors.green};
  }
`;
