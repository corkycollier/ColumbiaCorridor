const YearInReview = React.createClass({
  componentDidMount() {
    $('.ui.container').transition({
      animation  : 'fade in' ,
      duration   : '0.8s'    ,
    });
  },
  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },
  render () {
    return (
      <div className="ui container year-in-reivew" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1>
          2016 Year in Review
        </h1>
        <div className="ui grid">
          <div className="row">
            <div className="sixteen wide column">
              <h2>
                Transit and Freight Improvements
              </h2>
              <img className="ui image fluid centered" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1494459440/2_vaap2b_nfsdlp.jpg" style={{"width":"30%", "float":"left", "paddingRight":"20px"}}/>
              <p>CCA was a key participant in negotiations over the new City of Portland gas tax.  CCA advocated for better fiscal returns on investments from the new tax.  Recognizing that applying a gas tax to heavy diesel vehicles would put the Jubitz truck stop at a singular disadvantage, CCA worked with the City to create a complimentary weight-mile tax for heavy diesel vehicles and ensured the proceeds will go to freight districts.</p>
              <img className="ui image fluid centered" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1494459407/yir2_xyzqtv_ectykz.png" style={{"width":"30%", "float":"right", "paddingLeft":"20px"}}/>
              <p>CCA worked to ensure that the improvements planned for a new Local Improvement District (LID) on NE 47th Avenue between Columbia Boulevard and Cornfoot will not impede freight mobility. The innovative design for bike/pedestrian/freight movement is being recognized as a model for future projects.   CCA worked on the creation of a second LID on 112th and Marx Street, which combined freight, development, environmental and homeless concerns.  Work on a third LID on Suttle Road is underway.</p>
              <p>
                CCA helped secure federal Transportation Investment Generating Economic Recovery (TIGER) funding for the Rivergate Overcrossing which will relieve train-car conflicts and provide pedestrian access.  At the state level, CCA is gearing up to support the state gas tax effort in the 2017 Legislature to ensure maintenance, capacity enhancement, and seismic resiliency of Oregon’s transportation network that provides Oregon businesses critical access to global markets.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="eight wide column" style={{ "padding" : "12px 60px" , }}>
              <img className="ui image fluid centered" style={{ "marginLeft" : "12px" , "borderRadius" : "1px" }} src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1494459492/yir3_d4zyva_k3k9wm.png" />
            </div>

            <div className="eight wide column">
              <h2>
                Business Advocacy
              </h2>

              <p>CCA has been an actively engaged with the Portland Harbor Superfund Record of Decision (ROD) released in January 2017. CCA organized a meeting with EPA Region 10 Director Dennis McLaren and Portland business associations on March 30. Following this meeting, CCA hosted a forum on the Portland Harbor with Corridor businesses, the Governor’s office and the City of Portland. CCA provided comments to EPA on the proposed plan and assisted the City of Portland in creating a comment process.</p>
              <p>A new CCA committee took on homelessness in the Corridor to address crime, water quality and safety issues.  In the 2016 Legislature, CCA worked with our utility members in supporting the coal to clean utility bill. Recognizing that most industrial businesses pay at least $15/hour starting wages, we supported a phased increase in the minimum wage.</p>
            </div>
          </div>

          <div className="row">
            <div className="sixteen wide column">
              <h2>Industrial and Brownfield Redevelopment</h2>

              <p>To accommodate forecasted population and job growth over the next 20 years, the City of Portland identified industrial land and brownfield redevelopment as a focus of its 2035 Comprehensive Plan.  CCA urged the City to include a more accurate inventory of industrial land within the City and removal of properties not available for industrial development from that inventory.  CCA worked with Riverside Golf Club to petition removal of this golf course from, and inclusion of Broadmoor in, the City’s industrial land inventory.</p>
              <p>To support redevelopment of brownfields, CCA has joined a statewide brownfield coalition to lobby for new brownfield redevelopment tools to make this vision a reality. In the 2016 Legislative session, CCA and the coalition were successful in securing approval of a brownfield tax abatement program and tax credits to incent clean-up.  CCA’s work with the coalition is an extension of a decade of active promotion of brownfield redevelopment. It’s good for the environment, good for our land use system, and good for business.</p>
            </div>
          </div>

          <div className="row">
            <div className="sixteen wide column">
              <h2>EPA Clean Diesel Grant</h2>

              <p>As part of our business advocacy efforts, CCA submitted and received $570,000 in funding for a second U.S. Environmental Protection Agency (EPA) grant to cover a portion of the costs of replacing older diesel trucks with newer clean diesel trucks.  Three businesses will purchase nine clean diesel trucks. In addition, three more businesses, including Meals on Wheels People will install electrified loading bays for refrigerated units, reducing diesel running time. 2016 diesel engines emit 98.3% less particulate matter and 99.1% less nitrogen oxide than 1984 trucks; plus, the seats are more comfortable.</p>
            </div>
          </div>

          <div className="row">
            <div className="sixteen wide column">
              <h2>Drainage District Levee Re-Accreditation</h2>
            </div>
          </div>
          <div className="row">
            <div className="six wide column">
              <p>Because flood management and federal flood insurance are vital to businesses and residents, CCA continues to be actively engaged in a process designed to address cost-sharing on levee improvements in the Corridor’s four drainage districts. CCA joined Multnomah County Drainage District (MCDD) on a trip to Washington, DC to seek a New Starts grant to study Corridor levee improvements.  A second lobby trip to DC is scheduled for 2017.  CCA is also supporting a request for $10 million in state funding for levee re-accreditation statewide. The success of this effort, due to leadership from Oregon Solutions and MCDD, has led to an excellent working relationship with federal regulators, collaborative funding, grant potential, and a new model for the state.</p>
            </div>

            <div className="five wide column">
              <img className="ui image fluid centered" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1494459391/1_fp1qkn_p6rnze.jpg" />
            </div>
            <div className="five wide column">
              <img className="ui image fluid centered" src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1494459428/yir1_iyjthk_bwyfwf.png" />
            </div>
          </div>

          <div className="row">
            <div className="sixteen wide column">
              <h2>Business Education and Networking</h2>

              <p>In 2016, CCA has seen significant business expansion. Vacancy rates in industrial buildings are below 5% and new buildings are being fully leased before construction is finished. CCA continued its Business, Retention and Expansion efforts this year, welcoming new businesses to the Corridor and meeting with existing members to learn about interests and challenges facing the business community.  CCA is an active conduit for connecting businesses with the resources they need. If your business would like to meet with a board member, please let us know.</p>
            </div>
          </div>

          <div className="row">
            <div className="eight wide column">
              <p>CCA hosts monthly <b>information forums</b> on current topics impacting business in the Corridor.  In 2016, breakfast forums were held on issues including the City of Portland gas tax, earthquake preparedness, commercial real estate trends & forecasts, Portland Harbor Superfund cleanup, state transportation funding, gross tax receipt initiative petition, and homelessness challenges.  In addition, CCA sponsored a Portland mayoral candidate debate and discussion with the state’s new Business Oregon director Chris Harder and the City of Portland’s new Portland Development Commission director Kimberly Branam. This year, CCA also hosted a Brewpub Social networking event and Oregon Humane Society open house.</p>
              <p>Our <b>new website</b> offers increased networking opportunities for members. Member-generated news, coordinated Facebook and LinkedIn feeds, and a more robust member profile will help your company extend its reach and publicize activities. You can find us at <a href="http://www.ColumbiaCorridor.org" target="_blank">www.ColumbiaCorridor.org</a> or <a href="http://www.CCA.works" target="_blank">www.CCA.works</a>.</p>
              <p>Every year CCA hosts an <b>annual Golf Scramble at the Riverside Golf Club</b> to support CCA activities and facilitate Corridor business networking.  Plan to attend next year’s golf tournament in October.</p>
            </div>
            <div className="eight wide column" style={{ "padding" : "12px 60px" , }}>
              <img className="ui image fluid centered" style={{ "marginLeft" : "12px" , "borderRadius" : "1px" }} src="http://res.cloudinary.com/dtizwr3wv/image/upload/v1494459572/JOIN-Sponsors_03_sodj8w_uyon84.png" />
            </div>
          </div>

        </div>

      </div>
    );
  }
});
