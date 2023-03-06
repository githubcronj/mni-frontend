import { Button } from "@mui/material";
import React from "react";
import "./btn.css";

type myProps = {
  label: string;
  className?: string;
  startIcon?: any;
  component?: any;
  to?: string;
  value?: any;
};

const FormButton = ({
  label,
  className,
  startIcon,
  component,
  to,
  value,
}: myProps) => {
  const handleSubmit = () => {
    console.log(value);
    // dispatch(submitSupportForm(obj, id));
    // navigate("/dashboard", { replace: true });
  };

  return (
    <Button
      variant="contained"
      className={`common-btn success  ${className}`}
      startIcon={startIcon}
      component={component}
      to={to}
      onClick={() => {
        console.log(handleSubmit);
      }}
    >
      {label}
    </Button>
  );
};

export default FormButton;
