const Header = React.createClass({
  getInitialState(){
    var style = {
      "color" : "#262262" ,
      "background" : "url(https://res.cloudinary.com/dtizwr3wv/image/upload/c_crop,g_south,h_303,w_1920,y_600/v1493670362/HEADERBKGRND_tspk7u_wiatci.png)" ,
      "padding" : "20px" ,
    };
    var buttons;
    var user;
    if ( this.props.parent ) {
      user = this.props.parent.state.user;
    }
    if ( user ) {
      buttons = <LoggedInButtons parent={ this.props.parent } />;
    } else {
      buttons = <LoggedOutButtons parent={ this.props.parent } />;
    }

    return({
      style: style,
      buttons: buttons,
    });
  },

  goToMailingList () {
    Backbone.history.navigate('mailing-list', { trigger : true });
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate(fragment , { trigger : true });
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui grid stackable">
          <div className="four wide column">
            <img src="https://res.cloudinary.com/dtizwr3wv/image/upload/v1493670288/CCA_Logo_hi9b9f_c4ibpt.png" style={{"height":"80px"}} onClick={ this.go }/>
          </div>
          <div className="eight wide column"
            style={{
              "color" : "white" ,
              "textAlign" : "center" ,
              "fontSize" : "17px" ,
              "paddingTop" : "9px" ,
              "letterSpacing" : "1.2px" ,
            }}>
            <i className="phone icon"></i>(503) 287-8686
            </div>
          </div>

          <div className="ui right floated pagination menu" style={{ "position" : "absolute" , "top" : "16px" , "right" : "24px" }}>
            <a className="icon item" href="https://www.facebook.com/ColumbiaCorridor/" target="_blank"  style={{ "fontSize" : "18px" , "padding" : "0px"}} >
              <i className="facebook icon"></i>
            </a>

            <a className="icon item" href="https://www.linkedin.com/company/columbia-corridor-association" target="_blank" style={{ "fontSize" : "18px" , "padding" : "0px"}}>
              <i className="linkedin icon"></i>
            </a>

            {
              this.state.buttons
            }
          </div>

      </div>
    );
  }
});

const LoggedInButtons = React.createClass({

  logout () {
    $.ajax({
      url: 'session',
      type: 'delete',
      success: function (a, b, c) {
        location.href = '';
      }, error: function (a, b, c) {
        location.href = '';
      }
    });
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  checkForAdmin () {
    if (this.props.parent.state.user.role == "Admin") {
      return (
        <a className="item"  data-url="admin" onClick={ this.go } style={{ "float" : "left" ,}}>
          Admin
        </a>
      );
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
    );
  }
});

const LoggedOutButtons = React.createClass({
  getInitialState () {
    return({});
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  signUp () {
    window.location = "?#register";
  },

  signIn () {
    window.location = "?#sign-in";
  },

  render () {
    return (
      <div>
        <a className="item" data-url="mailing-list" onClick={ this.go } style={{ "float" : "left" ,}}>
          Mailing List
        </a>

        <a className="item"
          href="/#sign-in"
          style={{ "float" : "left" ,}}
          >
          Sign In
        </a>

        <a className="item"
          href="/#register"
          style={{ "float" : "left" ,}}
          >
          Register
        </a>
      </div>
    );
  }
});
