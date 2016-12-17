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

  goToMailingList () {
    Backbone.history.navigate('mailing-list', { trigger : true })
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <div className="ui grid doubling ">
          <div className="four wide column">
            <img src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481667293/CCA_Logo_hi9b9f.png" style={{"height":"120px"}}/>
          </div>

          <div className="four wide column right floated">
            <div className="ui button mini facebook" style={{ "position" : "absolute" , "top" : "19px" , "right" : "311px", "background" : "#262262" , "width" : "95px" }} onClick={this.goToMailingList}>
              mailing list
            </div>

            <a href="https://www.facebook.com/ColumbiaCorridor/" target="_blank">
              <div className="ui button mini facebook labeled icon" style={{ "position" : "absolute" , "top" : "19px" , "right" : "91px"}} >
                <i className="facebook icon" />
                facebook
              </div>
            </a>

            <a href="https://www.linkedin.com/company/columbia-corridor-association" target="_blank">
              <div className="ui button mini linkedin labeled icon" style={{ "position" : "absolute" , "top" : "19px" , "right" : "203px"}} >
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

  logout () {
    $.ajax({
      url: 'session',
      type: 'delete',
      success: function (a, b, c) {
        location.href = '';
      }, error: function (a, b, c) {
        location.href = '';
      }
    })
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui button small red" style={{ "position" : "absolute" , "right" : "-1px" , "top" : "19px" , "width" : "84px"}} onClick={ this.logout }>
          Logout
        </div>
      </div>
    )
  }
});

const LoggedOutButtons = React.createClass({
  getInitialState () {
    return({})
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
      <div>
        <div className="ui button violet" style={{"background" : "#262262" , "position" : "absolute" , "top " : "19px" , "right" : "0px" }} onClick={ this.signIn } >
          Sign In
        </div>

        <div className="ui button violet" style={{"background" : "#262262" , "position" : "absolute" , "height" : "36px" , "width" : "84px" , "fontSize" : "13px" , "right" : "0px" , "top" : "60px" }} onClick={ this.signUp } >
          Sign Up
        </div>
      </div>
    )
  }
});
