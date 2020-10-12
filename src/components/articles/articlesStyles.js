import { makeStyles } from "@material-ui/core/styles";

const articlesStyles = makeStyles({
  background: {
    padding: '2rem 0',
  },
  card: {
    maxWidth: 345,
    margin: '2rem',
  },
  cardBorder: {
    borderTop: '2px solid #b71c1c',
  },
  divider: {
    backgroundColor: '#b71c1c',
  },
  header: {
    margin: '2rem 0',
    padding: '1rem 0',
    textAlign: 'center',
  },
});

export default articlesStyles;
