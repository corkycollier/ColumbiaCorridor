const Event = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
    }

    var e;

    this.props.parent.state.events.forEach((el) => {
      if ( el.id == this.props.id ) {
        e = el;
      }
    })


    return({
      style: style,
      event: e,
    })
  },

  componentDidMount () {

    $('#body').html(this.state.event.body)
  },



  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1 className="ui header centered" style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          Event
        </h1>

        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui padded segment">
              <h2 className="ui header left floated">
                { this.state.event.title }
              </h2>

              <div className="ui clearing divider"></div>

              <div id="body">

              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }
});
