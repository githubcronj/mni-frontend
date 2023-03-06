import { Breadcrumbs, Grid, Stack, Link } from "@mui/material";

import "./startupforgotpassword.css";

type myProps = {
  content?: any;
  image?: any;
};

const Body = ({ image, content }: myProps) => {
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
  return (
    <Grid container p={3}>
      <Grid item xs={12} md={6}>
        <img src={image} alt="test" style={{ width: "100%", height: "100%" }} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="bg-grey"
        p={{ xs: 8, sm: 10, md: 8 }}
      >
        <Stack spacing={2} className="top-bar ">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        {content}
      </Grid>
    </Grid>
  );
};

export default Body;
