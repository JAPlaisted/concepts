import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  CardActions,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function Algorithims() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AppBar className="appBar" color="transparent">
        <Toolbar>
          <Link to="/" rel="stylesheet" href="">
            <Typography color="primary">CONCEPTS</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Card className="card__single">
        <CardActionArea>
          <CardMedia
            className="media__single"
            component="img"
            image="https://www.bgosoftware.com/blog/wp-content/uploads/2016/01/Featured_programming_books.jpg"
            title="Laptop and Books"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              5 Best Books to Learn Code
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <ol type="1">
                <li>
                  <a
                    href="https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507/ref=sr_1_1?crid=2OEPALJF1VL57&keywords=eloquent+javascript&qid=1653882131&sprefix=eloquent%2Caps%2C168&sr=8-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Eloquent JavaScript
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.amazon.com/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833FBNHV/ref=zg_bs_4133_1/145-3515772-1087942?pd_rd_i=B0833FBNHV&psc=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Pragmatic Programmer
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319/ref=sr_1_1?crid=311KV0GGJ7D3Y&keywords=code+the+hidden+language+of+computer+hardware+and+software&qid=1653882301&s=audible&sprefix=code+the+hidden%2Caudible%2C126&sr=1-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.amazon.com/Algorithms-MIT-Press-Essential-Knowledge/dp/0262539020/ref=sr_1_1?crid=3BOX52UYMEBJC&keywords=algorithms+mit&qid=1653882410&s=audible&sprefix=algorithims+mi%2Caudible%2C151&sr=1-1-catcorr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Algorithms
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.amazon.in/Clean-Code-Robert-C-Martin/dp/8131773388/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Clean Code
                  </a>
                </li>
              </ol>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card__actions">
          <Box className="author">
            <Avatar src="https://randomuser.me/api/portraits/women/17.jpg" />
            <Box className="author__text">
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                <p>Susan White.</p>
              </Typography>
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                May 7, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default Algorithims;
