
const Footer = React.createClass({
  getInitialState () {
    var style = {
      "marginTop" : "24px",
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {

    var addStyler = {
      "height" : "168px" ,
      "background" : "blue" ,
      "position" : "relative" ,
      "bottom" : "20px" ,
    }

    return (
      <div className="" style={this.state.style}>

        <div className="ui grid centered stackable" style={{ "background" : "url(http://res.cloudinary.com/djjldnjz7/image/upload/v1481844877/footer_tgdoad.jpg)" , "color" : "#fff" , "minHeight" : "166px" , "marginBottom" : "14px" , "textAlign" : "center" , "marginTop" : "-24px" }}>
          <div className="five wide column" style = {{ "textAlign" : "center" }} >
            <h2>Upcoming Events</h2>
              CCA’s 30th Annual Meeting: the roads look good and the luncheon is on!
            <div className="ui divider"></div>
              What is holding the Columbia River Back?
          </div>

          <div className="five wide column">
            <Advertisements />
          </div>

          <div className="five wide column" style = {{ "textAlign" : "center" }} >
            <h2>News Flash</h2>
            Updated wellfield regulations in the works
            <div className="ui divider"></div>
            SVP
          </div>
        </div>

        <div className="footer">
          <div className="ui grid centered stackable" style={{ "background" : "#262261" , "color" : "#fff" , "paddingBottom" : "15px" }}>
            <div className="one wide column"></div>

            <div className="five wide column">
              Website Design by LAUNCHPAD
            </div>

            <div className="four wide column">
              www.ColumbiaCorridor.org
            </div>

            <div className="four wide column">
              © 2016 Columbia Corridor Association
            </div>
          </div>
        </div>
      </div>
    )
  }
});
