const Home = React.createClass({
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
        Home
      </div>
    )
  }
});
