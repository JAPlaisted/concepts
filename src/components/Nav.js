import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Nav() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AppBar className="appBar" color="transparent">
        <Toolbar>
          <Link
            to="/"
            rel="stylesheet"
            href="https://upbeat-wiles-ffe15a.netlify.app/"
          >
            <Typography color="primary">HOME</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
