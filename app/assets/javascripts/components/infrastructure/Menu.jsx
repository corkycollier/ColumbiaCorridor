const Menu = React.createClass({
  getInitialState(){
    var style = {
      "color" : "#262262" ,
      "zIndex" : "2000" ,

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
    setTimeout(function() {
      $('.dropdown').dropdown({
        on: 'hover'
      });
    }.bind(this), 0)


    $('.regularMenu').visibility({
     type: 'fixed',
    });
  },

  go (e) {
    Backbone.history.navigate( e.currentTarget.dataset.path , { trigger : true })
  },

  render () {
    return (
      <div className="">
        <div className="ui eight item menu regularMenu" style={{
            "borderLeft" : "none"  ,
            "borderRight" : "none" ,
            "height" : "46px"      ,
            "zIndex" : "2000"      ,
            "marginBottom" : "0px"      ,
          }}>
          <a className="ui dropdown item header" data-path="" onClick={ this.go } style={{
              "color" : "#262262"
            }}>
            HOME
          </a>

          <a className="ui dropdown item header" data-path="about-us" style={{
              "color" : "#262262"
            }}>
            ABOUT US

            <div className="menu" >
              <div className="item" data-path="about-cca" onClick={ this.go } style={{ "textAlign" : "center" ,}}>

                ABOUT CCA
              </div>

              <div className="item" data-path="columbia-corridor" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                COLUMBIA CORRIDOR
              </div>

              <div className="item" data-path="staff" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                STAFF
              </div>

              <div className="item" data-path="board" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                BOARD
              </div>
            </div>
          </a>

          <a className="ui item dropdown header"  style={{
              "color" : "#262262"
            }}>
            EVENTS

            <div className="menu">
              <div className="item" data-path="event-list" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                EVENT LIST
              </div>

              <div className="item" data-path="calendar" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                CALENDAR
              </div>
            </div>
          </a>

          <a className="ui dropdown item header"style={{
              "color" : "#262262"
            }}>
            RESOURCES

            <div className="menu">
              <div className="item" data-path="cca-news" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                CCA NEWS
              </div>

              <div className="item" data-path="member-news" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                MEMBER NEWS
              </div>

              <div className="item" data-path="members" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                MEMBER DIRECTORY
              </div>

              <div className="item" data-path="groundwater" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                GROUNDWATER
              </div>

              <div className="item" data-path="resourcesfull-use" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                RESOURCEFULL USE
              </div>
            </div>
          </a>

          <a className="ui dropdown item header" style={{
              "color" : "#262262"
            }}>
            JOIN

            <div className="menu">
              <div className="item" data-path="membership" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                MEMBERSHIP
              </div>

              <div className="item" data-path="year-in-review" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                YEAR IN REVIEW 2015
              </div>
            </div>
          </a>

          <a className="ui dropdown item header " style={{
              "color" : "#262262"
            }}>
            MEMBER AREA

            <div className="menu">
              <div className="item member-area" data-path="directory" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                DIRECTORY
              </div>

              <div className="item member-area" data-path="archives" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                ARCHIVES
              </div>


              <div className="item member-area" data-path="make-news" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                MAKE NEWS
              </div>

              <div className="item member-area" data-path="edit-profile" onClick={ this.go } style={{ "textAlign" : "center" , }}>
                EDIT PROFILE
              </div>
            </div>
          </a>

          <a className="ui dropdown header item" data-path="sponsor" onClick={ this.go } style={{
              "color" : "#262262"
            }}>
            SPONSOR
          </a>

          <a className="ui dropdown header item" data-path="contact" onClick={ this.go } style={{
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
  componentDidMount () {
    setTimeout(function() {
      $('.dropdown').dropdown() ;

    }.bind(this), 0)
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
      <div>
        <div id="backdrop" style={{  "position" : "absolute" , "top" : "0", "left" : "0", "right" : "0", "bottom" : "0" }} onClick={ this.closeSidebar }>
        </div>

        <div className="ui vertical menu sidebar" style={{ "zIndex" : "4000000"}}>
          <a className="ui item" data-path="" onClick={ this.go } style={{
              "color" : "#262262"
            }}>

            <div className="header">
              Home
            </div>

          </a>

          <a className="ui item" data-path="about-us" style={{
              "color" : "#262262"
            }}>
            <div className="header">
              About Us
            </div>

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

          <a className="ui item " style={{
              "color" : "#262262"
            }}>

            <div className="header">
              Events
            </div>

            <div className="menu">
              <div className="item" data-path="event-list" onClick={ this.go } >
                Event List
              </div>

              <div className="item" data-path="calendar" onClick={ this.go } >
                Calendar
              </div>
            </div>
          </a>

          <a className="ui item"style={{
              "color" : "#262262"
            }}>
            <div className="header">
              Resources
            </div>

            <div className="menu">
              <div className="item" data-path="cca-news" onClick={ this.go } >
                CCA News
              </div>

              <div className="item" data-path="members" onClick={ this.go } >
                Member directory
              </div>

              <div className="item" data-path="member-news" onClick={ this.go } >
                Member News
              </div>

              <div className="item" data-path="groundwater" onClick={ this.go } >
                Groundwater
              </div>

              <div className="item" data-path="resourcesfull-use" onClick={ this.go } >
                Resourcefull Use
              </div>
            </div>
          </a>

          <a className="ui item" style={{
              "color" : "#262262"
            }}>

            <div className="header">
              Join
            </div>

            <div className="menu">
              <div className="item" data-path="membership" onClick={ this.go } >
                Membership
              </div>

              <div className="item" data-path="year-in-review" onClick={ this.go } >
                Year In Review
              </div>
            </div>
          </a>

          <a className="ui item " style={{
              "color" : "#262262"
            }}>
            <div className="header">
              Member Area
            </div>

            <div className="menu">
              <div className="item member-area" data-path="directory" onClick={ this.go } >
                Directory
              </div>

              <div className="item member-area" data-path="archives" onClick={ this.go } >
                Archives
              </div>


              <div className="item member-area" data-path="make-news" onClick={ this.go } >
                Make News
              </div>

              <div className="item member-area" data-path="edit-profile" onClick={ this.go } >
                Edit Profile
              </div>
            </div>
          </a>

          <a className="ui item" data-path="sponsor" onClick={ this.go } style={{
              "color" : "#262262"
            }}>
            <div className="header">
              Sponsor
            </div>
          </a>

          <a className="ui item" data-path="contact" onClick={ this.go } style={{
              "color" : "#262262"
            }}>
            <div className="header">
              Contact
            </div>
          </a>
        </div>
      </div>

    )
  }
});
