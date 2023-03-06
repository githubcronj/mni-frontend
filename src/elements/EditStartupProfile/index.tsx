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
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CompanyDetail from "./EditComponent/CompanyDetails/CompanyDetail";
import FinancialDetails from "./EditComponent/FinancialDetails/FinancialDetails";
import UploadFileComponent from "./EditComponent/UploadFileComponent/UploadFileComponent";
import EditProfileSWOT from "./EditComponent/EditProfileSWOT/EditProfileSWOT";
import EditProfilePeople from "./EditComponent/EditProfilePeople/EditProfilePeople";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStartupProfile } from "../../store/startup/actions";

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
const EditStartupProfile = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const isLoggedIn = useSelector<any>(
    (state) => state.startupReducer.isLoggedIn
  );

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isLoggedIn]);

  // const [values, setValues] = useState<State>({
  //   companyName: "",
  //   askPrice: "",
  //   equityOffer: "",
  //   industry: "",
  //   founded: "",
  //   location: "",
  //   companyInfo: "",
  // });

  const startUpData: any = useSelector<any>(
    (state) => state.startupReducer?.login[0]
  );
  const dispatch = useDispatch();

  const id = useSelector((state: any) => {
    return state.startupReducer.login[0]?.userId;
  });

  let values = {};
  const dataHandler = (data: any) => {
    values = data;
  };
  // let values = {};
  const financeHandler = (data: any) => {
    values = data;
  };
  const SWOTHandler = (data: any) => {
    values = data;
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
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ px: { xs: 0, sm: 4 } }} mt={4}>
        <Breadcrumbs
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
        <TabContext value={value}>
          <TabList
            aria-label="tab"
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "#138707" } }}
            textColor="secondary"
            centered
          >
            <Typography
              sx={{
                fontSize: "42px",
                fontFamily: "light",
                marginRight: "8%",
                paddingTop: "10px",
              }}
            >
              Edit Profile
            </Typography>

            <Tab
              label="Pitch"
              value="1"
              sx={{ marginRight: "4%", marginTop: "-10px" }}
            />
            <Tab
              label="Company Details"
              value="2"
              sx={{ marginRight: "4%", marginTop: "-10px" }}
            />
            <Tab
              label="Financial"
              value="3"
              sx={{ marginRight: "4%", marginTop: "-10px" }}
            />
            <Tab
              label="SWOT"
              value="4"
              sx={{ marginRight: "4%", marginTop: "-10px" }}
            />
            <Tab
              label="People"
              value="5"
              sx={{ marginRight: "4%", marginTop: "-10px" }}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                minWidth: "212px",
                backgroundColor: "#138707",
                fontSize: "16px",
                fontFamily: "bold",
                height: "61px",
                borderRadius: "0px",
              }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </TabList>

          <Box
            bgcolor="#EFF3F3"
            height="100%"
            sx={{
              mx: { md: 7 },
            }}
            mt={5}
          >
            <TabPanel value="1">
              <UploadFileComponent />
            </TabPanel>
            <TabPanel value="2">
              <CompanyDetail
                startUpData={startUpData}
                id={id}
                receiveData={dataHandler}
              />
            </TabPanel>
            <TabPanel value="3">
              <FinancialDetails
                startUpData={startUpData}
                id={id}
                receiveData={financeHandler}
              />
            </TabPanel>
            <TabPanel value="4">
              <EditProfileSWOT
                startUpData={startUpData}
                id={id}
                receiveData={SWOTHandler}
              />
            </TabPanel>
            <TabPanel value="5">
              <EditProfilePeople />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default EditStartupProfile;
