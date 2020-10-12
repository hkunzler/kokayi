import React from "react";
import { Box, Card, Container, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import articlesContent from "./articlesContent.js";
import articlesStyles from './articlesStyles.js'

export default function Articles() {
  const classes = articlesStyles();

  const articleCards = Object.keys(articlesContent).map((article) => (
    <Card className={classes.card}>
      <CardActionArea
        rel="noopener noreferrer"
        target="_blank"
        href={articlesContent[article].url}
      >
        <CardMedia
          component="img"
          alt={articlesContent[article].title}
          height="140"
          src={require(`../../images/${articlesContent[article].img}`)}
          title={articlesContent[article].title}
        />
        <CardContent className={classes.cardBorder}>
          <Typography gutterBottom variant="h5" component="h2">
            {articlesContent[article].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            By Kokayi Nosakhere
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          rel="noopener noreferrer"
          target="_blank"
          href={articlesContent[article].url}
          size="small"
          color="primary"
        >
          Read
        </Button>
      </CardActions>
    </Card>
  ));
  
  return (
    <div className={classes.background}>
      <Container maxWidth="md">
        <h1 className={classes.header}>Articles</h1>
        <Divider className={classes.divider} variant="middle" />
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {articleCards}
        </Box>
      </Container>
    </div>
  );
}
