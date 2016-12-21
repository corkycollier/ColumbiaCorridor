const Events = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
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
        <h2>
          Events
        </h2>

        <div className="ui grid doubling stackable">
          <div className="eight wide column">
            <i>Coming soon...</i>
          </div>

          <div className="eight wide column">
          </div>
        </div>
      </div>
    )
  }
});
