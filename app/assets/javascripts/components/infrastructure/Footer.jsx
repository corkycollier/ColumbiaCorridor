
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

    return (
      <div className="" style={this.state.style}>


        <div className="footer">
          <div className="ui grid centered stackable" style={{ "background" : "#262261" , "color" : "#fff" , "paddingBottom" : "15px" , "padding" : "18px" }}>
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