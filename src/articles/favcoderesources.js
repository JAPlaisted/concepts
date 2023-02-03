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

function FavCodeResources() {
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
            image="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Learning to code"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              My Favorite Resources to Learn Code
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <h3>Code With Mosh</h3>
              <p>
                Code With Mosh is an excellent platform for learning to code and
                developing software development skills. {<br />}
                {<br />} The instructor, Mosh, is knowledgeable, engaging, and
                has a great teaching style. The lessons are well-structured,
                easy to follow, and provide a solid foundation for anyone
                looking to build their coding skills. {<br />}
                {<br />}The course material is comprehensive and covers a wide
                range of topics, from the basics of programming to more advanced
                concepts. The platform also offers excellent support, with a
                community of fellow students and helpful resources to ensure a
                positive learning experience. {<br />}
                {<br />}I highly recommend Code With Mosh to anyone looking to
                enhance their software development skills and take their coding
                to the next level.{<br />}
                {<br />}
              </p>
              <a className="affiliate-link" href="https://codewithmosh.com/">
                codewithmosh.com
              </a>
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
                Mar 5, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default FavCodeResources;
