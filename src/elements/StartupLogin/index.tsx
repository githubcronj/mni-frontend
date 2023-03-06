import React, { useState, useEffect } from "react";
import { getLoginFetchStartup } from "../../store/startup/actions";
import "./startuplogin.css";
import bg from "./img/welcomeStartup.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Navigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Typography,
  Box,
  Grid,
  Button,
  IconButton,
  FormGroup,
  FormControlLabel,
  TextField,
  Link,
  Checkbox,
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText,
  Card,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Container } from "@mui/system";
import { Link as Links } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

interface State {
  password: string;
  showPassword: boolean;
  email: string;
  isChecked: any;
}

function StartupLogin() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<any>(
    (state) => state.startupReducer.isLoggedIn
  );
  const errorMsg: any = useSelector<any>((state) => state.startupReducer.error);
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
    email: "",
    isChecked: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    formValidation(values);
  }, [values]);

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  // console.log(window.innerHeight);

  const formValidation = (values: any) => {
    var passwordValidation =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
    if (
      values.email === "" ||
      !values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid Email",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
    if (values.password === "" || !values.password.match(passwordValidation)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Invalid Password",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleCheckbox = (e: any) => {
    setValues({ ...values, isChecked: e.target.checked });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formValidation(values);
    setIsFocused(true);
    console.log(values);
    console.log(errors);
    if (errors.email === "" && errors.password === "") {
      dispatch(getLoginFetchStartup(values));
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/startup-dashboard" />
      ) : (
        <Box
          sx={{
            mr: { xs: "0px", sm: "25px", md: "35px" },
            ml: { xs: "0px", sm: "50px", md: "55px" },
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              mt: "100px",
              mr: { sm: "100px", xs: "100px", md: "0px", xl: "0px", lg: "0px" },
            }}
          >
            <Grid xs={12} sm={12} md={6} xl={6} lg={6} className="img-welcome">
              <img src={bg} style={{ width: "100%", height: "100%" }} />
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={6}
              xl={6}
              lg={6}
              sx={{ backgroundColor: "#eff3f3" }}
            >
              <Box sx={{ mt: "40px", ml: "77px" }}>
                <Box>
                  <Link
                    id="Navigation"
                    sx={{
                      textDecoration: "none",
                      color: "#010101",
                      opacity: "0.75",
                    }}
                  >
                    HOME &gt;
                  </Link>
                </Box>
                <Box>
                  <Typography
                    variant="h2"
                    className="form-heading light orange"
                    sx={{ mt: "10px" }}
                  >
                    LogIn
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className="login-content"
                    sx={{ color: "#010101", opacity: "0.75" }}
                  >
                    Connect with experienced and successful investors
                  </Typography>
                </Box>
                <Box>
                  <FormControl id="email" sx={{ minWidth: "84%" }}>
                    <TextField
                      id="outlined-basic"
                      onChange={handleChange("email")}
                      label="Email or Phone Number"
                      variant="outlined"
                      sx={{ backgroundColor: "#fff", mt: "20px" }}
                    />
                  </FormControl>
                  {errors["email"] && isFocused && (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.email.toUpperCase()}
                    </FormHelperText>
                  )}
                </Box>
                <Box>
                  <FormControl
                    id="password"
                    variant="outlined"
                    sx={{
                      minWidth: "84%",
                      backgroundColor: "#fff",
                      mt: "20px",
                    }}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  {errors["password"] && isFocused && (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.password.toUpperCase()}
                    </FormHelperText>
                  )}
                </Box>
                {errors.email === "" && errors.password === "" && (
                  <FormHelperText sx={{ color: "red" }}>
                    {errorMsg}
                  </FormHelperText>
                )}
                <Box>
                  <Grid container spacing={6} sx={{ mt: "-20px" }}>
                    <Grid item xs={6} id="signin" className="login-content">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              style={{ color: "#FF9A33", fontSize: "16px" }}
                            />
                          }
                          label="Stay Signed In"
                          className="stay-sign"
                          onChange={handleCheckbox}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="subtitle1"
                        id="forgot"
                        className="underline-link orange "
                        component={Links}
                        to="/startup-forgot-password"
                      >
                        Forgot Password ?
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box>
                    <Button
                      variant="contained"
                      id="login-btn"
                      color="success"
                      onClick={handleSubmit}
                      className="login-btn btn"
                      sx={{
                        margin: "30px 0px",
                        minWidth: "83%",

                        fontSize: "20px",
                        height: "68px",

                        position: "relative",
                      }}
                      endIcon={
                        <ArrowRightAltIcon
                          className="arrow-icon"
                          fontSize="large"
                        />
                      }
                    >
                      LogIn
                    </Button>
                  </Box>
                  <Box className="align">
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      sx={{ color: "#010101", opacity: "0.75" }}
                    >
                      Don't have an account? &nbsp;{" "}
                      <a
                        className="underline-link orange"
                        href="/startup-register"
                      >
                        {" "}
                        Register
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default StartupLogin;
