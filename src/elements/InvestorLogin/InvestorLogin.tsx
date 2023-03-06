import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginFetch } from "../../store/login/actions";
import "./InvestorLogin.css";
import bg from "./img/welcomeInvestor.png";
// import * as Action from "../../store/login/actions";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import OutlinedInput from "@mui/material/OutlinedInput";
// import loginActions from "../../store/login/actions";
// import {
//   getLoginSelector,
//   getErrorSelector,
// } from "../../store/login/selectors";
// import { fetchLoginRequest } from "../../store/login/actions";
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
  // Card,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { Container } from "@mui/system";
// import { bindActionCreators } from "redux";
import type { RootState } from "../../store";
import { Navigate } from "react-router-dom";

interface State {
  password: string;
  email: any;
  isChecked: any;
}

function InvestorLogin() {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const isLoggedIn = useSelector<any>(
    (state) => state.loginReducerHandler.isLoggedIn
  );
  const errorMsg: any = useSelector<any>(
    (state) => state.loginReducerHandler.error
  );

  const [values, setValues] = React.useState<State>({
    password: "",
    email: "",
    isChecked: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    formValidation(values);
  }, [values]);

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
    if (errors.email === "" && errors.password === "") {
      dispatch(getLoginFetch(values));
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/dashboard" />
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
              <img
                src={bg}
                alt="test"
                style={{ width: "100%", height: "100%" }}
              />
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
                    component="div"
                    className="form-heading light"
                    sx={{ color: "#138707", mt: "10px" }}
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
                    Connect with the brilliant minds behind the top startups in
                    India
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
                      // type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            // onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {/* {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )} */}
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
                    <Grid
                      item
                      xs={5}
                      sm={6}
                      id="signin"
                      className="login-content"
                    >
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
                    <Grid item xs={5} sm={6} id="signin">
                      <Typography
                        variant="subtitle1"
                        className="underline-link orange"
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
                      className="Login-btn"
                      sx={{
                        marginTop: "30px",
                        minWidth: "83%",
                        backgroundColor: "#138707",
                        fontSize: "20px",
                        height: "68px",
                        borderRadius: "0px",
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
                  <Grid item xs={12} sx={{ mt: 3 }} className="align">
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      sx={{ color: "#010101", opacity: "0.75" }}
                    >
                      Don't have an account?{" "}
                      <a
                        className="underline-link orange"
                        href="/investor-register"
                      >
                        Register
                      </a>
                    </Typography>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default InvestorLogin;
