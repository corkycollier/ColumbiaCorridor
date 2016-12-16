

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
