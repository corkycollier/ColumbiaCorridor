const YearInReview = React.createClass({
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
        <h1>
          2015 Year in Review
        </h1>
        <div className="ui grid">
          <div className="row">
            <div className="eight wide column">
              <h2>
                Drainage District Levee Re-Accreditation
              </h2>

              <p>
                Because flood management and federal flood insurance are vital to businesses and residents in the Corridor, CCA has been actively participating in a two-year process designed to address cost-sharing on levee improvements in Peninsula Drainage Districts 1 and 2 led by the Governor’s Oregon Solutions. In 2015, this effort expanded to include two other drainage districts in the Corridor – Multnomah County Drainage District and Sandy Drainage Improvement Company. A Declaration of Cooperation with all the drainage districts and cities in the corridor, Multnomah County, Metro and the state was approved in the fall. CCA, along with other stakeholders, secured a $1.4 million loan from Business Oregon and $300,000 in grant funds from the Metro Regional Solutions Team to support the technical analysis required for re-accreditation of the drainage districts, and $7 million in state funding for levee re-accreditation statewide.
              </p>
            </div>

            <div className="eight wide column" style={{ "padding" : "12px 60px" , }}>
              <img className="ui image fluid centered" style={{ "marginLeft" : "12px" , "borderRadius" : "1px" }} src="http://res.cloudinary.com/djjldnjz7/image/upload/v1487378383/1_fp1qkn.jpg"></img>
            </div>
          </div>

          <div className="row">
            <div className="eight wide column" style={{ "padding" : "12px 60px" , }}>
              <img className="ui image fluid centered" style={{ "marginLeft" : "12px" , "borderRadius" : "1px" }} src="http://res.cloudinary.com/djjldnjz7/image/upload/w_0.98,c_crop/w_0.98,c_crop/v1487106975/yir2_xyzqtv.png"></img>
            </div>

            <div className="eight wide column">
              <h2>
                Transit and Freight Improvements
              </h2>

              <p>
                CCA created a series of focus groups with TriMet to improve bus service connecting residential communities to industrial areas, and relieve congestion in key corridors. New routes and expanded service to the Corridor are in the final stages of planning. CCA is helping to create a new Local Improvement District on NE 47th Avenue in Portland and continues to advocate for freight network improvements on Burgard and Rivergate. At the state level, CCA worked to support the state gas tax effort in the 2015 Legislature and will renew its efforts in 2017 in order to better fund road maintenance.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="eight wide column">
              <h2>
                Drainage District Levee Re-Accreditation
              </h2>

              <p>
                For the past two years, CCA has been actively involved in the City’s 20-year visioning process to ensure that there is a balance of economic and environmental goals in the Comprehensive Plan update. To this end, CCA has advocated for policy language to support industrial development within the City (including Portland Harbor cleanup and brownfield redevelopment). In the City’s Economic Opportunity Analysis discussions, CCA continues to underscore the value the Corridor and Portland Harbor play in the City’s economy today and in the future. This includes encouraging the City to identify freight improvement projects in the Portland Transportation System Plan to support the industrial sector.City Council is scheduled to approve the Comprehensive Plan, Economic Opportunity Analysis and Transportation System Plan updates in 2016. As a companion to this work, CCA also lobbied the City to adopt a new industrial zoning overlay in key areas. All of these efforts will guide industrial development and middle income jobs for the coming decades.
              </p>
            </div>

            <div className="eight wide column" style={{ "padding" : "12px 60px" , }}>
              <img className="ui image fluid" style={{ "marginLeft" : "12px" , "borderRadius" : "1px" }} src="http://res.cloudinary.com/djjldnjz7/image/upload/v1487106975/yir1_iyjthk.png"></img>
            </div>
          </div>

          <div className="row">
            <div className="eight wide column" style={{ "padding" : "12px 60px" , }}>
              <img className="ui image fluid" style={{ "marginLeft" : "12px" , "borderRadius" : "1px" }} src="http://res.cloudinary.com/djjldnjz7/image/upload/v1487378384/2_vaap2b.jpg"></img>
            </div>

            <div className="eight wide column">
              <h2>
                Transit and Freight Improvements
              </h2>

              <p>
                As part of the Comprehensive Plan, the City has identified brownfields as critical to accommodating forecasted population and job growth over the next 20 years, but new tools are needed to make this vision a reality. CCA participated in a diverse statewide coalition to provide brownfield redevelopment tools. In 2015, the Legislature approved a $7 million recapitalization of the state Brownfield Revolving Loan program, and legislation to support land banking of brownfields by local jurisdictions. CCA and the coalition will push for brownfield tax abatements and tax credits to incent clean-up in 2016. CCA is committed to working with local jurisdictions to provide support for brownfield redevelopment on the ground in Portland.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="eight wide column">
              <h2>
                Middle Wage Jobs and Equity
              </h2>

              <p>
                The Portland metro region continues to face an increase in the number of households with incomes below $35,000/year and a decrease in household incomes of $35,000-$75,0000/year. Middle wage jobs are key to a prosperous region and the norm for Columbia Corridor businesses. The average wage in the Columbia Corridor is just shy of $50,000 and the percentage of middle wage jobs is higher than any other sector in the region. Traded-sector businesses such as those located in the Corridor build middle wage jobs, and provide opportunities for low income residents and communities of color. CCA is working with stakeholders in the corridor (and CCA members) to educate our elected officials and others on this issue. This includes the Portland Bureau of Planning and Sustainability, East Portland Action Plan, The Rosewood Initiative, Verde, Human Solutions, and Community Works.
              </p>
            </div>

            <div className="eight wide column" style={{ "padding" : "12px 60px" , }}>
              <img className="ui image fluid" style={{ "marginLeft" : "12px" , "borderRadius" : "1px" }} src="http://res.cloudinary.com/djjldnjz7/image/upload/v1487378383/3_mlzoet.jpg"></img>
            </div>
          </div>


          <div className="row">
            <div className="eight wide column" style={{ "padding" : "12px 60px" , }}>
              <img className="ui image fluid" style={{ "marginLeft" : "12px" , "borderRadius" : "1px" }} src="http://res.cloudinary.com/djjldnjz7/image/upload/w_0.98,c_crop/v1487106974/yir3_d4zyva.png"></img>
            </div>

            <div className="eight wide column">
              <h2>
                Business Advocacy
              </h2>

              <p>
                CCA and other business interests weighed in on the proposed Pembina propane terminal adjacent to the Port of Portland’s Terminal 6, on a strategically located but constrained 40-acre industrial site. The $500 million facility would have generated over $12 million in tax revenues to the City, Multnomah County and school district annually, and employed 600 to 800 construction workers and 30 to 40 permanent facility jobs with wages averaging $95,000/year. Propane is considered to be a cleaner alternative to more carbon intensive fuels. While stakeholder efforts were successful in achieving an affirmative vote from the Planning and Sustainability Commission for the project, the City Council declined to discuss the project.
              </p>
            </div>
          </div>


          <div className="row">
            <div className="sixteen wide column">
              <h2>
                EPA Clean Diesel Grant
              </h2>

              <p>
                As part of our business advocacy efforts, CCA continues its work on a U.S. EPA grant to cover a portion of the costs of replacing older diesel trucks with newer clean diesel trucks. Three businesses (McCracken, JNB, and Green Transfer) used this grant funding to replace five older diesel trucks. The current line of diesel engines emit 98.3% less particulate matter and 99.1% less nitrogen oxide than 1984 trucks, and the seats are more comfortable.
              </p>

              <h2>
                Business Education and Networking
              </h2>

              <p>
                CCA continues its Business, Retention and Expansion efforts this year, welcoming new businesses to the corridor and meeting with existing members to learn about interests and challenges facing the business community. CCA is an active conduit for connecting businesses with the resources they need. If your business would like to meet with a board member, please let us know.
              </p>
            </div>
          </div>


          <div className="row">
            <div className="sixteen wide column">
              <h2>
                Monthly Information Forums
              </h2>

              <p>
                CCA hosts monthly information forums for businesses in the Corridor. In 2015, breakfast forums were held on issues including flood levee improvements, Portland’s economic opportunity analysis, commercial real estate trends & forecasts, marijuana testing, and Oregon trade infrastructure. In addition, CCA sponsored twoforums with leaders to ensure Corridor businesses had an opportunity to discuss issues of concern in an informal session. This year, CCA members met with House Speaker Tina Kotek and new Portland Bureau of Environmental Services director Michael Jordan.
              </p>

              <h2>
                Annual Golf Tournament
              </h2>

              <p>
                Every year CCA hosts an annual Golf Tournamentat the Riverside Golf Club to support CCA activities and facilitate Corridor business networking. Plan on attending next year’s golf tournament in September.
              </p>
            </div>
          </div>

        </div>








      </div>
    )
  }
});
