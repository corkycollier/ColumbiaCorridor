const Columbia = React.createClass({
  getInitialState () {
    var style = {

    }
    return({
      style : style ,
      user : this.props.app_data.user ,
      members : this.props.app_data.members ,
      news : this.props.app_data.news ,
      events : this.props.app_data.events ,
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
          <Header parent = { this } />
          <CMenu parent = { this } />

            {
              this.state.activePage
            }


          <Footer parent={ this } />
        </div>
      </div>
    )
  }
});
