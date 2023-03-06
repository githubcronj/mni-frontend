import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// import Grid from "@material-ui/core/Grid";

import MenuItem from "./MenuItem";
import DropdownMenu from "./DropdownMenu";
import SideMenu from "./SideMenu";
import { Box, Divider, Grid, Typography } from "@mui/material";
import AskPriceFilter from "./AskPriceFilter";

export default function FilterButton() {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        // justify="space-around"
        // alignItems="flex-start"
      >
        <DropdownMenu text="Filter" color="primary">
          <SideMenu
            sx={{ borderBottom: 1, borderColor: "divider" }}
            text="Location"
          >
            <MenuItem text="Menu Item" />
            <MenuItem text="Menu Item" />
            <MenuItem text="Menu Item" />
          </SideMenu>
          <Divider />
          <SideMenu text="ask price">
            <MenuItem>
              <AskPriceFilter />
            </MenuItem>
          </SideMenu>
          <Divider />
          <SideMenu text="Equity Offer">
            <MenuItem text="Menu Item" />
            <MenuItem text="Menu Item" />
            <MenuItem text="Menu Item" />
          </SideMenu>
          <Divider />
          <Box display="flex">
            <MenuItem text="clear all" />
            <MenuItem text="save" />
          </Box>
        </DropdownMenu>

        <DropdownMenu text="sort by" color="primary">
          <MenuItem text="A - Z name" />
          <Divider />
          <MenuItem text="New - Old" />
          <Divider />
          <MenuItem text="Ask Price (Low - High)" />
          <Divider />
          <MenuItem text="Ask Price (High - Low)" />
          <Divider />
          <MenuItem text="Equity Offer (Low - High)" />
          <Divider />
          <MenuItem text="Equity Offer (High - Low)" />
        </DropdownMenu>
      </Grid>
    </Fragment>
  );
}
