const CHeader = React.createClass({
  getInitialState(){
    var style = {
      "color" : "#262262"
    }
    var buttons;

    if (this.props.parent.state.user) {
      buttons = <LoggedInButtons parent={ this } />
    } else {
      buttons = <LoggedOutButtons parent={ this } />
    }

    return({
      style: style,
      buttons: buttons,
    })
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <div className="ui grid doubling stackable">
          <div className="four wide column">
            <img src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481667293/CCA_Logo_hi9b9f.png" style={{"height":"120px"}}/>
          </div>

          <div className="four wide column right floated">
            <a href="https://www.facebook.com/ColumbiaCorridor/" target="_blank">
              <div className="ui button mini facebook labeled icon" style={{ "position" : "absolute" , "top" : "19px" , "right" : "0px"}} >
                <i className="facebook icon" />
                facebook
              </div>
            </a>

            <a href="https://www.linkedin.com/company/columbia-corridor-association" target="_blank">
              <div className="ui button mini linkedin labeled icon" style={{ "position" : "absolute" , "top" : "19px" , "right" : "112px"}} >
                <i className="linkedin icon" />
                linkedin
              </div>
            </a>

            {
              this.state.buttons
            }

          </div>
        </div>

      </div>
    )
  }
});

const LoggedInButtons = React.createClass({
  getInitialState () {
    var style = {

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
        <div className="ui button small red" style={{ "float" : "right" , "margin" : "12px" }}>
          Logout
        </div>
      </div>
    )
  }
});

const LoggedOutButtons = React.createClass({
  getInitialState () {
    var style = {
      "position" : "absolute" ,
      "top" : "57px" ,
      "right" : "0px" ,
    }

    return({
      style: style,
    })
  },

  signIn () {
    Backbone.history.navigate( 'sign-in' , { trigger : true })
  },

  signUp () {
    Backbone.history.navigate( 'sign-up' , { trigger : true })
  },


  componentDidMount () {

  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui button violet" style={{"background" : "#262262" }} onClick={ this.signIn } >
          Sign In
        </div>

        <div className="ui button violet" style={{"background" : "#262262" }} onClick={ this.signUp } >
          Sign Up
        </div>
      </div>
    )
  }
});
