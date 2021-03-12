import React from 'react';
import ReactDOM from 'react-dom';
import { Paper, Typography, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3)
  }
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
    </Paper>
  );
};

ReactDOM.render(<App />, document.getElementById('contents'));