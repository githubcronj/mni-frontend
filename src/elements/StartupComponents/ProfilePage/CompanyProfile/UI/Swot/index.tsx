import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./swot.css";

const Swot = () => {
  return (
    <Box className="border swot-container">
      <Grid container p={5}>
        {["Strengths", "Weakness", "Opportunities", "Threats"].map(
          (content, index) => (
            <Grid item xs={12} pt={2}>
              <Typography
                variant="h3"
                className="bold swot-titles"
                gutterBottom
              >
                {content}
              </Typography>
              <Typography
                variant="subtitle1"
                className="book black swot-text"
                gutterBottom
              >
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages,
              </Typography>
              {index !== 3 ? <Divider className="divider mt" /> : null}
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default Swot;
