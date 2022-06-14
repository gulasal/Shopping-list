import React from "react";
import { Button as Btn } from "@mui/material/";

const Button = ({ name, variant, size, bgcolor, onClick }) => {
  return (
    <Btn
      variant={variant}
      style={{ background: `${bgcolor}` }}
      size={size}
      onClick={() => onClick()}
    >
      {name}
    </Btn>
  );
};

export default Button;
