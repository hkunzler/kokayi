import * as React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
  Hidden,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowUp } from "@material-ui/icons";
import SideDrawer from "../sideDrawer/SideDrawer.js";
import HideOnScroll from "../hideOnScroll/HideOnScroll.js";
import BackToTop from "../backToTop/BackToTop.js";
import styles from "./Nav.module.css";

const useStyles = makeStyles({
  gridMedia: {
    display: `grid`,
    gridTemplateColumns: `auto`,
    margin: `1rem 0`
  },
  navbar: {
    background: `white`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    color: `black`,
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  backToTop: {
    background: `#b71c1c`,
    color: `white`,
  },
});

const navItems = ["Home", "Bio", "Video", "News", "Articles"];

const socialMedia = {
  facebook: "https://www.facebook.com/Kokayi137",
  twitter: "https://twitter.com/kokayi137",
  linkedIn: "https://www.linkedin.com/in/kokayi-nosakhere-8a5a877/",
  medium: "https://www.linkedin.com/in/kokayi-nosakhere-8a5a877/",
};

const socialMediaLinks = Object.keys(socialMedia).map((media) => (
  <a target="_blank" href={socialMedia[media]}>
    <i class={`fab fa-${media.toLowerCase()}`}></i>
  </a>
));

export default function Nav() {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.navbar} position="fixed">
          <Toolbar>
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
              <div className={classes.gridMedia}>
                <h2>Kokayi Nosakhere</h2>
                <div className="icons">{socialMediaLinks}</div>
              </div>
              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navListDisplayFlex}
                >
                  {navItems.map((item) => (
                    <a
                      href={`/${item.toLowerCase()}`}
                      key={item}
                      className={classes.linkText}
                    >
                      <ListItem className={styles.linkText} button>
                        <ListItemText primary={item} />
                      </ListItem>
                    </a>
                  ))}
                </List>
              </Hidden>
              <Hidden mdUp>
                <SideDrawer navItems={navItems} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <BackToTop>
        <Fab className={classes.backToTop} size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
}
