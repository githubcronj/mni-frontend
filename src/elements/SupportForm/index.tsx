import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import CancelBtn from "../utils/buttons/CancelBtn";
import FormButton from "../utils/buttons/SuccessButton";
import RegisterButton from "../utils/buttons/SuccessButton";
import "./supportform.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

interface State {
  description: any;
  name: any;
  email: any;
  subject: any;
  typeOfIssue: any;
}

const SupportForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector<any>(
    (state) => state.loginReducerHandler.isLoggedIn
  );

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isLoggedIn]);

  const investorData: any = useSelector<any>(
    (state) => state.loginReducerHandler?.login[0]
  );

  const [values, setValues] = useState<State>({
    description: "",
    name: investorData?.name,
    email: investorData?.email,
    subject: "",
    typeOfIssue: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = () => {
    console.log(values);
    // dispatch(updateInvestorProfile(obj, id));
    // navigate("/dashboard", { replace: true });
  };

  return (
    <Box className="main-support-container">
      <Box display="flex">
        <Typography className="header-text">HOME</Typography>
        <ArrowForwardIosIcon fontSize="small" sx={{ color: "#707070" }} />
      </Box>
      <Typography className="header-support-text" variant="h5">
        Support
      </Typography>

      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mt="10px"
      >
        <Grid item lg={6} xs={12} md={6}>
          <TextField
            className="support-text-field"
            label="Name"
            fullWidth
            onChange={handleChange("name")}
            value={values?.name}
          />
        </Grid>
        <Grid item lg={6} xs={12} md={6}>
          <TextField
            className="support-text-field"
            label="Email"
            fullWidth
            onChange={handleChange("email")}
            value={values?.email}
          />
        </Grid>
        <Grid item lg={6} xs={12} md={6}>
          <TextField
            className="support-text-field"
            label="Subject"
            fullWidth
            onChange={handleChange("subject")}
            value={values?.subject}
          />
        </Grid>
        <Grid item lg={6} xs={12} md={6}>
          <TextField
            className="support-text-field"
            label="Type of issue"
            fullWidth
            onChange={handleChange("typeOfIssue")}
            value={values?.typeOfIssue}
          />
        </Grid>
        <Grid item lg={12} xs={12} md={12}>
          <TextField
            label="Description"
            multiline
            rows={6}
            fullWidth
            className="support-text-field"
            onChange={handleChange("description")}
            value={values?.description}
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Box display="flex" justifyContent="right">
            <CancelBtn
              label="Cancel"
              className="sbtn"
              component={Link}
              to="/dashboard"
            />
            <FormButton value={values} label="Submit" className="sbtn" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SupportForm;
