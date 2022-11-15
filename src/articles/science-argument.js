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

function ScienceArgument() {
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
            image="https://physicsworld.com/wp-content/uploads/2021/08/Sam-Jarman-20-August-2021.jpg"
            title="A Black Hole"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              An Argument for Science
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <h3>Bill Nye Vs. Ken Ham</h3>
              <p>
                In this video, Bill Nye makes the stand againt magic and fairytale and argues for science.
              </p>
              <a href="https://www.youtube.com/watch?v=z6kgvhG3AkI&t=6736s"> Full Verison (2:31 min)</a>
              <a href="https://www.youtube.com/watch?v=HA3E8wpBO_I"> Short Verion (4min)</a>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card__actions">
          <Box className="author">
            <Avatar src="https://randomuser.me/api/portraits/men/85.jpg" />
            <Box className="author__text">
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                <p>Lucas John.</p>
              </Typography>
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                Apr 2, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default ScienceArgument;
