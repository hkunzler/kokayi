import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Container, Divider } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./Articles.module.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: `2rem`,
  },
  cardBorder: {
    borderTop: `2px solid #b71c1c`,
  },
  background: {
    padding: `2rem 0`,
  },
  divider: {
    backgroundColor: `#b71c1c`,
  },
});

const articles = {
  rosaParks: {
    img: "rosa-parks.jpeg",
    title: "Rosa Parks and Donald Trump: Real News vs Fake News",
    url:
      "https://medium.com/@Royalstar907/rosa-parks-and-donald-trump-real-news-vs-fake-news-d63be24002b7",
  },
  actsOfSafety: {
    img: "acts-of-safety.jpeg",
    title: "Acts of Safety or Interrupting Whiteness on Southern Oregon University",
    url:
      "https://medium.com/@Royalstar907/acts-of-safety-or-interrupting-whiteness-on-southern-oregon-university-9d0d24e176ce",
  },
  ahmaudArbrey: {
    img: "ahmaud-arbrey.jpeg",
    title: "Grieving Ahmaud Arbrey: How White Allies Can Provide Comfort",
    url:
      "https://medium.com/@Royalstar907/grieving-ahmaud-arbrey-how-white-allies-can-provide-comfort-d41ca943579c",
  },
  southernOregon: {
    img: "southern-oregon.jpeg",
    title: "Facing the Reality of Southern Oregon",
    url:
      "https://medium.com/@Royalstar907/facing-the-reality-of-southern-oregon-a25a67983df8",
  },
  foodStamps: {
    img: "food-stamp.jpg",
    title: "On Food Stamps and Alaska's Senators",
    url:
      "https://www.anchoragepress.com/columnists/on-food-stamps-and-alaska-s-senators/article_3b83ebc0-80a2-11e8-8d12-d36ca500734c.html",
  },
  jedWhittaker: {
    img: "jed-whittaker.jpg",
    title:
      "Jed Whittaker, the ‘Don Quixote’ of Alaskan politicians, takes aim at Don Young",
    url:
      "https://www.anchoragepress.com/news/jed-whittaker-the-don-quixote-of-alaskan-politicians-takes-aim/article_88ba1550-7651-11e8-88fd-bb592f9d5be6.html",
  },
  sexWorkers: {
    img: "sex-workers.jpg",
    title:
      "SOLUTIONS, ANCHORAGE: ‘InCels’ and a changing world for sex workers",
    url:
      "https://www.anchoragepress.com/columnists/solutions-anchorage-incels-and-a-changing-world-for-sex-workers/article_1115668c-5ef3-11e8-a0fa-cfa6a3d5f9af.html",
  },
  donYoung: {
    img: "don-young.jpg",
    title: "SOLUTIONS, ANCHORAGE: Alaska vs. Don Young",
    url:
      "https://www.anchoragepress.com/columnists/solutions-anchorage-alaska-vs-don-young/article_81c019a8-49f0-11e8-9b0c-07d0e7de70db.html",
  },
  darkSide: {
    img: "dark-side.jpg",
    title: "SOLUTIONS, ANCHORAGE: Tackling Anchorage’s dark side",
    url:
      "https://www.anchoragepress.com/columnists/solutions-anchorage-tackling-anchorage-s-dark-side/article_76b49e20-5ae5-11e8-a23d-2f1eaaa47f6b.html",
  },
  highRape: {
    img: "high-rape.jpg",
    title: "Reasons for the high rate of rape in Alaska",
    url:
      "https://www.anchoragepress.com/columnists/reasons-for-the-high-rate-of-rape-in-alaska/article_564f37fa-4e4f-11e8-b893-47cba59bd374.html",
  },
  lorenzoWilson: {
    img: "lorenzo-wilson.jpg",
    title: "Lorenzo Wilson and the promise of real estate",
    url:
      "https://www.anchoragepress.com/columnists/on-food-stamps-and-alaska-s-senators/article_3b83ebc0-80a2-11e8-8d12-d36ca500734c.html",
  },
};

export default function Articles() {
  const classes = useStyles();
  const articleCards = Object.keys(articles).map((article) => (
    <Card className={classes.card}>
      <CardActionArea rel="noopener noreferrer" target="_blank" href={articles[article].url}>
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
            By Kokayi Nosakhere
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button rel="noopener noreferrer" target="_blank" href={articles[article].url} size="small" color="primary">
          Read
        </Button>
      </CardActions>
    </Card>
  ));
  return (
    <div className={classes.background}>
      <Container maxWidth="md">
        <h1 className={styles.header}>Articles</h1>
        <Divider className={classes.divider} variant="middle" />
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {articleCards}
        </Box>
      </Container>
    </div>
  );
}
