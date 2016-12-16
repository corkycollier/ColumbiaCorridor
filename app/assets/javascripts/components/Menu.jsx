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
        currentMenu: <SidebarMenuButton />
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

const SidebarMenuButton = React.createClass({
  getInitialState () {
    var style = {

    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  openSidebar () {
    $('.ui.sidebar').sidebar('toggle');
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <div className="ui icon button" style={{"width" : "100px"}} onClick={ this.openSidebar }>
          <i className="menu icon" />
        </div>
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

  go (e) {
    Backbone.history.navigate( e.currentTarget.dataset.path , { trigger : true })
  },

  render () {
    return (
      <div className="ui vertical menu sidebar" style={this.state.style}>
        <a className="item header" data-path="" onClick={ this.go } >
          Home
        </a>

        <a className="item header" data-path="about-us" onClick={ this.go } >
          About Us
        </a>

        <a className="item header" data-path="events" onClick={ this.go } >
          Events
        </a>

        <a className="item header" data-path="resources" onClick={ this.go } >
          Resources
        </a>

        <a className="item header" data-path="join" onClick={ this.go } >
          Join
        </a>

        <a className="item header member-area" data-path="member-area" onClick={ this.go } >
          Member Area
        </a>

        <a className="header item" data-path="sponsor" onClick={ this.go } >
          Sponsor
        </a>

        <a className="header item" data-path="contact" onClick={ this.go } >
          Contact
        </a>

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

          <a className="item header" data-path="" onClick={ this.go } >
            Home
          </a>

          <a className="item header" data-path="about-us" onClick={ this.go } >
            About Us
          </a>

          <a className="item header" data-path="events" onClick={ this.go } >
            Events
          </a>

          <a className="item header" data-path="resources" onClick={ this.go } >
            Resources
          </a>

          <a className="item header" data-path="join" onClick={ this.go } >
            Join
          </a>

          <a className="item header member-area" data-path="member-area" onClick={ this.go } >
            Member Area
          </a>

          <a className="header item" data-path="sponsor" onClick={ this.go } >
            Sponsor
          </a>

          <a className="header item" data-path="contact" onClick={ this.go } >
            Contact
          </a>

          <div className="item" style={{"width":"60%"}} />
        </div>
      </div>
    )
  }
});
