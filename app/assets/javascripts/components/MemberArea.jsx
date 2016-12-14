const CMemberArea = React.createClass({
  getInitialState () {
    var style = {
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
