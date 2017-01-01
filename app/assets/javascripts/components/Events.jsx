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
        jsEvent.preventDefault();
        Backbone.history.navigate('/events/' + calEvent.id , { trigger : true } )
      }.bind(this)
    }) ;

    this.renderEvents();
  },

  renderEvents() {
    this.props.parent.state.events.forEach( (el) => {
      var start = new moment(el.date + " " + el.start );
      el['start'] = start.format() ;
      var end = new moment(el.date + " " + el.end );
      el['end'] = end.format() ;
      
      switch( el.event_type ) {
        case "Breakfast forums":
        el['backgroundColor'] = "#F2711C" ;
        el['borderColor'] = "#F2711C" ;

        break;

        case "Special Events":
        el['backgroundColor'] = "#FBBD08" ;
        el['borderColor'] = "#FBBD08" ;

        break;

        case "Lunch w/ leaders":
        el['backgroundColor'] = "#6435C9" ;
        el['borderColor'] = "#6435C9" ;

        break;

        case "ResourceFULL Use Workshops":
        el['backgroundColor'] = "#db2b2b" ;
        el['borderColor'] = "#db2b2b" ;

        break;

        case "Tours & Member Exchanges":
        el['backgroundColor'] = "#a66941" ;
        el['borderColor'] = "#a66941" ;
        break;
        default:
        return;
      }
      $('#calendar').fullCalendar('renderEvent' , el ) ;
    })
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
