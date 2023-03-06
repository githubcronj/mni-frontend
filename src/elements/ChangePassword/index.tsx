import React from "react";
import {
  Box,
  Typography,
  Grid,
  InputAdornment,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import "./ChangePassword.css";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const noPointer = { cursor: "pointer" };

  return (
    <>
      <Box
        mt={13}
        // mx={7}
        bgcolor="#EFF3F3"
        height="83vh"
        p={3.5}
        className="xyz"
        sx={{
          mx: { md: 7, sm: 4 },
        }}
      >
        <Box className="name-display-none-heading" mb={2}>
          <Typography
            variant="subtitle2"
            color="#01010159"
            component="span"
            pr={1}
          >
            PROFILE
          </Typography>
          <Typography variant="subtitle2" color="#01010159" component="span">
            {" "}
            &gt;
          </Typography>
        </Box>
        <Box className="name-display-none">
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontFamily: "light",
              fontWeight: "600",
              opacity: ".8",
              textAlign: "left",
              fontSize: { xs: "40px", lg: "45px" },
            }}
          >
            Change Password
          </Typography>
        </Box>

        <Grid
          container
          pt={12}
          sx={{
            textAlign: "center",
            display: "block",
            pt: { lg: 12, xs: 1, sm: 12 },
          }}
        >
          <Grid item>
            <FormControl
              variant="outlined"
              sx={{
                minWidth: "40%",
                backgroundColor: "#fff",
                mt: "20px",
                width: { sm: "90%", md: "40%", xs: "100%" },
              }}
            >
              <InputLabel
                htmlFor="Change-password-placeholder"
                className="border-none-input"
                sx={{ fontFamily: "medium", pt: 1 }}
              >
                New Password
              </InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                id="Change-password-placeholder"
                label="New Password"
                sx={{ height: "68px" }}
                placeholder=""
                endAdornment={
                  <InputAdornment
                    position="start"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    style={noPointer}
                    sx={{ opacity: ".8" }}
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </InputAdornment>
                }
              ></OutlinedInput>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl
              variant="outlined"
              sx={{
                minWidth: "40%",
                backgroundColor: "#fff",
                mt: "20px",
                border: "none",
                width: { sm: "90%", md: "40%", xs: "100%" },
              }}
            >
              <InputLabel
                htmlFor="Change-password-placeholder"
                sx={{ fontFamily: "medium", pt: 1 }}
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="Change-password-placeholder"
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                sx={{ height: "68px" }}
                endAdornment={
                  <InputAdornment
                    position="start"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    style={noPointer}
                    sx={{ opacity: ".8" }}
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </InputAdornment>
                }
              ></OutlinedInput>
            </FormControl>
          </Grid>
          <Grid item>
            <Link to={"/Dashboard"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  Width: "40%",
                  backgroundColor: "#138707",
                  fontSize: "16px",
                  fontFamily: "bold",
                  height: "68px",
                  borderRadius: "0px",
                  position: "relative",
                  textTransform: "none",
                  width: { sm: "90%", md: "40%", xs: "100%" },
                  mt: { sm: "30px", md: "30px", xs: "18em" },
                }}
                endIcon={<CheckIcon className="Checked-icon" />}
              >
                Confirm
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChangePassword;
