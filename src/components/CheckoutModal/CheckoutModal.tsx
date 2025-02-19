import React from "react";
import Button from "../Button/Button";
import { StylesWrapper } from "./style";
import cross from "../../assets/cross.png";

interface IPropsCheckoutModal {
  onClose: () => void;
}

const CheckoutModal: React.FC<IPropsCheckoutModal> = ({ onClose }) => {
  return (
    <StylesWrapper>
      <div>
        <img
          src={cross}
          alt="cross"
          className="close-button"
          onClick={onClose}
        />
        <div className="line"></div>
      </div>
      <div className="modal-content">
        <div className="big-title">Order sent successfully</div>
        <div className="normal-title">Our manager will contact you shortly</div>
        <Button onClick={onClose} text="Close window" className="modal-content__button" />
      </div>
    </StylesWrapper>
  );
};

export default CheckoutModal;
