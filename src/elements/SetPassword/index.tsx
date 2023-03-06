import React from "react";
import bg from "./img/welcomeStartup.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Typography,
  Box,
  Grid,
  FormControl,
  Button,
  InputLabel,
  InputAdornment,
  IconButton,
  Link,
  Breadcrumbs,
} from "@mui/material";
import "./setpassword.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Check, CheckCircleOutline } from "@mui/icons-material";
import { getRegisterFetch } from "../../store/register/actions";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Navigate } from "react-router-dom";

interface State {
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}
function InvestorSetPassword() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector<RootState, any>(
  //   (state) => state.registerReducerHandler.isLoggedIn
  // );
  // console.log(isLoggedIn);

  const [values, setValues] = React.useState<State>({
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  console.log(values);

  let redirect = null;

  // if (isLoggedIn) {
  //   redirect = <Navigate to="/dashboard" />;
  // }

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

  return (
    <>
      {redirect}
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
            className="set-password-form"
          >
            <Box
              sx={{
                mt: { lg: "40px", md: "40px", sm: "20px", xs: "10px" },
                ml: { lg: "20px", md: "20px", sm: "45px", xs: "45px" },
              }}
            >
              <Box>
                <Breadcrumbs
                  aria-label="breadcrumb"
                  separator={<NavigateNextIcon fontSize="small" />}
                >
                  <Link
                    href="/"
                    color="black"
                    variant="subtitle2"
                    underline="none"
                  >
                    HOME
                  </Link>
                  <Link
                    href="/investor-register"
                    color="black"
                    variant="subtitle2"
                    underline="none"
                  >
                    REGISTER
                  </Link>
                </Breadcrumbs>
              </Box>

              <Box>
                <Typography
                  variant="h2"
                  gutterBottom
                  component="div"
                  className="form-heading"
                  sx={{ color: "#FF9A33", mt: "10px" }}
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
                  sx={{ minWidth: "84%", backgroundColor: "#fff", mt: "20px" }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Create Password
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
                <FormControl
                  id="password"
                  variant="outlined"
                  sx={{ minWidth: "84%", backgroundColor: "#fff", mt: "20px" }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.confirmPassword}
                    onChange={handleChange("confirmPassword")}
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
                <Box>
                  <Button
                    variant="contained"
                    // onClick={() => dispatch(getRegisterFetch(values))}
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
                    endIcon={<Check className="arrow-icon" fontSize="large" />}
                  >
                    Create Account
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default InvestorSetPassword;
