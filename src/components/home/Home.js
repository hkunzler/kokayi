import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Container,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core/styles";
import kokayi from "../../images/kokayi-fist2.png";
import books from "../../images/books.jpg";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const useStyles = makeStyles({
  home: {
    // padding: `2rem 0`,
    // marginTop: `5rem`,
  },
  card: {
    maxWidth: 345,
    margin: `2rem`,
    height: `25rem`,
  },
  cardBorder: {
    borderTop: `5px solid #b71c1c`,
  },
  divider: {
    backgroundColor: `#b71c1c`,
    marginBottom: `2rem`,
  },
  buttons: {
    minWidth: `50%`,
  },
  grid: {
    maxWidth: `50%`,
    display: `flex`,
    justifyContent: `center`,
  },
  linkText: {
    color: `#b71c1c`,
  },
  purchaseButton: {
    background: `#b71c1c`,
    color: `white`,
    "&:hover": {
      backgroundColor: "#871111",
    },
  },
});

const quickLinks = {
  bio: {
    name: "Bio",
    img: "bio.jpg",
  },
  videos: {
    name: "Videos",
    img: "videos.png",
  },
  news: { name: "News", img: "videos.png" },
  articles: {
    name: "Articles",
    img: "articles.jpeg",
  },
};

export default function Videos() {
  const classes = useStyles();
  const sections = Object.keys(quickLinks).map((section, i) => (
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
              <h2>{quickLinks[section].name}</h2>
              <Link
                to={`/${quickLinks[section].name.toLowerCase()}`}
                className={classes.linkText}
              >
                View
              </Link>
            </Grid>
          </Grid>
          <img
            className={styles.homeImg}
            src={require(`../../images/${quickLinks[section].img}`)}
            alt=""
          />
        </>
      ) : (
        <>
          <img
            className={styles.homeImg}
            src={require(`../../images/${quickLinks[section].img}`)}
            alt=""
          />
          <Grid container className={classes.grid}>
            <Grid item xs={3}>
              <h2>{quickLinks[section].name}</h2>
              <Link
                to={`/${quickLinks[section].name.toLowerCase()}`}
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
      <div className={styles.books}>
        <div className={styles.test}>
          <Link to="/products">
            <Button className={classes.purchaseButton} variant="contained">
              Purchase books
            </Button>
          </Link>
        </div>
      </div>
      <Container maxWidth="md">
        <h1 className={styles.header}>Welcome</h1>
        <Divider className={classes.divider} variant="middle" />
        {sections}
      </Container>
    </div>
  );
}
