const CAboutUs = React.createClass({
  getInitialState () {
    var style = {
      color:"#262262"
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <div className="about-us">
          <h1 style={{ "marginBottom" : "24px" }}>
            About Us
          </h1>

          <div className="ui grid doubling stackable" style={{ "margin" : "20px" }}>
            <div className="eight wide column" style={{ "fontSize" : "18px" , "height" : "50vh"  , "overflowY" : "scroll" }}>
              <p>
                The Columbia Corridor is the single largest economic corridor in Oregon, stretching from the Willamette River in the west to the Sandy River in the east. It’s the largest industrial area in the state, with 2,500 businesses employing 65,000 people with more middle wage jobs than anywhere else in the state. 40% of those employees live within five miles of work.
              </p>

              <p>
                The Columbia Corridor is a dynamic mix of manufacturing, transportation, export facilities and even a few small neighborhoods. Our members include the Oregon Humane Society (located in the Corridor for the past century), the Oregon Food Bank and Multnomah Community College. A full third of the Columbia Corridor is open space. The Columbia Slough runs 18 miles down the middle of the Corridor, from Fairview and Blue Lakes to Kelly Point Park. We’re home to Smith & Bybee Lakes, Vanport Wetlands, west Hayden Island, and Delta Park.
              </p>

              <p>
                The Columbia Corridor Association is a 501(c)6 non-profit business association established in 1986, committed to promoting and enhancing the viability of the Corridor, benefiting our members and the local community, and assisting in the design and implementation of regulations.
              </p>

            </div>

            <div className="eight wide column">
              <img className="ui large image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481672281/about-us_twyr2b.jpg" />
            </div>
          </div>
        </div>

        <div className="ui divider" style={{ "marginTop" : "68px" }}/>

        <div className="columbia-coridor-facts" style={{ "marginTop" : "60px"}} >
          <h1 >
            Columbia Corridor Facts
          </h1>

          <div className="ui grid doubling stackable" style={{ "margin" : "20px"}}>
            <div className="eight wide column">
              <img className="ui large image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481672346/Fact-1_zotnph.jpg" />
            </div>

            <div className="eight wide column" style={{ "fontSize" : "19px" , "height" : "50vh" , "overflowY" : "scroll" }}>
              <p>
                In 1989, the Portland City Council recognized the uniqueness of the Columbia Corridor as a location for new industry and jobs and designated it an <b>industrial sanctuary</b>.
              </p>

              <p>
                The Columbia Corridor is the single largest industrial area in the state of Oregon.-It covers 22,600 acres or <b>28 square miles</b>. The Corridor stretches over 18 miles along the Columbia River from the Rivergate Industrial District on the Willamette River to the Troutdale Industrial District on the Sandy River and north of Columbia Boulevard/Sandy Boulevard and I-84. And a slough runs through it.
              </p>

              <p>
                The Columbia Corridor boasts <b>comprehensive intermodal transportation</b>: air (both passenger and cargo), marine, pipeline, rail (passenger and freight), freeway, transit (light rail and bus), and bike.
              </p>

              <p>
                Portland International Airport, at the heart of the Corridor, serves 17 million passengers and over 250,000 tons of air cargo. They’re consistently rated as <b>one of the best airports in the county</b>. Troutdale Industrial Airport also operates in the Corridor.
              </p>

              <p>
                The Columbia River is the Corridor’s 40-foot-deep, 600-foot-wide marine shipping channel to the Pacific Ocean. Five marine terminals support regional shipping imports and exports. The Columbia River is <b>the #1 wheat export gateway</b> in the United States.
              </p>
            </div>
          </div>

        </div>

        <div className="ui divider" style={{ "marginTop" : "68px" }}/>

        <div className="staff">
          <h1 style={{ "marginTop" : "60px"}} >
            Staff
          </h1>

          <div className="ui grid doubling stackable" style={{ "margin" : "20px" }}>
            <div className="eight wide column" style={{ "fontSize" : "19px" }}>
              <p>
                Even our longtime members are surprised at how small the CCA office is. There’s not a lot of staff, but we manage to get a lot done. It’s another way you get value for your membership.
              </p>

              <p>
                In addition to Corky and Marissa, there’s often an intern working on one of our current projects. Feel free to drop by our office in the Corridor. But it’s smart to call first…we’re often out of the office assisting our members.
              </p>

            </div>

            <div className="eight wide column" >
              <div style={{"width":"60%","padding":"12px"}}>
                <img className="ui fluid image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481673214/Staff_Corky-e1474958983360_h6iyzp.jpg" />
                <p style={{ "textAlign" : "center" }}>
                  <b>Executive Director</b> - Corky Collier
                  </p>
                </div>

                <div style={{"width":"60%","padding":"12px"}}>
                  <img className="ui fluid image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481673230/Staff_Marissa-e1474957970362_mz1vh0.jpg" />
                  <p style={{ "textAlign" : "center" }}>
                    <b>Office Manger</b> - Marissa King
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ui divider" />

            <div className="board">


              <h1 style={{ "marginTop" : "60px"}} >
                Board
              </h1>

              <h4>Executive:</h4>
              <div className="ui grid stackable centered" style={{ "margin" : "20px" }}>
                <div className="four wide column">
                  <div style={{ "width" : "100%" }} >
                    <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481674499/CCA_DebbieDS_l6g2ko.jpg" />
                  </div>
                  <p style={{ "textAlign" : "center" , "fontWeight" : "bold" , "marginTop" : "4px" }}>
                    Debbie Dietz Silva
                  </p>

                  <p style={{ "textAlign" : "center" }}>
                    <i>President</i>
                  </p>
                </div>

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
