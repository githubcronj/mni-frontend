import {
  Typography,
  InputBase,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import "./startupforgotpassword.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import bg from "../img/welcomeStartup.png";
import Body from "./Body";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const StartUpForgotPassword = () => {
  const [next, setNext] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const content = !next ? (
    <>
      <Typography variant="h2" className="light orange forgot-pw-heading">
        Forgot Password
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        className="book start-up-forgot-pw-text"
      >
        We'll send you a link to reset your password
      </Typography>
      <InputBase
        placeholder="Email Address"
        className="start-up-forgot-pw-input bg-white"
        fullWidth
      />
      <Button
        className="btn bg-green white start-up-forgot-pw-btn"
        fullWidth
        endIcon={
          <ArrowRightAltIcon
            className="start-up-forgot-pw-arrow-icon"
            fontSize="large"
          />
        }
        onClick={() => setNext(true)}
      >
        Send Link
      </Button>{" "}
    </>
  ) : (
    <>
      <Typography
        variant="h2"
        className="light orange start-up-forgot-pw-heading"
      >
        New Password
      </Typography>
      <Typography variant="subtitle1" className="book new-pw-text">
        Enter your new password
      </Typography>

      <InputBase
        placeholder="New Password"
        className=" bg-white new-pw-input"
        fullWidth
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <InputBase
        placeholder="Confirm Password"
        className="new-pw-input bg-white "
        fullWidth
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button
        className="btn bg-green white start-up-forgot-pw-btn"
        fullWidth
        endIcon={
          <CheckOutlinedIcon
            className="start-up-forgot-pw-arrow-icon"
            fontSize="small"
          />
        }
        component={Link}
        to="/startup-login"
      >
        Confirm
      </Button>
    </>
  );
  return <Body image={bg} content={content} />;
};

export default StartUpForgotPassword;
