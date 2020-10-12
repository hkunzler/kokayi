import React from "react";
import { Box, Container, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./Video.module.css";

const useStyles = makeStyles({
  video: {
    maxWidth: 345,
    margin: `2rem`,
  },
  background: {
      padding: `2rem 0`,
  },
  divider: {
    backgroundColor: `#b71c1c`,
}
});

const videoUrls = [
  "https://www.youtube-nocookie.com/embed/KyqNvqw0yKI",
  "https://www.youtube-nocookie.com/embed/3mGINvxPESo",
  "https://www.youtube.com/embed/Ce4VZcJ3I6g",
  "https://www.youtube-nocookie.com/embed/KyqNvqw0yKI",
];

export default function Videos() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container maxWidth="md">
        <h1 className={styles.header}>Videos</h1>
        <Divider className={classes.divider} variant="middle" />
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {videoUrls.map((videoUrl) => (
            <iframe
              className={classes.video}
              src={videoUrl}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ))}
        </Box>
      </Container>
    </div>
  );
}
