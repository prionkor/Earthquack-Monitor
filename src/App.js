import React from 'react';
import Map from './components/Map';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import { AppBar, Divider, Drawer, Toolbar, IconButton, Typography, createMuiTheme, Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faFilter, faNewspaper, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      drawerOpen: false,
    }
  }

  openDrawer = () => {
    this.setState({drawerOpen: true});
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false});
  }

  render(){

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
          
          <AppBar color="dark" position="static">

            <Drawer
              open={this.state.drawerOpen}
              anchor="right"
            >

              <div>
                <IconButton onClick={this.drawerClose}>
                  {this.state.drawerOpen ? <FontAwesomeIcon icon={faChevronLeft} color="#FFFFFF" /> : <FontAwesomeIcon icon={faChevronRight} color="#FFFFFF" />}
                </IconButton>
              </div>
              
              <Divider />

              <h1>News</h1>
              
            </Drawer>

            <Toolbar>
              
              <Typography variant="h6" className={classes.title}>Earthquack Monitor</Typography>
              
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <FontAwesomeIcon icon={faFilter} color="#FFFFFF" />
              </IconButton>

              <IconButton onPress={this.openDrawer} aria-label="show 11 new notifications" color="inherit">
                <FontAwesomeIcon icon={faNewspaper} color="#FFFFFF" />
              </IconButton>
              
            </Toolbar>
          </AppBar>
          <Map />
        </ThemeProvider>
    );
  }
}

export default App;
