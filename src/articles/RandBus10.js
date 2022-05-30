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
            image="https://miro.medium.com/max/1400/0*iiPjT1W7w1tG3b72"
            title="Light bulb on sticky note"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              10 Random Business Ideas
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <ol type="1">
                <li>
                  Airbnb For Parking Spaces.
                  <br />
                  <sub>
                    Connect people who have extra lot space with those who need
                    parking.
                  </sub>
                </li>
                <li>
                  Influencer Brand Negotiation Agency.
                  <br />
                  <sub>
                    Find influencers and bring them sponsors and brand deals.
                  </sub>
                </li>
                <li>
                  Freelance/Ghost-Written Book Publishing.
                  <br />
                  <sub>Hire writers on Upwork and focus on publishing.</sub>
                </li>
                <li>
                  3D Printing Home Construction.
                  <br />
                  <sub>
                    Build and sell 3D printed homes with a concrete 3D printer.
                  </sub>
                </li>
                <li>
                  Custom Parts Shop.
                  <br />
                  <sub>
                    With the technical know-how and some CNC machines, make
                    custom parts.
                  </sub>
                </li>
                <li>
                  Business Partner "Matching" App.
                  <br />
                  <sub>
                    Like Tinder, but for finding your dream startup cofounders.
                  </sub>
                </li>
                <li>
                  Vacant Real Estate Holding Company.
                  <br />
                  <sub>
                    Buy and hold vacant land, let it raise in value, enjoy no
                    liability.
                  </sub>
                </li>
                <li>
                  Gourmet Soap.
                  <br />
                  <sub>
                    Make gourmet soap to sell online or at farmers markets.
                  </sub>
                </li>
                <li>
                  Real Estate Photography.
                  <br />
                  <sub>
                    Armed with camera and drone, reach out to local realtors for
                    opportunities.
                  </sub>
                </li>
                <li>
                  Company Automation Software. <br />
                  <sub>
                    Build company automation tools to save companies money.
                  </sub>
                </li>
              </ol>
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
