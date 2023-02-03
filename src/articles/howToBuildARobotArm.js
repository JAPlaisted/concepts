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

function RandBus10() {
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
            image="https://designrobotics.net/wp-content/uploads/2018/03/uap-robotics-content-image-1.jpg"
            title="5 Axis robot Arm"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              Building a Robotic Arm: A How-To Guide
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <p>
                Robotic arms are a popular project among DIY makers, hobbyists,
                and students. With the right tools and a little bit of patience,
                anyone can build a functioning robotic arm. This article will
                guide you through the steps to build your own robotic arm, from
                design to coding, in a comprehensive and detailed manner.{" "}
                {<br />}
                {<br />}
                Designing the Robot with Fusion360 {<br />}
                {<br />}Designing the robot is the first and one of the most
                crucial steps in building a robotic arm. It is important to
                design the robot in such a way that it is functional,
                aesthetically pleasing, and within your budget. One of the most
                popular software used by makers to design and create 3D models
                is Fusion360. In this section, we will go into more detail on
                how to design the robot using Fusion360.{<br />}
                {<br />} Getting Started {<br />}
                {<br />}To start designing the robot, you first need to create a
                new project in Fusion360. You can then create a 3D design of the
                robot by creating individual parts such as the base, arm, and
                gripper. The software allows you to design each part in detail
                and then connect them together to form the complete robot.
                {<br />}
                {<br />}
                Designing the Parts {<br />}
                {<br />}When designing the robot, it is important to consider
                the size of the parts, the strength of the joints, and the
                overall weight of the robot. You should also take into account
                the size of the servo motors that you will be using to control
                the robot. The servo motors will dictate the range of motion for
                the robot, so make sure you select the right size for your
                design. {<br />}
                {<br />}It is also important to consider the material you will
                be using to print the parts. The strength and stiffness of the
                material will determine the functionality of the robot. ABS
                (Acrylonitrile Butadiene Styrene) and PLA (Polylactic Acid) are
                two popular materials used for 3D printing. ABS is stronger and
                more heat-resistant, while PLA is easier to work with and has a
                lower melting temperature.{<br />}
                {<br />} When designing the joints, it is important to ensure
                that they have the proper geometry to ensure that they can pivot
                smoothly. You can use the software’s sketch tools to create the
                geometry and then use the features tools to create the joints.
                You should also consider the orientation of the servo motors,
                making sure they are in the correct orientation so that they can
                properly control the movement of the robot. {<br />}
                {<br />}Designing the Electronics {<br />}
                {<br />}In addition to the mechanical design, you also need to
                design the electronics for the robot. This includes the control
                board and the power supply. The control board is what you will
                use to control the robot arm and it needs to be integrated into
                the design of the robot. The most popular control boards for
                hobby robots are the Arduino and Raspberry Pi boards. {<br />}
                {<br />}You should also consider the size of the control board
                and the power supply, making sure they fit within the design of
                the robot. The power supply provides power to the robot arm, so
                it is important to choose a power supply that is powerful enough
                to support the robot’s movements. {<br />}
                {<br />}
                <img src="https://cdn.cadcrowd.com/3d-models/07/ca/07cab1d8-234f-4656-90c4-a15cead46fe3/gallery/cab61f13-badb-4a66-9d15-5e1c9c3f38c0/medium.jpg"></img>
                {<br />}
                {<br />}Exporting the Design {<br />}
                {<br />}Once you have completed the design of the robot, you can
                then export it as an STL file, which is a file format commonly
                used for 3D printing. The STL file will contain all of the
                information needed to print the parts, including the geometry
                and material information.{<br />}
                {<br />} In conclusion, designing the robot using Fusion360 is
                an important step in building a robotic arm. By taking the time
                to design the robot in detail, you can ensure that it is
                functional, aesthetically pleasing, and within your budget. By
                following the steps outlined in this section, you can create a
                design that will allow you to easily move on to the next step in
                building your robotic arm. {<br />}
                {<br />} Printing the Parts{<br />}
                {<br />} With the design completed, the next step is to print
                the parts. You can use a 3D printer to print the parts, or you
                can use a service such as Shapeways or Sculpteo to have the
                parts printed for you.{<br />}
                {<br />}
                When printing the parts, it is important to make sure that the
                printer is properly calibrated and that the parts are being
                printed at the correct temperature and speed. You should also
                make sure that the parts are being printed with the right layer
                height and infill percentage. {<br />}
                {<br />}Once the parts have been printed, you should clean them
                up and remove any supports or rafts. You may also need to sand
                or polish the parts to get a smooth surface finish.{<br />}
                {<br />} Assembling the Robot {<br />}
                {<br />}With the parts printed, the next step is to assemble the
                robot. This involves connecting the servo motors to the control
                board, connecting the power supply, and connecting the
                mechanical parts together.{<br />}
                {<br />} When assembling the robot, it is important to make sure
                that the servo motors are properly aligned and that the joints
                are working smoothly. You should also make sure that the control
                board and power supply are securely attached to the robot.{" "}
                {<br />}
                {<br />}Once the robot is assembled, you can then test the
                joints to make sure that they are working correctly. You should
                also test the servo motors to make sure that they are
                functioning correctly.{<br />}
                {<br />} Coding the Robot to Do Something {<br />}
                {<br />}The final step in building a robotic arm is to code it
                to do something. You can use a variety of programming languages
                to control the robot, including Python and C++. {<br />}
                {<br />}The code for the robot will involve programming the
                servo motors to move in a specific pattern, such as opening and
                closing the gripper or moving the arm in a specific motion. You
                can also program the robot to respond to inputs, such as a
                button press or a sensor trigger. {<br />}
                {<br />}In conclusion, building a robotic arm is a fun and
                rewarding project that can be done by anyone with a little
                patience and the right tools. By following the steps outlined in
                this guide, you can build a functioning robotic arm that you can
                be proud of. Whether you’re a hobbyist, a student, or just
                someone who loves DIY projects, building a robotic arm is a
                great way to learn about electronics, mechanics, and
                programming.
                {<br />}
                {<br />}
                Throughout the article, we mention using Fusion360 for designing
                the robot. Fusion360 is a powerful tool for creating 3D designs
                and it is a must-have for anyone interested in building robots.
                If you're interested in giving Fusion360 a try, be sure to check
                out the software by following this{" "}
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
    </div>
  );
}

export default RandBus10;
