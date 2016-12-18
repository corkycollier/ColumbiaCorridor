const CMemberArea = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
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
        <h1>
          Member Area
        </h1>

        <h3>
          My Profile
        </h3>
        <div className="ui divider">
        </div>

        <div className="ui grid doubling stackable">
          <div className="eight wide column">
            <i>profile</i>
          </div>

          <div className="eight wide column">
            <i>profile</i>
          </div>
        </div>



        <h3>
          Member Directory
        </h3>
        <div className="ui divider">
        </div>
      </div>
    )
  }
});
