import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import "./sidebar.css";
import profileJim from "./img/profileJim.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { getInvestorProfile } from "../../../../store/startup/actions";

type myProps = {
  className?: string;
};

const SideBar = ({ className }: myProps) => {
  let data = useSelector((state: any) => {
    return state.startupReducer.investorProfile;
  });

  const topRising = useSelector((state: any) => {
    return state.startupReducer.topRisingDataS;
  });

  const compdata2 = useSelector((state: any) => {
    return state.startupReducer.recentlyViewed;
  });

  return (
    <Box className={`sidebar-main-container  ${className}`}>
      <Box mt={1}>
        <Typography variant="h4" className="bold size-m">
          Recommended Investor
        </Typography>
        {data.map((element: any) => (
          <>
            <Grid container mt={2}>
              <Grid item xs={3} sm={2} md={3} lg={2}>
                <Box component="img" src={profileJim} className="google-img" />
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={10}>
                <Typography className="size-s bold">{element.name}</Typography>
                <Typography variant="body1" className="size-xs book ">
                  {/* Location */}
                  {/* {element.?location ? element.location=""} */}
                  {element.location}
                </Typography>
              </Grid>
            </Grid>
            <Divider />{" "}
          </>
        ))}
        <Box display="flex" justifyContent="center" mt={2}>
          <Link
            underline="hover"
            // href="/company-profile"
            color="green"
            className="bold size-s"
          >
            Show More
          </Link>
          <KeyboardArrowDownIcon className="green" fontSize="medium" />
        </Box>
      </Box>

      <Box mt={1}>
        <Typography variant="h4" className="bold size-m">
          Top Investor
        </Typography>
        {topRising.map((element: any) => (
          <>
            <Grid container mt={2}>
              <Grid item xs={3} sm={2} md={3} lg={2}>
                <Box component="img" src={profileJim} className="google-img" />
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={10}>
                <Typography className="size-s bold">{element.name}</Typography>
                <Typography variant="body1" className="size-xs book ">
                  {/* Location */}
                  {/* {element.?location ? element.location=""} */}
                  {element.location}
                </Typography>
              </Grid>
            </Grid>
            <Divider />{" "}
          </>
        ))}
        <Box display="flex" justifyContent="center" mt={2}>
          <Link
            underline="hover"
            // href="/company-profile"
            color="green"
            className="bold size-s"
          >
            Show More
          </Link>
          <KeyboardArrowDownIcon className="green" fontSize="medium" />
        </Box>
      </Box>

      <Box mt={1}>
        <Typography variant="h4" className="bold size-m">
          Recently View Investor
        </Typography>
        {compdata2.map((element: any) => (
          <>
            <Grid container mt={2}>
              <Grid item xs={3} sm={2} md={3} lg={2}>
                <Box component="img" src={profileJim} className="google-img" />
              </Grid>
              <Grid item xs={9} sm={9} md={9} lg={10}>
                <Typography className="size-s bold">{element.name}</Typography>
                <Typography variant="body1" className="size-xs book ">
                  {/* Location */}
                  {/* {element.?location ? element.location=""} */}
                  {element.location}
                </Typography>
              </Grid>
            </Grid>
            <Divider />{" "}
          </>
        ))}
        <Box display="flex" justifyContent="center" mt={2}>
          <Link
            underline="hover"
            // href="/company-profile"
            color="green"
            className="bold size-s"
          >
            Show More
          </Link>
          <KeyboardArrowDownIcon className="green" fontSize="medium" />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
