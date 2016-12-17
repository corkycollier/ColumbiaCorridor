const CMemberArea = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "60px 100px" ,
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

        <div className="ui grid doubling stackable">
          <div className="eight wide column">
            hi
          </div>

          <div className="eight wide column">
            hi
          </div>
        </div>
      </div>
    )
  }
});
