const MailingList = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "textAlign" : "center" ,
      "padding" : "60px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1>Sign Up for our Mailing List!</h1>
        <div className="ui grid centered">
          <div className="eight wide column ui form">
            <div clasName="field">
              <input type="text" placeholder="Email:" />
            </div>

            <div className="ui button purple" style = {{ "marginTop" : "12px" , "background" : "#262262" }}>
              Sign Up
            </div>
          </div>
        </div>
      </div>
    )
  }
});
