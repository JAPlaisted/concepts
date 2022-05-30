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
        <img className="logo" src={logo} alt="Synoptic logo"></img>
        <h4>Just what you're looking for</h4>
      </Box>
    </div>
  );
}

export default Hero;
