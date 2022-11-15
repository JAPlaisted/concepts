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

function EverydayThings5() {
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
            image="https://cdn.webshopapp.com/shops/305440/files/334089848/image.jpg"
            title="Minecraft Pickaxe"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              5 Things I Use Everyday
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <h3>Rival 3 Wireless Mouse</h3>
              <a href="https://www.amazon.com/SteelSeries-Rival-Wireless-Gaming-Mouse/dp/B08GB2PF71/ref=sr_1_3?crid=3KY9LKHAPOJFY&keywords=rival+3+wireless+mouse&qid=1668548866&sprefix=rival+3+wirelss%2Caps%2C157&sr=8-3">View on Amazon</a>
              <h3>Beats Studio 3</h3>
              <a href="https://www.amazon.com/Beats-Studio3-Wireless-Over-Ear-Headphones/dp/B085292V2M/ref=sr_1_3?crid=1Z3XC01JNGKZI&keywords=beat+studio+3&qid=1668548995&sprefix=beast+studio+%2Caps%2C164&sr=8-3&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0">View on Amazon</a>
              <h3>Paper Mate Inkjoy Gel Pens</h3>
              <a href="https://www.amazon.com/Paper-Mate-InkJoy-Medium-Point/dp/B019QBOD4W/ref=sr_1_3?crid=2SVLC8QA053OO&keywords=paper+mate+inkjoy+gel+pen&qid=1668549043&sprefix=paper+mate+injoy%2Caps%2C151&sr=8-3">View on Amazon</a>
              <h3>Samsung Galaxy s21 Ultra</h3>
              <a href="https://www.amazon.com/Samsung-Galaxy-S21-5G-Snapdragon/dp/B092CFG6MN/ref=sr_1_2_sspa?crid=2S7Z87SB16NIS&keywords=samsung+galaxy+s21+ultra&qid=1668549099&sprefix=samsung+galaxy+s21ultr%2Caps%2C214&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&smid=A3QZ4GOG6ETYGB">View on Amazon</a>
              <h3>Echo Dot (2018)</h3>
              <a href="https://www.amazon.com/Echo-Dot/dp/B07FZ8S74R/ref=sr_1_1?crid=T2JB2KK4BGF1&keywords=alexa+echo&qid=1668549185&sprefix=alexa%2Caps%2C184&sr=8-1">View on Amazon</a>
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
    </div>
  );
}

export default EverydayThings5;
