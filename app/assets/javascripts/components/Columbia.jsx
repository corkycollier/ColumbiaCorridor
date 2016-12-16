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

    this.checkWidth();


    setTimeout(function(){
      this.checkForUser();
    }.bind(this))
  },

  checkForUser () {
    if (!this.state.user) {
      $('.member-area').addClass('disabled');
    }
  },

  checkWidth () {
    var width = $(window).width();
    if ( width < 993 ) {

    }

  },

  render () {
    return (
      <div className="" style={this.state.style} >
        <div className="ui sidebar vertical menu">
          <a className="item">
            1
          </a>
          <a className="item">
            2
          </a>
          <a className="item">
            3
          </a>
        </div>

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
