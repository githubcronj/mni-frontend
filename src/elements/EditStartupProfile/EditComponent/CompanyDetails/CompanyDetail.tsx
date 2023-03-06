import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Typography,
  Grid,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import "./CompanyDetail.css";
import facebookIcon from "./img/facebook.png";
import linkedinIcon from "./img/linkedin.png";
import instaIcon from "./img/insta.png";

interface State {
  companyName: any;
  askPrice: any;
  equityOffer: any;
  industry: any;
  founded: any;
  location: any;
  companyInfo: any;
  companyValuation: any;
  employeeCount: any;
  form: any;
  websiteUrl: any;
}

const CompanyDetail = (props: any) => {
  let { startUpData, id } = props;

  console.log("STARTUP DATA PROFILE --->", startUpData);

  console.log("STARTUP DATA PROFILE ID --->", id);

  const [values, setValues] = useState<State>({
    companyName: startUpData?.companyName,
    askPrice: startUpData?.askPrice,
    equityOffer: startUpData?.equityOffer,
    industry: startUpData?.industry,
    founded: startUpData?.founded,
    location: startUpData?.location,
    companyInfo: startUpData?.companyInfo,
    companyValuation: startUpData?.companyValuation,
    employeeCount: startUpData?.employeeCount,
    form: startUpData?.form,
    websiteUrl: startUpData?.websiteUrl,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  props.receiveData(values);

  return (
    <>
      <Grid container sx={{ px: { md: 6, sm: 1 } }} columnSpacing={6}>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Equity Offer</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.equityOffer}
              onChange={handleChange("equityOffer")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Ask Price</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.askPrice}
              onChange={handleChange("askPrice")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Legal Name</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.companyName}
              onChange={handleChange("companyName")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Founded</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.founded}
              onChange={handleChange("founded")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Type Of Industry</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.industry}
              onChange={handleChange("industry")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Form</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.form}
              onChange={handleChange("form")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Company Valuation</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.companyValuation}
              onChange={handleChange("companyValuation")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Headquarters</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.location}
              onChange={handleChange("location")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Employees Count</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.employeeCount}
              onChange={handleChange("employeeCount")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Website URL</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.websiteUrl}
              onChange={handleChange("websiteUrl")}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography className="textHeading">Social Media</Typography>
          <FormControl
            sx={{
              width: { lg: "50%", xs: "100%" },
              backgroundColor: "#fff",
              mb: "26px",
            }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Paste Facebook Link"
              startAdornment={
                <InputAdornment position="start">
                  <img src={facebookIcon} />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            sx={{
              width: { lg: "50%", xs: "100%" },
              backgroundColor: "#fff",
              mb: "26px",
            }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Paste Linkdin Link"
              startAdornment={
                <InputAdornment position="start">
                  <img src={linkedinIcon} />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            sx={{
              width: { lg: "50%", xs: "100%" },
              backgroundColor: "#fff",
              mb: "26px",
            }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Paste Instagram Link"
              startAdornment={
                <InputAdornment position="start">
                  <img src={instaIcon} />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyDetail;
