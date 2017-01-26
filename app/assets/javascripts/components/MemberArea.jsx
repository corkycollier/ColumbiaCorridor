const MemberArea = React.createClass({
  goToNews(e) {
    Backbone.history.navigate("#/news/" + e.currentTarget.dataset.id , {trigger: true})
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
        }}>
        <h1 >
          Member Area
        </h1>

        <div className="ui buttons fluid" style={{ "margin" : "4px 0px" , }}>
          <div className="ui button" data-url="directory" onClick={ this.go }>
            Directory
          </div>

          <div className="ui button" data-url="make-news" onClick={ this.go }>
            Create News
          </div>

          <div className="ui button" data-url="edit-profile" onClick={ this.go }>
            Edit Profile
          </div>
        </div>


        <div style={{"paddingTop" : "11px" , "paddingBottom" : "21px" }}>
          <h2>Member News</h2>
          <div style={{ "height" : "50vh" , "overflowY" : "scroll" , "padding" : "2px" }} >
            {
              this.props.parent.state.news.map(function(el) {

                if (true) {
                  return(
                    <div key={ el.id } data-id={ el.id } >
                      <div style={{"marginBottom" : "2px"}}>
                        <b>
                          { el.title }
                        </b>

                        <span style={{ "marginLeft" : "3px" , "fontSize" : "12px"}}>
                          by { el.author } | { el.created_at.toString().slice(0, 10) }
                        </span>
                      </div>

                      <div style={{"marginTop" : "3px", "marginBottom" : "22px"}}>
                        <a data-id={ el.id } onClick={ this.goToNews } >
                          read more
                        </a>
                      </div>

                    </div>
                  )
                }
              }.bind(this))
            }
          </div>
        </div>

        <div className="ui clearing divider" style={{ "margin" : "48px" ,}}></div>

        <Archives />
      </div>
    )
  }
});




const Archives = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
    }

    var archives = [
      {
        title: "2015 Real Estate Trends" ,
        href: "2015 Real Estate Trends.pdf" ,
        desc: "Lorem impsum." ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "2016 Real Estate Trends" ,
        href: "2016 Real Estate Trends.pdf" ,
        desc: "Lorem impsum." ,
        icon: "pdf file outline " ,
      } ,

    ]

    return({
      style: style,
      archives: archives,
    })
  },

  componentDidMount () {

  },


  render () {
    return (
      <div className="" style={this.state.style}>

        <h2>
          Archives
        </h2>
        <div  style={{ "height" : "50vh" , "overflowY" : "scroll" }}>
          <div className="ui cards" style={{ "padding" : "2px" }}>

            {
              this.state.archives.map(function(el) {
                return (
                  <div className="card" key={ el.title }>
                    <i className={el.icon + "icon"} style={{ "position" : "absolute" , "fontSize" : "33px" , "left" : "12px" , "top" : "23px" , "color" : "grey" }}></i>
                    <div className="content" style={{"paddingLeft" : "66px"}}>
                      <div className="header">
                        <a href={ el.href } target="_blank">
                          { el.title }
                        </a>
                      </div>
                      <div className="description">
                        { el.desc }
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
});
