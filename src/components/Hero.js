import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@material-ui/core";
import "./Hero.css";
import logo from "../synoptic.png";

function Hero() {
  return (
    <div>
      <AppBar className="appBar" color="transparent">
        <Toolbar>
          <Link to="/" rel="stylesheet" href="">
            <Typography color="primary">TSB</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box className="hero">
        <Box className="title--hero">
          <img className="logo" src={logo} alt="Synoptic logo"></img>
        </Box>
      </Box>
    </div>
  );
}

export default Hero;
