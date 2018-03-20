const Calendar = React.createClass({
  getInitialState () {
    return ({
      first : true,
      filter : "",
      events : this.props.parent.state.events || [],
      helper_events : [] ,
    })
  },

  componentDidMount () {
    setTimeout(this.fullCalendar , 0);
    setTimeout(this.fcClickHandlers , 0);
    setTimeout(this.filter , 0);
    this.fadeIn();
  },

  fadeIn() {
    $('.ui.container').transition({
      animation  : 'fade in' ,
      duration   : '0.8s'    ,
    });
  },

  fullCalendar () {
    $('#calendar').fullCalendar({
      eventClick: this.clickEvent,
    });
  },

  fcClickHandlers () {
    $('.fc-button').click(function(){
      this.setState({
        filter : "" ,
        helper_events  : [] ,
        first  : true ,
      })

      setTimeout(function() {
        this.filter()
      }.bind(this), 0)
    }.bind(this))
  },

  clickEvent( calEvent , jsEvent , view ) {
    jsEvent.preventDefault() ;
    Backbone.history.navigate('/event/' + calEvent.id , { trigger : true } ) ;
  },

  filter () {
    var events = []
    this.state.events.forEach(function(el) {

      var newEvent = $.extend({}, el) ;

      if (newEvent['start'].length < 8) {
        var start = new moment(newEvent.date + " " + newEvent.start );
        newEvent['start'] = start.format() ;
      }

      if (newEvent['end'].length < 8) {
        var end = new moment(newEvent.date + " " + newEvent.end );
        newEvent['end'] = end.format() ;
      }

      switch( newEvent.event_type ) {
        case "Breakfast Forums":
        newEvent['backgroundColor'] = "#F2711C" ;
        newEvent['borderColor'] = "#F2711C" ;
        newEvent['color'] = "orange" ;
        break;

        case "Special Events":
        newEvent['backgroundColor'] = "#FBBD08" ;
        newEvent['borderColor'] = "#FBBD08" ;
        newEvent['color'] = "yellow" ;

        break;

        case "Lunch w/ Leaders":
        newEvent['backgroundColor'] = "#a66941" ;
        newEvent['borderColor'] = "#a66941" ;
        newEvent['color'] = "brown" ;

        break;

        case "ResourceFULL Use Workshops":
        newEvent['backgroundColor'] = "#21BA45" ;
        newEvent['borderColor'] = "#21BA45" ;
        newEvent['color'] = "green" ;

        break;

        case "Tours & Member Exchanges":
        newEvent['backgroundColor'] = "#6435C9" ;
        newEvent['borderColor'] = "#6435C9" ;
        newEvent['color'] = "violet" ;

        break;
        default:
      }

      if (this.state.filter == "" || newEvent.event_type == this.state.filter) {
        newEvent.title = newEvent.basic_title;
        events.push(newEvent);
      }

    }.bind(this))

    $('#calendar').fullCalendar('renderEvents' , events ) ;

    if (!this.state.first) {
      this.setState({
        helper_events: events
      })
    }

  },

  updateFilter (e) {
    $('#calendar').fullCalendar( 'removeEvents'  )

    this.setState({
      filter : e.currentTarget.dataset.filter ,
      first : false ,
    })

    setTimeout(this.filter, 0)
  },

  helper_events () {
    return(
    <div>
      {
        this.state.helper_events.map(function(el) {

          var dateString = el.date.slice(5, 7) + "/" + el.date.slice(8) + "/" + el.date.slice(0, 4);
          if (dateString[0] == "0") {
            dateString = dateString.slice(1);
          }

          var startString = el.start;

          if (startString[0] == "0") {
            startString = startString.slice(1);
          }
          if ( parseInt(startString.split(":")[0]) < 12 ) {
            startString += " AM"
          } else {
            startString += " PM"
          }

          startString[0] = parseInt(startString[0]) % 12


          var endString = el.end;

          if (endString[0] == "0") {
            endString = endString.slice(1);
          }
          if ( parseInt(endString.split(":")[0]) < 12) {
            endString += " AM"
          } else {
            endString += " PM"
          }

          endString[0] = parseInt(endString[0]) % 12


          return(
            <div className={"ui segment ui grid " + el.color } key={"event" + el.id}>
              <div className="eight wide column">
                <h3><a href={"#event/" + el.id} style={{ "color" : "#262262" , "letterSpacing" : "1px" }} dangerouslySetInnerHTML={ {__html: el.title} }>
                </a></h3>
              </div>

              <div className="eight wide column" style={{ "textAlign" : "right" , }}>
                <b>
                  {dateString}
                </b> - {el.location}
              </div>


              <div className="ui clearing divider" style={{
                  "display" : "none" ,
                  "width" : "98%" ,
                  "left" : "1%" ,
                  "position" : "relative" ,
                  "margin": "-11px 0px" ,
                }}>
              </div>


            </div>
          )
        })
      }

    </div>
    )
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "minHeight" : "74vh" ,
          "padding" : "30px 20px" ,
        }}>

        <h1>
          Events
        </h1>

        <div className="ui button orange" data-filter="Breakfast Forums" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px" , "marginLeft" : "2px" }}>
          <b>Breakfast Forums</b>
        </div>

        <div className="ui button brown" data-filter="Lunch w/ Leaders" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px"}}>
          <b>Lunch w/ Leaders</b>
        </div>

        <div className="ui button green" data-filter="ResourceFULL Use Workshops" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px"}}>
          <b>ResourceFULL Use Workshops</b>
        </div>

        <div className="ui button yellow" data-filter="Special Events" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px"}}>
          <b>Special Events</b>
        </div>

        <div className="ui button violet" data-filter="Tours & Member Exchanges" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px"}}>
          <b>Tours & Member Exchanges</b>
        </div>

        <div className="ui button red" data-filter="" onClick={this.updateFilter} style={{ "margin" : "8px" , "marginBottom" : "24px" }}>
          <b>All</b>
        </div>


        <div>
          {
            this.helper_events()
          }
        </div>

        <div id="calendar">
        </div>

        <a href="#event-list" className="ui button left labeled icon small" style={{ "marginTop" : "18px" , }}>
          <i className="left caret icon"></i>
          Event List
        </a>
      </div>
    )
  }
});
