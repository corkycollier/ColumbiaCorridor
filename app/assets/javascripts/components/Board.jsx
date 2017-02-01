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
                      <img className="ui image board-image" src={ el.img } />
                    </div>

                    <div>
                      <i className="linkify icon" style={{
                          "position" : "absolute" ,
                          "top" : "8%" ,
                          "left" : "7%" ,
                          "fontSize": "41px" ,

                        }}></i>
                    </div>

                    <div style={{ "textAlign" : "center" , "marginTop" : "4px" , "fontWeight" : "bold" }}>
                      { el.name }
                    </div>

                    <p style={{ "textAlign" : "center" }}>
                      <i>{ el.title }</i>
                    </p>
                  </div>
                )
              }.bind(this))
            }

          </div>
        </div>
      </div>
    )
  }
});
