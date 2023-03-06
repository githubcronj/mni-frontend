import { Button, Grid } from "@mui/material";
import React from "react";

// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";

function MenuItem(props) {
  const { text } = props;

  const handleClick = (e) => {
    if (props.onClose) props.onClose();
  };
  return (
    <Grid item xs>
      <Button onClick={handleClick} color="inherit" size="large" fullWidth>
        {text}
      </Button>
    </Grid>
  );
}

export default MenuItem;
