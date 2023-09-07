import React from "react";
import { Button } from "./CloseBtn.style";
import { useNavigate } from "react-router-dom";
import crossIcon from "../../assets/images/cross.svg";

const CloseBtn = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return <Button onClick={handleClose} src={crossIcon} alt="Close menu" />;
};

export default CloseBtn;
