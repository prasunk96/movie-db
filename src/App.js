import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Movie from './components/movie'
import {Route, Switch, withRouter} from 'react-router-dom';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation {...this.props}/>
          <Switch>
            <Route exact path="/" render={(props) => <MovieList {...props}/>} />
            <Route path={`/movie/details/:filter/:id`} render={(props) => <Movie {...props}/>} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
