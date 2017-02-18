const Home = React.createClass({
  getInitialState () {


    var pages = {
      "0" : {
        id : 0 ,
        img : "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748013/Home_2_UPDATED_yt1wgm.jpg" ,
        link : "events" ,
      } ,
      "1" : {
        id : 1 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748066/Home_3_g2nbm4.jpg" ,
        link: "year-in-review" ,
      } ,

      "2" : {
        id : 2 ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481748099/Home_4_UPDATED_ljc6nr.jpg" ,
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
  },

  goToEvent (e) {
    Backbone.history.navigate('event/' + e.currentTarget.dataset.id , { trigger : true });
  },

  goToNews (e) {
    Backbone.history.navigate('news/' + e.currentTarget.dataset.id , { trigger : true });
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
      <div className="" style={{ "background" : "grey" , }}>

        <div className="ui button circular icon" style={{ "position" : "absolute" , "bottom" : "52%" , "left" : "16px" , "zIndex" : "200" , "opacity" : "0.6" }} onClick={ this.flipLeft }>
          <i className="left caret icon"></i>
        </div>

        <div className="ui button circular icon" style={{ "position" : "absolute" , "bottom" : "52%" , "right" : "16px" , "zIndex" : "200" , "opacity" : "0.6" }} onClick={ this.flipRight }>
          <i className="right caret icon"></i>
        </div>

        <div style={{
            "background" : "url(" + this.state.currentPage.img + ")" ,
            "backgroundSize" : "cover" ,
            "width" : "100vw" ,
            "height" : "57vh"
          }}
          onClick = { this.navigate }
          >
        </div>


        <div className="ui grid centered stackable" style={{ "background" : "url(http://res.cloudinary.com/djjldnjz7/image/upload/v1481844877/footer_tgdoad.jpg)" , "color" : "#0a0a7a" , "minHeight" : "24vh" , "textAlign" : "center" , "padding" : "44px 10px" , "position" : "relative" , "top" : "14px"}}>
          <div className="five wide column" style = {{ "textAlign" : "center" , "padding" : "0px" }} >
            <h2><a href="#events" style={{ "color" : "#262262" , }}>Upcoming Events</a></h2>
            <div>
              {

                this.props.parent.state.events.slice(0, 3).map(function(el) {
                  return (
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
      </div>
    )
  }
});
