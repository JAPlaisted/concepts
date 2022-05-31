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

function DividingBy0() {
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
            image="https://reactorlab.net/resources-folder/matlab/pdf-link-folder/divide_by_zero.jpg"
            title="Lake with hole due to dividing by zero"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              Dividing by Zero
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <p>
                Currently, if you try to enter an expression similar to ‘ X / 0
                ‘ to a calculator, you will receive an error. <br />
                <br /> However, there is an expression that aptly sums up this
                equation (no pun intended). <br />
                <br /> As we divide 1 by different numbers, we see the result
                grow larger and larger. <br />
                <br /> 1 / 0.1 = 10 <br />
                <br /> 1 / 0.01 = 100 <br />
                <br /> 1 / 0.001 = 1000 <br />
                <br /> From this, we might conclude that X / 0 = infinity, but
                this gives only half an accurate answer. <br />
                <br /> What if x is any negative number? <br />
                <br /> 1 / -0.1 = -10 <br />
                <br /> 1 / -0.01 = -100 <br />
                <br /> 1 / -0.001 = -1000 <br />
                <br /> This shows a set of values leading our equation in the
                opposite direction; therefore, our expression must cover
                positive and negative values which can be done by taking the
                absolute value of each side. <br />
                <br />| X / 0 | = | ∞ |<br />
                <br /> This can be read as the absolute value of any number
                divided by zero is equal to the absolute value of infinity
              </p>
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
                Apr 30, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default DividingBy0;
