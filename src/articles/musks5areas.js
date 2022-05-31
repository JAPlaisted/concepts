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

function Musks5Areas() {
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
            image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_471763092_2000133320009280382_353710.jpg"
            title="Elon Musk"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              Elon Musk’s 5 Important Areas
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <ol type="1">
                <li>
                  The Internet.
                  <br />
                  <sub>Instant access to communication and information.</sub>
                </li>
                <li>
                  Sustainable Energy.
                  <br />
                  <sub>
                    The fuel of innovation, technology, and transportation.{" "}
                  </sub>
                </li>
                <li>
                  Space Exploration.
                  <br />
                  <sub>
                    Making life multi-planetary and colonizing the galaxy.
                  </sub>
                </li>
                <li>
                  Artificial Intelligence.
                  <br />
                  <sub>Solving problems beyond our capabilities.</sub>
                </li>
                <li>
                  Rewriting Human Genetics.
                  <br />
                  <sub>
                    Expanding human capabilities and eradicating disease.
                  </sub>
                </li>
              </ol>
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
                May 14, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default Musks5Areas;
