import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./details.css";
import media from "./img/media.svg";

const Details = () => {
  const LinkBox = (
    <Box className="link-box ">
      <Typography className="orange link-text">
        https://www.google.com/
      </Typography>
    </Box>
  );

  const SocialMedia = (
    <Box className="media-box ">
      <img src={media} className="media" />
    </Box>
  );
  return (
    <>
      <Box className="details-container ">
        <Grid container className="border" mb={7}>
          {[
            { title: "Equity Offer", amt: "20.5%" },
            { title: "Ask Price", amt: "₹ 10,000,00" },
          ].map((item, index) => (
            <>
              <Grid item xs={12} className="details-items" key={index}>
                <Typography variant="body1" className="bold grey">
                  {item.title}
                </Typography>
                <Typography
                  variant="h3"
                  className="bold details-text-size"
                  gutterBottom
                >
                  {item.amt}
                </Typography>
                {!index ? <Divider className="divider md " /> : null}
              </Grid>
            </>
          ))}
        </Grid>

        <Typography
          variant="h3"
          className="bold details-text-size"
          gutterBottom
        >
          About Google
        </Typography>
        <Grid container mt={6} className="border">
          {[
            { title: "Legal Name", amt: "Google" },
            { title: "Founded", amt: "8th June, 2022" },
            { title: "Type Of Industry", amt: "Industry Name" },
            { title: "Company Valuation", amt: "$90000" },
            { title: "Employees", amt: "30" },
            {
              title: "Website",
              amt: LinkBox,
            },
            { title: "Social Media", amt: SocialMedia },
            { title: "Headquaters", amt: "Delhi,India" },
          ].map((item, index, array) => (
            <>
              <Grid item xs={12} className="details-items" key={index}>
                <Typography variant="body1" className="bold grey ">
                  {item.title}
                </Typography>
                {typeof item.amt === "string" ? (
                  <Typography
                    variant="h4"
                    className="bold details-text-size"
                    gutterBottom
                  >
                    {item.amt}
                  </Typography>
                ) : (
                  item.amt
                )}

                {index !== array.length - 1 ? (
                  <Divider className="divider md" />
                ) : null}
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Details;
