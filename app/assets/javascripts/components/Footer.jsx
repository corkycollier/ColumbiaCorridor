
const CFoot = React.createClass({
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

        <div className="ui grid centered stackable" style={{ "background" : "url(http://res.cloudinary.com/djjldnjz7/image/upload/v1481844877/footer_tgdoad.jpg)" , "color" : "#fff" , "height" : "166px" , "marginBottom" : "25px" , "textAlign" : "center" }}>
          <div className="five wide column" style = {{ "textAlign" : "center" }} >
            <h2>Upcoming Events</h2>
            1
            <div className="ui divider"></div>
            2
          </div>

          <div className="five wide column">
            <Advertisements />
          </div>

          <div className="five wide column" style = {{ "textAlign" : "center" }} >
            <h2>NEWS FLASH</h2>
            1
            <div className="ui divider"></div>
            2
          </div>
        </div>

        <div className="footer">
          <div className="ui grid centered stackable" style={{ "background" : "#262261" , "color" : "#fff" , "paddingBottom" : "25px" }}>
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



const Advertisements = React.createClass({
  getInitialState () {
    var style = {

    }

    var slides = {
      "0" : {
        id : 0 ,
        img : "http://res.cloudinary.com/djjldnjz7/image/upload/v1481847922/NWN_Blue_mycsww.jpg" ,
        link : "http://www.columbiacorridor.com/#events" ,
      } ,
      "1" : {
        id : 1 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481847927/Mackenzie_qihnbq.jpg" ,
        link: "http://columbiacorridor.com/#cca-news/" ,
      } ,

      "2" : {
        id : 2 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481847931/Greg_Ad_CCA_11_o3p9sd.psd" ,
        link: "http://columbiacorridor.com/#resourcefull-use/" ,
      } ,

      "3" : {
        id : 3 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481847935/CCA_Ad_Ossey_Team_v3_qtanj2.jpg" ,
        link: "http://www.industrialportland.com/" ,
      } ,
    }

    return({
      style: style,
      slides: slides,
      currentPage : slides["0"] ,
    })
  },

  componentDidMount () {
    this.initiateFlip();
  },

  navigate () {
    var win = window.open( this.state.currentPage.link , '_blank' );
  },


  initiateFlip() {
    var interval = setInterval(function () {
      this.flip();
    }.bind(this), 4400)
  },

  flip () {
    var pageNumber = this.state.currentPage.id + 1
    if ( pageNumber > 3 ) pageNumber = 0;
    this.setState({
      currentPage : this.state.slides[ pageNumber ] ,
    });
  },


  render () {
    return (
      <div className="" style={this.state.style}>
        <img className="ui image add"
          src={ this.state.currentPage.img }
          style={{ "width" : "100%" , "minHeight" : "140px" , "height" : "auto" }}
          onClick = { this.navigate }
          />
      </div>
    )
  }
});
