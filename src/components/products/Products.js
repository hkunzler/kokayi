import React from "react";
import { Box, Card, Container, Divider } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {productsContent} from "./productsContent.js";
import productsStyles from "./productsStyles";

export default function Products() {
  const classes = productsStyles();
  
  const productCards = Object.keys(productsContent).map((product) => (
    <Card className={classes.card}>
      <CardActionArea
        rel="noopener noreferrer"
        target="_blank"
        href={productsContent[product].url}
      >
        <CardMedia
          component="img"
          alt={productsContent[product].title}
          height="140"
          src={require(`../../images/${productsContent[product].img}`)}
          title={productsContent[product].title}
        />
        <CardContent className={classes.cardBorder}>
          <Typography gutterBottom variant="h5" component="h2">
            {productsContent[product].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            by Kokayi Nosakhere
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {productsContent[product].price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          rel="noopener noreferrer"
          target="_blank"
          href={productsContent[product].url}
          size="small"
          color="primary"
        >
          Purchase
        </Button>
      </CardActions>
    </Card>
  ));
  return (
    <Container maxWidth="md">
      <h1 className={classes.header}>Products</h1>
      <Divider className={classes.divider} variant="middle" />
      <center>
        <i>
        All individual books are $15 + $5 shipping and handling. Please include your mailing address to receive printed copies. Please allow 1-2 weeks for delivery.
        </i>
      </center>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {productCards}
      </Box>
    </Container>
  );
}
