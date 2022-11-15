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

function InterestingCompanies6() {
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
            image="https://www.roadracingworld.com/wp-content/uploads/2021/09/2022-zero-dsr-studio-bd-profile_1631581410.jpg"
            title="A Zero Motorcycle"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              6 Interesting Companies to Follow
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <h3>Zero Motors</h3>
              <a href="https://www.zeromotorcycles.com/">Electric motorcycle company</a>
              <h3>Feastables</h3>
              <a href="https://feastables.com/">Influencer based snack company</a>
              <h3>HackSmith Industries</h3>
              <a href="https://www.youtube.com/@theHacksmith">Engineering YouTube company</a>
              <h3>Boxabl</h3>
              <a href="https://www.boxabl.com/">Affordable tiny homes</a>
              <h3>MudBots</h3>
              <a href="https://www.mudbots.com/">Large scale concrete 3D printers</a>
              <h3>DALL-E</h3>
              <a href="https://openai.com/dall-e-2/">AI image generation service</a>
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
                Mar 26, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default InterestingCompanies6;
