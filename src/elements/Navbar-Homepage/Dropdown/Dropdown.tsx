import React from "react";
import { Link } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/system";

export const Dropdown = () => {
  return (
    <Box className="dropdown">
    <div className="dropdown-content">
              <Link>
                  Investor <KeyboardArrowRightIcon />
                </Link>
                <Link>
                  Startup <KeyboardArrowRightIcon />
                </Link>
              </div>
      </Box>
    // <Box sx={{ display: { xs: "none", sm: "flex" } }}>
    //   <Popover
    //     // id={3}
    //     open={open}
    //     // anchorEl={anchorEl}
    //     // onClose={handleClose}
    //     anchorOrigin={{
    //       vertical: "bottom",
    //       horizontal: "left",
    //     }}
    //   >
    //     <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    //   </Popover>
    // </Box>
  );
};
