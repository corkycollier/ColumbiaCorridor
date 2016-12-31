const MemberArea = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
      "paddingBottom" : "65px" ,
    }

    var admin;

    if (this.props.parent.state.user.id == 2 || this.props.parent.state.user.level == "Admin") {
      admin = <Admin parent={this.props.parent} />
    }

    return({
      style: style,
      admin: admin
    })
  },

  componentDidMount () {

  },

  goToNews(e) {
    Backbone.history.navigate("#/news/" + e.currentTarget.dataset.id , {trigger: true})
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1 style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          Member Area
        </h1>

        <div style={{ "fontSize" : "19px" , "lineHeight" : "29px" }}>
          <div>
            <a href="#/directory">Directory</a>
          </div>

          <div>
            <a href="#/edit-profile">
              Edit Profile
            </a>
          </div>

          <div>
            <a href="#/make-news">
              Create News
            </a>
          </div>
        </div>

        <div className="ui clearing divider"></div>

        <div style={{"paddingTop" : "11px" , "paddingBottom" : "21px" }}>
            <h2>Member News</h2>
            <div  style={{ "height" : "50vh" , "overflowY" : "scroll" , "padding" : "2px" }} >
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


          <div className="ui clearing divider"></div>

          <Archives />
        </div>
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
