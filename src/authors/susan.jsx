import React from 'react';
import {
    Typography,
    Box,
    CardActions,
    Avatar,
  } from "@material-ui/core";

function Susan() {
    return ( 
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
     );
}

export default Susan;