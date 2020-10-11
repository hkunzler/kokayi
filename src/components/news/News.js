import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Container } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./News.module.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: `2rem`,
  },
  cardBorder: {
    borderTop: `5px solid #b71c1c`,
  },
  background: {
    background: `#d3d3d375`,
    padding: `2rem 0`,
  },
});

const articles = {
  voices: {
    author: "by Wesley Early",
    img: "voices.jpg",
    title: "49 Voices: Kokayi Nosakhere of Anchorage",
    url:
      "https://www.alaskapublic.org/2017/02/24/49-voices-kokayi-nosakhere-of-anchorage/",
  },
  fbi: {
    author: "",
    img: "fbi.jpg",
    title: "2017 Director’s Community Leadership Award Recipient",
    url:
      "https://www.fbi.gov/about/community-outreach/dcla/2017/anchorage-kokayi-nosakhere",
  },
  diverse: {
    author: "by Wesley Early",
    img: "diverse.jpg",
    title: "Is Anchorage America’s most diverse city? Depends on who you",
    url:
      "https://www.alaskapublic.org/2017/05/30/is-anchorage-americas-most-diverse-city-depends-on-who-you-ask/",
  },
  ashland: {
    author: "by Jennevieve Fong",
    img: "ashland.jpg",
    title: "Ashland community kindness project gains national attention",
    url:
      "https://ktvl.com/news/local/ashland-community-kindness-project-gains-national-attention",
  },
};

export default function News() {
  const classes = useStyles();
  const articleCards = Object.keys(articles).map((article) => (
    <Card className={classes.card}>
      <CardActionArea href={articles[article].url}>
        <CardMedia
          component="img"
          alt={articles[article].title}
          height="140"
          src={require(`../../images/${articles[article].img}`)}
          title={articles[article].title}
        />
        <CardContent className={classes.cardBorder}>
          <Typography gutterBottom variant="h5" component="h2">
            {articles[article].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {articles[article].author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={articles[article].url} size="small" color="primary">
          Read
        </Button>
      </CardActions>
    </Card>
  ));
  return (
    <Container maxWidth="md">
      <h1 className={styles.header}>News</h1>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {articleCards}
      </Box>
    </Container>
  );
}
