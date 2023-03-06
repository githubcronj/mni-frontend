import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import "./EditProfilePeople.css";
import React, { useState } from "react";
import EditProfileCard from "../EditProfileCard/EditProfileCard";
import { data } from "../EditProfileCard/EditProfilecardArray";
import addnewimg from "../../../../Assets/image/addnewimg.svg";
import editimg from "../../../../Assets/image/editimg.png";

export default function EditProfilePeople() {
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const onHandleClick2 = () => {
    setSave(false);
    setEdit(false);
  };
  const onHandleClick = () => {
    setEdit(true);
  };
  return (
    <div>
      <Box sx={{ backgroundColor: "#dddddd", padding: "50px 30px" }}>
        <Container>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid
                sx={{ display: "flex", justifyContent: "space-around" }}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
              >
                <EditProfileCard
                  EditProfileCardProp={item}
                  key={index}
                  onHandleClick={onHandleClick}
                />
              </Grid>
            ))}
          </Grid>
          {!edit ? (
            <Box
              sx={{
                border: "1px solid #000000",
                padding: " 20px 30px",
                marginTop: "50px",
              }}
            >
              <Grid sx={{ margin: "10px" }} container>
                <Grid sm={4} md={2} lg={2} component="label">
                  <Typography sx={{ fontSize: "24px" }} className="textbold">
                    Add New
                  </Typography>

                  <input type="file" hidden />
                  <img width={"100px"} src={addnewimg} alt="addnew" />
                </Grid>
                <Grid sm={8} md={8} lg={8}>
                  <Grid sx={{ margin: "10px" }} container>
                    <Grid sm={12} md={8}>
                      <Typography className="textbold">Name</Typography>
                      <Box
                        sx={{ display: "display", justifyContent: "center" }}
                      >
                        <OutlinedInput
                          sx={{ backgroundColor: "#ffffff" }}
                          className="inputfeilds"
                          placeholder="Enter Full Name"
                        />
                      </Box>
                    </Grid>
                    <Grid sm={12} md={4}>
                      <Box className="textarea">
                        <Typography className="textbold">Position</Typography>
                        <Box sx={{ display: "display", justifyContent: "" }}>
                          <OutlinedInput
                            className="inputfeilds"
                            sx={{ backgroundColor: "#ffffff" }}
                            placeholder="CEO"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sm={12} md={2} lg={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "37px",
                    }}
                  >
                    <Button
                      className="textbold"
                      sx={{
                        backgroundColor: "#138707 !important",
                        color: "#ffffff !important",
                        padding: "11px 43px",
                      }}
                    >
                      Add
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: " 20px 30px",
                marginTop: "50px",
              }}
            >
              <Grid sx={{ margin: "10px" }} container>
                <Grid sm={4} md={2} lg={2} component="label">
                  <Typography sx={{ fontSize: "24px" }} className="textbold">
                    Edit
                  </Typography>

                  <input type="file" hidden />
                  <img width={"70px"} src={editimg} alt="addnew" />
                </Grid>
                <Grid sm={8} md={8} lg={8}>
                  <Grid sx={{ margin: "10px" }} container>
                    <Grid sm={12} md={8}>
                      <Typography className="textbold">Name</Typography>
                      <Box
                        sx={{ display: "display", justifyContent: "center" }}
                      >
                        <OutlinedInput
                          sx={{ backgroundColor: "#ffffff" }}
                          className="inputfeilds"
                          placeholder="Enter Full Name"
                        />
                      </Box>
                    </Grid>
                    <Grid sm={12} md={4}>
                      <Box className="textarea">
                        <Typography className="textbold">Position</Typography>
                        <Box sx={{ display: "display", justifyContent: "" }}>
                          <OutlinedInput
                            className="inputfeilds"
                            sx={{ backgroundColor: "#ffffff" }}
                            placeholder="CEO"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sm={12} md={2} lg={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "37px",
                    }}
                  >
                    <Button
                      onClick={onHandleClick2}
                      className="textbold"
                      sx={{
                        backgroundColor: "#138707 !important",
                        color: "#ffffff !important",
                        padding: "11px 43px",
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
}
