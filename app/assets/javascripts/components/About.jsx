const AboutCCA = React.createClass({
  render() {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1>
          About CCA
        </h1>

        <div className="ui grid doubling stackable" style={{ "margin" : "20px 0px" }}>
          <div className="eight wide column" style={{ "fontSize" : "16px" , "position" : "relative" , "left" : "-16px"}}>
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
    );
  }
});

const ColumbiaCorridor = React.createClass({
  render() {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1>
          Columbia Corridor Facts
        </h1>

        <div className="ui grid doubling stackable" style={{ "margin" : "20px"}}>
          <div className="eight wide column" style={{ "fontSize" : "16px" , "position" : "relative" , "left" : "-32px" }}>
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

          <div className="eight wide column">
            <img className="ui large image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481672346/Fact-1_zotnph.jpg" />
          </div>
        </div>
      </div>
    );
  }
});

const Staff = React.createClass({

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render() {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1>
          Staff
        </h1>

        <div className="ui grid stackable" style={{ "margin" : "20px" }}>
          <div className="eight wide column" style={{ "fontSize" : "18px", "position" : "relative" , "left" : "-32px"  }}>
            <p>
              Even our longtime members are surprised at how small the CCA office is. There’s not a lot of staff, but we manage to get a lot done. It’s another way you get value for your membership.
            </p>

            <p>
              In addition to Corky and Marissa, there’s often an intern working on one of our current projects. Feel free to drop by our office in the Corridor. But it’s smart to call first…we’re often out of the office assisting our members.
            </p>
          </div>

          <div className="four wide column" data-url="staff/1" onClick={ this.go }>
            <img className="ui fluid image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481673214/Staff_Corky-e1474958983360_h6iyzp.jpg" />
            <p style={{ "textAlign" : "center" , "marginTop" : "12px" }}>
              <b>Executive Director</b> - Corky Collier
              </p>
            </div>
            <div className="four wide column" data-url="staff/2" onClick={ this.go }>
              <img className="ui fluid image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481673230/Staff_Marissa-e1474957970362_mz1vh0.jpg" />
              <p style={{ "textAlign" : "center" , "marginTop" : "12px" }}>
                <b>Office Manger</b> - Marissa King
                </p>
              </div>
            </div>
          </div>
        );
      }
    });
