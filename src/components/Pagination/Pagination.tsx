import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StylesWrapper } from "./style";
import { useAppSelector } from "../../hooks";
import forwardArrow from "../../assets/Forward.png";
import backdArrow from "../../assets/Vector.png";

const PaginationLink = () => {
  const meta = useAppSelector((state) => state.book.meta);
  const [state, setState] = useState(meta ? meta.currentPage : 1);
  const [forwardArrowState, setForwardArrowState] = useState(true);
  const [backdArrowState, setBackArrowState] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setState(meta? meta.currentPage : 1);
    setForwardArrowState(meta? meta.hasNextPage : false);
    setBackArrowState(meta? meta.hasPrevPage : false);
  }, [meta?.currentPage, meta?.hasNextPage, meta?.hasPrevPage]);

  const goToPage = (page: number) => {
    navigate(`?page=${page}`);
    setState(page);
  };

  const goToNextPage = (currentPage: number) => {
    if (meta?.hasNextPage) {
      setForwardArrowState(true);
      goToPage(currentPage + 1);
    } else {
      setForwardArrowState(false);
    }
  };

  const goToPrevPage = (currentPage: number) => {
    if (meta?.hasPrevPage) {
      setBackArrowState(true);
      goToPage(currentPage - 1);
    } else {
      setBackArrowState(false);
    }
  };

  return (
    <StylesWrapper
      $forwardArrowState={forwardArrowState}
      $backdArrowState={backdArrowState}
    >
      <img
        src={backdArrow}
        className="backdArrowState"
        alt="backdArrowState"
        onClick={() => goToPrevPage(meta? meta.currentPage : 1)}
      />
      <div
        className={`circle ${state === 1 ? "active" : ""}`}
        onClick={() => goToPage(1)}
      ></div>
      {meta && meta.totalPages > 1 ? (
        <div
          className={`circle ${
            state !== 1 && state !== meta?.totalPages ? "active" : ""
          }`}
          onClick={() => goToPage(2)}
        ></div>
      ) : (
        ""
      )}
      {meta && meta.totalPages > 2 ? (
        <div
          className={`circle ${state === meta.totalPages ? "active" : ""}`}
          onClick={() => goToPage(meta.totalPages)}
        ></div>
      ) : (
        ""
      )}
      <img
        src={forwardArrow}
        alt="forwardArrowState"
        className="forwardArrowState"
        onClick={() => goToNextPage(meta? meta.currentPage : 1)}
      />
    </StylesWrapper>
  );
};

export default PaginationLink;
