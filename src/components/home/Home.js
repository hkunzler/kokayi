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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import kokayi from "../../images/kokayi-fist2.png";

import styles from "./Home.module.css";

const useStyles = makeStyles({
  home: {
    background: `#FAFAFA`,
    padding: `2rem 0`,
    marginTop: `5rem`,
  },
  buttons: {
    background: `#b71c1c`,
    color: `white`,
  },
  card: {
    maxWidth: 345,
    margin: `2rem`,
    height: `25rem`,
  },
  cardBorder: {
    borderTop: `5px solid #b71c1c`,
  },
});

const quickLinks = ["Bio", "Videos", "News", "Articles"];

export default function Videos() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <div className={styles.kokayi}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Card className={classes.card}>
            <CardActionArea href="#">
              <CardMedia
                component="img"
                alt="Books"
                height="140"
                src={require(`../../images/books.jpg`)}
                title="Books"
              />
              <CardContent className={classes.cardBorder}>
                <Typography gutterBottom variant="h5" component="h2">
                  Books
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sint, quam impedit ab quasi labore fuga voluptas iste eaque
                  harum iure inventore delectus expedita nisi beatae nostrum
                  pariatur cupiditate perspiciatis quae?
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href="#" size="small" color="primary">
                Purchase
              </Button>
            </CardActions>
          </Card>
          <img src={kokayi} alt="Kokayi" />
        </Box>
      </div>
      <Container maxWidth="md">
        <h1 className={styles.header}>Quick Links</h1>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ButtonGroup
            variant="contained"
            aria-label="contained primary button group"
            className={classes.buttons}
          >
            {quickLinks.map((quickLink) => (
              <Button className={classes.buttons}>{quickLink}</Button>
            ))}
          </ButtonGroup>
        </Box>
      </Container>
    </div>
  );
}
