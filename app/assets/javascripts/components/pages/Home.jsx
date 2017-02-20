const Home = React.createClass({
  getInitialState () {
    var pages = {
      "0" : {
        id : 0 ,
        img : "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748013/Home_2_UPDATED_yt1wgm.jpg" ,
        link : "event-list" ,
      } ,
      "1" : {
        id : 1 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748066/Home_3_g2nbm4.jpg" ,
        link: "year-in-review" ,
      } ,

      "2" : {
        id : 2 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/w_0.98,c_crop/v1481748099/Home_4_UPDATED_ljc6nr.jpg" ,
        link: "resourcesfull-use" ,
      } ,

      "3" : {
        id : 3 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748119/Home_5_pqm5rz.jpg" ,
        link: "membership" ,
      } ,
    }

    return({

      pages : pages ,
      currentPage : pages["0"] ,
      active : true ,
    })
  },

  componentDidMount () {
    this.initiateFlip();
    $('.blue-footer')
      .transition({
        animation  : 'fade in' ,
        duration   : '0.8s'    ,
      });
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

  flipLeft () {
    var pageNumber = this.state.currentPage.id - 1
    if ( pageNumber < 0 ) pageNumber = 3;
    this.setState({
      currentPage : this.state.pages[ pageNumber ] ,
    });
  },

  flipRight () {
    var pageNumber = this.state.currentPage.id + 1
    if ( pageNumber > 3 ) pageNumber = 0;
    this.setState({
      currentPage : this.state.pages[ pageNumber ] ,
    });
  },


  render () {
    return (
      <div className="blue-footer" style={{"position" : "relative" , "background" : "grey" , }}>

        <div className="ui button circular icon" style={{ "position" : "absolute" , "top" : "30%" , "left" : "16px" , "zIndex" : "200" , "opacity" : "0.6" }} onClick={ this.flipLeft }>
          <i className="left caret icon"></i>
        </div>

        <div className="ui button circular icon" style={{ "position" : "absolute" , "top" : "30%" , "right" : "16px" , "zIndex" : "200" , "opacity" : "0.6" }} onClick={ this.flipRight }>
          <i className="right caret icon"></i>
        </div>

        <div>
          <a href={"#" + this.state.currentPage.link}>
          <img className="ui image centered "src={this.state.currentPage.img} onClick = { this.navigate } style={{
              "minHeight" : "282px" ,
              "width" : "100vw" ,
              "maxWidth" : "1344px" ,
            }}></img>
          </a>
        </div>


        <div className="ui grid centered stackable blue-footer" style={{ "background" : "url(http://res.cloudinary.com/djjldnjz7/image/upload/v1481844877/footer_tgdoad.jpg)" , "color" : "#0a0a7a" , "minHeight" : "24vh" , "textAlign" : "center" , "padding" : "30px 10px" , "position" : "relative" , "top" : "14px"}}>
          <div className="five wide column" style = {{ "textAlign" : "center" , "padding" : "0px" }} >
            <h2><a href="#event-list" style={{ "color" : "#262262" , }}>Upcoming Events</a></h2>
            <div>
              {

                this.props.parent.state.events.slice(0, 3).map(function(el) {
                  return (
                    <div key={"fni" + el.id} style={{ "marginTop" : "12px" ,}}>
                      <a href={"#event/" + el.id} style={{ "color" : "#262262" , }}>
                        {
                          el.title
                        }
                      </a>

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
              "padding" : "14px 18px" ,
            }}>
            <Advertisements parent={ this.props.parent } />
          </div>

          <div className="five wide column" style = {{ "textAlign" : "center" , "padding" : "0px" }} >
            <h2><a href="#cca-news" style={{ "color" : "#262262" , }}>News Flash</a></h2>
            <div >
              {
                this.props.parent.state.news.slice(0, 3).map(function(el) {

                  if (el.author != "Corky Collier") { return ;}

                  return(
                    <div key={"fni" + el.id} style={{ "marginTop" : "12px" ,}}>
                      <a href={"#news/" + el.id} style={{ "color" : "#262262" , }}>
                      {
                        el.title
                      }
                      </a>

                      <div className="ui divider" style={{ "borderBottom" : "1px solid #262262" , "borderTop" : "1px solid #262262" , "width" : "90%", "position" :"relative" , "left" : "5%"}} >
                      </div>
                    </div>
                  )
                }.bind(this))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
});
