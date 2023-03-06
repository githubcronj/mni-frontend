import { Button } from "@mui/material";
import React from "react";
import "./btn.css";
type myProps = {
  label: string;
};

const ChatBtn = ({ label }: myProps) => {
  return <Button className="chat-btn">{label}</Button>;
};

export default ChatBtn;
