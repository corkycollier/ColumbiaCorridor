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

  paypal () {
    if ( this.state.event.paypal ) {
      return (
        <div>
          <div className="ui clearing divider">
          </div>

          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <button name="submit" className="ui button small compact" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "12px"}}>
              Purchase
            </button>
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value={ this.state.event.paypal } />
            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
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
