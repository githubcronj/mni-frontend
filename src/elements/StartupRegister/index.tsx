import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./StartupRegister.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InvestorSetPassword from "../InvestorSetPassword";

interface State {
  companyName: any;
  email: any;
  location: any;
  industry: any;
  founded: any;
  equityOffer: any;
  askPrice: any;
  companyInfo: any;
  password: any;
  confirmPassword: any;
}
interface ErrorState {
  companyName: any;
  email: any;
  location: any;
  industry: any;
  founded: any;
  equityOffer: any;
  askPrice: any;
  companyInfo: any;
  password: any;
  confirmPassword: any;
}

const StartupRegister = () => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const isLoggedIn = useSelector<any>(
    (state) => state.startupReducer.isLoggedIn
  );
  const errorMsg: any = useSelector<any>((state) => state.startupReducer.error);

  const [values, setValues] = React.useState<State>({
    companyName: "",
    email: "",
    industry: "",
    location: "",
    founded: "",
    equityOffer: "",
    askPrice: "",
    companyInfo: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = React.useState<ErrorState>({
    companyName: "",
    email: "",
    location: "",
    industry: "",
    founded: "",
    equityOffer: "",
    askPrice: "",
    companyInfo: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setshowPassword] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    formValidation(values);
  }, [values]);

  const handleChange =
    (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleNextSubmit = (e: any) => {
    console.log(values);
    e.preventDefault();
    setIsFocused(true);
    formValidation(values);
    if (
      errors.companyName === "" &&
      errors.email === "" &&
      errors.industry === "" &&
      errors.location === "" &&
      errors.askPrice === "" &&
      errors.companyInfo === "" &&
      errors.founded === "" &&
      errors.equityOffer === "" &&
      values.companyName !== "" &&
      values.email !== "" &&
      values.industry !== "" &&
      values.askPrice !== "" &&
      values.companyInfo !== "" &&
      values.equityOffer !== "" &&
      values.founded !== "" &&
      values.location !== ""
    ) {
      setNext(true);
    }
  };

  const formValidation = (values: any) => {
    var passwordValidation =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (
      values.companyName === "" ||
      !values.companyName.match(/^[a-zA-Z\s]*$/)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        companyName: "Please enter a Valid name.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, companyName: "" }));
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
    if (values.location === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        location: "Please enter a valid location",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, location: "" }));
    }
    if (values.industry === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        industry: "Please enter a valid industry",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, industry: "" }));
    }
    if (values.founded === "" || !values.founded.match(/^[0-9]*$/)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        founded: "Invalid value",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, founded: "" }));
    }
    if (values.equityOffer === "" || !values.equityOffer.match(/^[0-9]*$/)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        equityOffer: "Invalid value",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, equityOffer: "" }));
    }
    if (values.askPrice === "" || !values.askPrice.match(/^[0-9]*$/)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        askPrice: "Please enter a value",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, askPrice: "" }));
    }
    if (values.companyInfo === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        companyInfo: "Please enter the company's information",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, companyInfo: "" }));
    }
  };

  return (
    <>
      {!next ? (
        <Box
          className="main-startup-reg-container"
          sx={{ mx: { lg: "4rem", md: "2rem", sm: "2rem" } }}
        >
          <Box display="flex" alignItems="center">
            <Typography>Home</Typography>
            <ArrowForwardIosIcon sx={{ color: "#707070", fontSize: "14px" }} />
          </Box>
          <Typography className="header-startup-reg" variant="h2">
            Register
          </Typography>

          <Grid container spacing={2}>
            <Grid item lg={6} xs={12} md={6}>
              <TextField
                className="input-field"
                label="Company Name"
                name="companyName"
                onChange={handleChange("companyName")}
                fullWidth
                sx={{
                  mt: 3,
                }}
              />
              {errors["companyName"] && isFocused && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.companyName.toUpperCase()}
                </FormHelperText>
              )}
              <TextField
                className="input-field"
                label="Email Id"
                name="email"
                onChange={handleChange("email")}
                fullWidth
                sx={{
                  mt: 3,
                }}
              />
              {errors["email"] && isFocused && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.email.toUpperCase()}
                </FormHelperText>
              )}
              <TextField
                className="input-field"
                label="Industry"
                name="industry"
                onChange={handleChange("industry")}
                fullWidth
                sx={{
                  mt: 3,
                }}
              />
              {errors["industry"] && isFocused && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.industry.toUpperCase()}
                </FormHelperText>
              )}
              <TextField
                className="input-field"
                label="Location"
                name="location"
                onChange={handleChange("location")}
                fullWidth
                sx={{
                  mt: 3,
                }}
              />
              {errors["location"] && isFocused && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.location.toUpperCase()}
                </FormHelperText>
              )}
              <TextField
                className="input-field"
                label="Founded"
                name="founded"
                onChange={handleChange("founded")}
                fullWidth
                sx={{
                  mt: 3,
                }}
              />
              {errors["founded"] && isFocused && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.founded.toUpperCase()}
                </FormHelperText>
              )}
            </Grid>
            <Grid item lg={6} xs={12} md={6}>
              <TextField
                className="input-field"
                label="Equity Offer"
                name="equityOffer"
                onChange={handleChange("equityOffer")}
                fullWidth
                sx={{
                  mt: 3,
                }}
              />
              {errors["equityOffer"] && isFocused && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.equityOffer.toUpperCase()}
                </FormHelperText>
              )}
              <TextField
                className="input-field"
                label="Ask Price"
                name="askPrice"
                onChange={handleChange("askPrice")}
                fullWidth
                sx={{
                  mt: 3,
                }}
              />
              {errors["askPrice"] && isFocused && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.askPrice.toUpperCase()}
                </FormHelperText>
              )}
              <TextField
                className="input-field"
                label="Company Info"
                name="companyInfo"
                onChange={handleChange("companyInfo")}
                multiline
                rows={5}
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                }}
              />
              {errors["companyInfo"] && isFocused && (
                <FormHelperText sx={{ color: "red" }}>
                  {errors.companyInfo.toUpperCase()}
                </FormHelperText>
              )}
              <Button
                variant="contained"
                color="success"
                className="next-btn"
                onClick={handleNextSubmit}
                endIcon={
                  <ArrowRightAltIcon className="arrow" fontSize="large" />
                }
              >
                Next
              </Button>
            </Grid>
          </Grid>

          <Box
            display="flex"
            justifyContent="center"
            className="footer-startup-reg"
          >
            <Typography variant="subtitle1">
              Already have an account?
            </Typography>
            <Typography
              className="footer-login"
              variant="subtitle1"
              component={Link}
              to="/startup-login"
            >
              Login
            </Typography>
          </Box>
        </Box>
      ) : (
        <InvestorSetPassword registerData={values} />
      )}
    </>
  );
};

export default StartupRegister;
