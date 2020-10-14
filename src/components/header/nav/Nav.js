import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Fab,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import BackToTop from "../backToTop/BackToTop.js";
import HideOnScroll from "../hideOnScroll/HideOnScroll.js";
import SideDrawer from "../sideDrawer/SideDrawer.js";

// import { navItems, socialMedia } from "./navContent.js";
import navStyles from "./navStyles.js";

export default function Nav() {
  const classes = navStyles();
  const navItems = ["Home", "Bio", "Videos", "News", "Articles", "Products"];
  const socialMediaLinks = {
    facebook: "https://www.facebook.com/Kokayi137",
    twitter: "https://twitter.com/kokayi137",
    linkedIn: "https://www.linkedin.com/in/kokayi-nosakhere-8a5a877/",
    medium: "https://www.linkedin.com/in/kokayi-nosakhere-8a5a877/",
  };
  const socialMediaLinks = Object.keys(socialMedia).map((media) => (
    <a
      className={classes.socialMediaLinks}
      target="_blank"
      href={socialMedia[media]}
    >
      <i class={`fab fa-${media.toLowerCase()}`}></i>
    </a>
  ));
  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.navbar} position="fixed">
          <Toolbar>
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
              <div className={classes.gridMedia}>
                <Link className={classes.socialMediaLinks} to="/home">
                  <h2>Kokayi Nosakhere</h2>
                </Link>
                <div className="icons">{socialMediaLinks}</div>
              </div>
              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navListDisplayFlex}
                >
                  {navItems.map((item) => (
                    <Link
                      to={`/${item.toLowerCase()}`}
                      key={item}
                      className={classes.linkText}
                    >
                      <ListItem button>
                        <ListItemText primary={item} />
                      </ListItem>
                    </Link>
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
        <Fab
          className={classes.backToTop}
          size="large"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
}
