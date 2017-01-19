const Board = React.createClass({
  getInitialState () {
    var board = [
      {
        id: 1 ,
        title: "President" ,
        name: "Debbie Dietz Silva" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481674499/CCA_DebbieDS_l6g2ko.jpg" ,
      }
    ]
    return({
      id : this.props.id ,
      board: board
    })
  },

  componentDidMount () {

  },

  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{}}>
        <div className="ui container" style={{ "color" : "#262262" , "padding" : "60px 20px" ,}}>
          <h1>
            Board
          </h1>

          <div className="ui grid stackable centered" style={{ "margin" : "20px" }}>

            {
              this.state.board.map( ( el ) => {
                return (
                  <div className="four wide column">
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
              })
            }

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481675868/Board_BJohnson_ykc5fb.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Bruce Johnson
              </p>
              <p style={{ "textAlign" : "center" }}>
                <i>Vice-President</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481675965/Board_DougW_tzowuk.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Doug White
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Treasurer</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481676008/Board_MHunting_ksd6du.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Melissa Huntin
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Secretary</i>
              </p>
            </div>
          </div>

          <h4>Non-Executive:</h4>
          <div className="ui grid stackable centered" style={{ "margin" : "20px" }}>
            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481681410/ackerman_ctasoa.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Stark Ackerman
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481681475/Board_CCarter_w3gzhb.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Cheryl Carter
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481681535/Board_JohnF_jtkjwk.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                John Foxwell
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://columbiacorridor.com/wp-content/uploads/2016/08/Board_LarryB.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Larry Buckhart
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481681592/Board_LGlancy_zm0hud.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Lice Glancy
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481681649/Board_DOssey_txxs3j.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Don Ossey
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481681693/Board_LTreat_ofpwar.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Leah Treat
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481681767/CCA_JohnF_maqosw.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                John Haralson
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481681815/Board_ReedW_auzthe.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Reed Wagner
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>

            <div className="four wide column">
              <div style={{ "width" : "100%" }} >
                <img className="ui image" src="http://columbiacorridor.com/wp-content/uploads/2016/08/Board_BStacey.jpg" />
              </div>

              <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                Bob Stacey
              </p>

              <p style={{ "textAlign" : "center" }}>
                <i>Director</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
