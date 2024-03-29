import React from "react";
import { Box, Button, Container, Divider, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import {homeContent} from "./homeContent.js";
import homeStyles from "./homeStyles.js";

export default function Videos() {
  const classes = homeStyles();
  const home = homeContent();
  const sections = Object.keys(home).map((section, i) => (
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
              <Link
                to={`/${home[section].name.toLowerCase()}`}
                className={classes.linkText}
              >
                <h2>{home[section].name}</h2>
              </Link>
            </Grid>
          </Grid>
          <img
            className={classes.homeImg}
            src={require(`../../images/${home[section].img}`)}
            alt=""
          />
        </>
      ) : (
        <>
          <img
            className={classes.homeImg}
            src={require(`../../images/${home[section].img}`)}
            alt=""
          />
          <Grid container className={classes.grid}>
            <Grid item xs={3}>
              <Link
                to={`/${home[section].name.toLowerCase()}`}
                className={classes.linkText}
              >
                <h2>{home[section].name}</h2>
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
          <Link to="/products" className={classes.purchaseButtonLink}>
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
