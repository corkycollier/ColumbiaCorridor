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
