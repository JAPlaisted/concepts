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
            <Link to="./articles/randbus10">
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
                    image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_471763092_2000133320009280382_353710.jpg"
                    title="Elon Musk"
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
                    image="https://www.bgosoftware.com/blog/wp-content/uploads/2016/01/Featured_programming_books.jpg"
                    title="Laptop and Books"
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
                    image="https://reactorlab.net/resources-folder/matlab/pdf-link-folder/divide_by_zero.jpg"
                    title="Lake with hole due to dividing by zero"
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
                    image="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2017_24/2041281/170616-terminator-mn-1700.jpg"
                    title="The terminator"
                  />
                  <CardContent className="content">
                    <Typography
                      className="title title--article"
                      variant="h3"
                      color="primary"
                    >
                      My Top 5 Favorite Robots
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
                    image="https://miro.medium.com/max/1123/1*6C702o6cpNyLm27WLdZyjg.png"
                    title="Developer portfolio"
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
                    image="https://www.biznews.com/wp-content/uploads/2022/04/in-a-twist-elon-musk-wants-a-reg.jpg"
                    title="Elon Musk in Ted interview"
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
                    image="https://physicsworld.com/wp-content/uploads/2021/08/Sam-Jarman-20-August-2021.jpg"
                    title="A Black Hole"
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
                    image="https://www.roadracingworld.com/wp-content/uploads/2021/09/2022-zero-dsr-studio-bd-profile_1631581410.jpg"
                    title="A Zero Motorcycle"
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
                    image="https://cdn.webshopapp.com/shops/305440/files/334089848/image.jpg"
                    title="Minecraft Pickaxe"
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
                    image="https://www.middlemarketcenter.org/Media/Expert%20Perspectives%20Images/oldbooksonawoodenshelfno_132025.jpg"
                    title="Books"
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
                    title="Learning to code"
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
