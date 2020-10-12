import React from "react";
import { Box, Container, Divider } from "@material-ui/core";
import styles from "./Bio.module.css";
import kokayi from "../../images/kokayi-profile.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  divider: {
      backgroundColor: `#b71c1c`,
  }
});

export default function Bio() {
  const classes = useStyles();

  return (
    <div className={styles.bio}>
      <Container maxWidth="md">
        <h1 className={styles.header}>Bio</h1>
        <Divider className={classes.divider} variant="middle" />
        <Box className={styles.bioBody} display="flex" flexWrap="wrap" justifyContent="space-around">
          <img src={kokayi} alt="Kokayi" />
          <section>
            <p>
              Each year, three neighborhoods in Anchorage, Alaska vy for which
              one is considered the most ethnically diverse neighborhood inside
              the United States. Journalist and community organizer, Kokayi
              Nosakhere graduated high school from one of those neighborhoods.
              In 1995, his attendance at the historic, Million Man March, set
              the course of his life, engaging in social justice work.
            </p>
            <p>
              With a degree in American history secured from the University of
              Alaska, Anchorage (UAA), helped him leverage statewide attention
              towards school meals legislation, as he fasted for 28 days on the
              Juneau Hunger Strike (2012). The goal was to win $1.9 million, the
              amount needed to cover the gap between what parents could pay and
              the federal government subsidized in the school nutrition program.
              The Juneau Hunger Strike won a $3 million payment.
            </p>
            <p>
              2012 also saw the creation of Alaska Commons, a grassroots,
              digital current event magazine born out of a legislative failure
              defending LGBTQ civil rights. Mayor Dan Sullivan refused to
              distribute sufficient ballots to polling locations. The initiative
              failed. Nosakhere was a founding member of Alaska Commons,
              learning journalism, on the fly. In the five years Alaska Commons
              actively published, Nosakhere earned two Alaska Press Awards.
            </p>
            <p>
              In 2018, he earned the Alaska FBI Director’s Community Leadership
              Award for his 2017 anti-violence work in Mt. View.
            </p>
            <i>
              Nosakhere currently resides in Ashland, Oregon, where he has
              completed phase one of his plan to to launch a “Love Letter for
              America” campaign nationwide. He is 45 years old with two
              daughters.
            </i>
          </section>
        </Box>
      </Container>
    </div>
  );
}
