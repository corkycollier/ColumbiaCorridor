const Logout = React.createClass({
  getInitialState () {
    var style = {

    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  logout (e) {
    $.ajax({
      url: '/session',
      type: 'DELETE',
      success: function (model, resp, object) {
        location.href = "/"
      }
    })
  },

  render () {
    return (
      <div classNameName="" style={this.state.style}>
        <button onClick={this.logout}>
          Logout
        </button>
      </div>
    )
  }
});
