
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
              The Groundwater Protection Program is designed to prevent hazardous chemicals from contaminating Portland’s well water.
              A series of wells are situated along the south shore of the Columbia River in NE Portland and Gresham
              (see the Well Field Area Map below).
              These wells provide the back-up drinking water supply for Portland.
              When Bull Run water runs short (commonly in late summer),
              the Well Field supplies an increasing amount of drinking water.
              Obviously, contamination of these wells with solvents, oils, etc. would lead to an expensive and difficult clean-up.
            </p>

            <h2>CCA Involvement</h2>

            <p>
              CCA is very proud of our work on the Groundwater Protection Program.
              It’s a great example of how business interests can collaborate with the government agencies to protect our environment with reasonable,
              effective regulations.
              The success of Portland’s program inspired Gresham to create their own program to protect city wells.
              CCA helped draft both programs and consults for both cities.
            </p>

            <p>
              If you have questions about how the Groundwater Protection Program affects you,
              call us at 503.287.8686 for assistance.
              We can inspect your site for potential problems,
              help with your annual reports,
              minimize the regulatory burden and make it easy to be in compliance.
            </p>

            <img className="ui image fluid" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1493670445/map_lgzbv5_c0ux4b.jpg" />

          </div>

          <div className="two wide column">
            <img  src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1493670322/groundwater_logo_fx3ycc_rfphsk.jpg"></img>
            <a href="http://www.portlandoregon.gov/water/29890" target="_blank" >
              <div className="ui fluid button" style={{ "fontWeight" : "bold" , "color" : "#262262" , "marginTop" : "12px" , "width" : "146px" }} >
                Portland Groundwater Site
              </div>
            </a>
            <a href="https://greshamoregon.gov/Well-Field-Protection-Program/" target="_blank" >
              <div className="ui fluid button" style={{ "fontWeight" : "bold" , "color" : "#262262" , "marginTop" : "12px" , "width" : "146px" }} >
                Gresham Groundwater Site
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
});
