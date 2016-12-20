const News = React.createClass({
  getInitialState () {
    var title;
    var body;

    this.props.parent.state.news.forEach((el) => {
      if ( el.id == this.props.id ) {
        title = el.title;
        body = el.body;
      }
    })

    return({
      title : title ,
      body : body ,
    })
  },

  componentDidMount () {
  },

  render () {
    return (
      <div className="ui container" style={ this.state.style } >
        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui padded segment" style={{"margin" : "60px 0px"}}>
              <h2 className="ui header left floated">
                { this.state.title }
              </h2>

              <div className="ui clearing divider"></div>

              <div>
                { this.state.body }
              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }
});
