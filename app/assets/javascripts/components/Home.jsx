const Home = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262"
    }

    var pages = {
      "0" : {
        id : 0 ,
        img : "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748013/Home_2_UPDATED_yt1wgm.jpg" ,
        link : "http://www.columbiacorridor.com/#events" ,
      } ,
      "1" : {
        id : 1 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748066/Home_3_g2nbm4.jpg" ,
        link: "http://columbiacorridor.com/#cca-news/" ,
      } ,

      "2" : {
        id : 2 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748099/Home_4_UPDATED_ljc6nr.jpg" ,
        link: "http://columbiacorridor.com/#resourcefull-use/" ,
      } ,

      "3" : {
        id : 3 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748119/Home_5_pqm5rz.jpg" ,
        link: undefined ,
      } ,
    }

    return({
      style : style ,
      pages : pages ,
      currentPage : pages["0"] ,

    })
  },

  componentDidMount () {
    this.initiateFlip();
  },

  initiateFlip() {
    setInterval(function () {
      this.flip();
    }.bind(this), 7400)
  },

  flip () {
    $('.ui.image').transition('pulse');

    setTimeout( function () {
      var pageNumber = this.state.currentPage.id + 1
      if ( pageNumber > 3 ) pageNumber = 0;
      this.setState({
        currentPage : this.state.pages[ pageNumber ] ,
      });
    }.bind(this) , 285)
  },

  navigate () {
    var win = window.open( this.state.currentPage.link , '_blank' );
  },

  render () {
    return (
      <div className="" style={ this.state.style }>
        <img className="ui image"
             src={ this.state.currentPage.img }
             style={{ "width" : "100%" , "minHeight" : "325px" , "height" : "auto" }}
             onClick = { this.navigate }
           />
      </div>
    )
  }
});
