import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button } from '@material-ui/core';

export default props => {
    return (
        <Dialog
            open={props.open}
            fullWidth={true}
            maxWidth="md"
            onClose={props.handleClose}
        >
            <DialogTitle>Credits</DialogTitle>
            <DialogContent dividers>
                <Typography variant="body1">
                    <p>
                        This applications shows visualization of recent earthquake data around the world.
                        Inspired by <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.joshclemm.android.quake">Earthquake Alert!</a> app 
                        by <a href="https://joshclemm.com/" target="_blank" rel="noopener noreferrer">Josh Clemm</a>.
                    </p>
                    <Typography variant="h5">Resources</Typography>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/prionkor/Earthquake-Monitor">Github repository</a></li>
                        <li>Earthquake data provided by <a target="_blank" rel="noopener noreferrer" href="https://earthquake.usgs.gov">USGS</a></li>
                    </ul>
                </Typography>
            </DialogContent>
            <DialogActions>

                <Button onClick={props.handleClose} variant="outlined">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}