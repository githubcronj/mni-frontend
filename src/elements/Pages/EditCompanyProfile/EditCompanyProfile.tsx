import "./EditCompanyProfile.css";
import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Link,
  Tab,
  createTheme,
  colors,
  ThemeProvider,
  Button,
  Typography,
  Grid,
  FormControl,
  TextField,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import uploadImgIcon from "../../../Assets/image/uploadImgIcon.svg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import calendarImg from "../../../Assets/image/calendarIcon.svg";
import { updateStartupProfile } from "../../../store/startup/actions";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

interface State {
  companyName: any;
  askPrice: any;
  equityOffer: any;
  industry: any;
  founded: any;
  location: any;
  companyInfo: any;
}

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.lightGreen[900],
    },
  },
});
export const calenderIcon = () => {
  return <img src={calendarImg} />;
};
export const EditCompanyProfile = () => {
  const [value, setValue] = React.useState<Date | null>(null);
  const isLoggedIn = useSelector<any>(
    (state) => state.startupReducer.isLoggedIn
  );

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isLoggedIn]);

  const startupData: any = useSelector<any>(
    (state) => state.startupReducer?.login[0]
  );
  console.log("update-profile-priyanka", startupData);

  const [values, setValues] = useState<State>({
    companyName: startupData?.companyName,
    askPrice: startupData?.askPrice,
    equityOffer: startupData?.equityOffer,
    industry: startupData?.industry,
    founded: startupData?.founded,
    location: startupData?.location,
    companyInfo: startupData?.companyInfo,
  });

  const id = useSelector((state: any) => {
    return state.startupReducer.login[0]?.userId;
  });

  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = () => {
    let obj: any = {};
    for (let [key, value] of Object.entries(values)) {
      if (value === "") {
        continue;
      } else {
        obj[key] = value;
      }
    }
    dispatch(updateStartupProfile(obj, id));
    navigate("/startup-dashboard", { replace: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          px: { xs: 0, sm: 4 },
          mx: { sm: 4 },
          position: { xs: "relative", sm: "unset" },
          pb: { sm: "unset", xs: "80px" },
          mt: { sm: 1, xs: "-40px" },
        }}
      >
        <Breadcrumbs
          className="breadcrumbStyle"
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link href="/home" color="black" variant="subtitle2" underline="none">
            HOME
          </Link>
          <Link href="/home" color="black" variant="subtitle2" underline="none">
            LOGIN
          </Link>
          <Link href="/home" color="black" variant="subtitle2" underline="none">
            STARTUP
          </Link>
        </Breadcrumbs>

        <Box>
          <Grid
            sx={{
              position: { sm: "relative", xs: "unset" },
              display: { sm: "flex" },
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "42px", xs: "34px" },
                fontWeight: "bold",
                paddingTop: "10px",
                mx: { sm: 0, xs: 1 },
              }}
            >
              Edit
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleSubmit()}
              sx={{
                minWidth: "212px",
                backgroundColor: "#138707",
                fontSize: "16px",
                fontFamily: "bold",
                height: "61px",
                borderRadius: "0px",
                position: "absolute",
                right: { xs: "20px", sm: 0 },
                left: { xs: "20px", sm: "unset" },
                bottom: 0,
              }}
            >
              Save
            </Button>
          </Grid>
        </Box>

        <Box bgcolor="#EFF3F3" height="100%" mt={5} pb={3}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Typography
                className="HeadText"
                sx={{ ml: { sm: "10%", xs: "2.5%" } }}
              >
                Upload Logo
              </Typography>
              <Box
                className="abcd"
                sx={{
                  width: { sm: "80%", xs: "95%" },
                  backgroundColor: "#ffffff",
                  margin: "auto",
                  border: "0.7px dashed #FF9A33",
                  display: "flex",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <Box
                  sx={{ textAlign: "center" }}
                  className="upload_Grid"
                  component="label"
                >
                  <input type="file" hidden />
                  <img src={uploadImgIcon} style={{ maxWidth: "60%" }} />
                  <Typography sx={{ color: "#FF9A33", fontSize: "13px" }}>
                    Click to upload image
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography
                className="HeadText"
                sx={{ ml: { sm: "10%", xs: "2.5%" } }}
              >
                Upload Thumbnail video/Picture
              </Typography>
              <Box
                className="abcd"
                sx={{
                  width: { sm: "80%", xs: "95%" },
                  backgroundColor: "#ffffff",
                  margin: "auto",
                  border: "0.7px dashed #FF9A33",
                  display: "flex",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <Box
                  sx={{ textAlign: "center" }}
                  className="upload_Grid"
                  component="label"
                >
                  <input type="file" hidden />
                  <img src={uploadImgIcon} style={{ maxWidth: "60%" }} />
                  <Typography sx={{ color: "#FF9A33", fontSize: "13px" }}>
                    Click to upload image and video
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item md={6} xs={12}>
              <Grid sx={{ width: { sm: "80%", xs: "95%" }, margin: "auto" }}>
                <Typography className="HeadText">Company Name</Typography>
                <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                  <TextField
                    placeholder="Please enter text"
                    value={values?.companyName}
                    onChange={handleChange("companyName")}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid sx={{ width: { sm: "80%", xs: "95%" }, margin: "auto" }}>
                <Typography className="HeadText">Ask Price</Typography>
                <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                  <TextField
                    placeholder="Please enter Ask Price"
                    value={values?.askPrice}
                    onChange={handleChange("askPrice")}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item md={6} xs={12}>
              <Grid sx={{ width: { sm: "80%", xs: "95%" }, margin: "auto" }}>
                <Typography className="HeadText">Equity Offer</Typography>
                <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                  <TextField
                    placeholder="Please enter equity offer"
                    value={values?.equityOffer}
                    onChange={handleChange("equityOffer")}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid sx={{ width: { sm: "80%", xs: "95%" }, margin: "auto" }}>
                <Typography className="HeadText">Industry</Typography>
                <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                  <TextField
                    placeholder="Please enter industry"
                    value={values?.industry}
                    onChange={handleChange("industry")}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item md={6} xs={12}>
              <Grid sx={{ width: { sm: "80%", xs: "95%" }, margin: "auto" }}>
                <Typography className="HeadText">Founded in</Typography>
                <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      // value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      components={{ OpenPickerIcon: calenderIcon }}
                      renderInput={(params) => <TextField {...params} />}
                      value={values?.founded}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid sx={{ width: { sm: "80%", xs: "95%" }, margin: "auto" }}>
                <Typography className="HeadText">Location</Typography>
                <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                  <TextField
                    placeholder="Please enter location"
                    value={values?.location}
                    onChange={handleChange("location")}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item md={6} xs={12}>
              <Grid sx={{ width: { sm: "80%", xs: "95%" }, margin: "auto" }}>
                <Typography className="HeadText">Company Info</Typography>
                <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
                  <TextField
                    multiline
                    rows={6}
                    placeholder="Please enter companyInfo"
                    value={values?.companyInfo}
                    onChange={handleChange("companyInfo")}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EditCompanyProfile;
