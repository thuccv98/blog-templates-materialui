import {
  Button,
  CardActions,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: 'Montserrat',
  },
  cover: {
    backgroundImage: `url(https://picsum.photos/id/1004/1500/600)`,
    backgroundPosition: 'center',
    padding: '35px 25px',
  },
  textContainer: {
    color: 'white',
  },
  btn: {
    color: '#90caf9',
    fontWeight: 700,
  },
});

const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5" component="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          officia expedita ullam nesciunt dicta pariatur cum! Sequi quos a unde,
          doloremque dignissimos quas aut ea saepe, neque explicabo enim.
          Doloremque?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" className={classes.btn}>
          Read more...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
