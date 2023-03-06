import React, { Fragment } from "react";

// import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
// import Button from "@material-ui/core/Button";
import { Button, Divider, Grid } from "@mui/material";

function SideMenu(props) {
  const { text, children } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    if (props.onClose) props.onClose();
    setAnchorEl(null);
  }

  const childrenWithNewProps = React.Children.map(props.children, (child) =>
    React.cloneElement(child, { onClose: handleClose })
  );

  return (
    <Fragment>
      <Grid item xs>
        <Button color="inherit" size="large" fullWidth onClick={handleClick}>
          {text}
        </Button>
        <Popover
          id="dropdown-id"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
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

export default SideMenu;
