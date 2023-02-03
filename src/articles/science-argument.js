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

function ScienceArgument() {
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
            image="https://physicsworld.com/wp-content/uploads/2021/08/Sam-Jarman-20-August-2021.jpg"
            title="A Black Hole"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              An Argument for Science
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <h3>Bill Nye Vs. Ken Ham</h3>
              <p>
                In this video, Bill Nye makes the stand against magic and
                fairytales and argues for science.
                {<br />}
                {<br />}
                The Bill Nye vs. Ken Ham debate took place in 2014 and centered
                on the topic of creationism vs. evolution. Bill Nye, a popular
                science educator and advocate for evolution, debated against Ken
                Ham, a young earth creationist and CEO of the Creation Museum.
                {<br />}
                {<br />}
                The debate attracted a large amount of media attention and
                sparked discussions about the teaching of evolution and
                creationism in schools. In the debate, Nye argued for the
                scientific evidence supporting evolution, while Ham argued for a
                literal interpretation of the Bible and rejected evolution as a
                viable explanation for the origin of life.{<br />}
                {<br />} The debate was seen as a significant moment in the
                ongoing cultural and political debate over evolution and
                creationism. {<br />}
                {<br />}
              </p>
              <a href="https://www.youtube.com/watch?v=z6kgvhG3AkI&t=6736s">
                {" "}
                Full Verison (2:31 min)
              </a>
              {<br />}
              {<br />}
              <a href="https://www.youtube.com/watch?v=HA3E8wpBO_I">
                {" "}
                Short Verion (4min)
              </a>
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
    </div>
  );
}

export default ScienceArgument;
