import React from "react";
import { Box, Container, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import {bioContent} from "./bioContent.js";
import bioStyles from "./bioStyles.js";

import kokayi from "../../images/kokayi-profile.webp";

export default function Bio() {
  const classes = bioStyles();
  const bio = bioContent();
  return (
    <Container maxWidth="md">
      <h1 className={classes.header}>Bio</h1>
      <Divider className={classes.divider} variant="middle" />
      <Box
        className={classes.bioBody}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        <img className={classes.bioImg} src={kokayi} alt="Kokayi" />
        <section className={classes.bioContent}>{bio}</section>
      </Box>
    </Container>
  );
}
