const Events = React.createClass({

  componentDidMount () {
    $(".event-cards").isotope({
      itemSelector: ".event-card" ,
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

  filter (e) {
    var color = e.currentTarget.dataset.color || "" ;

    if (color) {
      color = "." + color
    }

    $(".event-cards").isotope({
      filter: ".event-card" + color ,
    });
  },

  navigateEvent (e) {
    Backbone.history.navigate('event/' + e.currentTarget.dataset.id , { trigger : true });
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
          }}
          >
        <h1>
          Events
        </h1>

        <div className="ui buttons fluid" >
          <div className="ui button orange" data-color="orange" onClick={this.filter}>
            <b>Breakfast Forums</b>
          </div>

          <div className="ui button violet" data-color="violet" onClick={this.filter}>
            <b>Lunch w/ Leaders</b>
          </div>

          <div className="ui button red" data-color="red" onClick={this.filter}>
            <b>ResourceFULL Use Workshops</b>
          </div>

          <div className="ui button yellow" data-color="yellow" onClick={this.filter}>
            <b>Special Events</b>
          </div>

          <div className="ui button brown" data-color="brown" onClick={this.filter}>
            <b>Tours & Member Exchanges</b>
          </div>

          <div className="ui button green" data-color="" onClick={this.filter}>
            <b>All</b>
          </div>
        </div>

        <div className="ui clearing divider" style={{ "margin" : "24px" }} ></div>


        <div className="event-cards">
          {
            this.props.parent.state.events.map(function(el) {
              var color;
              var text;
              switch( el.event_type ) {
                case "Breakfast forums":
                color = "orange";
                text = "Breakfast forum";
                break;
                case "Special Events":
                color = "yellow";
                text = "Special Event";
                break;
                case "Lunch w/ leaders":
                color = "violet";
                text = "Lunch w/ leaders";
                break;
                case "ResourceFULL Use Workshops":
                color = "red";
                text = "ResourceFULL Use Workshop";
                break;
                case "Tours & Member Exchanges":
                color = "brown";
                text = "Tours & Member Exchange";
                break;
                default:
                return;
              }

              return (
                <div className={"event-card ui segment " + color } key={"e-card" + el.id} data-id={ el.id } style={{ "margin" : "10px 0px" , "marginRight" : "10px" , "marginLeft" : "0px"}} onClick={this.navigateEvent}>
                  <h3>
                    {el.title}
                  </h3>

                  <div className="ui clearing divider"></div>

                  <div>
                    <b>
                      { text }
                    </b>
                  </div>

                  { el.date }
                </div>
              )
            }.bind(this))
          }
        </div>
        <div className="ui clearing divider" style={{ "margin" : "24px" }} ></div>

        <div id="calendar">
        </div>



      </div>
    )
  }
});
