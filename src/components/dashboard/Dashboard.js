import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import ProjectList from '../projects/ProjectList'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
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

const CenteredGrid = () => {
  const classes = useStyles();
  let projects = useSelector(state => state.firestore.ordered)
  if (projects) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3} style={{ justifyContent: 'center' }}>
          <Grid item xs={4}>
            <ProjectList projects={projects} />
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              Notifications
            </Paper>
          </Grid>
        </Grid>
      </div >
    );
  } else {
    return <p>No projects found.</p>
  }
  
}

export default compose(firestoreConnect([
  {
    collection: 'projects'
  }
]))(CenteredGrid)