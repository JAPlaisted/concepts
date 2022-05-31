import React, { useEffect } from "react";
import {
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  CardActions,
  Avatar,
} from "@material-ui/core";
import Nav from "../components/Nav";

function DevPortfolios7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <Card className="card__single">
        <CardActionArea>
          <CardMedia
            className="media__single"
            component="img"
            image="https://miro.medium.com/max/1123/1*6C702o6cpNyLm27WLdZyjg.png"
            title="Dev Portfolio"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              7 Developer Portfolios for Inspiration
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <ul>
                <li>
                  <a href="https://lynnandtonic.com/">
                    <h4>Lynn Fisher</h4>
                    <img
                      height="150vh"
                      width="300vh"
                      src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/lynn-fisher-web-developer-portfolio-example.webp"
                      alt="portfolio"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="http://findmatthew.com/">
                    <h4>Matthew Williams</h4>
                    <img
                      height="150vh"
                      width="300vh"
                      src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/matthew-williams-web-developer-portfolio.webp"
                      alt="portfolio"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.jonathanplaisted.com/">
                    <h4>Jonathan Plaisted</h4>
                    <img
                      height="150vh"
                      width="300vh"
                      src="https://user-images.githubusercontent.com/55415399/163905022-44cf83c9-942c-4753-ae7e-79742417c921.PNG"
                      alt="portfolio"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://mattfarley.ca/">
                    <h4>Matt Farley</h4>
                    <img
                      height="150vh"
                      width="300vh"
                      src="https://cdn-media-1.freecodecamp.org/images/1*FNvXAOU_leQ7E2Bjuc8gqw.png"
                      alt="portfolio"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.adhamdannaway.com/">
                    <h4>Adham Dannaway</h4>
                    <img
                      height="150vh"
                      width="300vh"
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1618299482987/s7c24s_NN.png?auto=compress,format&format=webp"
                      alt="portfolio"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.seanhalpin.design/">
                    <h4>Sean Halpin</h4>
                    <img
                      height="150vh"
                      width="300vh"
                      src="https://miro.medium.com/max/1400/0*HmDsRf97mn1Sasi_.png"
                      alt="portfolio"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="http://taylorkmho.com/">
                    <h4>Taylor Ho</h4>
                    <img
                      height="150vh"
                      width="300vh"
                      src="https://lh4.googleusercontent.com/cbXcGHgNAq5bzA4-CKi7GUdX3nw6XB7M-NNrPCqHyMJzVos1rguu2Gg2TZ4ZNL37Y0Yj6TlDga9C8vxxtmUGSUPuiySK4pI0vpWsbIKzfnUMfoWw3P4BcFssLgHzUMWLia-AMF_f"
                      alt="portfolio"
                    ></img>
                  </a>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card__actions">
          <Box className="author">
            <Avatar src="https://randomuser.me/api/portraits/men/86.jpg" />
            <Box className="author__text">
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                <p>Troy Young.</p>
              </Typography>
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                Apr 16, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default DevPortfolios7;
