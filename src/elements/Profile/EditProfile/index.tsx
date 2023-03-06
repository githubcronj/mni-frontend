import React, { useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  InputBase,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./editprofile.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import user from "../img/user.png";
import FormButton from "../../utils/buttons/SuccessButton";
import ClearIcon from "@mui/icons-material/Clear";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInvestorProfile,
  getProfile,
} from "../../../store/login/actions";
interface prop {
  key?: any;
}

interface State {
  description: any;
  name: any;
  email: any;
  companyName: any;
  occupation: any;
  industry: any;
  location: any;
  areaOfExpertise: any;
  companiesBacked: any;
}

const EditProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("id"))
      dispatch(getProfile(localStorage.getItem("id")));
    if (sessionStorage.getItem("id"))
      dispatch(getProfile(sessionStorage.getItem("id")));
  }, []);

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
    description: investorData?.description,
    name: investorData?.name,
    email: investorData?.email,
    companyName: "",
    occupation: investorData?.occupation,
    industry: investorData?.industry,
    location: investorData?.location,
    areaOfExpertise: investorData?.areaOfExpertise,
    companiesBacked: investorData?.companiesBacked,
  });

  let navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#010101"
      fontSize="14px"
      href="/dashboard"
      sx={{ opacity: "66%" }}
    >
      HOME
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#010101"
      fontSize="14px"
      href="/login"
      sx={{ opacity: "66%" }}
    >
      LOGIN
    </Link>,
  ];

  const id = useSelector((state: any) => {
    return state.loginReducerHandler.login[0]?.uId;
  });

  const [state, setState] = useState({});

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (prop === "areaOfExpertise" || prop === "companiesBacked")
        setValues({ ...values, [prop]: event.target.value.split(",") });
      else setValues({ ...values, [prop]: event.target.value });
    };

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = () => {
    let obj: any = {};
    for (let [key, value] of Object.entries(values)) {
      if (value === "") {
        continue;
      } else {
        obj[key] = value;
      }
    }
    dispatch(updateInvestorProfile(obj, id));
    navigate("/dashboard", { replace: true });
  };
  return (
    <Box className="main-container bg-grey mx">
      <Grid container rowSpacing={2} spacing={3} rowGap={1}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Typography className="size-sm light">Edit Profile</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          className="save-profile-btn-container"
          onClick={() => {
            handleSubmit();
          }}
        >
          <FormButton label="Save" className="btn save-profile-btn" />
        </Grid>
        <Grid item xs={12} className="align avatar-position">
          <Box>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={<AddCircleIcon className="green " />}
            >
              <Avatar
                alt="Travis Howard"
                src={user}
                sx={{ width: 154, height: 154 }}
              />
            </Badge>
          </Box>
        </Grid>
        <Grid item xs={12} className="align text-area-container">
          <InputBase
            multiline
            rows={6}
            className="bg-white text-field book text-area"
            placeholder="About yourself"
            onChange={handleChange("description")}
            value={values?.description}
          />
        </Grid>
      </Grid>
      <Grid
        container
        mt={1}
        rowSpacing={2}
        columnSpacing={6}
        rowGap={2}
        sx={{ p: { xs: 0, sm: 0, md: 3 }, mb: { xs: "80px", sm: 0 } }}
        className="edit-profile-fields-container"
      >
        <Grid item xs={12} sm={12} md={6} lg={6} wrap="nowrap">
          <InputBase
            className="bg-white text-field book field-height"
            fullWidth
            placeholder="Name"
            value={values?.name}
            onChange={handleChange("name")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} wrap="nowrap">
          <InputBase
            disabled
            className="bg-white text-field book field-height"
            fullWidth
            placeholder="Email"
            value={values?.email}
            onChange={handleChange("email")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} wrap="nowrap">
          <InputBase
            disabled
            className="bg-white text-field book field-height"
            fullWidth
            placeholder="Company Name"
            value={values?.companyName}
            onChange={handleChange("companyName")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} wrap="nowrap">
          <InputBase
            className="bg-white text-field book field-height"
            fullWidth
            placeholder="Occupation"
            value={values?.occupation}
            onChange={handleChange("occupation")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} wrap="nowrap">
          <InputBase
            className="bg-white text-field book field-height"
            fullWidth
            placeholder="Industry"
            value={values?.industry}
            onChange={handleChange("industry")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} wrap="nowrap">
          <InputBase
            className="bg-white text-field book field-height"
            fullWidth
            placeholder="Location"
            value={values?.location}
            onChange={handleChange("location")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} wrap="nowrap">
          <InputBase
            className="bg-white text-field book field-height"
            fullWidth
            placeholder="Area of Expertise"
            endAdornment={
              <InputAdornment position="start">
                <Button className="bg-green white add-btn ">Add</Button>
              </InputAdornment>
            }
            value={values?.areaOfExpertise}
            onChange={handleChange("areaOfExpertise")}
          />
          <Box className="tags-container">
            {Array.from(Array(10)).map((_, index) => (
              <Box sx={{ display: "flex" }}>
                <FormHelperText className="grey">Google</FormHelperText>
                <ClearIcon className="green" fontSize="small" />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} wrap="nowrap">
          <InputBase
            className="bg-white text-field book field-height"
            fullWidth
            placeholder="Companies Backed"
            value={values?.companiesBacked}
            onChange={handleChange("companiesBacked")}
            endAdornment={
              <InputAdornment position="start">
                <Button className="bg-green white add-btn ">Add</Button>
              </InputAdornment>
            }
          />
          <Box className="tags-container">
            {Array.from(Array(10)).map((_, index) => (
              <Box sx={{ display: "flex" }}>
                <FormHelperText className="grey">Google</FormHelperText>
                <ClearIcon className="green" fontSize="small" />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
