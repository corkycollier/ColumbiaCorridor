const News = React.createClass({
  getInitialState () {

    var news;

    this.props.parent.state.news.forEach((el) => {
      if ( el.id == this.props.id ) {
        news = el;
      }
    })

    return( news );
  },

  componentDidMount () {
    $('#body').html(this.state.body)
  },

  render () {
    return (
      <div className="ui container" style={{"minHeight" : "50vh" , "margin" : "30px 20px" }} >

        <div className="ui grid centered">
          <div className="twelve wide column">
              <h2 className="ui header">
                { this.state.title }
              </h2>

              <div className="ui clearing divider"></div>

              <div id="body">
              </div>


              <div className="ui clearing divider"></div>
              

              <div style={{ "marginTop" : "12px" , "fontSize" : "12px"}}>
                by { this.state.author } | { this.state.created_at.toString().slice(0, 10) }
              </div>
          </div>
        </div>
      </div>
    )
  }
});
