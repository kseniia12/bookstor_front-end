import React from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";
import { StylesWrapper } from "./style";

const PaginationLink = () => {
  return (
    <StylesWrapper>
      <Pagination
        className="d"
        count={3}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${`?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </StylesWrapper>
  );
};
export default PaginationLink;
