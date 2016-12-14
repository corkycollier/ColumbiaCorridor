const MobileMain = React.createClass({
  getInitialState () {
    var styles = {
      "height": "20px",
      "backgroundColor": "rgba(219, 59, 97, 0)",
      "fontSize": "40px",
    }

    return({
      active_pages: [],
      styles: styles
    })
  },

  componentDidMount () {
    this.setState({
      router: new router(this),
    })
  },

  render () {
    return (
      <div className="" style={this.state.styles}>
        This is the main component

        {
          this.state.active_pages
        }

      </div>
    )
  }
});
