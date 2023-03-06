import { Button, Container} from "@mui/material";
// import { Box } from "@mui/system";
// import React, { useState } from "react";
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

function createData(name: string, basic: any, premium: any) {
  return { name, basic, premium };
}

const rows = [
  createData(
    "Unlimited Search Results",
    <img src={correct} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Connect to Unlimited Start ups",
    <img src={correct} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Zero Commission on deal",
    <img src={correct} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Chat with Unlimited Start ups",
    <img src={correct} alt="test" />,
    <img src={correct} alt="test" />
  ),
  createData(
    "Tagged as Premium",
    <img src={wrong} alt="test" />,
    <img src={correct} alt="test" />
  ),
];

export const PricingInvestor = () => {
  return (
    <>
      <Container sx={{ width: "80%", height: "1044px" }}>
        <TableContainer sx={{ height: "1044px" }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  align="center"
                  sx={{
                    letterSpacing: "4.8px",
                    width: "40%",
                    fontSize: "24px",
                  }}
                >
                  INVESTOR
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "24px" }} align="center">
                  Basic
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "24px" }} align="center">
                  Premium
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ align: index === 6 ? "right" : null }}
                  >
                    {row.name}
                    {/* {`${row.name} ` } */}

                    {/* {{color: index===7? "bold":null}} */}
                  </StyledTableCell>
                  <StyledTableCell align="center" width="15%">
                    {row.basic}
                  </StyledTableCell>
                  <StyledTableCell align="center" width="15%">
                    {row.premium}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              <StyledTableRow className="pricingInvestor-inner"
                sx={{ backgroundColor: "#EFF3F3", height: "106vh", textAlign:"bottom" }}
              >
                <StyledTableCell align="center" width="15%">
                  <b>Price</b>
                </StyledTableCell>
                <StyledTableCell align="center" width="15%">
                  <p>
                    <b>7,999 INR / 1 mo</b>
                    <br />
                    (INR 6,999/- when billed Annually)
                    <br /><br />
                    <Button className="arrayBtn">Buy Now</Button>
                  </p>
                </StyledTableCell>
                <StyledTableCell align="center" width="15%">
                  <p>
                    <b>11,999 INR/1 mo</b>
                    <br />
                    (INR 9,999/- when billed Annually)
                    <br /><br />
                    <Button className="arrayBtn">Buy Now</Button>
                  </p>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
