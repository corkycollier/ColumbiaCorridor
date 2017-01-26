const Header = React.createClass({
  getInitialState(){
    var style = {
      "color" : "#262262" ,
      "background" : "url(http://res.cloudinary.com/djjldnjz7/image/upload/v1482226207/Untitled_alc9hg.png)" ,
      "padding" : "20px" ,
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

  go (e) {
    var fragment = e.currentTarget.dataset.url
    Backbone.history.navigate(fragment , { trigger : true })
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui grid stackable">
          <div className="four wide column">
            <img src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481667293/CCA_Logo_hi9b9f.png" style={{"height":"80px"}} onClick={ this.go }/>
          </div>
          <div className="eight wide column"
            style={{
              "color" : "white" ,
              "textAlign" : "center" ,
              "fontSize" : "26px" ,
              "paddingTop" : "16px" ,
            }}>
            +1 (503) 287-8686
          </div>

        </div>


        <div className="ui right floated pagination menu" style={{ "position" : "absolute" , "top" : "16px" , "right" : "24px" }}>
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

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
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

        <a className="item" data-url="mailing-list" onClick={ this.go } style={{ "float" : "left" ,}}>
          Mailing List
        </a>


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

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render () {
    return (
      <div>
        <a className="item" data-url="mailing-list" onClick={ this.go } style={{ "float" : "left" ,}}>
          Mailing List
        </a>

        <a className="item"
          data-url="sign-in"
          onClick={ this.go }
          style={{ "float" : "left" ,}}
          >
          Sign In
        </a>

        <a className="item"
          data-url="sign-up"
          onClick={ this.go }
          style={{ "float" : "left" ,}}
          >
          Sign Up
        </a>
      </div>
    )
  }
});
