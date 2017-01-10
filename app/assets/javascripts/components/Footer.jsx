
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

  goToEvent (e) {
    Backbone.history.navigate('event/' + e.currentTarget.dataset.id , { trigger : true });
  },

  goToNews (e) {
    Backbone.history.navigate('news/' + e.currentTarget.dataset.id , { trigger : true });
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

        <div className="ui grid centered stackable" style={{ "background" : "url(http://res.cloudinary.com/djjldnjz7/image/upload/v1481844877/footer_tgdoad.jpg)" , "color" : "#fff" , "minHeight" : "166px" , "marginBottom" : "14px" , "textAlign" : "center" , "marginTop" : "-24px" , "padding" : "55px 80px" }}>
          <div className="five wide column" style = {{ "textAlign" : "center" , "padding" : "0px" }} >
            <h2>Upcoming Events</h2>
            <div style={{ "height" : "150px" , "overflowY" : "scroll" }}>
              {
                this.props.parent.state.events.map(function(el) {
                  return(
                    <div key={"fni" + el.id} data-id={ el.id } onClick={ this.goToEvent } style={{ "marginTop" : "12px" ,}}>
                      {
                        el.title
                      }

                      <div className="ui divider" style={{ "borderBottom" : "1px solid #262262" , "borderTop" : "1px solid #262262" , "width" : "90%", "position" :"relative" , "left" : "5%"}} >
                      </div>
                    </div>
                  )
                }.bind(this))
              }
            </div>
          </div>

          <div className="five wide column"
            style={{
              "borderLeft" : "3px solid #262262" ,
              "borderRight" : "3px solid #262262" ,
            }}>
            <Advertisements parent={ this.props.parent } />
          </div>

          <div className="five wide column" style = {{ "textAlign" : "center" , "padding" : "0px" }} >
            <h2>News Flash</h2>
            <div style={{ "height" : "150px" , "overflowY" : "scroll" }}>
              {
                this.props.parent.state.news.map(function(el) {
                  return(
                    <div key={"fni" + el.id} data-id={ el.id } onClick={ this.goToNews } style={{ "marginTop" : "12px" ,}}>
                      {
                        el.title
                      }

                      <div className="ui divider" style={{ "borderBottom" : "1px solid #262262" , "borderTop" : "1px solid #262262" , "width" : "90%", "position" :"relative" , "left" : "5%"}} >
                      </div>
                    </div>
                  )
                }.bind(this))
              }
            </div>
          </div>
        </div>

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
