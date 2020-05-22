import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import ProjectList from '../projects/ProjectList'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ justifyContent: 'center' }}>
        <Grid item xs={4}>
          <ProjectList/>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Notifications
          </Paper>
        </Grid>
      </Grid>
    </div >
  );
}
