import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from '../../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      
    },
    
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className="progress-center">
      <CircularProgress />
    </div>
  );
}
