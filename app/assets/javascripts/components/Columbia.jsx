const Columbia = React.createClass({
  getInitialState () {
    var style = {

    }

    return({
      style : style ,
      user : JSON.parse(this.props.user) ,
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
        <div className="sidebar-segment">
          <SidebarMenu />

          <div className="pusher" style={{ "paddingTop" : "1px" }}>
            <CHeader parent = { this } />
            <CMenu parent = { this } />
            <div className="ui container" style={{ "padding":"50px"}}>

              {
                this.state.activePage
              }

            </div>

            <CFoot parent={ this } />
          </div>
        </div>
      </div>
    )
  }
});
