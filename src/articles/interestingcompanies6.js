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

function InterestingCompanies6() {
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
            image="https://www.roadracingworld.com/wp-content/uploads/2021/09/2022-zero-dsr-studio-bd-profile_1631581410.jpg"
            title="A Zero Motorcycle"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              6 Interesting Companies to Follow
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <h3>Zero Motors</h3>
              <a href="https://www.zeromotorcycles.com/">
                Zero Motors is a company that specializes in the development and
                production of electric vehicles. The company's mission is to
                provide environmentally friendly and sustainable transportation
                options to consumers. Zero Motors offers a range of electric
                vehicles, including cars, bikes, and scooters, that are designed
                to be efficient, stylish, and affordable. The company uses
                cutting-edge technology to ensure that its vehicles are equipped
                with advanced features such as fast charging, long-range
                batteries, and intuitive control systems. Zero Motors is
                dedicated to reducing carbon emissions and promoting a greener
                future, and its vehicles are a testament to its commitment to
                sustainability. Whether you're looking for a mode of
                transportation for daily commuting or a fun way to explore your
                city, Zero Motors has a product that's right for you.
              </a>
              <h3>Feastables</h3>
              <a href="https://feastables.com/">
                Feastables is a chocolate bar and snack company that emphasizes
                the use of simple, natural ingredients in its products. Their
                goal is to create delicious and satisfying snacks that are made
                with as few ingredients as possible, while still delivering rich
                and complex flavors. The company uses high-quality cocoa, nuts,
                and quinoa in their chocolate bars and snacks, ensuring that
                each bite is a pure and wholesome experience. Feastables is
                dedicated to promoting a healthier lifestyle and reducing the
                amount of processed ingredients in our food. They believe that
                food should be simple and enjoyable, and their products are a
                testament to this philosophy.
              </a>
              <h3>HackSmith Industries</h3>
              <a href="https://www.youtube.com/@theHacksmith">
                HackSmith Industries is a YouTube channel and engineering
                company focused on creating innovative and exciting projects.
                The company is led by a team of experienced engineers and makers
                who are passionate about using technology and creativity to
                solve real-world problems. The channel features a variety of
                content, including tutorials, demonstrations, and build projects
                that showcase the latest advancements in engineering and
                technology. HackSmith Industries is dedicated to educating and
                inspiring people of all ages and backgrounds to pursue a career
                in engineering or to simply explore the world of making and
                tinkering. The channel is known for its engaging and
                entertaining approach to engineering, and its content is
                designed to be both educational and entertaining. Whether you're
                an experienced engineer, a student, or simply someone who loves
                technology, HackSmith Industries is a great resource for
                learning and discovering new ideas
              </a>
              <h3>Boxabl</h3>
              <a href="https://www.boxabl.com/">
                Boxabl is a company that specializes in the design and
                production of modular homes. Their mission is to revolutionize
                the way people think about and build their homes, by offering a
                fast, affordable, and sustainable solution. Boxabl homes are
                made with patented technology that allows them to be shipped and
                assembled on-site in a fraction of the time it takes to build a
                traditional home. The homes are also designed to be
                energy-efficient, using environmentally friendly materials and
                technologies to reduce their carbon footprint. Boxabl homes are
                customizable and can be configured to meet the specific needs
                and preferences of each customer. Whether you're looking for a
                starter home, a vacation property, or a larger family home,
                Boxabl has a solution that's right for you. The company is
                dedicated to making homeownership accessible and affordable, and
                its innovative homes are a testament to its commitment to
                excellence.
              </a>
              <h3>MudBots</h3>
              <a href="https://www.mudbots.com/">
                MudBots is a company that specializes in the production and sale
                of concrete 3D printers. The company's goal is to provide
                affordable and accessible solutions for creating concrete
                structures, from small architectural details to large-scale
                building components. The concrete 3D printers offered by MudBots
                are designed to be easy to use, reliable, and versatile, making
                them ideal for a wide range of applications. With advanced
                features such as precise control over the layering process,
                material management systems, and intuitive software, MudBots' 3D
                printers are capable of producing high-quality concrete
                structures with speed and efficiency. Whether you're a
                contractor, architect, or DIY enthusiast, MudBots has a concrete
                3D printer that's right for you. The company is dedicated to
                making 3D printing a practical and accessible solution for the
                construction industry, and its innovative products are a
                testament to its commitment to excellence.
              </a>
              <h3>Open AI</h3>
              <a href="https://openai.com/">
                OpenAI is a research organization focused on developing
                artificial intelligence technology that benefits humanity. The
                company was founded with the goal of promoting and developing
                friendly AI in a way that benefits humanity as a whole. OpenAI
                conducts cutting-edge research in areas such as machine
                learning, robotics, and natural language processing, and its
                innovations have helped to advance the field of AI
                significantly. The company is known for its partnerships with
                leading technology companies, academic institutions, and
                governments, and its contributions to open-source projects and
                communities. OpenAI is dedicated to making AI accessible and
                understandable to a wide audience, and its mission is to ensure
                that this powerful technology is developed and used in a
                responsible and ethical manner. Whether you're a researcher,
                student, or simply someone interested in the future of
                technology, OpenAI is an important player in the field of
                artificial intelligence and a great resource for learning and
                discovery.
              </a>
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
    </div>
  );
}

export default InterestingCompanies6;
