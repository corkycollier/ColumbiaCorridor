const Home = React.createClass({
  componentDidMount () {
    this.fadeIn();
  },

  fadeIn () {
    $(ReactDOM.findDOMNode(this)).find('.ui-container-home').transition({
      animation  : 'fade in' ,
      duration   : '0.8s'    ,
    });
  },

  render () {
    return (
      <div className="ui-container-home">
        <HomeWheel parent={ this.props.parent }/>
        <BlueFooter parent={ this.props.parent }/>
      </div>
    );
  }
});

const HomeWheel = React.createClass({
  getInitialState () {
    var pages = {
      "0" : {
        id : 0 ,
        img : "/public/img/Home_2_UPDATED_yt1wgm.jpg" ,
        link : "event-list" ,
      } ,
      "1" : {
        id : 1 ,
        img: "/public/img/Home_3_g2nbm4.jpg" ,
        link: "year-in-review" ,
      } ,

      "2" : {
        id : 2 ,
        img: "/public/img/Home_4_UPDATED_ljc6nr.jpg" ,
        link: "resourcesfull-use" ,
      } ,

      "3" : {
        id : 3 ,
        img: "/public/img/Home_5_pqm5rz.jpg" ,
        link: "membership" ,
      } ,
    };

    return({
      pages : pages ,
      currentPage : pages["0"] ,
    });
  },

  componentDidMount() {
    var interval = setInterval(this.flip, 6000);
    this.setState({interval: interval});
  },

  flip () {
    var pageNumber = this.state.currentPage.id + 1;
    if ( pageNumber > 3 ) pageNumber = 0;

    $('.home-image').transition({
      animation  : 'fade in',
      duration   : '1s',
    });

    this.setState({
      currentPage : this.state.pages[ pageNumber ] ,
    });
  },

  componentWillUnmount () {
    clearInterval(this.state.interval);
  },

  navigate () {
    Backbone.history.navigate(this.state.currentPage.link, { trigger: true });
  },

  flipLeft () {
    var pageNumber = this.state.currentPage.id - 1;
    if ( pageNumber < 0 ) pageNumber = 3;
    this.setState({
      currentPage : this.state.pages[ pageNumber ] ,
    });
  },

  flipRight () {
    var pageNumber = this.state.currentPage.id + 1;
    if ( pageNumber > 3 ) pageNumber = 0;
    this.setState({
      currentPage : this.state.pages[ pageNumber ] ,
    });
  },

  render () {
    return (
      <div style={{"position" : "relative"}}>

        <div className="ui large button circular icon home-slider-btn left"
             onClick={ this.flipLeft }>
          <i className="left chevron icon"></i>
        </div>

        <div className="ui large button circular icon home-slider-btn right"
             onClick={ this.flipRight }>
          <i className="right chevron icon"></i>
        </div>

        <div className="home-hero-slider">
          <a href={"#" + this.state.currentPage.link}>
            <img className="ui image centered home-image" src={this.state.currentPage.img} onClick = { this.navigate } ></img>
            </a>
          </div>
        </div>
      );
    }
  });

  const BlueFooter = React.createClass({


    updateState(e) {
      var state = this.state;
      state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
      this.setState( state );
    },

    render () {
      return (

        <div className="ui grid centered" style={{
            "background" : "url(/public/img/footer_tgdoad.jpg)" ,
            "color" : "#0a0a7a" ,
            "textAlign" : "center" ,
            "padding" : "15px 0px" ,
            "paddingTop" : "19px" ,
            "position" : "relative" ,
            "top" : "14px" ,
            "margin" : "-14px 0px" ,
          }}>

          <div className="five wide column" style = {{ "textAlign" : "center" , "padding" : "0px" }} >
            <h1>
              <a href="#event-list" style={{
                  "fontWeight" : "bold" ,
                  "color" : "#fff" ,
                  "letterSpacing" : "1px" ,
                }}>
                Upcoming Events
              </a>
            </h1>
            <div>

              {
                this.props.parent.state.upcoming_events.slice(0, 3).map(function(el) {
                  return (
                    <div key={"fni" + el.id} style={{ "margin" : "25px" ,}}>
                      <a href={"#event/" + el.id} style={{
                          "color" : "#fff" ,
                          "fontSize" : "18px" ,
                        }}>
                        { el.basic_title }
                      </a>
                    </div>
                  );
                }.bind(this))
              }

            </div>
          </div>

          <div className="five wide column"
            style={{
              "padding" : "14px 18px" ,
            }}>
            <Advertisements parent={ this.props.parent } />
          </div>

          <div className="five wide column" style = {{ "textAlign" : "center" , "padding" : "0px" }} >
            <h1><a href="#cca-news" style={{
                "fontWeight" : "bold" ,
                "color" : "#fff" ,
                "letterSpacing" : "1px" ,
              }}>News Flash</a></h1>
              <div>
                {
                  this.props.parent.state.news.slice(0, 3).map(function(el) {

                    if (el.author != "Corky Collier" && el.author != "Samuel Ullman") { return ;}

                    return(
                      <div key={"fni" + el.id} style={{ "margin" : "25px" ,}}>
                        <a href={"#news/" + el.id} style={{
                            "color" : "#fff" ,
                            "fontSize" : "18px" ,
                          }} >
                          { el.basic_title}
                        </a>


                      </div>
                    );
                  }.bind(this))
                }
              </div>
            </div>
          </div>
        );
      }
    });
