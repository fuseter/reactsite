import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#5d49e6"}}>
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <WhatshotIcon style={{fontSize: "35"}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
