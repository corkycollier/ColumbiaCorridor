const AboutCCA = React.createClass({
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).find('.ui.container').transition({
        animation  : 'fade in' ,
        duration   : '0.8s'    ,
      });
  },


  render() {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
          "minHeight" : "74vh" ,
        }}>


        <h1 style={{ "marginBottom" : "24px" , }}>
          About CCA
        </h1>

        <div className="ui grid doubling stackable" style={{ "margin" : "20px 0px" }}>
          <div className="eight wide column" style={{ "fontSize" : "16px" , "position" : "relative" , "left" : "-16px"}}>
            <p>
              The Columbia Corridor is the single largest economic corridor in Oregon, stretching from the Willamette River in the west to the Sandy River in the east. It’s the largest industrial area in the state, with 2,500 businesses employing 65,000 people with more middle wage jobs than anywhere else in the state. 40% of those employees live within five miles of work.
            </p>

            <br/>

            <div className='ui grid centered'>
              <a href="https://www.guidestar.org/profile/93-0930033" target="_blank">
                <img src="https://widgets.guidestar.org/gximage2?o=8389378&l=v4" />
              </a>
            </div>

            <br/>

            <p>
              The Columbia Corridor is a dynamic mix of manufacturing, transportation, export facilities and even a few small neighborhoods. Our members include the Oregon Humane Society (located in the Corridor for the past century), the Oregon Food Bank and Mt. Hood Community College. A full third of the Columbia Corridor is open space. The Columbia Slough runs 18 miles down the middle of the Corridor, from Fairview and Blue Lakes to Kelly Point Park. We’re home to Smith & Bybee Lakes, Vanport Wetlands, west Hayden Island, and Delta Park.
            </p>

            <p>
              The Columbia Corridor Association is a 501(c)6 non-profit business association established in 1986, committed to promoting and enhancing the viability of the Corridor, benefiting our members and the local community, and assisting in the design and implementation of regulations.
            </p>

          </div>

          <div className="eight wide column">
            <img className="ui fluid image" src="https://res.cloudinary.com/dtizwr3wv/image/upload/v1493670259/about-us_twyr2b_ibofiu.jpg" />
          </div>
        </div>
      </div>
    );
  }
});
