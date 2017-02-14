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
        <div>
          <div className="ui clearing divider">
          </div>

          <div id="paypal-target">
          </div>
        </div>
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
    if ( parseInt(startString[0]) < 12 ) {
      startString += " AM"
    } else {
      startString += " PM"
    }

    startString[0] = parseInt(startString[0]) % 12


    var endString = this.state.event.end;

    if (endString[0] == "0") {
      endString = endString.slice(1);
    }
    if ( parseInt(endString[0]) < 12 ) {
      endString += " AM"
    } else {
      endString += " PM"
    }

    endString[0] = parseInt(endString[0]) % 12

    return (
      <div className="ui container" style={{"minHeight" : "50vh" , "margin" : "30px 20px" }} >
        <h1 className="ui header centered" style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          <a href="#events">
            Event
          </a>
        </h1>

        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className={"ui padded segment " + color}>
              <h2 className="ui header left floated">
                { this.state.event.title }
              </h2>

              <div className="ui clearing divider">
              </div>

              <div id="body">
              </div>

              <div className="ui clearing divider">
              </div>

              <div className="ui grid stackable">
                <div className="sixteen wide column">
                  <h4 className="ui header centered">
                    <a href={"http://maps.google.com/?q=1200 " + this.state.event.location } target="_blank">
                      { this.state.event.location }
                    </a>
                  </h4>

                  <iframe src={"//www.google.com/maps/embed/v1/place?q=" + this.state.event.location + "&zoom=17&key=AIzaSyAqEzqdKVDzEaqos77B7sUHePqbt1kjWEE"} style={{ "border" : "none" , "width" : "100%" , "height" : "32vw"}}>
                  </iframe>

                  <h2 className="ui header centered" style={{ "margin" : "8px" , }}>
                    { dateString }
                  </h2>

                  <h3 className="ui header centered" style={{ "margin" : "8px" , }}>
                    { startString } to { endString }
                  </h3>
                </div>
              </div>


              {
                this.paypal()
              }

            </div>
          </div>
        </div>
      </div>
    )
  }
});
