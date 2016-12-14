const Home = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262"
    }

    return({
      style: style,
    })
  },

  componentDidMount () {
    $('.ui.shape').shape()
    this.flip();
  },

  flip () {
    setTimeout(function() {
      this.flip();
      $('.ui.shape').shape('flip over');
    }.bind(this), 5000);
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="ui people shape">
          <div className="sides">
            <div className="side active">
              <img className="ui image small" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481748013/Home_2_UPDATED_yt1wgm.jpg" style={{ "width" : "100%" , "maxWidth" : "76vw" }}/>
            </div>

            <div className="side">
              <img className="ui image small" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481748066/Home_3_g2nbm4.jpg" style={{ "width" : "100%" , "maxWidth" : "76vw" }}/>
            </div>

            <div className="side">
              <img className="ui image small" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481748099/Home_4_UPDATED_ljc6nr.jpg" style={{ "width" : "100%" , "maxWidth" : "76vw" }}/>
            </div>

            <div className="side">
              <img className="ui image small" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481748119/Home_5_pqm5rz.jpg" style={{ "width" : "100%" , "maxWidth" : "76vw" }}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
