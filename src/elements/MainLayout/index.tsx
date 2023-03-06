import Routes from "../Routes/Routes";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import { Navbar } from "../Navbar-Homepage/Navbar";
import { Navbar as Navbar_PostLogin } from "../Navbar-PostLogin/Navbar";
import InvestorRegister from "../InvestorRegister/InvestorRegister";
import TopStartUpPage from "../TopStartUpPage/TopStartUpPage";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const MainLayout = () => {
  let isInvestorLoggedIn = useSelector<any>(
    (state) => state.loginReducerHandler.isLoggedIn
  );
  let isStartupLoggedIn = useSelector<any>(
    (state) => state.startupReducer.isLoggedIn
  );

  const [finalInvestorLogin, setFinalInvestorLogin] = useState(false);
  const [finalStartupLogin, setFinalStartupLogin] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (
      (localStorage.getItem("profile") &&
        localStorage.getItem("type") === "investor") ||
      (sessionStorage.getItem("profile") &&
        sessionStorage.getItem("type") === "investor")
    ) {
      setFinalInvestorLogin(true);
      navigate("/dashboard", { replace: true });
    } else {
      setFinalInvestorLogin(false);
    }
    if (
      (localStorage.getItem("profile") &&
        localStorage.getItem("type") === "startup") ||
      (sessionStorage.getItem("profile") &&
        sessionStorage.getItem("type") === "startup")
    ) {
      setFinalStartupLogin(true);
      navigate("/startup-dashboard", { replace: true });
    } else {
      setFinalStartupLogin(false);
    }
  }, []);

  return (
    <>
      {finalInvestorLogin ||
      finalStartupLogin ||
      isInvestorLoggedIn ||
      isStartupLoggedIn ? (
        <Navbar_PostLogin />
      ) : (
        <Navbar />
      )}

      <Box sx={{ mt: "100px" }} />
      <Routes />
      {/* <TopStartUpPage/> */}
    </>
  );
};

export default MainLayout;
