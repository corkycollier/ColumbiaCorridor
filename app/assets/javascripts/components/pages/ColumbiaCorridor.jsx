
const ColumbiaCorridor = React.createClass({
  componentDidMount() {
    $('.fluid.image')
      .transition({
        animation  : 'slide left' ,
        duration   : '0.2s'    ,
      });
  },

  render() {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1 style={{ "marginBottom" : "24px" , }}>
          Columbia Corridor Facts
        </h1>

        <div className="ui grid">
          <div className="five wide column" style={{ "fontSize" : "18px" }}>
            <p>
              In 1989, the Portland City Council recognized the uniqueness of the Columbia Corridor as a location for new industry and jobs and designated it an <b>industrial sanctuary</b>.
            </p>

            <p>
              The Columbia Corridor is the single largest industrial area in the state of Oregon.-It covers 22,600 acres or <b>28 square miles</b>. The Corridor stretches over 18 miles along the Columbia River from the Rivergate Industrial District on the Willamette River to the Troutdale Industrial District on the Sandy River and north of Columbia Boulevard/Sandy Boulevard and I-84. And a slough runs through it.
            </p>

            <p>
              The Columbia Corridor boasts <b>comprehensive intermodal transportation</b>: air (both passenger and cargo), marine, pipeline, rail (passenger and freight), freeway, transit (light rail and bus), and bike.
            </p>
          </div>

          <div className="eleven wide column">
            <img className="ui image fluid transition hidden" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1487036435/ColumbiaCorridorMap_v99rsf.jpg" />
            <div>
              <h2 style={{ "textAlign" : "center" , "marginTop" : "12px"}}>
              <i><u>Columbia Corridor Map</u></i>
              </h2>
            </div>
          </div>

          <div className="sixteen wide column" style={{ "fontSize" : "18px" }}>
            <p>
              Portland International Airport, at the heart of the Corridor, serves 17 million passengers and over 250,000 tons of air cargo. They’re consistently rated as <b>one of the best airports in the county</b>. Troutdale Industrial Airport also operates in the Corridor.
            </p>

            <p>
              The Columbia River is the Corridor’s 40-foot-deep, 600-foot-wide marine shipping channel to the Pacific Ocean. Five marine terminals support regional shipping imports and exports. The Columbia River is <b>the #1 wheat export gateway</b> in the United States.
            </p>
          </div>
        </div>
      </div>
    );
  }
});
