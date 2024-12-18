import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import useStyles from './styles';

import { Actors, MovieInformation, Movies, Navbar, Profile } from './index';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/approved" component={Movies} />
          <Route exact path="/movie/:id" component={MovieInformation} />
          <Route exact path="/actor/:id" component={Actors} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
