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
      <div className="ui container" style={{"minHeight" : "50vh" , "margin" : "60px 0px" }} >
        <h1 className="ui header centered" style={{ "color" : "#262262" ,}}>
          News
        </h1>

        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui padded segment">
              <h2 className="ui header left floated">
                { this.state.title }
              </h2>

              <div className="ui clearing divider"></div>

              <div id="body">

              </div>


              <div style={{ "marginTop" : "12px" , "fontSize" : "12px"}}>
                by { this.state.author } | { this.state.created_at.toString().slice(0, 10) }
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
});
