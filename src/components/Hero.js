import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@material-ui/core";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <AppBar className="appBar" color="transparent">
        <Toolbar>
          <Link to="/" rel="stylesheet" href="">
            <Typography color="primary">CONCEPTS</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box className="hero">
        <Box className="title--hero">
          <h1>Programming Concepts</h1>
          <h4>Learn | Practice | Apply</h4>
        </Box>
      </Box>
    </div>
  );
}

export default Hero;
