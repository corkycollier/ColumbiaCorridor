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
    }.bind(this));
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
      <div className="" style={this.state.style}>
        <div className="ui one item menu" style={{ "borderLeft" : "none" , "borderRight" : "none" }}>
          <a className="ui header item" onClick={ this.openSidebar }>
            <i className="sidebar icon" />
          </a>
        </div>
      </div>
    )
  }
});


const RegularMenu = React.createClass({


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
      <div className="">
        <div className="ui eight item menu" style={{ "borderLeft" : "none" , "borderRight" : "none" , "height" : "46px" }}>
          <a className="ui dropdown item header" data-path="" onClick={ this.go } style={{
              "color" : "#262262"
            }}>
            HOME
          </a>

          <a className="ui dropdown item header" data-path="about-us" style={{
              "color" : "#262262"
            }}>
            ABOUT US

            <div className="menu">
              <div className="item" data-path="about-cca" onClick={ this.go } >
                ABOUT CCA
              </div>

              <div className="item" data-path="columbia-corridor" onClick={ this.go } >
                COLUMBIA CORRIDOR
              </div>

              <div className="item" data-path="staff" onClick={ this.go } >
                STAFF
              </div>

              <div className="item" data-path="board" onClick={ this.go } >
                BOARD
              </div>
            </div>
          </a>

          <a className="ui item header" data-path="events" onClick={ this.go } stylle={{
              "color" : "#262262"
            }}>
            EVENTS
          </a>

          <a className="ui dropdown item header"style={{
              "color" : "#262262"
            }}>
            RESOURCES

            <div className="menu">
              <div className="item" data-path="cca-news" onClick={ this.go } >
                CCA NEWS
              </div>

              <div className="item" data-path="members" onClick={ this.go } >
                MEMBER DIRECTORY
              </div>

              <div className="item" data-path="groundwater" onClick={ this.go } >
                GROUNDWATER
              </div>

              <div className="item" data-path="resourcesfull-use" onClick={ this.go } >
                RESOURCEFULL USE
              </div>


            </div>
          </a>

          <a className="ui dropdown item header" stylle={{
              "color" : "#262262"
            }}>
            JOIN

            <div className="menu">
              <div className="item" data-path="membership" onClick={ this.go } >
                MEMBERSHIP
              </div>

              <div className="item" data-path="year-in-review" onClick={ this.go } >
                YEAR IN REVIEW
              </div>
            </div>
          </a>

          <a className="ui dropdown item header member-area" stylle={{
              "color" : "#262262"
            }}>
            MEMBER AREA
            <div data-path="member-area" onClick={this.go} style={{ "position" : "absolute" , "height" : "100%" , "width" : "100%" , "top" : "0px" , "left" : "0px" }}/>

            <div className="menu">
              <div className="item" data-path="directory" onClick={ this.go } >
                DIRECTORY
              </div>

              <div className="item" data-path="edit-profile" onClick={ this.go } >
                EDIT PROFILE
              </div>

              <div className="item" data-path="make-news" onClick={ this.go } >
                MAKE NEWS
              </div>

              <div className="item" data-path="archives" onClick={ this.go } >
                ARCHIVES
              </div>
            </div>
          </a>

          <a className="ui dropdown header item" data-path="sponsor" onClick={ this.go } stylle={{
              "color" : "#262262"
            }}>
            SPONSOR
          </a>

          <a className="ui dropdown header item" data-path="contact" onClick={ this.go } stylle={{
              "color" : "#262262"
            }}>
            CONTACT
          </a>

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
          <a className="ui dropdown item" data-path="" onClick={ this.go } >
            Home
          </a>

          <a className="ui dropdown item" data-path="about-us" >
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

          <a className="ui item" data-path="events" onClick={ this.go } >
            Events
          </a>

          <a className="ui dropdown item">
            Resources

            <div className="menu">
              <div className="item" data-path="cca-news" onClick={ this.go } >
                CCA News
              </div>

              <div className="item" data-path="members" onClick={ this.go } >
                Member Directory
              </div>

              <div className="item" data-path="groundwater" onClick={ this.go } >
                Groundwater
              </div>

              <div className="item" data-path="resourcesfull-use" onClick={ this.go } >
                ResourceFULL Use
              </div>


            </div>
          </a>

          <a className="ui dropdown item" >
            Join

            <div className="menu">
              <div className="item" data-path="membership" onClick={ this.go } >
                Membership
              </div>

              <div className="item" data-path="year-in-review" onClick={ this.go } >
                Year In Review
              </div>
            </div>
          </a>

          <a className="ui dropdown item member-area" >
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

          <a className="ui dropdown item" data-path="sponsor" onClick={ this.go } >
            Sponsor
          </a>

          <a className="ui dropdown item" data-path="contact" onClick={ this.go } >
            Contact
          </a>
        </div>
      </div>

    )
  }
});
