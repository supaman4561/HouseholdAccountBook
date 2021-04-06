import React from 'react';
import ReactDOM from 'react-dom';
import { Paper, Typography, makeStyles, Theme, Modal } from '@material-ui/core';
import TransitionModal from './transition_modal'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

interface HeadProps {
  headline: string;
}

const Head: React.FC<HeadProps> = ({ headline }) => {
  return (
    <Typography variant="h3" component="h1">
      {headline}
    </Typography>
  );
};

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Head headline="Hello world" />
      <TransitionModal />
    </Paper>
  );
};

ReactDOM.render(<App />, document.getElementById('contents'));