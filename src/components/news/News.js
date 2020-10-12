import React from "react";
import { Box, Card, Container, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import newsContent from "./newsContent";
import newsStyles from "./newsStyles";

export default function News() {
  const classes = newsStyles();
  
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
