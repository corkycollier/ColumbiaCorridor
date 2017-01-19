const Menu = React.createClass({
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
    $('.sidebar').transition();
    $('#backdrop').addClass( 'active' )
  },

  render () {
    return (
      <div className="ui container" style={{ "zIndex" : "40000"}}>
        <div className="ui icon button" style={{"position" : "absolute" , "left" : "51px" , "top" : "151px" , "zIndex" : "1000" }} onClick={ this.openSidebar }>
          <i className="sidebar icon" />
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
    Backbone.history.navigate( e.currentTarget.dataset.path , { trigger : true });
    $('.sidebar').transition();
    $('#backdrop').removeClass('active') ;
  },

  closeSidebar () {
    $('.sidebar').transition() ;
    $('#backdrop').removeClass('active') ;
  },


  render () {
    return (
      <div style={this.state.style}>
        <div id="backdrop" style={{  "position" : "absolute" , "top" : "0", "left" : "0", "right" : "0", "bottom" : "0" }} onClick={ this.closeSidebar }>
        </div>

        <div className="ui vertical menu sidebar" style={{ "zIndex" : "4000000"}}>
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

          <a className="item header" data-path="member-area" onClick={ this.go } >
            Member Area
          </a>

          <a className="header item" data-path="sponsor" onClick={ this.go } >
            Sponsor
          </a>

          <a className="header item" data-path="contact" onClick={ this.go } >
            Contact
          </a>
        </div>
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
    $('.dropdown').dropdown({
      on: 'hover' ,
    });
  },

  go (e) {
    Backbone.history.navigate( e.currentTarget.dataset.path , { trigger : true })
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui ten item menu" style={{ "borderLeft" : "none" , "borderRight" : "none" }}>
          <div className="item" style={{"width":"60%"}} />

          <a className="ui dropdown item header" data-path="" onClick={ this.go } >
            Home
          </a>

          <a className="ui dropdown item header" data-path="about-us" >
            About Us

            <div className="menu">
              <div className="item" data-path="about-cca" onClick={ this.go } >
                About CCA
              </div>

              <div className="item" data-path="columbia-corridor" onClick={ this.go } >
                Columbia Corridor
              </div>

              <div className="item" data-path="staff" onClick={ this.go } >
                Staff
              </div>

              <div className="item" data-path="board" onClick={ this.go } >
                Board
              </div>
            </div>
          </a>

          <a className="ui dropdown item header" >
            Events

            <div className="menu">
              <div className="item" data-path="events" onClick={ this.go } >
                Calendar
              </div>

              <div className="item" data-path="events" onClick={ this.go } >
                Our Events
              </div>
            </div>
          </a>

          <a className="ui dropdown item header">
            Resources

            <div className="menu">
              <div className="item" data-path="cca-news" onClick={ this.go } >
                CCA News
              </div>

              <div className="item" data-path="groundwater" onClick={ this.go } >
                Groundwater
              </div>

              <div className="item" data-path="resourcesfull-use" onClick={ this.go } >
                ResourceFULL Use
              </div>
            </div>
          </a>

          <a className="ui dropdown item header" >
            Join

            <div className="menu">
              <div className="item" data-path="membership" onClick={ this.go } >
                Membership
              </div>

              <div className="item" data-path="year-in-review" onClick={ this.go } >
                year-in-review
              </div>
            </div>
          </a>

          <a className="ui dropdown item header" >
            Member Area
            <div data-path="member-area" onClick={this.go} style={{ "position" : "absolute" , "height" : "100%" , "width" : "100%" , "top" : "0px" , "left" : "0px" }}/>

            <div className="menu">
              <div className="item" data-path="directory" onClick={ this.go } >
                Directory
              </div>

              <div className="item" data-path="edit-profile" onClick={ this.go } >
                Edit Profile
              </div>

              <div className="item" data-path="make-news" onClick={ this.go } >
                Make News
              </div>
            </div>
          </a>

          <a className="ui dropdown header item" data-path="sponsor" onClick={ this.go } >
            Sponsor
          </a>

          <a className="ui dropdown header item" data-path="contact" onClick={ this.go } >
            Contact
          </a>

          <div className="item" style={{"width":"60%"}} />
        </div>
      </div>
    )
  }
});
