const Events = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
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
        <h2>
          Events
        </h2>

        <div className="ui grid doubling stackable">
          <div className="eight wide column">
            <div className="ui segment orange">
              <b>Breakfast Forums</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment violet">
              <b>Lunch w/ Leaders</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment red">
              <b>ResourceFULL Use Workshops</b>
              <p>
                <i>Something here</i>
              </p>
            </div>
          </div>

          <div className="eight wide column">
            <div className="ui segment yellow">
              <b>Special Events</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment brown">
              <b>Tours & Member Exchanges</b>
              <p>
                <i>Something here</i>
              </p>
            </div>
          </div>
        </div>

        <div className="ui clearing divider"></div>
        <h2>
          Upcoming
        </h2>
        {
          this.props.parent.state.events.map((el) => {
            return (
              <div key={ el.id + "e" } style={{ "marginBottom" : "12px" ,}}>
                <h4>
                  {el.title}
                </h4>
                <div>
                  { el.date } - <b> { el.time } </b>
                </div>

                <div>
                  <a href="#">{ el.location }</a>
                </div>

                <p>
                  { el.body }
                </p>
              </div>
            )
          }.bind(this))
        }
        <div className="ui clearing divider"></div>

      </div>
    )
  }
});
