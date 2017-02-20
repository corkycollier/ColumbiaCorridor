

const Membership = React.createClass({

  componentDidMount() {
      $('.ui.container').transition({
        animation  : 'fade in' ,
        duration   : '0.8s'    ,
      });
  },
  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" , "fontSize" : "16px" }}>
        <h1 >
          Membership
        </h1>

        <div className="ui grid doubling stackable">
          <div className="six wide column" >
            <h4>Discount Members – $475</h4>


            <ul style={{ "color" : "#767373" }}>
              <li>
                Membership prices at CCA events
              </li>

              <li>
                Listing in website directory
              </li>

              <li>
                Access to business advocacy letters
              </li>

              <li>
                Newsletters, event notices, alerts
              </li>

              <li>
                Participation in all committees
              </li>


              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <button name="submit" className="ui button small compact" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "12px"}}>
                  Join
                </button>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="CT5S65Z5EDB4L" />
                <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>

            </ul>

            <h4>Standard Members – $875</h4>
            <ul style={{ "color" : "#767373" }}>
              <li>
                All Level 1 benefits
              </li>

              <li>
                Board eligible
              </li>

              <li>
                Voting privileges on board and other matters
              </li>

              <li>
                Access to marketing data and reports
              </li>

              <li>
                Access to board minutes
              </li>

              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <button name="submit" className="ui button small compact" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "12px"}}>
                  Join
                </button>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="7RF646JFWHPLW" />
                <img alt=""  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>

            </ul>

            <h4>Foundation Members – $2,500+</h4>
            <ul style={{ "color" : "#767373" }}>
              <li>
                All Level 2 benefits
              </li>

              <li>
                Invited to all special meetings (lunch with leaders)
              </li>

              <li>
                Leadership position on the CCA board
              </li>

              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <button name="submit" className="ui button small compact" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "12px"}}>
                  Join
                </button>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="CEGRP2A8KM2ZJ" />
                <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>

            </ul>

            <div>
              Please contact <a href="mailto:mking@columbiacorridor.org">Marissa King</a> for related inqueries.
            </div>
          </div>

          <div className="ten wide column">
            <img className="ui image fluid" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481693642/JOIN-Membership_03_hfenov.jpg" style={{ "maxHeight" : "499px" , }}/>
          </div>
        </div>

      </div>
    )
  }
});
