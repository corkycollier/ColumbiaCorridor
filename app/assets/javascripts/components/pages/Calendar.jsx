const Calendar = React.createClass({
  getInitialState () {
    return ({
      first : true,
      filter : "",
      events : this.props.parent.state.events || [],
    })
  },

  componentDidMount () {
    setTimeout(this.fullCalendar , 0);
    setTimeout(this.filter , 0);
  },

  fullCalendar () {
    $('#calendar').fullCalendar({
      eventClick: this.clickEvent,
    });

    this.attachFcButtonListeners();
  },

  attachFcButtonListeners () {
    $('.fc-button').click(function(){
      this.setState({
        filter: "" ,
      })

      setTimeout(this.filter, 0)
    }.bind(this))
  },

  clickEvent( calEvent , jsEvent , view ) {
    jsEvent.preventDefault() ;
    Backbone.history.navigate('/event/' + calEvent.id , { trigger : true } ) ;
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

  },

  updateFilter (e) {
    $('#calendar').fullCalendar( 'removeEvents'  )

    this.setState({
      filter : e.currentTarget.dataset.filter ,
    })

    setTimeout(this.filter, 0)
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
        }}>

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


        <div id="calendar">
        </div>

      </div>
    )
  }
});
