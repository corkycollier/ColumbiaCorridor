const Header = React.createClass({
  getInitialState(){
    var style = {
      "color" : "#262262" ,
      "background" : "url(http://res.cloudinary.com/djjldnjz7/image/upload/v1482226207/Untitled_alc9hg.png)" ,
      "padding" : "20px"
    }
    var buttons;

    if (this.props.parent.state.user) {
      buttons = <LoggedInButtons parent={ this.props.parent } />
    } else {
      buttons = <LoggedOutButtons parent={ this.props.parent } />
    }

    return({
      style: style,
      buttons: buttons,
    })
  },

  goToMailingList () {
    Backbone.history.navigate('mailing-list', { trigger : true })
  },

  goHome () {
    Backbone.history.navigate('' , { trigger : true })
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui grid doubling ">
          <div className="four wide column">
            <img src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481667293/CCA_Logo_hi9b9f.png" style={{"height":"120px"}} onClick={ this.goHome }/>
          </div>
        </div>

        <div className="ui right floated pagination menu" style={{ "position" : "absolute" , "top" : "12px" , "right" : "12px" }}>
          <a className="icon item" href="https://www.facebook.com/ColumbiaCorridor/" target="_blank" >
            <i className="facebook icon"></i>
          </a>

          <a className="icon item" href="https://www.linkedin.com/company/columbia-corridor-association" target="_blank">
            <i className="linkedin icon"></i>
          </a>

          {
            this.state.buttons
          }
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
  goAdmin() {
    Backbone.history.navigate('admin' , { trigger : true });
  },
  checkForAdmin () {
    if (this.props.parent.state.user.id < 3) {
      return (
        <a className="item" onClick={ this.goAdmin } style={{ "float" : "left" ,}}>
          Admin
        </a>
      )
    }
  },

  render () {
    return (

      <div>
        {
          this.checkForAdmin()
        }
        <a className="item" onClick={ this.logout }>
          Logout
        </a>
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
        <a className="item" onClick={ this.signIn } style={{ "float" : "left" ,}} >
          Sign In
        </a>

        <a className="item" onClick={ this.signUp } >
          Sign Up

        </a>
      </div>
    )
  }
});
