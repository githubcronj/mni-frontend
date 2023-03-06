import { Button } from "@mui/material";
import React from "react";
import "./btn.css";
type myProps = {
  label: string;
};

const ViewBtn = ({ label }: myProps) => {
  return <Button className="view-btn">{label}</Button>;
};

export default ViewBtn;
