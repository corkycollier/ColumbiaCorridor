const MemberNews = React.createClass({

  componentDidMount() {
    $('.ui.container').transition({
      animation  : 'fade in' ,
      duration   : '0.8s'    ,
    });
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "minHeight" : "74vh" ,
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
                  <MemberNewsRow  key={"manews" + el.id }  news={el} />
                )
              }.bind(this))
            }
          </div>

          <div className="eight wide column">
            <img className="ui image fluid" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1493670381/ibi2c15vjxPDXUIZIigGTZSMHrEwylqOdyMCh3uD7q4_2Cbwtoaojbr44fI-I7EI1fQImjTGEbeXlDQxS6g0_IPeo_fkqhxv_mbun7r.jpg"></img>
          </div>
        </div>
      </div>
    )
  }
});

const MemberNewsRow = React.createClass({

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).find('#title').html(this.props.news.basic_title)
  },

  goToNews(e) {
    Backbone.history.navigate("#news/" + e.currentTarget.dataset.id , {trigger: true})
  },

  render () {
    return (
      <div>
        <div style={{"marginBottom" : "2px"}}>
          <b data-id={ this.props.news.id } onClick={this.goToNews}>
            <div id="title">
            </div>
          </b>

          <span style={{ "fontSize" : "12px"}}>
            by { this.props.news.author } | { this.props.news.created_at.toString().slice(0, 10) }
          </span>
        </div>

        <div style={{"marginTop" : "3px", "marginBottom" : "22px"}}>
          <a href={"#news/" + this.props.news.id } >
            read more...
          </a>
        </div>
      </div>
    )
  }
});
