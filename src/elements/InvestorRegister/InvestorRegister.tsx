import React, { useState, useEffect } from "react";
import bg from "./img/welcomeInvestor.png";
import { Link as Links } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  Typography,
  Box,
  Grid,
  FormControl,
  Button,
  TextField,
  Link,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "./InvestorRegister.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { getRegisterFetch } from "../../store/register/actions";
import "../InvestorSetPassword/investorsetpassword.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Check, CheckCircleOutline, ErrorSharp } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

interface State {
  name: string;
  email: any;
  location: any;
  phoneNumber: any;
  description: any;
  age: any;
  password: string;
  confirmPassword: string;
}
interface ErrorState {
  name: string;
  email: any;
  location: any;
  age: any;
  password: string;
  confirmPassword: string;
}

function InvestorRegister() {
  const [value, setValue] = React.useState<Date | null>(null);
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const isLoggedIn = useSelector<any>(
    (state) => state.loginReducerHandler.isLoggedIn
  );
  const errorMsg: any = useSelector<any>(
    (state) => state.registerReducerHandler.error
  );

  const [values, setValues] = React.useState<State>({
    password: "",
    email: "",
    name: "",
    location: "",
    age: "99",
    confirmPassword: "",
    phoneNumber: "7253-8265-3356",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  });

  const [errors, setErrors] = React.useState<ErrorState>({
    name: "",
    email: "",
    password: "",
    location: "",
    age: "",
    confirmPassword: "",
  });

  const [showPassword, setshowPassword] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    formValidation(values);
  }, [values]);

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formValidation = (values: any) => {
    var passwordValidation =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (values.name === "" || !values.name.match(/^[a-zA-Z\s]*$/)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Please enter a Valid name.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
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
    if (
      values.confirmPassword === "" ||
      !values.confirmPassword.match(passwordValidation) ||
      values.confirmPassword !== values.password
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Invalid Password",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
    if (values.age === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: "Please enter a Valid age",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, age: "" }));
    }
    if (values.location === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        location: "Please enter a valid location",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, location: "" }));
    }
  };

  const handleNextSubmit = (e: any) => {
    e.preventDefault();
    setIsFocused(true);
    formValidation(values);
    if (
      errors.name === "" &&
      errors.email === "" &&
      errors.age === "" &&
      errors.location === "" &&
      values.name !== "" &&
      values.email !== "" &&
      values.age !== "" &&
      values.location !== ""
    ) {
      setNext(true);
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setIsPasswordFocused(true);
    formValidation(values);
    if (
      errors.name === "" &&
      errors.email === "" &&
      errors.age === "" &&
      errors.location === "" &&
      errors.password === "" &&
      errors.confirmPassword === "" &&
      values.name !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.confirmPassword !== "" &&
      values.age !== "" &&
      values.location !== ""
    ) {
      dispatch(getRegisterFetch(values));
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
          <Grid container spacing={4} sx={{ mt: "100px" }}>
            <Grid xs={12} sm={12} md={6} xl={6} lg={6} className="img-welcome">
              <img
                src={bg}
                alt="test"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              xl={6}
              lg={6}
              sx={{ backgroundColor: "#eff3f3" }}
            >
              <Box
                sx={{
                  mt: { lg: "40px", md: "40px", sm: "20px", xs: "10px" },
                  ml: { lg: "20px", md: "20px", sm: "45px", xs: "45px" },
                }}
              >
                <Box>
                  <Link
                    id="Navigation"
                    sx={{
                      textDecoration: "none",
                      color: "#010101",
                      opacity: "0.75",
                    }}
                  >
                    HOME &nbsp; &gt;
                  </Link>
                </Box>
                {!next ? (
                  <>
                    <Box>
                      <Typography
                        variant="h2"
                        gutterBottom
                        component="div"
                        className="form-heading light"
                        sx={{ color: "#138707", mt: "10px" }}
                      >
                        Register
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
                        Connect with the brilliant minds behind the top startups
                        in India
                      </Typography>{" "}
                      <FormControl
                        id="fullname"
                        sx={{ minWidth: "84%", mb: "20px", mt: "20px" }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Enter Full Name"
                          variant="outlined"
                          name="name"
                          onChange={handleChange("name")}
                          sx={{ backgroundColor: "#fff", borderRadius: "0px" }}
                        />
                      </FormControl>
                      {errors["name"] && isFocused && (
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.name.toUpperCase()}
                        </FormHelperText>
                      )}
                      <FormControl
                        id="email"
                        sx={{ minWidth: "84%", mb: "20px" }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Email Id"
                          name="email"
                          onChange={handleChange("email")}
                          variant="outlined"
                          sx={{ backgroundColor: "#fff", mt: "20px" }}
                        />
                      </FormControl>
                      {errors["email"] && isFocused && (
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.email.toUpperCase()}
                        </FormHelperText>
                      )}
                      <FormControl id="address" sx={{ minWidth: "84%" }}>
                        <TextField
                          id="outlined-basic"
                          label="Location"
                          name="location"
                          value={values.location}
                          onChange={handleChange("location")}
                          variant="outlined"
                          sx={{
                            backgroundColor: "#fff",
                            mt: "20px",
                            mb: "20px",
                          }}
                        />
                      </FormControl>
                      {errors["location"] && isFocused && (
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.location.toUpperCase()}
                        </FormHelperText>
                      )}
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          disableFuture
                          label="Age"
                          openTo="year"
                          views={["year", "month", "day"]}
                          value={value}
                          onChange={(newValue: any) => {
                            setValue(newValue);
                          }}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              onChange={handleChange("age")}
                              sx={{
                                backgroundColor: "#fff",
                                minWidth: "84%",
                                mt: "20px",
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                      {errors["age"] && isFocused && (
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.age.toUpperCase()}
                        </FormHelperText>
                      )}
                    </Box>

                    <Box>
                      <Button
                        variant="contained"
                        color="success"
                        sx={{
                          marginTop: "40px",
                          minWidth: "84%",
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
                        className="btn"
                        // onClick={() => setNext(true)}
                        onClick={handleNextSubmit}
                        // onClick={handleCreateAccount}
                      >
                        Next
                      </Button>
                      {/* <ArrowRightAltIcon id="test-arrow" /> */}
                    </Box>
                    <Box
                      id="register"
                      sx={{
                        display: "flex",
                        columnGap: "10px",
                        mt: "30px",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: "#010101", opacity: "0.75" }}
                      >
                        Already have an account?
                        <a className="underline-link orange" href="/login">
                          Login
                        </a>
                      </Typography>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box>
                      <Typography
                        variant="h2"
                        component="div"
                        className="form-heading light"
                        sx={{ color: "#138707", mt: "10px" }}
                      >
                        Set Password
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
                        Login to Invest in startup & innovative
                      </Typography>

                      <FormControl
                        id="password"
                        variant="outlined"
                        onChange={handleChange("password")}
                        sx={{
                          minWidth: "84%",
                          backgroundColor: "#fff",
                          mt: "20px",
                        }}
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Create Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          value={values.password}
                          name="password"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
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
                      {errors["password"] && isPasswordFocused && (
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.password.toUpperCase()}
                        </FormHelperText>
                      )}
                      <FormControl
                        id="confirmPassword"
                        onChange={handleChange("confirmPassword")}
                        variant="outlined"
                        sx={{
                          minWidth: "84%",
                          backgroundColor: "#fff",
                          mt: "20px",
                        }}
                      >
                        <InputLabel htmlFor="outlined-adornment-confirm-password">
                          Confirm Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-confirm-password"
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={values.confirmPassword}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
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
                      {errors["confirmPassword"] && isPasswordFocused && (
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.confirmPassword.toUpperCase()}
                        </FormHelperText>
                      )}
                      <Box>
                        {errors.email === "" && errors.password === "" && (
                          <FormHelperText sx={{ color: "red" }}>
                            {errorMsg}
                          </FormHelperText>
                        )}
                        <Button
                          variant="contained"
                          color="success"
                          onClick={handleFormSubmit}
                          className="create-account-btn btn"
                          endIcon={
                            <Check className="arrow-icon" fontSize="large" />
                          }
                        >
                          Create Account
                        </Button>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default InvestorRegister;
