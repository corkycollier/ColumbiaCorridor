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
        <div className="ui grid">

          <div className="eight wide column">
            {
              this.props.parent.state.news.map(function(el) {
                if (el.id == 2 || el.role == "Admin" || el.author == "Corky Collier") {
                  return;
                }

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

          <div className="eight wide column">
            <img className="ui image fluid" src="http://res.cloudinary.com/djjldnjz7/image/upload/w_1400/v1486979985/ibi2c15vjxPDXUIZIigGTZSMHrEwylqOdyMCh3uD7q4_2Cbwtoaojbr44fI-I7EI1fQImjTGEbeXlDQxS6g0_IPeo_fkqhxv.jpg"></img>
          </div>
        </div>



      </div>
    )
  }
});
