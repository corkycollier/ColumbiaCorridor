const Event = React.createClass({
  getInitialState () {
    var e;

    this.props.parent.state.events.forEach((el) => {
      if ( el.id == this.props.id ) {
        e = el;
      }
    })

    return({
      event: e,
    })
  },

  componentDidMount () {
    $('#body').html(this.state.event.body)
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
      return;
    }

    return (
      <div className="ui container" style={{"minHeight" : "50vh" , "margin" : "30px 20px" }} >
        <h1 className="ui header centered" style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          Event
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

              <div className="ui grid stackable ">
                <div className="eight wide column">
                  <div>
                    <b>Location:</b> { this.state.event.location }
                    </div>

                    <div>
                      <b>Date:</b> { this.state.event.date }
                      </div>
                    </div>
                    <div className="eight wide column">
                    </div>
                  </div>

                  <div className="ui clearing divider">
                  </div>


                </div>
              </div>
            </div>
          </div>
        )
      }
    });
