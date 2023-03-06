import React, { Fragment, useState } from "react";

// import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
// import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Grid } from "@mui/material";

function DropdownMenu(props) {
  const { text, children, color } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const childrenWithNewProps = React.Children.map(props.children, (child) =>
    React.cloneElement(child, { onClose: handleClose })
  );

  return (
    <Fragment>
      <Grid item xs>
        <Button
          display="flex"
          alignItems="center"
          variant="contained"
          endIcon={<KeyboardArrowDownIcon />}
          style={{
            backgroundColor: "#FFE6CB",
            borderRadius: 0,
            boxShadow: "none",
          }}
          onClick={handleClick}
        >
          {text}
        </Button>
        <Popover
          id="dropdown-id"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            {childrenWithNewProps}
          </Grid>
        </Popover>
      </Grid>
    </Fragment>
  );
}

export default DropdownMenu;
