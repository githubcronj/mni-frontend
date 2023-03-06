import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./DashboardMenu.css";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Grid container justifyContent="center">
        {["Dashboard", "Profile", "Network"].map((item, index) => (
          <Grid
            item
            className="dashboard-inner bold dashboardMain"
            key={index}
            onClick={() => setActive(index)}
            sx={{
              backgroundColor: active === index ? "#FF9A33" : null,
              color: active === index ? "#FFFFFF" : null,
            }}
          >
            {item}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashboardMenu;
