const AboutCCA = React.createClass({
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).find('.fluid.image')
      .transition({
        animation  : 'slide left' ,
        duration   : '0.2s'    ,
      });
  },
  render() {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1 style={{ "marginBottom" : "24px" , }}>
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
            <img className="ui fluid transition hidden image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481672281/about-us_twyr2b.jpg" />
          </div>
        </div>
      </div>
    );
  }
});
