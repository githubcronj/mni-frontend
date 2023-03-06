import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./financial.css";

const Financial = () => {
  return (
    <>
      <Box className="financial-container ">
        <Grid container mt={6} className="border">
          {[
            "Yearly Gross Revenue",
            "Yearly Net profit",
            "Last Quarter Gross Revenue",
            "Last Quarter net profit",
            "Last Month Gross Revenue",
            "Last Quarter Net Profit",
            "Assets Value",
            "Liabilities Value",
            "Loans",
          ].map((item, index, array) => (
            <>
              <Grid item xs={12} className="financial-items" key={index}>
                <Typography variant="body1" className="bold grey " gutterBottom>
                  {item}
                </Typography>

                <Typography
                  variant="h4"
                  className="bold financial-text-size"
                  gutterBottom
                >
                  ₹ 10,000,00
                </Typography>

                {index !== array.length - 1 ? (
                  <Divider className="divider mt" />
                ) : null}
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Financial;
