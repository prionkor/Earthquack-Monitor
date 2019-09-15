import React from 'react';
import Map from './components/Map';

import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

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

const App = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Earthquack Monitor</Typography>
        </Toolbar>
      </AppBar>
      <Map />
    </div>
  );
}

export default App;
