
const CJoin = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "60px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1>
          Membership
        </h1>

        <div className="ui grid doubling stackable">
          <div className="eight wide column" style={{"height":"50vh","overflowY":"scroll"}}>
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
            </ul>

            <h5>
              Please contact <a href="mailto:mking@columbiacorridor.org">Marissa King</a> for related inqueries.
            </h5>
          </div>

          <div className="eight wide column" style={{"height":"50vh","overflowY":"scroll"}}>
            <img className="ui image large" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481693642/JOIN-Membership_03_hfenov.jpg"/>
          </div>
        </div>
      </div>
    )
  }
});
