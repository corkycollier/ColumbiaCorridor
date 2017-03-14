const EventList = React.createClass({
  getInitialState () {
    return ({
      first : false,
      filter : "",
      events : this.props.parent.state.events,
      helper_events: []
    })
  },

  componentDidMount () {
    setTimeout(this.fullCalendar , 0);
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

  clickEvent( calEvent , jsEvent , view ) {
    jsEvent.preventDefault() ;
    Backbone.history.navigate('/event/' + calEvent.id , { trigger : true } ) ;
  },

  updateEventType ( e ) {
    var el = this.state ;
    switch(e.currentTarget.value) {
      case "Breakfast Forums":

      <option value="Breakfast Forums">Breakfast Forums</option>
      break;

      case "Special Events":
      <option value="Breakfast Forums">Breakfast Forums</option>
      break;

      case "Lunch w/ Leaders":
      <option value="Breakfast Forums">Breakfast Forums</option>
      break;

      case "ResourceFULL Use Workshops":
      <option value="Breakfast Forums">Breakfast Forums</option>
      break;

      case "Tours & Member Exchanges":
      <option value="Breakfast Forums">Breakfast Forums</option>
      break;

      default:
      <option value=""></option>
    }
  },

  filter () {
    var events = []
    this.state.events.forEach(function(el) {

      if (el['start'].length < 8) {
        var start = new moment(el.date + " " + el.start );
        el['start'] = start.format() ;
      }

      if (el['end'].length < 8) {
        var end = new moment(el.date + " " + el.end );
        el['end'] = end.format() ;
      }

      switch( el.event_type ) {
        case "Breakfast Forums":
        el['backgroundColor'] = "#F2711C" ;
        el['borderColor'] = "#F2711C" ;
        el['color'] = "orange" ;
        break;

        case "Special Events":
        el['backgroundColor'] = "#FBBD08" ;
        el['borderColor'] = "#FBBD08" ;
        el['color'] = "yellow" ;

        break;

        case "Lunch w/ Leaders":
        el['backgroundColor'] = "#6435C9" ;
        el['borderColor'] = "#6435C9" ;
        el['color'] = "violet" ;

        break;

        case "ResourceFULL Use Workshops":
        el['backgroundColor'] = "#db2b2b" ;
        el['borderColor'] = "#db2b2b" ;
        el['color'] = "red" ;

        break;

        case "Tours & Member Exchanges":
        el['backgroundColor'] = "#a66941" ;
        el['borderColor'] = "#a66941" ;
        el['color'] = "brown" ;

        break;
        default:
      }

      if (this.state.filter == "" || el.event_type == this.state.filter) {
        events.push(el)
      }

    }.bind(this))

    $('#calendar').fullCalendar('renderEvents' , events ) ;

    this.setState({
      currentEvents: events
    });

    setTimeout(this.popups , 0);

    if ( !this.state.first ) {
      this.setState({
        helper_events: events
      })
    }

    setTimeout(function() {
      this.setState({
        first: false
      })
    }.bind(this), 0)
  },

  updateFilter (e) {
    $('#calendar').fullCalendar( 'removeEvents'  )

    this.setState({
      filter : e.currentTarget.dataset.filter ,
    })

    setTimeout(this.filter, 0)
  },

  helper_events () {
    if (this.state.helper_events.length < 1 ) {
      return
    } else {
      return (
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
                    <h3><a href={"#event/" + el.id} style={{ "color" : "#262262" , "letterSpacing" : "1px" }} dangerouslySetInnerHTML={ {__html: el.basic_title} }>

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
    }

  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "minHeight" : "74vh" ,
          "padding" : "30px 20px" ,
        }}
        >
        <h1>
          Events
        </h1>

        <div className="ui button orange" data-filter="Breakfast Forums" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px" , "marginLeft" : "2px" }}>
          <b>Breakfast Forums</b>
        </div>

        <div className="ui button violet" data-filter="Lunch w/ Leaders" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px"}}>
          <b>Lunch w/ Leaders</b>
        </div>

        <div className="ui button red" data-filter="ResourceFULL Use Workshops" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px"}}>
          <b>ResourceFULL Use Workshops</b>
        </div>

        <div className="ui button yellow" data-filter="Special Events" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px"}}>
          <b>Special Events</b>
        </div>

        <div className="ui button brown" data-filter="Tours & Member Exchanges" onClick={this.updateFilter} style={{ "float" : "left" , "margin" : "8px"}}>
          <b>Tours & Member Exchanges</b>
        </div>

        <div className="ui button green" data-filter="" onClick={this.updateFilter} style={{ "margin" : "8px" , "marginBottom" : "24px" }}>
          <b>All</b>
        </div>


        <div>
          {
            this.helper_events()
          }
        </div>

        <a href="#" className="ui button left labeled icon small" style={{ "marginTop" : "18px" , "marginRight" : "12px" }}>
          <i className="left caret icon"></i>
          Home
        </a>

        <a href="#calendar" className="ui button right labeled icon small" style={{ "marginTop" : "18px" , "marginRight" : "12px" }}>
          <i className="right caret icon"></i>
          Calendar
        </a>
      </div>
    )
  }
});
