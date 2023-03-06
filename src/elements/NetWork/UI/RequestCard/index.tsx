import { Box, Button, Grid, Modal, Popper, Typography } from "@mui/material";
import googleround from "./img/googleround.png";
import "./requestcard.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NoteCard from "../NoteCard";
import ClearIcon from "@mui/icons-material/Clear";

import { useState } from "react";
const style = {
  position: "absolute" as "absolute",
  top: "70%",
  left: "30%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #7070702E",
  boxShadow: 24,
  p: 4,
};
const RequestCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid container mt={2} p={2} className="bg-white">
      <Grid item xs={2} sm={2} md={2} xl={2} lg={2}>
        <Box component="img" src={googleround} className="max-width img-box" />
      </Grid>
      <Grid item xs={6} className="company-desc-container">
        <Box sx={{ p: "10px" }}>
          <Typography className="size-s bold request-company-name" gutterBottom>
            Company Name
          </Typography>
          <Typography
            variant="body1"
            className="size-xs book grey request-company-location"
            gutterBottom
          >
            Industry Location
          </Typography>

          <Typography
            variant="body1"
            className="size-xs bold  green open-note-align"
            component="div"
            onClick={handleClick}
          >
            Open Note <KeyboardArrowRightIcon />
          </Typography>
          <Popper
            id={anchorEl ? "simple-popper" : undefined}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            placement="bottom-end"
          >
            <Box sx={style}>
              <Typography
                variant="h6"
                component="div"
                className="note-card-container"
              >
                <ClearIcon
                  onClick={handleClose}
                  fontSize="large"
                  className="green"
                />{" "}
                <b>Note</b>
              </Typography>
              <Typography variant="body1" className="book" sx={{ mt: 2 }}>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Typography>
              <Box className="modal-btn-align">
                <Button
                  onClick={handleClose}
                  className="modal-reject-btn btn green"
                  size="small"
                >
                  Reject
                </Button>
                <Button
                  className="modal-accept-btn btn bg-green white"
                  size="small"
                >
                  Accept
                </Button>
              </Box>
            </Box>
          </Popper>
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
        display={{ xs: "block", md: "flex" }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Button className=" accept-btn btn  green bg-white" fullWidth>
          Reject
        </Button>
        <Button className="accept-btn btn bg-green white" fullWidth>
          Accept
        </Button>
      </Grid>
    </Grid>
  );
};

export default RequestCard;
