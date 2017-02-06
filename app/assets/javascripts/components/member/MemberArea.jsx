const MemberNews = React.createClass({
  goToNews(e) {
    Backbone.history.navigate("#/news/" + e.currentTarget.dataset.id , {trigger: true})
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
        }}>

        <h1>
          Member News
        </h1>

          {
            this.props.parent.state.news.map(function(el) {
              return(
                <div key={"manews" + el.id } data-id={ el.id } >
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
            }.bind(this))
          }
      </div>
    )
  }
});
