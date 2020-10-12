import { makeStyles } from "@material-ui/core/styles";

const navStyles = makeStyles({
  backToTop: {
    background: "#b71c1c",
    color: "white",
    "&:hover": {
      backgroundColor: "#871111",
    },
  },
  gridMedia: {
    display: "grid",
    gridTemplateColumns: "auto",
    margin: "1rem 0",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black",
    "&:hover": {
      color: "#b71c1c",
    },
  },
  navbar: {
    background: "white",
  },
  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
  },
  navListDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  socialMediaLinks: {
    padding: ".5rem",
    lineHeight: "1.5rem",
    color: "black",
    textDecoration: "none",
  },
});

export default navStyles;
