import React from "react";
import { Box, Button, Container, Divider, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import homeContent from "./homeContent.js";
import homeStyles from "./homeStyles.js";

export default function Videos() {
  const classes = homeStyles();
  
  const sections = Object.keys(homeContent).map((section, i) => (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {i % 2 === 0 ? (
        <>
          <Grid container className={classes.grid}>
            <Grid item xs={3}>
              <h2>{homeContent[section].name}</h2>
              <Link
                to={`/${homeContent[section].name.toLowerCase()}`}
                className={classes.linkText}
              >
                View
              </Link>
            </Grid>
          </Grid>
          <img
            className={classes.homeImg}
            src={require(`../../images/${homeContent[section].img}`)}
            alt=""
          />
        </>
      ) : (
        <>
          <img
            className={classes.homeImg}
            src={require(`../../images/${homeContent[section].img}`)}
            alt=""
          />
          <Grid container className={classes.grid}>
            <Grid item xs={3}>
              <h2>{homeContent[section].name}</h2>
              <Link
                to={`/${homeContent[section].name.toLowerCase()}`}
                className={classes.linkText}
              >
                View
              </Link>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  ));
  return (
    <div className={classes.home}>
      <div className={classes.books}>
        <div className={classes.blackBox}>
          <Link to="/products">
            <Button className={classes.purchaseButton} variant="contained">
              Purchase books
            </Button>
          </Link>
        </div>
      </div>
      <Container maxWidth="md">
        <h1 className={classes.header}>Welcome</h1>
        <Divider className={classes.divider} variant="middle" />
        {sections}
      </Container>
    </div>
  );
}
