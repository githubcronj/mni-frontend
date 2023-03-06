import React, { useState } from "react";
import { Grid } from "@mui/material";

import "./menu.css";

const Menu = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item className="dashboardMenu">
          <Grid
            className="menu-inner"
            id="1"
            onClick={() => setActive(1)}
            sx={{
              backgroundColor: active === 1 ? "#FF9A33" : null,
              color: active === 1 ? "#FFFFFF" : null,
              mr: "10px",
              p: "12px",
            }}
          >
            Pitch
          </Grid>
          <Grid
            item
            className="menu-inner"
            id="2"
            onClick={() => setActive(2)}
            sx={{
              backgroundColor: active === 2 ? "#FF9A33" : null,
              color: active === 2 ? "#FFFFFF" : null,
              mr: "10px",
              p: "12px",
            }}
          >
            Details
          </Grid>
          <Grid
            item
            className="menu-inner"
            id="3"
            onClick={() => setActive(3)}
            sx={{
              backgroundColor: active === 3 ? "#FF9A33" : null,
              color: active === 3 ? "#FFFFFF" : null,
              p: "12px",
            }}
          >
            Financial
          </Grid>
          <Grid
            item
            className="menu-inner"
            id="4"
            onClick={() => setActive(4)}
            sx={{
              backgroundColor: active === 4 ? "#FF9A33" : null,
              color: active === 4 ? "#FFFFFF" : null,
              p: "12px",
            }}
          >
            SWOT
          </Grid>
          <Grid
            item
            className="menu-inner"
            id="5"
            onClick={() => setActive(5)}
            sx={{
              backgroundColor: active === 5 ? "#FF9A33" : null,
              color: active === 5 ? "#FFFFFF" : null,
              p: "12px",
            }}
          >
            People
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
