import { Box, Typography } from "@mui/material";
import React from "react";
import NotificationList from "../NotificationList";
import data from "../NotificationListArray";
import "./NotifictionCard.css"

export default function NotificationCard() {
  return (
    <div style={{position:"absolute",zIndex:"1200"}} className="notificationRoot" >
      <Box
        sx={{
          padding: "20px 5px",
          width: "350px",
          border: "1px solid #dddddd",
          backgroundColor: "#ffffff",
          boxShadow: "0px 1px 4px #dddddd",
          borderRadius: "6px",
        }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", color: "#dddddd" }}
        >
          Notification (13)
        </Typography>
        {data.map((item, index) => (
          <NotificationList TopInvestorsListprops={item} key={index} />
        ))}
      </Box>
    </div>
  );
}
