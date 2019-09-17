import React from 'react';
import Map from './components/Map';
import Credits from './components/Credits';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import { AppBar, Divider, Drawer, Toolbar, IconButton, Typography, createMuiTheme } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faFilter, faNewspaper, faChevronLeft, faChevronRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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

  openDrawer = () => {
    this.setState({drawerOpen: true});
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false});
  }

  render(){

    // const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
          
          <AppBar color="inherit" position="sticky">

            {this.state.showCredits && 
              <Credits open={this.state.showCredits} handleClose={this.handleCreditDialogClose} />
            }

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
              
              <Typography variant="h6" style={{flexGrow: 1}}>Earthquack Monitor</Typography>
              
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <FontAwesomeIcon icon={faFilter} color="#FFFFFF" />
              </IconButton>

              <IconButton onPress={this.openDrawer} aria-label="show 11 new notifications" color="inherit">
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
