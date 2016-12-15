const CEvents = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262"
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
        <h1>
          Events
        </h1>

        <div className="ui grid doubling stackable">
          <div className="eight wide column">
          </div>

          <div className="eight wide column">
          </div>
        </div>
      </div>
    )
  }
});
