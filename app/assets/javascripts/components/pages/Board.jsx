const Board = React.createClass({

  componentDidMount() {
    $('.ui.container').transition({
      animation  : 'fade in' ,
      duration   : '0.8s'    ,
    });

    $(ReactDOM.findDOMNode(this)).find('.linkify.icon')
    .transition({
      animation  : 'fade in' ,
      duration   : '2s'    ,
    });
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render () {

    return (
      <div>
        <div className="ui container" style={{
            "color" : "#262262" ,
            "padding" : "30px 20px",
            "minHeight" : "74vh" ,
          }}>
          <h1>
            Board
          </h1>

          <div className="ui grid stackable centered" style={{ "margin" : "20px" }}>

            {
              this.props.parent.state.board.map( ( el ) => {
                return (
                  <div className="four wide column"
                    key={ "boardId" + el.id }
                    style={{ "zIndex" : "10" }}
                    >
                    <a href={"#board/" + el.id} style={{ "color" : "#262262" , }}>
                      <img className="ui image fluid board-image" src={ el.img } />

                      <div style={{ "textAlign" : "center" , "marginTop" : "4px" , "fontWeight" : "bold" }}>
                        { el.name }
                      </div>

                      <p style={{ "textAlign" : "center" }}>
                        <i>{ el.title }</i>
                      </p>
                    </a>


                    <i className="linkify icon" style={{
                        "position" : "absolute" ,
                        "top" : "8%" ,
                        "left" : "7%" ,
                        "fontSize": "41px" ,

                      }}></i>

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
