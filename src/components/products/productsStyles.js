import { makeStyles } from "@material-ui/core/styles";

const productsStyles = makeStyles({
  background: {
    background: "#d3d3d375",
    padding: "2rem 0",
  },
  card: {
    margin: "2rem",
    maxWidth: 345,
  },
  cardBorder: {
    borderTop: "2px solid #b71c1c",
  },
  divider: {
    backgroundColor: "#b71c1c",
    marginBottom: "1rem",
  },
  header: {
    margin: "2rem 0",
    padding: "1rem 0",
    textAlign: "center",
  },
});

export default productsStyles;
