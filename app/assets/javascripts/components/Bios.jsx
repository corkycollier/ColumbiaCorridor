const Bios = React.createClass({
  getInitialState () {
    return({
      id : this.props.id
    })
  },

  componentDidMount () {

  },

  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{}}>

      </div>
    )
  }
});
