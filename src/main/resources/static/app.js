const React = require('react');

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <Login/>
  }
}

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password"/>
        </div>
      </div>
    )
  }
}

React.render(
  <App />,
  document.getElementById('react')
);
