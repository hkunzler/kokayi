import React from "react";
import { Box, Container, Divider } from "@material-ui/core";

// import videosContent from "./videosContent.js";
import videosStyles from "./videosStyles.js";

export default function Videos() {
  const classes = videosStyles();
  const videosContent = [
    "https://www.youtube-nocookie.com/embed/KyqNvqw0yKI",
    "https://www.youtube-nocookie.com/embed/3mGINvxPESo",
    "https://www.youtube.com/embed/Ce4VZcJ3I6g",
  ];
  
  return (
    <div className={classes.background}>
      <Container maxWidth="md">
        <h1 className={classes.header}>Videos</h1>
        <Divider className={classes.divider} variant="middle" />
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {videosContent.map((videoUrl) => (
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
