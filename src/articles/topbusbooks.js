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

function TopBusBooks() {
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
            image="https://www.middlemarketcenter.org/Media/Expert%20Perspectives%20Images/oldbooksonawoodenshelfno_132025.jpg"
            title="Books"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              My Top 8 Business Books
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <h3>Zero to One by Peter Thiel</h3>
              <a href="https://www.amazon.com/Zero-to-One-audiobook/dp/B00M284NY2/ref=sr_1_1?crid=3LBGB8A56JLMX&keywords=zero+to+one+peter+thiel&qid=1668549502&sprefix=zero+to+one%2Caps%2C194&sr=8-1">View on Amazon</a>
              <h3>Rich Dad Poor Dad by Robert Kiyosaki</h3>
              <a href="https://www.amazon.com/Rich-Dad-Poor-Anniversary-Middle/dp/B07QPQ8WBL/ref=sr_1_1?crid=2HWFG6TOKFPXW&keywords=rich+dad+poor+dad&qid=1668549546&s=audible&sprefix=rich+dad+poor+dad%2Caudible%2C140&sr=1-1">View on Amazon</a>
              <h3>The Neatest Little Buide to Stock Market Investing by Jason Kelly</h3>
              <a href="https://www.amazon.com/Neatest-Little-Guide-Market-Investing/dp/B088TWCM69/ref=sr_1_1?crid=2CUN9B6EFFNWV&keywords=the+neatest+little+guide+to+stock+market+investing&qid=1668549610&sprefix=the+neatest+%2Caps%2C156&sr=8-1">View on Amazon</a>
              <h3>The Four by Scott Gallowar</h3>
              <a href="https://www.amazon.com/The-Four-Scott-Galloway-audiobook/dp/B07565MYD1/ref=sr_1_1?crid=29CX236JDO5ZT&keywords=the+four&qid=1668549657&s=audible&sprefix=the+four%2Caudible%2C169&sr=1-1">View on Amazon</a>
              <h3>Think and Grow Rich by Napolean Hill</h3>
              <a href="https://www.amazon.com/Think-and-Grow-Rich-Napoleon-Hill-audiobook/dp/B000XJNDVQ/ref=sr_1_1?crid=1OGVLSJOZMQLQ&keywords=think+and+grow+rich&qid=1668549699&s=audible&sprefix=think+and+%2Caudible%2C165&sr=1-1">View on Amazon</a>
              <h3>Way of the Wolf by Jordan Belfort</h3>
              <a href="https://www.amazon.com/Way-of-Wolf-Jordan-Belfort-audiobook/dp/B0725R3G3Q/ref=sr_1_1?crid=OC3ZTGWXNY7J&keywords=way+of+the+wolf&qid=1668549758&s=audible&sprefix=way+of+the+wol%2Caudible%2C139&sr=1-1">View on Amazon</a>
              <h3>Originals by Adam Grant</h3>
              <a href="https://www.amazon.com/Originals-audiobook/dp/B01A7Q61LI/ref=sr_1_1?crid=1DU1TQCF7Q01M&keywords=adam+grant+originals&qid=1668549784&s=audible&sprefix=adam+grant+orig%2Caudible%2C157&sr=1-1">View on Amazon</a>
              <h3>Blockchain Revolution by Don Tapscott</h3>
              <a href="https://www.amazon.com/Blockchain-Revolution-audiobook/dp/B01F68480I/ref=sr_1_1?crid=ETS4I1I858S&keywords=blockchain+revolution&qid=1668549815&s=audible&sprefix=blockchain+re%2Caudible%2C171&sr=1-1">View on Amazon</a>
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
    </div>
  );
}

export default TopBusBooks;
