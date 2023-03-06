import React, { FC } from "react";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import "./NotificationList.css";

interface TopInvestorsListprops {
  username?: string;
  userid?: string | number;
  userimg?: string;
  number?: string | number;
  circleimg?: string;
}
interface TopInvestorsListprops {
  TopInvestorsListprops: any;
}

const NotificationList: FC<TopInvestorsListprops> = ({
  TopInvestorsListprops,
}) => {
  return (
    <div>
      <Box className="listBox">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <img src={TopInvestorsListprops.userimg} alt="img" width={"40px"} />
          </Box>
          <Box className="midBox">
            <Typography className="userid" sx={{ fontSize: "14px" }}>
              {TopInvestorsListprops.username}
            </Typography>
            <Typography className="userid" sx={{ fontSize: "13px" }}>
              {TopInvestorsListprops.userid}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box>
            <img
              className="circularimg"
              src={TopInvestorsListprops.circleimg}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default NotificationList;
