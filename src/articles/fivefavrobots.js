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
            image="https://www.azom.com/images/Article_Images/ImageForArticle_1325_15761703408964314.png"
            alt="CAD Image"
            title="A cad system in use"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              Becoming a CAD Designer / Developer: The Benefits and What You
              Need to Know
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <p>
                Computer-Aided Design (CAD) is a field that has grown in
                popularity in recent years, and with good reason. CAD design is
                used in a wide range of industries, from architecture and
                engineering to product design and manufacturing. As a result,
                there is a growing demand for skilled CAD designers and
                developers who can use software to bring ideas to life. If
                you're interested in pursuing a career in CAD, this article will
                provide you with information about the benefits of becoming a
                CAD designer / developer, what you need to know to get started,
                and the job environment you can expect. {<br />}
                {<br />}
                Benefits of Becoming a CAD Designer / Developer{<br />}
                {<br />}
                High Demand: There is a growing demand for CAD designers and
                developers in many industries. With the increasing use of
                technology in the design and manufacturing process, CAD skills
                are becoming more valuable and in-demand.{<br />}
                {<br />}
                Good Salary: CAD designers and developers are well compensated
                for their skills and experience. The average salary for a CAD
                designer is around $70,000, and the average salary for a CAD
                developer is around $80,000. However, salaries can be much
                higher for those with more experience and advanced skills.
                {<br />}
                {<br />}
                Versatile Skills: CAD skills are versatile and transferable to
                many different industries, which means that you have a range of
                career options if you decide to pursue a career in CAD.{<br />}
                {<br />}
                Creative Freedom: CAD designers and developers have the
                opportunity to be creative and bring their ideas to life. You
                can use your skills to create designs and prototypes that can
                change the world.{<br />}
                {<br />}
                Collaborative Work Environment: CAD designers and developers
                often work in a collaborative environment, which means you'll
                have the opportunity to work with a team of people to bring
                designs to life.{<br />}
                {<br />}
                Requirements to Become a CAD Designer / Developer{<br />}
                {<br />}
                Education: There are no specific educational requirements to
                become a CAD designer or developer. However, a degree in
                engineering, architecture, or product design can be helpful. You
                can also take online courses or attend training programs to gain
                the skills you need to become a CAD designer or developer.
                {<br />}
                {<br />}
                Skills: To become a CAD designer or developer, you need to have
                a strong understanding of technology, as well as the ability to
                use CAD software. You also need to have good problem-solving and
                critical thinking skills, as well as the ability to work well in
                a team environment.{<br />}
                {<br />}
                <img
                  src="https://www.pdsol.com/wp-content/uploads/2019/07/3d-software-apps.jpg"
                  alt="CAD Image"
                ></img>
                Experience: Gaining experience in CAD design is key to becoming
                a successful CAD designer or developer. You can gain experience
                by working on projects, taking on freelance work, or working as
                an intern.{<br />}
                {<br />}
                Job Environment{<br />}
                {<br />}
                CAD designers and developers often work in a fast-paced,
                high-tech environment. You'll be working with a team of people
                to bring designs to life, and you'll be using the latest
                technology to create designs and prototypes.{<br />}
                {<br />}
                CAD designers and developers often work in offices, but they may
                also work in manufacturing facilities or other settings. You may
                be required to travel to meet with clients or attend trade
                shows.{<br />}
                {<br />}
                Salary Expectations{<br />}
                {<br />}
                The average salary for a CAD designer is around $70,000, and the
                average salary for a CAD developer is around $80,000. However,
                salaries can be much higher for those with more experience and
                advanced skills.{<br />}
                {<br />}
                In conclusion, becoming a CAD designer or developer can be a
                rewarding and challenging career path. With the growing demand
                for CAD skills in many industries, you have the opportunity to
                use your creativity and technical skills to bring ideas to life.
                If you're interested in pursuing a career in CAD, be sure to
                gain the skills and experience you need{<br />}
                {<br />}
                Throughout the article, we mention the importance of having a
                strong understanding of CAD software in order to become a
                successful CAD designer or developer. One of the best software
                options on the market is Fusion360, a powerful tool that is
                widely used in a range of industries. If you're interested in
                giving Fusion360 a try, be sure to check out the software by
                following this{" "}
                <a className="affiliate-link" href="http://aklam.io/3Mbvyj">
                  affiliate link
                </a>{" "}
                to their official website. Not only will you be able to take
                advantage of its robust features, but you'll also be supporting
                the creators of this article.
              </p>
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
