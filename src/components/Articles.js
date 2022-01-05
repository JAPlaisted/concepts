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
                    image="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    title=""
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      Loops
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Accusantium dolorem fugiat architecto officiis sapiente.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sequi veritatis rerum maiores alias incidunt.
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
            <Link href="./articles/variables">
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
                      Variables
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Accusantium dolorem fugiat architecto officiis sapiente.
                      Lorem ipsum dolor, adipisicing elit. Sequi veritatis rerum
                      maiores alias incidunt.
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
            <Link href="./articles/algorithims">
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
                      Algorithims
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero facilis aut beatae omnis, totam sit excepturi!
                      Quis, eius! Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Sequi veritatis rerum maiores alias
                      incidunt.
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
            <Link href="./articles/functions">
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
                      Functions
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Optio sed vero totam quasi? Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Sequi veritatis rerum
                      maiores alias incidunt.
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
            <Link href="./articles/queries">
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
                      Queries
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste laudantium vitae facere, iure voluptatibus ex
                      cupiditate. Quasi! Lorem ipsum dolor, sit amet consectetur
                      maiores alias incidunt.
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
            <Link href="./articles/expressions">
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
                      Expressions
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Labore dolore quo voluptatum dolor a soluta nostrum. Lorem
                      ipsum dolor, sit adipisicing elit. Sequi veritatis rerum
                      maiores alias incidunt.
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
            <Link href="./articles/syntax">
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
                      Syntax
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quisquam iste impedit consequuntur voluptate pariatur.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sequi veritatis rerum maiores alias incidunt.
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
            <Link href="./articles/pseudocode">
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
                      Pseudo Code
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt nemo error sequi tempora, voluptate blanditiis!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sequi veritatis rerum maiores alias incidunt.
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
            <Link href="./articles/languages">
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
                      Languages
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum quae saepe nobis iste! Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Sequi veritatis rerum
                      maiores alias incidunt.
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
            <Link href="./articles/ides">
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
                      IDE's
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ipsum magni distinctio nostrum accusantium id illo autem
                      minima placeat. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Sequi veritatis rerum maiores alias
                      incidunt.
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
            <Link href="./articles/typography">
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
                      Typography
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, assumenda inventore. Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Sequi veritatis rerum
                      maiores alias incidunt.
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
            <Link href="./articles/booleans">
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
                      Booleans
                    </Typography>
                    <Typography
                      className="body__text"
                      variant="body1"
                      color="secondary"
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sequi veritatis rerum maiores alias incidunt. Lorem ipsum
                      dolor, sit amet consectetur adipisicing elit. Sequi
                      veritatis rerum maiores alias incidunt.
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
