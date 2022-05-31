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

function FiveFavRobots() {
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
            image="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2017_24/2041281/170616-terminator-mn-1700.jpg"
            title="The terminator"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              My Top 5 Favorite Robots
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <ul>
                <li>
                  <article>
                    <img
                      href="https://assets.3dtotal.com/the-matrix-sentinel-scene-b-01.mezxr2.expanded.3b7.jpg"
                      alt="Sentinels"
                    ></img>
                    <p>
                      <b>Sentinels</b>
                      <br />
                      <br />
                      With one mission, search and destroy, these killer robots
                      from The Matrix are definitely top five for me. <br />{" "}
                      They are just trying to do their job!
                    </p>
                  </article>
                </li>
                <li>
                  <article>
                    <img
                      href="https://static.wikia.nocookie.net/starwars/images/1/16/BD-1_JFO.png/revision/latest?cb=20190610025750"
                      alt="BD-1"
                    ></img>
                    <p>
                      <b>BD-1</b>
                      <br />
                      <br />
                      Of all robots in Star Wars, none has ever stolen my heart
                      quite as fast as the Buddy Droid 1. <br /> If I could have
                      a companion robot, it would be BD-1.
                    </p>
                  </article>
                </li>
                <li>
                  <article>
                    <img
                      href="https://www.denofgeek.com/wp-content/uploads/2019/10/header_main_image_2.jpg?resize=768%2C432"
                      alt="The Terminator"
                    ></img>
                    <p>
                      <b>The Terminator</b>
                      <br />
                      <br />
                      What was once childhood nightmare fuel has become a
                      classic killer robot turned protector and all around
                      favorite for many. <br /> They have outdone the movies at
                      this point, but I am sure he will 'be back.'
                    </p>
                  </article>
                </li>
                <li>
                  <article>
                    <img
                      href="https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratchet-and-clank-rift-apart/d/d9/03_Clank.png"
                      alt="Clank"
                    ></img>
                    <p>
                      <b>Clank</b>
                      <br />
                      <br />
                      Possibly one of the most useful of the lot, Clank is an
                      all around multi use weapon, vehicle, robot, and friend.
                    </p>
                  </article>
                </li>
                <li>
                  <article>
                    <img
                      href="https://i.pinimg.com/564x/60/0a/7f/600a7f69b7ec159c8546b9a30cafe1a2.jpg"
                      alt="Dum-E"
                    ></img>
                    <p>
                      <b>Dum-E</b>
                      <br />
                      <br />
                      My personal favorite robot of all time, Dum-E, the
                      ultimate workshop robot. <br /> It is my dream to build
                      this bot.
                    </p>
                  </article>
                </li>
              </ul>
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
    </div>
  );
}

export default FiveFavRobots;
