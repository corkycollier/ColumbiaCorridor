const Sponsor = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "30px 20px" ,
      "fontSize" : "16px"
    }

    return({
      style: style,
    })
  },


  componentDidMount() {
    $('.ui.container').transition({
        animation  : 'fade in' ,
        duration   : '0.8s'    ,
      });
  },
  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <div className="ui grid doubling stackable">
          <div className="eight wide column">
            <h1 >
              Forum Sponsorships
            </h1>

            <h4>
              Executive Sponsor – $250
            </h4>

            <ul style={{ "color" : "#767373" }}>
              <li>
                Recognition for your company on CCA’s website
              </li>

              <li>
                Recognition by the event emcee
              </li>

              <li>
                Opportunity to display company brochures at the forum
              </li>

              <li>
                Two complimentary tickets to the event ($60-80 value)
              </li>
            </ul>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{paddingLeft: '40px'}}>
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="VJT5DS932BEVL"/>
              <table>
                <tr><td><input type="hidden" name="on0" value="Name of Forum"/>Name of Forum</td></tr>
                <tr><td><input type="text" name="os0" maxlength="200"/></td></tr>
              </table>
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>

            <h4>
              Presenting Sponsor – $1000
            </h4>

            <ul style={{ "color" : "#767373" }}>
              <li>
                Opportunity for banner display at the forum
              </li>

              <li>
                Recognition on CCA’s website with company logo and link
              </li>

              <li>
                Opportunity to introduce keynote speaker and give a brief
                presentation showcasing your company
              </li>

              <li>
                Opportunity to display company brochures at the forum
              </li>

              <li>
                Eight complimentary tickets to the event at the head table
                ($240-$320 value)
              </li>
            </ul>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{paddingLeft: '40px'}}>
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="Z3M69EPCJFN74"/>
              <table>
                <tr><td><input type="hidden" name="on0" value="Name of Forum"/>Name of Forum</td></tr>
                <tr><td><input type="text" name="os0" maxlength="200"/></td></tr>
              </table>
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>

            <h1 >
              Website Sponsorship
            </h1>

            <h4>
              Homepage Sponsor - $1000
            </h4>


            <ul style={{ "color" : "#767373" }}>
              <li>
                One year front page rotating ad for your company on the CCA website
              </li>

              <li>
                Over 400 website visitors per month in web traffic
              </li>

              <li>
                Maximum of 4 rotating ads
              </li>
            </ul>
          </div>

          <div className="eight wide column">
            <h1>
              Golf Tournament Sponsorships
            </h1>

            <p>
              Every September, CCA hosts an annual golf tournament at the Riverside Golf & Country Club to support CCA activities and facilitate corridor business networking. Consider joining us for a beautiful day on the course or sponsoring the tournament at levels from $400 to $1,500.
            </p>

            <img className="ui fluid image" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1493670425/JOIN-Sponsors_03_sodj8w_pafqza.png" />

          </div>

        </div>

        <div>
          <p style={{ "marginTop" : "24px" , "textAlign" : "center"}}>
            Interested in becoming a sponsor? Contact <b>Marissa King</b> at <a href="tel:503.287.8686">(503) 287-8686</a> or <a href="mailto:mking@columbiacorridor.org">mking@columbiacorridor.org</a>.
          </p>
        </div>
      </div>
    )
  }
});
