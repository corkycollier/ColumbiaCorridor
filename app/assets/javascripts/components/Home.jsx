const Home = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262"
    }

    var pages = {
      "0" : {
        id : 0 ,
        img : "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748013/Home_2_UPDATED_yt1wgm.jpg" ,
        link : "events" ,
      } ,
      "1" : {
        id : 1 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748066/Home_3_g2nbm4.jpg" ,
        link: "resources" ,
      } ,

      "2" : {
        id : 2 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748099/Home_4_UPDATED_ljc6nr.jpg" ,
        link: "resources" ,
      } ,

      "3" : {
        id : 3 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748119/Home_5_pqm5rz.jpg" ,
        link: "contact" ,
      } ,
    }

    return({
      style : style ,
      pages : pages ,
      currentPage : pages["0"] ,
      active : true ,
    })
  },

  componentDidMount () {
    this.initiateFlip();
  },

  initiateFlip() {
    var interval = setInterval(function () {
      this.flip();
    }.bind(this), 7400)
  },

  flip () {
    if (!this.state.active) { return; }
    var pageNumber = this.state.currentPage.id + 1
    if ( pageNumber > 3 ) pageNumber = 0;
    this.setState({
      currentPage : this.state.pages[ pageNumber ] ,
    });
  },

  navigate () {
    Backbone.history.navigate(this.state.currentPage.link, { trigger: true })
  },

  render () {
    return (
      <div className="" style={ this.state.style } >
        <img className="ui image home"
             src={ this.state.currentPage.img }
             style={{ "width" : "100%" , "minHeight" : "325px" , "height" : "auto" }}
             onClick = { this.navigate }
           />
      </div>
    )
  }
});
