const CCANews = React.createClass({

  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1>
          CCA News
        </h1>

        <div className="cca-news" style={{ "marginBottom" : "56px" , "marginTop" : "24px" }}>
          <div className="ui grid doubling stackable">
            <div className="eight wide column" style={{"height" : "62vh" , "overflowY" : "scroll" }}>
              {
                this.props.parent.state.news.map( (el) => {
                  if (el.cca_only) { return; }
                  return (
                    <div key={ el.id } >
                      <div style={{"marginBottom" : "8px"}}>
                        <b >
                          { el.title }
                        </b>

                        <span style={{ "marginLeft" : "3px" , "fontSize" : "12px"}}>
                          by { el.author } | { el.created_at.toString().slice(0, 10) }
                        </span>
                      </div>


                      <div style={{"marginTop" : "13px"}}>
                        <a href={"#news/" + el.id } >
                          read more
                        </a>
                      </div>

                      <div className="ui divider" style={{ "marginTop" : "40px" ,}}/>
                    </div>
                  )
                }.bind(this))
              }
            </div>

            <div className="eight wide column">
              <img className="ui large image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1482225183/RESOURCES_NEWS_1_03_k64ssu.jpg" />
            </div>
          </div>

        </div>

      </div>
    )
  }
});

const Groundwater = React.createClass({

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

        <div className="ui grid doubling stackable ">
          <div className="sixteen wide column">
            <h3>Why it exists:</h3>
            <p>
              The Groundwater Protection Program is designed to prevent hazardous chemicals from contaminating Portland’s well water. A series of wells are situated along the south shore of the Columbia River in NE Portland and Gresham (see the Well Field Area Map). These wells provide the back-up drinking water supply for Portland. When Bull Run water runs short (commonly in late summer), the Well Field supplies an increasing amount of drinking water. Obviously, contamination of these wells with solvents, oils, etc. would lead to an expensive and difficult clean-up.
            </p>

            <h3>CCA Involvement</h3>

            <p>
              CCA is very proud of our work on the Groundwater Protection Program. It’s a great example of how business interests can collaborate with the government agencies to protect our environment with reasonable, effective regulations.
            </p>

            <div style={{ "margin" : "20px 0px" , }}>
              <a href="http://www.portlandoregon.gov/water/29890" target="_blank" style={{ "fontWeight" : "bold" , "color" : "#262262"}}>
                <div className="ui button">
                  Water Bureau
                </div>
              </a>
            </div>

            <img className="ui image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1485665437/map_lgzbv5.jpg" style={{
                "position" : "relative" ,
                "left" : "12.5%" ,
                "width" : "75%" ,
              }}/>


          </div>


        </div>
      </div>
    )
  }
});

const ResourceFullUse = React.createClass({

  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (

      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1 className="ui header" style={{ "color" : "#262262"}}>
          ResourceFULL Use
        </h1>

        <div className="ui grid doubling stackable">
          <div className="eight wide column" >
            <p>
              At a 2006 CCA breakfast forum, ResourceFULL Use was born.
              We never imagined it would be going strong a decade later. Each exchange is money saved, resources utilized, and greenhouse gasses reduced. Our quarterly workshops are a great place to brainstorm and Dzspeed datedz with potential partners.
            </p>

            <h3>One company’s waste is another’s raw material</h3>

            <p>
              Industries and manufactures commonly produce wastes that other businesses could use. ResourceFull Use was started to help turn one business’ trash into another’s treasure.
            </p>

            <p>
              ResourceFull Use provides manufacturers and industry with workshops to assess resource needs and actively exchange resources (e.g.. use the waste of one organization as an input for another).
            </p>

            <p>
              We’ve also teamed with the Materials Exchange Platform to give members expanded capabilities and a broader audience for your by-products. Any materials that you post are now seen by businesses in Oregon and Washington.
            </p>

            <p>
              Benefits are improved economic viability through reduced waste, improved resource efficiences, and decreased emissions (CO2 and other greenhouse gases).
            </p>

          </div>
          <div className="eight wide column" style={{ "position" : "relative" , "bottom" : "42px"}}>
            <img className="ui image large" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481692448/RESOURCES_RFU_1_03_sgwtw2.jpg" style={{ "marginBottom" : "12px" ,}}/ >
              <img className="ui image large" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481692472/RESOURCES_RFU_1_07_zlpojo.jpg"/>
            </div>
          </div>

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
                  It leverages local business associations and government programs. The exchange uses existing programs and relationships to
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
                The ResourceFull Use Project started in 2006 as the result of collaboration between Zero WasteAlliance, a Portland nonprofit organization and Columbia Corridor Association. In its first phase the ResourceFull Use program found a home for 250 gallons of paint and reduced 3 tons of greenhouse gasses.
              </p>

              <p>
                The program has benefited from advisory, funding, and in-kind support from a wide cross- section of organizations including Pacific Northwest Pollution Prevention Resource Center, The Boeing Foundation, Cadmus Group (formely Quantec, LLC). Oregon Department of Environmental Quality (DEQ), Portland Development Commission (PDC), City of Portland’s Recycle at Work Program, Portland General Electric (PGE), City of Gresham, Portland Water Bureau, Columbia Corridor Association (CCA), Zero Waste Alliance (ZWA), Portland Metro, Venture Portland and Portland Office of Sustainable Development.
              </p>

              <p>
                The program is designed to benefit the manufacturing and industrial sector in the greater Portland, Oregon metro area. This program fills the needs of under-served manufacturing and industrial sectors.
              </p>

              <p>
                Thank you: <b>The Boeing Company</b>, <b>Metro</b>.
              </p>
            </div>
          </div>
        </div>
      )
    }
  });
