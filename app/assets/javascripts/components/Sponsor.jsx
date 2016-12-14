const CSponsor = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262"
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="" style={this.state.style}>


        <div className="ui grid doubling stackable">
          <div className="eight wide column">
            <h1>
              FORUM SPONSORSHIPS
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
          </div>

          <div className="eight wide column">
            <h1>
              GOLF TOURNAMENT SPONSORSHIPS
            </h1>

            <p>
              <b>Every September, CCA hosts an annual golf tournament at the Riverside Golf & Country Club to support CCA activities and facilitate corridor business networking. Consider joining us for a beautiful day on the course or sponsoring the tournament at levels from $400 to $1,500.</b>
            </p>

            <img className="ui large image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481700569/JOIN-Sponsors_03_sodj8w.png" />

            <p style={{ "marginTop" : "24px" }}>
              <b>Sign up for golf sponsorships by contacting Marissa King at 503.287.8686 or mking@columbiacorridor.org.</b>
            </p>
          </div>
        </div>
      </div>
    )
  }
});
