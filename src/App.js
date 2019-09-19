import React from 'react';
import Map from './components/Map';
import Credits from './components/Credits';
import News from './components/News';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import { AppBar, Toolbar, IconButton, Typography, createMuiTheme, CssBaseline } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faFilter, faNewspaper, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
      showCredits: false,
    }
  }

  handleCreditDialogClose = () => {
    this.setState({showCredits: false});
  }

  handleCreditDialogOpen = () => {
    this.setState({showCredits: true});
  }

  handleOpenDrawer = () => {
    this.setState({drawerOpen: true});
  }

  handleCloseDrawer = () => {
    this.setState({drawerOpen: false});
  }

  render(){

    // const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>

          <CssBaseline />
          
          <AppBar color="inherit" position="sticky">

            {this.state.showCredits && 
              <Credits open={this.state.showCredits} handleClose={this.handleCreditDialogClose} />
            }

            <News open={this.state.drawerOpen} onOpenNews={this.handleOpenDrawer} onCloseNews={this.handleCloseDrawer}/>

            <Toolbar>
              
              <Typography variant="h6" style={{flexGrow: 1}}>Earthquake Monitor</Typography>
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <FontAwesomeIcon icon={faFilter} color="#FFFFFF" />
              </IconButton>

              <IconButton onClick={this.handleOpenDrawer} aria-label="show 11 new notifications" color="inherit">
                <FontAwesomeIcon icon={faNewspaper} color="#FFFFFF" />
              </IconButton>

              <IconButton onClick={this.handleCreditDialogOpen} color="inherit">
                <FontAwesomeIcon icon={faInfoCircle} color="#FFFFFF" />
              </IconButton>
              
            </Toolbar>
          </AppBar>
          <Map />
        </ThemeProvider>
    );
  }
}

export default App;
