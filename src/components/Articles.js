import React from "react";
import "./Articles.css";
import {
  Typography,
  Box,
  Container,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  CardActions,
  Avatar,
} from "@material-ui/core";

import { Link } from "react-router-dom";

function Articles() {
  return (
    <div>
      <Container maxWidth="lg" className="blog__container">
        <Typography
          className="title title--section"
          variant="h2"
          color="secondary"
        >
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/loops">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://miro.medium.com/max/1400/0*iiPjT1W7w1tG3b72"
                    title="Light bulb on sticky note"
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      10 Random Business Ideas
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      10 random business ideas to inspire fellow entrepreneurs.
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/variables">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      Elon Musk’s 5 Important Areas
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Musk has listed these five areas as most important to the
                      future of humanity.
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/algorithims">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      5 Best Books to Learn Code
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      The top five books that have personally helped me in my
                      journey as a software developer.
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/functions">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      Dividing by Zero
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      The most accurate definition of division of a number by
                      zero.
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/queries">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      My 5 Favorite Robots
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      The five best robots in the multiverse according to me.
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
                        Apr 23, 2021
                      </Typography>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/expressions">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      7 Developer Portfolios for Inspiration
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      These seven portfolios are perfect for inspiring your own.
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/syntax">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      5 Great Elon Musk Interviews
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Watch these interviews for insight on all things Elon.
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/pseudocode">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1555680510-34daedadbdb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      An Argument for Science
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Warning: controversial content.
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/languages">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      6 Interesting Companies to Follow
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      These six amazing companies are changing the way I think
                      about business.
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
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/ides">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      5 Things I Use Everyday
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Workdays, off days, vacation days, sick days, I need this
                      stuff.
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
                        Mar 19, 2021
                      </Typography>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/typography">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      My Top 8 Business Books
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      These 8 books are the foundation of my knowledge in
                      business.
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
                        Mar 12, 2021
                      </Typography>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="./articles/booleans">
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    image="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      My Favorite Resources to Learn Code
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Learn Code and Learn It WELL
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
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Articles;
