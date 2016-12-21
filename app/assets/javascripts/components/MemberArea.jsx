const MemberArea = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
      "paddingBottom" : "65px" ,
    }

    return({
      style: style,
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
        <h1>
          Member Area
        </h1>

        <div style={{ "fontSize" : "21px" , "lineHeight" : "29px" }}>
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

        <h2>Member News</h2>

        {
          this.props.parent.state.news.map(function(el) {
            if (el.cca_only) {
              return(
                <div key={ el.id } data-id={ el.id } >
                  <div style={{"marginBottom" : "2px"}}>
                    <b>
                      { el.title }
                    </b>
                  </div>

                  <div>
                    { el.body.slice(0, 328) }
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

        <div className="ui clearing divider"></div>

      </div>
    )
  }
});
