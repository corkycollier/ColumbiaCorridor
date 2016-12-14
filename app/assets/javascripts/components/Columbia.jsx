const Columbia = React.createClass({
  getInitialState () {
    var style = {

    }

    return({
      style: style,
      user: JSON.parse(this.props.user)
    })
  },

  componentDidMount () {
    this.setState({
      router: new router(this),
    })

    setTimeout(function(){
      if (!this.state.user) {
        $('.member-area').addClass('disabled');
      }
    }.bind(this))
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <CHeader parent = { this } />
        <CMenu parent = { this } />
        <div className="ui container" style={{ "padding":"50px"}}>

          {
            this.state.activePage
          }

        </div>

        <CFoot parent={ this } />
      </div>
    )
  }
});


const CHeader = React.createClass({
  getInitialState(){
    var style = {
    }

    return({
      style: style,
    })
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <div className="ui grid doubling stackable">
          <div className="four wide column">
            <img src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481667293/CCA_Logo_hi9b9f.png" style={{"height":"120px"}}/>
          </div>

          <div className="four wide column right floated">
            <div className="ui button small green"  style={{"marginTop":"8px"}}>
              Sign In
            </div>

            <div className="ui button small red"  style={{"marginTop":"8px"}}>
              Logout
            </div>
          </div>
        </div>

      </div>
    )
  }
});

const CMenu = React.createClass({
  getInitialState(){
    var style = {
      "color" : "#262262"
    }

    return({
      style: style,
    })
  },

  gotoHome () {
    this.props.parent.setState({
      activePage: <Home parent={ this.props.parent } />
    });

    Backbone.history.navigate('');
  },

  gotoAbout () {
    this.props.parent.setState({
      activePage: <CAboutUs parent={ this.props.parent } />
    });

    Backbone.history.navigate('about-us');
  },

  gotoEvents () {
    this.props.parent.setState({
      activePage: <CEvents parent={ this.props.parent }/>
    });

    Backbone.history.navigate('events');
  },

  gotoResources () {
    this.props.parent.setState({
      activePage: <CResources parent={ this.props.parent }/>
    });

    Backbone.history.navigate('resources');
  },

  gotoMemberArea () {
    Backbone.history.navigate('member-area', { trigger : true } )
  },

gotoJoin () {
  this.props.parent.setState({
    activePage: <CJoin parent={ this.props.parent }/>
  });

  Backbone.history.navigate('join');
},

gotoSponsor () {
  this.props.parent.setState({
    activePage: <CSponsor parent={ this.props.parent }/>
  });

  Backbone.history.navigate('sponsor');
},

gotoContact () {
  this.props.parent.setState({
    activePage: <CContact parent={ this.props.parent }/>
  });

  Backbone.history.navigate('contact');
},


componentDidMount () {
  $('.ui.dropdown').dropdown({
    on: 'hover'
  })
},

render () {
  return (
    <div className="" style={this.state.style}>
      <div className="ui ten item menu" style={{ "borderLeft" : "none" , "borderRight" : "none" }}>
        <div className="item" style={{"width":"60%"}} />

        <div className="ui item header" onClick={ this.gotoHome } >
          Home
        </div>

        <div className="ui item header" onClick={ this.gotoAbout } >
          About Us
        </div>

        <div className="ui item header" onClick={ this.gotoEvents } >
          Events
        </div>

        <div className="ui item header" onClick={ this.gotoResources } >
          Resources
        </div>

        <div className="ui item header" onClick={ this.gotoJoin } >
          Join
        </div>

        <div className="ui item header member-area" onClick={ this.gotoMemberArea } >
          Member Area
        </div>

        <div className="ui header item" onClick={ this.gotoSponsor } >
          Sponsor
        </div>

        <div className="ui header item" onClick={ this.gotoContact } >
          Contact
        </div>

        <div className="ui item" style={{"width":"60%"}} />
      </div>
    </div>
  )
}
});

const CFoot = React.createClass({
  getInitialState () {
    var style = {
      "background" : "#262261",
      "color" : "#fff",
      "marginTop" : "24px",
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
        <div className="ui grid centered stackable">
          <div className="one wide column" />

          <div className="five wide column">
            Website Design by LAUNCHPAD
          </div>

          <div className="four wide column">
            www.ColumbiaCorridor.org
          </div>

          <div className="four wide column">
            © 2016 Columbia Corridor Association
          </div>

        </div>
      </div>
    )
  }
});
