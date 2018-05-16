
const ResourceFullUse = React.createClass({

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

      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" , "position" : "relative" , "fontSize" : "16px"}}>
        <h1 className="ui header" style={{ "color" : "#262262" , "marginBottom" : "24px"}} >
          ResourceFULL Use
        </h1>

        <p>
          <a href="https://www.facebook.com/groups/ResourceFullUse/"
            target="_blank"
            className="ui facebook large button left labeled icon">
            <i className="facebook icon"></i>
            Facebook
          </a>
          <a href="www.ResourceFULLuse.org"
            target="_blank"
            className="ui green large button">
            Go to www.ResourceFULLuse.org
          </a>
        </p>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column" >
            <p>
              At a 2006 CCA breakfast forum, ResourceFULL Use was born.
              We never imagined it would be going strong a decade later.
              Each exchange is money saved, resources utilized, and greenhouse gasses reduced.
              Our quarterly workshops are a great place to brainstorm and speed-date with potential partners.
            </p>
          </div>
          <div className="sixteen wide column">
            <h2>One company’s waste is another’s raw material.</h2>

            <p>
              Industries and manufactures commonly produce wastes that other businesses could use.
              ResourceFull Use was started to help turn one business’ trash into another’s treasure.
            </p>

            <p>
              ResourceFull Use provides manufacturers
              and industry with workshops to assess resource needs
              and actively exchange resources (e.g. use the waste of one organization as an input for another).
            </p>

            <p>
              Benefits are improved economic viability through reduced waste,
              improved resource efficiencies, and decreased emissions (CO2 and other greenhouse gases).
            </p>
          </div>
          </div>

          <img className="ui image large" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1494388518/RESOURCES_RFU_1_07_broqkw.jpg"  style={{ "marginTop" : "28px" , "marginBottom" : "28px" , "marginRight" : "40px" ,"float" : "left"}}/>
          <img className="ui image large" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1494388594/RESOURCES_RFU_1_03_ku5wsb.jpg"  style={{ "marginTop" : "28px" , "marginBottom" : "28px" , }} / >

          <div className="ui grid">
            <div className="sixteen wide column">
              The ResourceFull Use program is different from traditional passive web-based exchanges in these important ways:
              <ul style={{"marginBottom":"24px"}}>
                <li>It is actively facilitated. Whereas passive exchange databases
                  rely on the user to identify exchanges, ResourceFull Use does
                  not rely only on a passive database. Facilitated workshops
                  and convened business association events provide venues for
                  organization to actively explore potential exchanges.
                </li>
                <li>
                  It looks holistically at all resource flows.
                  Participating organizations map their resource inputs and outputs
                  through the whole organization rather than just focusing on
                  individual waste streams or input needs.
                </li>
                <li>
                  It leverages local business associations and government programs.
                  The exchange uses existing programs and relationships to
                  build awareness and expand the use. It is local. It reduces
                  transportation costs and promotes community.
                </li>
                <li>
                  It is flexible. The program encompasses more than material
                  resources. The process allows for exchanges involving space,
                  equipment, energy, and transportation.
                </li>
              </ul>



              <p>
                The ResourceFull Use Project started in 2006 as the result of collaboration between Zero WasteAlliance,
                a Portland nonprofit organization and Columbia Corridor Association.
                In its first phase the ResourceFull Use program found a home for 250 gallons of paint
                and reduced 3 tons of greenhouse gasses.
              </p>

              <p>
                The program has benefited from advisory, funding,
                and in-kind support from a wide cross-section of organizations
                including Pacific Northwest Pollution Prevention Resource Center,
                The Boeing Foundation, Cadmus Group (formely Quantec, LLC).
                Oregon Department of Environmental Quality (DEQ), Portland Development Commission (PDC),
                City of Portland’s Recycle at Work Program, Portland General Electric (PGE),
                City of Gresham, Portland Water Bureau, Columbia Corridor Association (CCA),
                Zero Waste Alliance (ZWA), Portland Metro, Venture Portland
                and Portland Office of Sustainable Development.
              </p>

              <p>
                The program is designed to benefit the manufacturing
                and industrial sector in the greater Portland, Oregon metro area.
                This program fills the needs of under-served manufacturing and industrial sectors.
              </p>

              <b>
                Special Thanks:
              </b>
              <div className="ui grid">
                <div className="five wide column">
                  <a href="http://www.oregonmetro.gov/" target="_blank" >
                    <img className="ui centered image " src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1493670446/metro_logo_ukb86i_ijnvs7.jpg"></img>
                  </a>
                </div>


                <div className="five wide column">
                  <a href="http://www.oregon.gov/DEQ/Pages/index.aspx" target="_blank" >
                    <img className="ui centered image " src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1493670291/deq_logo_dewlj1_tt2qhf.jpg"></img>
                  </a>
                </div>

                <div className="five wide column">
                  <a href="http://www.boeing.com/" target="_blank" >
                    <img className="ui centered image " src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1493670280/boeing_logo_iz9hcc_vho9zf.jpg"></img>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    }
  });
