const CMenu = React.createClass({
  getInitialState(){
    var style = {
      "color" : "#262262"
    }

    return({
      style: style,
      currentMenu: [] ,
    })
  },

  componentDidMount () {
    var $window = $( window );

    $window.resize(function () {
      this.triggerMenus();
    }.bind(this))

    this.triggerMenus();
  },

  triggerMenus () {
    var $window = $( window );
    if ($window.width() > 920 ) {
      this.setState({
        currentMenu : <RegularMenu /> ,
    });
  } else {
    this.setState({
      currentMenu : <SidebarMenuButton /> ,
  });
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
    $('.ui.sidebar').sidebar('toggle', {
      context: $('.context.example .bottom.segment') ,
    })
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <a className="ui icon button" onClick={ this.openSidebar } style={{ "width" : "100px" , "marginTop" : "4px" }} >
          <i className="sidebar icon"></i>
        </a>
      </div>
    )
  }
});

const SidebarMenu = React.createClass({
  getInitialState () {
    var style = {
      "width" : "0px"
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  gotoHome () {
    Backbone.history.navigate('', { trigger : true });
  },

  gotoAbout () {
    Backbone.history.navigate('about-us', { trigger : true });
  },

  gotoEvents () {
    Backbone.history.navigate('events', { trigger : true });
  },

  gotoResources () {
    Backbone.history.navigate('resources', { trigger : true });
  },

  gotoMemberArea () {
    Backbone.history.navigate('member-area', { trigger : true } )
  },

  gotoJoin () {
    Backbone.history.navigate('join', { trigger : true });
  },

  gotoSponsor () {
    Backbone.history.navigate('sponsor', { trigger : true });
  },

  gotoContact () {
    Backbone.history.navigate('contact', { trigger : true });
  },

  render () {
    return (
        <div className="ui sidebar vertical menu">
          <a className="item header" onClick={ this.gotoHome } >
            Home
          </a>

          <a className="item header" onClick={ this.gotoAbout } style={{ "display" : this.state.regularMenu }} >
            About Us
          </a>

          <a className="item header" onClick={ this.gotoEvents } style={{ "display" : this.state.regularMenu }} >
            Events
          </a>

          <a className="item header" onClick={ this.gotoResources } style={{ "display" : this.state.regularMenu }} >
            Resources
          </a>

          <a className="item header" onClick={ this.gotoJoin } style={{ "display" : this.state.regularMenu }} >
            Join
          </a>

          <a className="item header member-area" onClick={ this.gotoMemberArea } style={{ "display" : this.state.regularMenu }} >
            Member Area
          </a>

          <a className="header item" onClick={ this.gotoSponsor } style={{ "display" : this.state.regularMenu }} >
            Sponsor
          </a>

          <a className="header item" onClick={ this.gotoContact } style={{ "display" : this.state.regularMenu }} >
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

  gotoHome () {
    Backbone.history.navigate('', { trigger : true });
  },

  gotoAbout () {
    Backbone.history.navigate('about-us', { trigger : true });
  },

  gotoEvents () {
    Backbone.history.navigate('events', { trigger : true });
  },

  gotoResources () {
    Backbone.history.navigate('resources', { trigger : true });
  },

  gotoMemberArea () {
    Backbone.history.navigate('member-area', { trigger : true } )
  },

  gotoJoin () {
    Backbone.history.navigate('join', { trigger : true });
  },

  gotoSponsor () {
    Backbone.history.navigate('sponsor', { trigger : true });
  },

  gotoContact () {
    Backbone.history.navigate('contact', { trigger : true });
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui ten item menu" style={{ "borderLeft" : "none" , "borderRight" : "none", "display" : this.state.regularMenu  }}>
          <div className="item" />

          <a className="item header" onClick={ this.gotoHome } >
            Home
          </a>

          <a className="item header" onClick={ this.gotoAbout } style={{ "display" : this.state.regularMenu }} >
            About Us
          </a>

          <a className="item header" onClick={ this.gotoEvents } style={{ "display" : this.state.regularMenu }} >
            Events
          </a>

          <a className="item header" onClick={ this.gotoResources } style={{ "display" : this.state.regularMenu }} >
            Resources
          </a>

          <a className="item header" onClick={ this.gotoJoin } style={{ "display" : this.state.regularMenu }} >
            Join
          </a>

          <a className="item header member-area" onClick={ this.gotoMemberArea } style={{ "display" : this.state.regularMenu }} >
            Member Area
          </a>

          <a className="header item" onClick={ this.gotoSponsor } style={{ "display" : this.state.regularMenu }} >
            Sponsor
          </a>

          <a className="header item" onClick={ this.gotoContact } style={{ "display" : this.state.regularMenu }} >
            Contact
          </a>

          <div className="item" style={{"width":"60%"}} style={{ "display" : this.state.regularMenu }}  />
        </div>
      </div>
    )
  }
});
