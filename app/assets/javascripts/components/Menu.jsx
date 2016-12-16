const CMenu = React.createClass({
  getInitialState(){
    var style = {
      "color" : "#262262"
    }

    return({
      style : style ,
      currentMenu : [] ,
    })
  },


  componentDidMount () {
    this.triggerMenu();

    var $window = $( window )
    $window.resize(function(){
      this.triggerMenu();
    }.bind(this))

  },

  triggerMenu() {
    var $window = $( window )
    if ( $window.width() > 920 ) {
      this.setState({
        currentMenu: <RegularMenu />
      })
    } else {
      this.setState({
        currentMenu: <SidebarMenu />
      })
    }
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        {
          this.state.currentMenu
        }
      </div>
    )
  }
});


const SidebarMenu = React.createClass({
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

      </div>
    )
  }
});


const RegularMenu = React.createClass({
  getInitialState () {
    var style = {

    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  go (e) {
    Backbone.history.navigate( e.currentTarget.dataset.path , { trigger : true })
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui ten item menu" style={{ "borderLeft" : "none" , "borderRight" : "none" }}>
          <div className="item" style={{"width":"60%"}} />

          <div className="item header" data-path="" onClick={ this.go } >
            Home
          </div>

          <div className="item header" data-path="about-us" onClick={ this.go } >
            About Us
          </div>

          <div className="item header" data-path="events" onClick={ this.go } >
            Events
          </div>

          <div className="item header" data-path="resources" onClick={ this.go } >
            Resources
          </div>

          <div className="item header" data-path="join" onClick={ this.go } >
            Join
          </div>

          <div className="item header member-area" data-path="member-area" onClick={ this.go } >
            Member Area
          </div>

          <div className="header item" data-path="sponsor" onClick={ this.go } >
            Sponsor
          </div>

          <div className="header item" data-path="contact" onClick={ this.go } >
            Contact
          </div>

          <div className="item" style={{"width":"60%"}} />
        </div>
      </div>
    )
  }
});
