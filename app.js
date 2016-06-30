import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';


class App extends React.Component {
	render() {
		return <div>
		  <h1>App</h1>
      <ul>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      {this.props.children}
		</div>
	}
}


class About extends React.Component {
  render() {
    return <p>Esta es la página de About</p>
  }
}


class User extends React.Component {
  render() {
    return <p>Esta es la página de User</p>
  }
}

const routes =  <Router history={hashHistory}>
              <Route path="/" component = {App} >
              <Route path="about" component = {About} />
              <Route path="user" component = {User} />
              </Route>
              </Router>

ReactDOM.render(routes, document.getElementById('container'))
