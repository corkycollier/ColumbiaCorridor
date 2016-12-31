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
    $(".events").isotope({
      itemSelector: ".event-item" ,
      layoutMode: "fitRows" ,
    })


    $('#calendar').fullCalendar({
      eventClick: function ( calEvent , jsEvent , view ) {
        debugger
      }.bind(this)
    }) ;
    $('#calendar').fullCalendar('renderEvents' , this.props.parent.state.events ) ;
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1 style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          Events
        </h1>

        <div id="calendar">
        </div>

        <div className="ui clearing divider" style={{ "margin" : "48px" }} ></div>


        <div className="ui grid doubling stackable" style={{ "marginBottom" : "20px" ,}}>
          <div className="eight wide column">
            <div className="ui segment orange">
              <b>Breakfast Forums</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment violet">
              <b>Lunch w/ Leaders</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment red">
              <b>ResourceFULL Use Workshops</b>
              <p>
                <i>Something here</i>
              </p>
            </div>
          </div>

          <div className="eight wide column">
            <div className="ui segment yellow">
              <b>Special Events</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment brown">
              <b>Tours & Member Exchanges</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment green">
              <b>All</b>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
