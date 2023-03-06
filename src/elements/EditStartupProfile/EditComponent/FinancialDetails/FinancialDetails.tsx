import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Grid,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

interface State {
  yearlyGrossRevenue: any;
  yearlyNetProfit: any;
  lastQuarterGrossRevenue: any;
  lastQuarterNetProfit: any;
  lastMonthGrossRevenue: any;
  lastMonthNetProfit: any;
  assetsValue: any;
  liabilitiesValue: any;
  loans: any;
}

const FinancialDetails = (props: any) => {
  let { startUpData, id } = props;

  const [values, setValues] = useState<State>({
    yearlyGrossRevenue: startUpData?.yearlyGrossRevenue,
    yearlyNetProfit: startUpData?.yearlyNetProfit,
    lastQuarterGrossRevenue: startUpData?.lastQuarterGrossRevenue,
    lastQuarterNetProfit: startUpData?.lastQuarterNetProfit,
    lastMonthGrossRevenue: startUpData?.lastMonthGrossRevenue,
    lastMonthNetProfit: startUpData?.lastMonthNetProfit,
    assetsValue: startUpData?.assetsValue,
    liabilitiesValue: startUpData?.liabilitiesValue,
    loans: startUpData?.loans,
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
          <Typography className="textHeading">Yearly Gross Revenue</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.yearlyGrossRevenue}
              onChange={handleChange("yearlyGrossRevenue")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">
            Last Quarter Net Profit
          </Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.lastQuarterNetProfit}
              onChange={handleChange("lastQuarterNetProfit")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Yearly Net profit</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.yearlyNetProfit}
              onChange={handleChange("yearlyNetProfit")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Assets Value</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.assetsValue}
              onChange={handleChange("assetsValue")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">
            Last Quarter Gross Revenue
          </Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.lastQuarterGrossRevenue}
              onChange={handleChange("lastQuarterGrossRevenue")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Liabilities Value</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.liabilitiesValue}
              onChange={handleChange("liabilitiesValue")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">
            Last Quarter net profit
          </Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.lastQuarterNetProfit}
              onChange={handleChange("lastQuarterNetProfit")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">Loans</Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.loans}
              onChange={handleChange("loans")}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
          <Typography className="textHeading">
            Last Month Gross Revenue
          </Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#fff", mb: "26px" }}
          >
            <OutlinedInput
              sx={{ height: "68px" }}
              placeholder="Please enter text"
              value={values?.lastMonthGrossRevenue}
              onChange={handleChange("lastMonthGrossRevenue")}
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default FinancialDetails;
