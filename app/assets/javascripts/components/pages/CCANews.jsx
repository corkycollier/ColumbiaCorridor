const CCANews = React.createClass({

  componentDidMount() {
        $('.ui.container').transition({
        animation  : 'fade in' ,
        duration   : '0.8s'    ,
      });

  },
  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1>
          CCA News
        </h1>

        <div className="cca-news" style={{ "marginBottom" : "56px" , "marginTop" : "24px" }}>
          <div className="ui grid doubling stackable">
            <div className="eight wide column" style={{"height" : "62vh" , "overflowY" : "scroll" }}>

              {
                this.props.parent.state.news.map( (el) => {
                  if (el.author != "Corky Collier") { return; }
                  return (
                    <div key={ el.id } >
                      <div style={{"marginBottom" : "2px"}}>
                        <b dangerouslySetInnerHTML={{__html: el.basic_title }}>

                        </b>

                        <span style={{ "marginLeft" : "3px" , "fontSize" : "12px"}}>
                          by { el.author } | { el.created_at.toString().slice(0, 10) }
                        </span>
                      </div>

                      <div style={{"marginTop" : "3px", "marginBottom" : "22px"}}>
                        <a href={"#news/" + el.id } >
                          read more
                        </a>
                      </div>
                    </div>
                  )
                }.bind(this))
              }
            </div>

            <div className="eight wide column">
              <img className="ui image fluid " src="http://res.cloudinary.com/djjldnjz7/image/upload/v1482225183/RESOURCES_NEWS_1_03_k64ssu.jpg" />
            </div>
          </div>

        </div>

        <a href="#" className="ui button left labeled icon mini" style={{ "marginTop" : "18px" , "marginRight" : "12px" }}>
          <i className="left caret icon"></i>
          Home
        </a>
      </div>
    )
  }
});
