import React, { useEffect } from "react";
import {
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
} from "@material-ui/core";
import Nav from "../components/Nav";
import Susan from "../authors/susan";

function Algorithims() {
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
            image="https://www.bgosoftware.com/blog/wp-content/uploads/2016/01/Featured_programming_books.jpg"
            title="Laptop and Books"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              5 Best Books to Learn Code
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <ol type="1">
                <h4>(A Clickable List)</h4>
                <li>
                  <a
                    href="https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507/ref=sr_1_1?crid=2OEPALJF1VL57&keywords=eloquent+javascript&qid=1653882131&sprefix=eloquent%2Caps%2C168&sr=8-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Eloquent JavaScript
                  </a>
                  <br />
                  <sub>Coding Fundamentals - JavaScript</sub>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.amazon.com/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833FBNHV/ref=zg_bs_4133_1/145-3515772-1087942?pd_rd_i=B0833FBNHV&psc=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Pragmatic Programmer
                  </a>
                  <br />
                  <sub>Software Engineering</sub>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319/ref=sr_1_1?crid=311KV0GGJ7D3Y&keywords=code+the+hidden+language+of+computer+hardware+and+software&qid=1653882301&s=audible&sprefix=code+the+hidden%2Caudible%2C126&sr=1-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <br />
                  <sub>How code works with hardware</sub>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.amazon.com/Algorithms-MIT-Press-Essential-Knowledge/dp/0262539020/ref=sr_1_1?crid=3BOX52UYMEBJC&keywords=algorithms+mit&qid=1653882410&s=audible&sprefix=algorithims+mi%2Caudible%2C151&sr=1-1-catcorr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Algorithms
                  </a>
                  <br />
                  <sub>Algorithms – Computer Science</sub>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.amazon.in/Clean-Code-Robert-C-Martin/dp/8131773388/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Clean Code
                  </a>
                  <br />
                  <sub>Structuring Programs</sub>
                </li>
              </ol>
            </Typography>
          </CardContent>
        </CardActionArea>

        <Susan />
      </Card>
    </div>
  );
}

export default Algorithims;
