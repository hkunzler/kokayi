import React from "react";
import { Box, Card, Container, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// import newsContent from "./newsContent";
import newsStyles from "./newsStyles";

export default function News() {
  const classes = newsStyles();
  const newsContent = {
    kokayiMarch: {
      author:
        "Dennis Wagner, Jordan Culver, and Deborah Barfield Berry, USA TODAY",
      img: "kokayi-march.webp",
      title:
        "25 years ago, Black men united in their pain – and power. This is what the Million Man March meant to participants.",
      url:
        "https://www.usatoday.com/in-depth/news/nation/2020/10/14/million-man-march-25th-anniversary-participants-reflect/5909719002/?fbclid=IwAR1TbnmLBuE1GxUe-Z4ZkTESDP2n4VZe6JiePJDChuX1J2z9Pc4egnTEDeg",
    },
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

  const articleCards = Object.keys(newsContent).map((article) => (
    <Card className={classes.card}>
      <CardActionArea
        rel="noopener noreferrer"
        target="_blank"
        href={newsContent[article].url}
      >
        <CardMedia
          component="img"
          alt={newsContent[article].title}
          height="140"
          src={require(`../../images/${newsContent[article].img}`)}
          title={newsContent[article].title}
        />
        <CardContent className={classes.cardBorder}>
          <Typography gutterBottom variant="h5" component="h2">
            {newsContent[article].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {newsContent[article].author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          rel="noopener noreferrer"
          target="_blank"
          href={newsContent[article].url}
          size="small"
          color="primary"
        >
          Read
        </Button>
      </CardActions>
    </Card>
  ));
  return (
    <Container maxWidth="md">
      <h1 className={classes.header}>News</h1>
      <Divider className={classes.divider} variant="middle" />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {articleCards}
      </Box>
    </Container>
  );
}
