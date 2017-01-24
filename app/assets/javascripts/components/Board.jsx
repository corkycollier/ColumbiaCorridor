const Board = React.createClass({
  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render () {
    return (
      <div className="ui container" style={{}}>
        <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
          <h1>
            Board
          </h1>

          <div className="ui grid stackable centered" style={{ "margin" : "20px" }}>

            {
              this.props.parent.state.board.map( ( el ) => {
                return (
                  <div className="four wide column"
                       data-url={ "/board/" + el.id }
                       onClick={ this.go }
                       key={ "boardId" + el.id }
                       >
                    <div style={{ "width" : "100%" }} >
                      <img className="ui image" src={ el.img } />
                    </div>

                    <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                      { el.name }
                    </p>

                    <p style={{ "textAlign" : "center" }}>
                      <i>{ el.title }</i>
                    </p>
                  </div>
                )
              }.bind(this))
            }

          </div>

          <div className="ui grid stackable centered" style={{ "margin" : "20px" }}>




          </div>
        </div>
      </div>
    )
  }
});
