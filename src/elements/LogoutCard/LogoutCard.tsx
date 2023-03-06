import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./LogoutCard.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/login/actions";
import { logoutStartup } from "../../store/startup/actions";
import { Navigate, useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #ffffff",
  boxShadow: 24,
  p: 4,
};

const LogoutCard = () => {
  let navigate = useNavigate();
  const type: any = useSelector<any>((state) => state.loginReducerHandler.type);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    if (type === "investor") {
      navigate("/", { replace: true });
      dispatch(logout());
      window.location.reload();
    } else {
      dispatch(logoutStartup());
      navigate("/", { replace: true });
      window.location.reload();
    }
  };

  return (
    <>
      <Box sx={style} textAlign="center">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you want to <b>Logout</b>
        </Typography>
        <Box mt={2}>
          <Button
            className="btnPopupLogout"
            sx={{ mr: 2 }}
            onClick={logoutHandler}
          >
            Yes
          </Button>
          <Button className="btnPopupLogout">No</Button>
        </Box>
      </Box>
    </>
  );
};

export default LogoutCard;
