import React from 'react';
import Map from './components/Map';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import { AppBar, Toolbar, IconButton, Typography, createMuiTheme, Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {

  const classes = useStyles();
  console.log(theme);

  return (
      <ThemeProvider theme={theme}>
        
        <AppBar color="dark" position="static">
          <Toolbar>
            
            <Typography variant="h6" className={classes.title}>Earthquack Monitor</Typography>
            
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <FontAwesomeIcon icon={faFilter} color="#FFFFFF" />
            </IconButton>

            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
          </Toolbar>
        </AppBar>
        <Map />
      </ThemeProvider>
  );
}

export default App;
