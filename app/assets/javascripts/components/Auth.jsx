const SignIn = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <h1>Sign In</h1>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input type="text" required />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" required />
          </div>
        </div>

        <div className="ui button" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }} onClick={ this.signIn } >
          Sign In
        </div>
      </div>
    )
  }
});


const SignUp = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <h1>Sign Up</h1>

        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input type="text" required />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" required />
          </div>
        </div>

        <div className="ui button" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }} onClick={ this.signIn } >
          Sign Up
        </div>
      </div>
    )
  }
});
