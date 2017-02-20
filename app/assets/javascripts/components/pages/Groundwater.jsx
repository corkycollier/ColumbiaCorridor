
const Groundwater = React.createClass({

  componentDidMount() {
    $('.ui.container').transition({
      animation  : 'fade in' ,
      duration   : '0.8s'    ,
    });

  },
  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1 className="ui header" style={{ "color" : "#262262" }}>
          Groundwater Protection Program
        </h1>

        <div className="ui grid doubling stackable " style={{ "fontSize" : "16px" , }}>
          <div className="fourteen wide column">
            <h2>Why It Exists</h2>
            <p>
              The Groundwater Protection Program is designed to prevent hazardous chemicals from contaminating Portland’s well water. A series of wells are situated along the south shore of the Columbia River in NE Portland and Gresham (see the Well Field Area Map). These wells provide the back-up drinking water supply for Portland. When Bull Run water runs short (commonly in late summer), the Well Field supplies an increasing amount of drinking water. Obviously, contamination of these wells with solvents, oils, etc. would lead to an expensive and difficult clean-up.
            </p>

            <h2>CCA Involvement</h2>

            <p>
              CCA is very proud of our work on the Groundwater Protection Program. It’s a great example of how business interests can collaborate with the government agencies to protect our environment with reasonable, effective regulations.
            </p>

            <img className="ui image fluid" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1485665437/map_lgzbv5.jpg" />

          </div>

          <div className="two wide column">
            <img  src="http://res.cloudinary.com/djjldnjz7/image/upload/v1487140042/groundwater_logo_fx3ycc.jpg"></img>
            <a href="http://www.portlandoregon.gov/water/29890" target="_blank" >
              <div className="ui fluid button" style={{ "fontWeight" : "bold" , "color" : "#262262" , "marginTop" : "12px" , "width" : "146px" }} >
                Water Bureau Site
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
});
