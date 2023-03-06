import { Box, Button, Grid, OutlinedInput, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import "./EditProfileCard.css";
import EditUserimg from "../../../../Assets/image/EditUserimg.png";
import addnewimg from "../../../../Assets/image/addnewimg.svg";
import editimg from "../../../../Assets/image/editimg.png";
interface EditProfileCardProps {
  userimg?: string;
  userposition?: string;
  username?: string;
  EditProfileCardProp: any;
  onHandleClick: any;
}

const EditProfileCard: FC<EditProfileCardProps> = ({
  EditProfileCardProp,
  onHandleClick,
}) => {
  return (
    <div>
      <Box>
        <Box className="editprofilecard">
          <Box>
            <img
              width={"200px"}
              src={EditProfileCardProp.userimg}
              alt="EditUserimg"
            />
          </Box>
          <Typography className="textBold" sx={{ fontSize: "28px" }}>
            {EditProfileCardProp.username}
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#0101014D" }}>
            {EditProfileCardProp.userposition}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              sx={{
                color: "#138707 !important",
                border: " 1px solid #138707 !important",
                margin: "5px",
                padding: "5px 20px",
                textTransform: "none",
              }}
            >
              Delete
            </Button>

            <Button
              onClick={onHandleClick}
              sx={{
                backgroundColor: "#138707 !important",
                color: "#ffffff !important",
                margin: "5px",
                padding: "5px 30px",
                textTransform: "none",
              }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default EditProfileCard;
