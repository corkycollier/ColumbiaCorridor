const Columbia = React.createClass({
  getInitialState () {
    var style = {

    }
    return({
      style : style ,
      user : this.props.app.current_user ,
      members : this.props.app.members ,
      news : this.props.app.news ,
      events : this.props.app.events ,
    })
  },

  componentDidMount () {
    this.setState({
      router: new router(this),
    })

    setTimeout(function(){
      this.checkForUser();
    }.bind(this))
  },

  checkForUser () {
    if (!this.state.user) {
      $('.member-area').addClass('disabled');
    }
  },

  render () {
    return (
      <div className="" style={this.state.style} >
        <SidebarMenu />

        <div className="pusher" style={{ "paddingTop" : "1px" }}>
          <CHeader parent = { this } />
          <CMenu parent = { this } />

            {
              this.state.activePage
            }


          <CFoot parent={ this } />
        </div>
      </div>
    )
  }
});
