const Events = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "60px 20px" ,
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
        Backbone.history.navigate('/event/' + calEvent.id , { trigger : true } )
      }.bind(this)
    }) ;

    setTimeout(function(){
      this.renderEvents();
    }.bind(this), 0)
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


        <div className="ui grid doubling stackable" style={{ "marginBottom" : "20px" ,}}>
          <div className="eight wide column">
            <div className="ui segment orange">
              <b>Breakfast Forums</b>
            </div>

            <div className="ui segment violet">
              <b>Lunch w/ Leaders</b>
            </div>

            <div className="ui segment red">
              <b>ResourceFULL Use Workshops</b>
            </div>
          </div>

          <div className="eight wide column">
            <div className="ui segment yellow">
              <b>Special Events</b>
            </div>

            <div className="ui segment brown">
              <b>Tours & Member Exchanges</b>
            </div>

            <div className="ui segment green">
              <b>All</b>
            </div>
          </div>
        </div>
        <div className="ui clearing divider" style={{ "margin" : "48px" }} ></div>

        <div id="calendar">
        </div>


      </div>
    )
  }
});
