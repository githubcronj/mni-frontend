import { Button } from "@mui/material";
import React from "react";
import "./btn.css";
type myProps = {
  label: string;
  className?: string;
  component?: any;
  to?: string;
};

const CancelBtn = ({ label, className, component, to }: myProps) => {
  return (
    <Button
      className={`common-btn cancel  ${className}`}
      component={component}
      to={to}
    >
      {label}
    </Button>
  );
};

export default CancelBtn;
