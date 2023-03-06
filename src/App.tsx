import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./elements/MainLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlogs, topRisingStartup } from "./store/login/actions";
import { getBlog } from "./Api/api";

function App() {
  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(topRisingStartup())
    dispatch(getBlogs())
  },[])


  return (
    <>
      {" "}
      <Router>
        <MainLayout />
      </Router>
    </>
  );
}

export default App;
