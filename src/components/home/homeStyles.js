import { makeStyles } from "@material-ui/core/styles";
import books from "../../images/books.jpg";

const homeStyles = makeStyles({
  blackBox: {
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    display: "flex",
    height: "6rem",
    justifyContent: "center",
    left: "0",
    position: "absolute",
    right: "0",
    top: "46vh",
  },
  books: {
    backgroundImage: `url(${books})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "50vh",
  },
  buttons: {
    minWidth: "50%",
  },
  card: {
    height: "25rem",
    margin: "2rem",
    maxWidth: 345,
  },
  cardBorder: {
    borderTop: "5px solid #b71c1c",
  },
  divider: {
    backgroundColor: "#b71c1c",
    marginBottom: "2rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "50%",
  },
  header: {
    margin: "2rem 0",
    padding: "1rem 0",
    textAlign: "center",
  },
  homeImg: {
    maxWidth: "50%",
  },
  linkText: {
    color: "#b71c1c",
  },
  purchaseButton: {
    background: "#b71c1c",
    color: "white",
    "&:hover": {
      backgroundColor: "#871111",
    },
  },
});

export default homeStyles;
