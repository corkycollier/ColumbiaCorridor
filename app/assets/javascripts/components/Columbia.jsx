const Columbia = React.createClass({
  getInitialState () {
    var style = {

    }
  debugger
    return({
      style : style ,
      user : this.props.user ,
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
          <div className="ui container" style={{ "padding":"50px"}}>

            {
              this.state.activePage
            }

          </div>

          <CFoot parent={ this } />
        </div>
      </div>
    )
  }
});
