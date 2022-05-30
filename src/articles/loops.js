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

function Loops() {
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
            image="https://miro.medium.com/max/1400/0*iiPjT1W7w1tG3b72"
            title="Light bulb on sticky note"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              10 Random Business Ideas
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <ol type="1">
                <li>Airbnb For Parking Spaces.</li>
                <li>Influencer Brand Negotiation Agency.</li>
                <li>Freelance/Ghost-Written Book Publishing.</li>
                <li>3D Printing Home Construction.</li>
                <li>Custom Parts Shop.</li>
                <li>Business Partner "Matching" App.</li>
                <li>Vacant Real Estate Holding Company.</li>
                <li>Gourmet Soap.</li>
                <li>Real Estate Photography.</li>
                <li>Company Automation Software</li>
              </ol>
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
                May 21, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default Loops;
