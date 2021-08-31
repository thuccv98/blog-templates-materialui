import {
  Badge,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: 'uppercase',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          Blogginf Website
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={5} color="secondary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
        Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
