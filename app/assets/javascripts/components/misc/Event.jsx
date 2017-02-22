const Event = React.createClass({
  getInitialState () {
    var e;

    this.props.parent.state.events.forEach((el) => {
      if ( el.id == this.props.id ) {
        e = el;
      }
    })

    if (e.start.length > 8) {
      e['start'] = e.start.split("T")[1].slice(0,5)
      e['end'] = e.end.split("T")[1].slice(0,5)
    }
    return({
      event: e,
    })
  },

  componentDidMount () {
    $('#body').html(this.state.event.body)
  },

  paypal () {
    if ( this.state.event.paypal ) {
      setTimeout(function() {
        $('#paypal-target').html( this.state.event.paypal );
      }.bind(this), 0)
      return (
        <div className="ui violet message">
          <div className="header">
            Tickets
          </div>
          <div id="paypal-target">
          </div>
        </div>
      )
    }
  },

  custom () {
    if (this.state.event.custom) {
      return (
        <li>
          { this.state.event.custom }
        </li>
      )
    }
  },

  render () {
    var color;
    switch( this.state.event.event_type ) {
      case "Breakfast forums":
      color = "orange" ;

      break;

      case "Special Events":
      color = "yellow" ;

      break;

      case "Lunch w/ leaders":
      color = "violet" ;

      break;

      case "ResourceFULL Use Workshops":
      color = "red" ;

      break;

      case "Tours & Member Exchanges":
      color = "brown" ;

      break;
      default:
    }

    var dateString = this.state.event.date.slice(5, 7) + "/" + this.state.event.date.slice(8) + "/" + this.state.event.date.slice(0, 4);
    if (dateString[0] == "0") {
      dateString = dateString.slice(1);
    }

    var startString = this.state.event.start;

    if (startString[0] == "0") {
      startString = startString.slice(1);
    }
    if ( parseInt(startString.split(":")[0]) < 12 ) {
      startString += " AM"
    } else {
      startString += " PM"
    }

    startString[0] = parseInt(startString[0]) % 12


    var endString = this.state.event.end;

    if (endString[0] == "0") {
      endString = endString.slice(1);
    }
    if ( parseInt(endString.split(":")[0]) < 12) {
      endString += " AM"
    } else {
      endString += " PM"
    }

    endString[0] = parseInt(endString[0]) % 12

    return (
      <div className="ui container" style={{"minHeight" : "50vh" , "margin" : "30px 20px" }} >
        <h1 className="ui header centered" >
          <a href="#events">
            Event
          </a>
        </h1>

        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui message">
              <div className="header">
                { this.state.event.title }
              </div>

              <div id="body">
              </div>
            </div>
          </div>

          <div className="four wide column">
            <div className="ui info message">
              <div className="header">
                Event information:
              </div>
                <ul className="list">
                  <li>
                    { dateString }
                  </li>

                  <li>
                    { startString } to { endString }
                  </li>

                  { this.custom() }
                </ul>
            </div>

              {
                this.paypal()
              }

          </div>

          <div className="sixteen wide column">
            <div className="ui warning message">
              <div className="header" style={{ "marginBottom" : "11px" , }}>
                <a href={"http://maps.google.com/?q=" + this.state.event.location || "CCA" } target="_blank" style={{ "color" : "#794B02" , }}>
                Location
                </a>
              </div>

              <iframe src={"//www.google.com/maps/embed/v1/place?q=" + this.state.event.location + "&zoom=15&key=AIzaSyAqEzqdKVDzEaqos77B7sUHePqbt1kjWEE"} style={{ "border" : "none" , "width" : "100%" , "height" : "32vw"}}>
              </iframe>
            </div>
          </div>

        </div>

      </div>
    )
  }
});
