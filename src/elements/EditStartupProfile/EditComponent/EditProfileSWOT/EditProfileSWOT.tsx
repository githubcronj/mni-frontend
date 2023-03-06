import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface State {
  strength: any;
  weakness: any;
  opportunities: any;
  threats: any;
}

export default function EditProfileSWOT(props: any) {
  let { startUpData, id } = props;

  const [values, setValues] = useState<State>({
    strength: startUpData?.strength,
    weakness: startUpData?.weakness,
    opportunities: startUpData?.opportunities,
    threats: startUpData?.threats,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  props.receiveData(values);

  return (
    <>
      <Grid>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item sm={5} xs={12} sx={{ m: 3 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600", mb: 2 }}>
              Strengths
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff",

                borderRadius: "10px",
                position: "relative",
              }}
            >
              <TextField
                multiline
                rows={7}
                value={values?.strength}
                onChange={handleChange("strength")}
              ></TextField>
              <Typography
                sx={{
                  fontSize: "13px",
                  opacity: "0.6",
                  position: "absolute",
                  right: "15px",
                  bottom: "15px",
                }}
              >
                Max 250 words
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={5} xs={12} sx={{ m: 3 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600", mb: 2 }}>
              Weakness
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff",

                borderRadius: "10px",
                position: "relative",
              }}
            >
              <TextField
                multiline
                rows={7}
                value={values?.weakness}
                onChange={handleChange("weakness")}
              ></TextField>
              <Typography
                sx={{
                  fontSize: "13px",
                  opacity: "0.6",
                  position: "absolute",
                  right: "15px",
                  bottom: "15px",
                }}
              >
                Max 250 words
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={5} xs={12} sx={{ m: 3 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600", mb: 2 }}>
              Opportunities
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff",

                borderRadius: "10px",
                position: "relative",
              }}
            >
              <TextField
                multiline
                rows={7}
                value={values?.opportunities}
                onChange={handleChange("opportunities")}
              ></TextField>
              <Typography
                sx={{
                  fontSize: "13px",
                  opacity: "0.6",
                  position: "absolute",
                  right: "15px",
                  bottom: "15px",
                }}
              >
                Max 250 words
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={5} xs={12} sx={{ m: 3 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600", mb: 2 }}>
              Threats
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff",

                borderRadius: "10px",
                position: "relative",
              }}
            >
              <TextField
                multiline
                rows={7}
                value={values?.threats}
                onChange={handleChange("threats")}
              ></TextField>
              <Typography
                sx={{
                  fontSize: "13px",
                  opacity: "0.6",
                  position: "absolute",
                  right: "15px",
                  bottom: "15px",
                }}
              >
                Max 250 words
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
