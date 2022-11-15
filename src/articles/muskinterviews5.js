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

function MuskInterviews5() {
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
            image="https://www.biznews.com/wp-content/uploads/2022/04/in-a-twist-elon-musk-wants-a-reg.jpg"
            title="Elon Musk in Ted interview"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              5 Great Elon Musk Interviews
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <h3>Joe Rogen</h3>
              <a href="https://www.youtube.com/watch?v=ycPr5-27vSI&t=1322s"> Elon Musk is a business magnet, investor and engineer.</a>
              <h3>Lex Fridman</h3>
              <a href="https://www.youtube.com/watch?v=DxREm3s1scA&t=5978s"> SpaceX, Mars, Tesla Autopilot, Self-Driving, Robotics, and AI </a>
              <h3>Full Send Podcast</h3>
              <a href="https://www.youtube.com/watch?v=fXS_gkWAIs0"> Aliens, Challenges Putin to UFC, and Predicts WW3 </a>
              <h3>The Babylon Bee</h3>
              <a href="https://www.youtube.com/watch?v=jvGnw1sHh9M&t=1677s"> An in-depth interview on wokeness, Elizabeth Warren, taxing the rich, the Metaverse, which superhero Elon would be, and how the left is killing comedy. </a>
              <h3>TED</h3>
              <a href="https://www.youtube.com/watch?v=cdZZpaB2kDM"> Bid to purchase Twitter and gets honest about the biggest regret of his career, how his brain works, the future he envisions for the world and a lot more. </a>
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
                Apr 9, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default MuskInterviews5;
