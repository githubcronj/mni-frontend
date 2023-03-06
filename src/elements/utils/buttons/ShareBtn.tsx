import { Button } from "@mui/material";
import React from "react";
import "./btn.css";
type myProps = {
  label: string;
};

const ShareBtn = ({ label }: myProps) => {
  return <Button className="share-btn">{label}</Button>;
};

export default ShareBtn;
