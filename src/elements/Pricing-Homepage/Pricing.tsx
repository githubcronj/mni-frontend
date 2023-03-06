import React, { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Pricing.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import correct from "./img/correct.png";
import wrong from "./img/wrong.png";
import { PricingInvestor } from "./PricingInvestor";
import Modal from "@mui/material/Modal";
import thankyou from "./img/thankyou.png";
import Failure from "./img/failure.png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#EFF3F3",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name: any, basic: any, premium: any) {
  return { name, basic, premium };
}

const rows = [
  createData(
    "Limited Search Results (No premium Investors)",
    <img src={correct} alt="test" />,
    <img src={wrong} alt="test" />
  ),
  createData(
    "One way connection (If Investor wants to connect)",
    <img src={correct} alt="test" />,
    <img src={wrong} alt="test" />
  ),
  createData(
    "Zero Commission on deal",
    <img src={correct} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Chat with connected Investors",
    <img src={correct} alt="test" />,
    <img src={wrong} alt="test" />
  ),
  createData(
    "Tagged as Premium",
    <img src={wrong} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Get Access to Premium Investors",
    <img src={wrong} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Unlimited Search Results",
    <img src={wrong} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Connect to unlimited Investors",
    <img src={wrong} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Chat with unlimited Investors",
    <img src={wrong} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    <b>Price</b>,
    <b>FREE</b>,
    <p>
      <b>5,999 INR/1 mo</b> <br /> (INR 4,999/- when billed for 3 Months)
    </p>
  ),
  createData(
    "",
    <Button className="arrayBtn">Buy Now</Button>,
    <Button className="arrayBtn">Buy Now</Button>
  ),
];

export const Pricing = () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{ marginTop: { sm: "150px", xs: "80px" } }}
        className="pricingBox"
      >
        <Box className="pricingBox-inner" display="flex" alignItems="center">
          <Typography
            className="pricingTitle"
            variant="h1"
            sx={{
              borderBottom: "3px solid orange",
              // width: "13%",
              ml: { sm: 7 },
              // mr: 48,
              mb: 5,
            }}
          >
            Pricing
          </Typography>

          <Box display="flex" sx={{ mb: 5 }} className="pricings">
            <Typography
              className="pricingStartup"
              fontWeight="bold"
              id="1"
              onClick={() => setActive(true)}
              sx={{
                // mr: { md: 10, sm: 2 },
                backgroundColor: active === true ? "#FF9A33" : null,
                color: active === true ? "#FFFFFF" : null,
              }}
            >
              Startup
            </Typography>
            <Typography
              className="pricingInvestor"
              fontWeight="bold"
              id="2"
              onClick={() => setActive(false)}
              sx={{
                backgroundColor: active === false ? "#FF9A33" : null,
                color: active === false ? "#FFFFFF" : null,
              }}
            >
              Investor
            </Typography>
          </Box>
        </Box>
      </Box>
      {active ? (
        <>
          <Container sx={{ width: { md: "80%", sm: "94%", xs: "100%" } }}>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      align="center"
                      sx={{
                        letterSpacing: "4.8px",
                        width: "40%",
                      }}
                      className="tableHeading"
                    >
                      START UP
                    </StyledTableCell>
                    <StyledTableCell className="tableHeading" align="center">
                      Basic
                    </StyledTableCell>
                    <StyledTableCell className="tableHeading" align="center">
                      Premium
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        className="tablecontent"
                        component="th"
                        scope="row"
                        sx={{
                          backgroundColor: index === 9 ? "#EFF3F3" : null,
                          borderBottom: index === 9 || 8 ? "none" : null,
                        }}
                      >
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        width="15%"
                        sx={{
                          backgroundColor: index === 9 ? "#EFF3F3" : null,
                          borderBottom: index === 9 || 8 ? "none" : null,
                          textAlign: "center",
                          padding: "0px",
                        }}
                      >
                        {row.basic}
                      </StyledTableCell>

                      <StyledTableCell
                        align="center"
                        width="15%"
                        sx={{
                          backgroundColor: index === 9 ? "#EFF3F3" : null,
                          borderBottom: index === 9 || 8 ? "none" : null,
                          textAlign: "center",
                          padding: "15px 0px",
                        }}
                      >
                        {row.premium}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img src={Failure} className="failure-img" alt="failure"></img>
              </Box>
            </Modal>
          </Container>
        </>
      ) : (
        <>
          <PricingInvestor />
        </>
      )}
    </>
  );
};
