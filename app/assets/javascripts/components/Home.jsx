const Home = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262"
    }

    var pages = {
      "0" : {
        id : 0 ,
        img : "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748013/Home_2_UPDATED_yt1wgm.jpg" ,
        link : undefined ,
      } ,
      "1" : {
        id : 1 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748066/Home_3_g2nbm4.jpg" ,
        link: undefined ,
      } ,

      "2" : {
        id : 2 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748099/Home_4_UPDATED_ljc6nr.jpg" ,
        link: undefined ,
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
    }.bind(this), 4000)
  },

  flip () {
    $('.ui.image').transition('fade');

    var pageNumber = this.state.currentPage.id ++
    this.setState({
      currentPage : this.state.pages[ pageNumber % 4 ] ,
    });
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <a src={ this.state.currentPage.link } target="_blank">
          <img className="ui image" src={ this.state.currentPage.img } style={{ "width" : "100%" , "maxWidth" : "76vw" }}/>
        </a>
      </div>
    )
  }
});
