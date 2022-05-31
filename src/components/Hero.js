import React from "react";
import { Box } from "@material-ui/core";
import "./Hero.css";
import logo from "../synoptic.png";
import Nav from "../components/Nav";

function Hero() {
  return (
    <div>
      <Nav />
      <Box className="hero">
        <img className="logo center" src={logo} alt="Synoptic logo"></img>
        <h4 className="center">Just the info you're looking for</h4>
      </Box>
    </div>
  );
}

export default Hero;
