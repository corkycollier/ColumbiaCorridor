const Main = React.createClass({
  getInitialState () {
    return( this.props.data )
  },

  componentDidMount () {
    this.initRouter();
    this.customMethods();
    this.setBoard();
  },

  save () {
    $.ajax({
      url : 'api/save' ,
      type : 'PATCH' ,
      data : this.state ,
      success : function (app_data, resp, obj) {
        debugger
      }.bind(this) ,
      error : function (app_data, resp, obj) {
        debugger
      }.bind(this)
    })
  },

  initRouter () {
    this.setState({
      router: new router(this),
    })
  },

  customMethods() {
    setTimeout(function() {
      if (!this.state.user) {
        $('.member-area').addClass('disabled');
      }
    }.bind(this), 0)


  },

  render () {
    return (
      <div>
        <SidebarMenu parent = { this } />
        <Header parent = { this } />
        <Menu parent = { this } />

        <div>
          {
            this.state.activePage
          }
        </div>

        <Footer parent={ this } />
      </div>
    )
  },

  setBoard () {
    var board = [
      {
        id: 1 ,
        title: "President" ,
        name: "Debbie Dietz Silva" ,
        email: "debbie.silva@evrazna.com" ,
        company: "Evraz" ,
        website: "http://www.evrazna.com/" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481674499/CCA_DebbieDS_l6g2ko.jpg" ,
        bio: "Debbie Deetz Silva is the current CCA Board President.  Debbie has been on the board of CCA for more than 10 years.  As an Environmental Specialist, she is responsible for environmental compliance at EVRAZ.  After a tour in the Peace Corps, Debbie began her career with then Oregon Steel Mills where her initial position was a Chemist beginning in 1990.  During her career at the steel mill and EVRAZ, she has held positions in the technical services, production planning, safety and environmental departments.  Debbie has spent the past 10 years focused on the Portland Harbor Superfund issues.  She has a Bachelor of Science in chemistry from Eastern Oregon University.  She lives in southeast Portland with her husband and son. \“I appreciate that CCA connects with local and regional issues, the processes and the leaders and keeps me informed where it matters.\”" ,
      } ,
      {
        id: 2 ,
        title: "Vice-President" ,
        name: "Bruce Johnson" ,
        email: "bruce.johnson@atriumhospitality.com" ,
        website: "http://www.atriumhospitality.com/" ,
        company: "Embassy Suites" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481675868/Board_BJohnson_ykc5fb.jpg" ,
        bio: "Bruce Johnson is Vice President of the CCA board, Co-Chair of the CCA golf scramble.  By day, Bruce is the Sales Manager of the Embassy Suites by Hilton at Portland Airport.  Bruce is currently a member of Travel Portland.  His previous memberships include: Portland Business Alliance, Oregon Society of Association Managers, Greater Oregon Society of Government Meeting Planners, Oregon Tour and Travel Alliance, and Oregon Media Production Alliance. Bruce has a Bachelor of Arts from Puget Sound Christian College, a Masters from Multnomah University, and a Masters of Business Administration from the University of Phoenix.   Bruce is married with two daughters, a turtle named Sherman Tank and a cat named Skittles Rowena Johnson.   He spends his free time gardening, playing six different instruments, and attempting to be funny.   He enjoys traveling to Haiti, Peru, and Mexico to support missionaries, humanitarian efforts, and disaster relief efforts. \“CCA has provided me with opportunities to meet the neighboring business.  Annually my return on investment has been 8-10 times and I have never seen that result from any network that have been involved with.\”"
      } ,
      {
        id: 3 ,
        title: "Treasurer" ,
        name: "Doug White" ,
        email: "Doug.White@therightbank.com" ,
        website: "https://www.therightbank.com/" ,
        company: "Pacific Continental Bank" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481675965/Board_DougW_tzowuk.jpg" ,
        bio: "Doug White is the Secretary of the CCA board and a longstanding Board Member.Doug is a commercial banker with industrial-based clientele located throughout the Corridor. He is Senior Vice President with Pacific Continental Bank, an Oregon-based FDIC-insured institution focused on business banking. Doug graduated from Portland State University and Pacific Coast Banking School. Doug is self-described as one of the more conservative members of the CCA Board who will gladly discuss the local economy and how we might work together improving both jobs and the business climate. Doug is married and a third generation Oregonian. He spends his down time dancing or touring on his Harley Davidson motorcycle. \“CCA is an organization fundamental in bringing collective thought and effort to better the workforce and industry for our region. Information, education, and creating awareness for all stakeholders is critical to our continuing success.\”"
      } ,
      {
        id: 4 ,
        title: "Secretary" ,
        name: "Melissa Hunting" ,
        email: "Melissa.Hunting@pgn.com" ,
        website: "https://www.pgn.com" ,
        company: "PGE" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481676008/Board_MHunting_ksd6du.jpg" ,
        bio: "Melissa Hunting is a Business Development Specialist with Portland General Electric (PGE), a fully integrated electric utility that serves approximately 856,000 residential, commercial and industrial customers in Oregon.  Melissa has over a decade of experience in the utility industry working with local, regional and state economic development organizations to help support economic growth. Melissa serves as the Columbia Corridor Association’s secretary and also serves on the Oregon Economic Development Association’s Board of Directors. Melissa earned a Bachelor of Arts degree in Business Management from Oregon State University. She enjoys the outdoors, running, travel, and Oregon State football. \“CCA helps to keep me and my customers informed of important issues impacting the business community and connects members to valuable resources.\”"
      } ,
      {
        id: 6 ,
        title: "Director" ,
        name: "Cheryl Carter" ,
        email: "cheryl.carter@pacificorp.com" ,
        website: "http://www.pacificorp.com" ,
        company: "Pacific Power" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681475/Board_CCarter_w3gzhb.jpg" ,
        bio: "Cheryl Carter is a Regional Business Manager for Pacific Power and serves as the company’s representative for the CCA.  Pacific Power’s Portland service territory covers north and northeast Portland, including the large commercial and industrial customers in this region.  Cheryl is responsible for delivering exceptional customer service to these customers by providing solutions and recommendations regarding customers’ concerns and questions. Cheryl has worked in the electric utility industry for 17 years.  She graduated with a Bachelor of Science in business marketing from Oregon State University and later earned a Master of Business Administration from Washington State University in Vancouver.  Cheryl enjoys spending time with her three teenagers, snow skiing and hiking. \“Pacific Power has been an active participate in the Columbia Corridor Association for 30 years.  We appreciate the work CCA does in advocating for a positive business environment in the region.\”"
      } ,
      {
        id: 7 ,
        title: "Director" ,
        name: "John Foxwell" ,
        email: "JFoxwell@apexcos.com" ,
        website: "http://www.apexcos.com" ,
        company: "Apex Companies" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681535/Board_JohnF_jtkjwk.jpg" ,
        bio : "John Foxwell is a CCA Board Member and Senior Associate, Apex Companies, LLC.    John is an environmental consultant with over 20 years of experience providing environmental services to the regulated community and governmental organizations.  John’s practice area focusses on property due-diligence, remediation, redevelopment planning, and environmental permitting for development, energy, and transportation projects. John is a Registered Geologist in Oregon and is also the President of the Oregon Association of Environmental Professionals.  John holds an M.S. in Environmental Science and Engineering from Oregon Health Sciences University and a B.S. in Environmental Studies and Geology from St. Lawrence University.  When not working or engaged with CCA, John spends a good deal of his time with his two middle-school aged daughters, in the mountains skiing or mountain biking, or developing his green thumb in the garden. \“I enjoy working with CCA in order to gain exposure and an understanding of the business and resource issues that affect business in the Columbia Corridor.\”"
      } ,
      {
        id: 8 ,
        title: "Director" ,
        name: "Larry Buckhart" ,
        email: "larryb@exceedpdx.com" ,
        website: "http://www.exceedpdx.com" ,
        company: "Exceed Enterprises" ,
        img: "http://columbiacorridor.com/wp-content/uploads/2016/08/Board_LarryB.jpg" ,
        bio: "Larry Burkhart is a member of the CCA Board.  Larry has a professional background in business development and strategic marketing and is the Vice President of Business Development with Exceed Enterprises. This organization matches the extraordinary skills of people with disabilities to manufacturing contracts for top-tier companies e.g., The Boeing Co., Precision Cast Parts, Daimler Trucks of North America, Hood River Distillers and Bob’s Red Mill. Larry is actively engaged with organizations that identify opportunities for improvement for Oregon business and its residents, including the Pacific Northwest Defense Coalition.  He attended Western Oregon College, Portland State University and The Annenberg School of Communications at the University of California in Las Angeles.  With a smile he will say: \“My second love is business.\” \“I only put my heart and abilities where needed and CCA is a match. I’m fortunate to have learned of their determination to continue to be \“the\” source for issues and answers concerning the Corridor’s assured businesses growth and its community-at-large. It’s an exciting adventure that can only grow with true purpose and strong business minded members.\”"
      } ,
      {
        id: 9 ,
        title: "Director" ,
        name: "Lice Glancy" ,
        email: "Lise.glancy@portofportland.com" ,
        website: "http://www2.portofportland.com/" ,
        company: "Port Of Portland" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681592/Board_LGlancy_zm0hud.jpg" ,
        bio : "Lise Glancy is the Port of Portland’s Manager of Strategic Partnerships, serves as the Port’s board representative on the CCA. The Port is a significant landowner in the corridor with aviation and marine facilities and industrial properties. Lise was the Port’s regional government relations manager for 18 years and had various leadership roles at the Oregon Business Development Department for 10 years prior to that. Lise is a graduate of the University of Texas in Austin and Lyndon Baines Johnson School of Public Affairs. She lives in northeast Portland. Lise is married and has three kids, and enjoys time with her family, walking, hiking, yoga and books. \“The Port has been a member of CCA since its inception in 1986.  CCA has always been an important voice for business interests in the corridor – large and small – and been a leader in crafting solutions that work for all.\”"
      } ,
      {
        id: 10 ,
        title: "Director" ,
        name: "Don Ossey" ,
        email: "jon.a.haralson@boeing.com" ,
        website: "http://www.boeing.com" ,
        company: "The Boeing Company" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681649/Board_DOssey_txxs3j.jpg" ,
        bio : "Jon Haralson is a senior supply chain manager for Boeing’s Gresham-based parts factory employing more than 1,700 people.  Jon has had a 20-year career with Boeing holding a variety of supply chain, industrial engineering, procurement and operations positions in Gresham, Everett, Washington and Charleston, South Carolina.  He has a Bachelor of Art from the University of Puget Sound in Tacoma, Washington, and a Masters of Business Administration from the University of Portland.  Jon is a road cyclist in his free time. \“Being on the board of CCA is part of Boeing’s connection to the community.  It has helped give me an inside view to how public policy is formulated and decided upon particularly in the areas that are core to the CCA mission. \”" ,
      } ,
      {
        id: 11 ,
        title: "Director" ,
        name: "Leah Treat" ,
        company: "Portland Bureau of Transportation" ,
        email: "Leah.Treat@portlandoregon.gov" ,
        website: "http://www.portlandoregon.gov" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681693/Board_LTreat_ofpwar.jpg" ,
        bio: "Leah Treat represents the City of Portland on the CCA Board.  Appointed as Director of the Portland Bureau of Transportation in 2013, Leah manages more than 800 employees, a combined operating and capital budget of roughly $500 million and more than $10 billion in public assets.  She previously served as the Managing Deputy Commissioner for the Chicago Department of Transportation and the Deputy Director for the District of Columbia’s Department of Transportation. Leah is a member of the Portland Streetcar Incorporated (as Mayor’s Delegate), Portland Mall Management Incorporated, and Portland Aerial Tram Executive Management Committee.  Leah grew up in New Mexico and completed her higher education at the University of New Mexico.  She has a Bachelor of Arts in Political Science and Professional Writing and a Master of Public Administration.  Leah holds a black belt in Lean Six Sigma. She and her husband have four children, two dogs, and spend their free time exploring the great state of Oregon. \“Serving on the Board is important for planning and coordinating large projects that affect the Columbia Corridor, collaborate on land use issues and support economic vitality for the City.\“"
      } ,
      {
        id: 12 ,
        title: "Director" ,
        name: "John Haralson" ,
        company: "The Boeing Company" ,
        email: "jon.a.haralson@boeing.com" ,
        website: "http://www.boeing.com" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681767/CCA_JohnF_maqosw.jpg" ,
        bio: "Jon Haralson is a senior supply chain manager for Boeing’s Gresham-based parts factory employing more than 1,700 people.  Jon has had a 20-year career with Boeing holding a variety of supply chain, industrial engineering, procurement and operations positions in Gresham, Everett, Washington and Charleston, South Carolina.  He has a Bachelor of Art from the University of Puget Sound in Tacoma, Washington, and a Masters of Business Administration from the University of Portland.  Jon is a road cyclist in his free time. \“Being on the board of CCA is part of Boeing’s connection to the community.  It has helped give me an inside view to how public policy is formulated and decided upon particularly in the areas that are core to the CCA mission. \”"
      } ,
      {
        id: 13 ,
        title: "Director" ,
        name: "Reed Wagner" ,
        company: "MCDD" ,
        email: "RWagner@mcdd.org" ,
        website: "http://www.mcdd.org" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681815/Board_ReedW_auzthe.jpg" ,
        bio: "Reed Wagner is the Executive Director, Multnomah County Drainage District.  As Executive Director, Reed manages the levees along the Columbia River, pump stations and four drainage districts in the Columbia Corridor. Prior to his time at MCDD, Reed served in both the private and public sector.  He was the Deputy Chief Operating Officer for the State of Oregon; Director of Policy and Director of Parks and Environmental Services at Metro; Director of Parks and Environmental Services, Metro.  He was the Managing Director of 3five7 (New Media); Business Development Manager of Webcast Solutions; and Station Relations Manager of DG Systems. Reed serves on the board of the Special Districts Association of Oregon, and Columbia Slough Watershed Council.  He is a member of the International City/County Management Association, and National Association of Flood and Stormwater Agencies.  Reed has a Bachelor of Arts and Master of Public Administration from the University of Oregon.  Reed lives with his wife and daughter in Northeast Portland.  Together, they enjoy the outdoors – hiking, boating, surfing and skiing. \“The corridor is evolving at a significant pace; CCA provides the opportunity to evolve in a coordinated, thoughtful and strategic manner.\”"
      } ,
      {
        id: 14 ,
        title: "Director" ,
        name: "Bob Stacey" ,
        company: "Metro" ,
        email: "Bob.Stacey@oregonmetro.gov" ,
        website: "http://www.oregonmetro.gov" ,
        img: "http://columbiacorridor.com/wp-content/uploads/2016/08/Board_BStacey.jpg" ,
        bio : "Bob Stacey has been Councilor for Metro District 6 since 2012 and a CCA board member since 2015. As Metro Councilor, Bob works with community leaders and constituents on long-range plans that cross local boundaries to create a vibrant region, which includes 1.5 million people in 25 cities and three counties.   Prior to serving on the Metro Council, Bob was the executive director and staff attorney for 1000 Friends of Oregon and an attorney in private practice. Bob has over 12 year’s service in appointed positions in local, regional, state and federal government and previous service on several nonprofit boards.  Bob has a Bachelor of Arts from Reed College and a law degree from the University of Oregon Law School.  He is married and has two daughters and two grandsons.  All live in Southeast Portland, and family is a big part of Bob’s life. \“The businesses in the Columbia Corridor provide a lot of family-wage jobs close to racially diverse working-class neighborhoods.  They work with the opportunities and constraints of the natural resources at the confluence of the Willamette and Columbia rivers.  These businesses’ continued success strengthens the city and region.  That makes CCA, as their advocate, pretty darn important.\”"
      } ,

      {
        id: 15 ,
        title: "Director" ,
        name: "Patrick Rowe" ,
        company: "Sussman Shank, LLP" ,
        email: "prowe@sussmanshank.com" ,
        website: "http://www.sussmanshank.com" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/w_233,h_351,c_crop,c_fill/v1485909006/pat_row_anj38q.jpg" ,
        bio : "Patrick is an attorney with the Portland-based law firm Sussman Shank, LLP.  Practicing law since 1997, Patrick focuses on transactions and litigation involving real estate, environmental, and natural resources issues.  He has extensive experience providing counsel regarding the purchase, sale and development of real property in which environmental issues are in play, such as legacy contamination, including groundwater and hazardous waste contamination.   He has significant litigation experience in both environmental and real property matters.  Patrick has advised several businesses in the Columbia Corridor, from large national companies involved in sizable brownfield property purchases to local clients wrestling with Clean Water Act compliance requirements and actions needed to obtain No Further Action Determinations from the Oregon DEQ. Patrick loves the Northwest and enjoys many of the things that make this region so great, from snowboarding down the slopes of Mt. Hood and backpacking in the wilderness to enjoying a craft beer at the Oregon coast." ,
      } ,

      {
        id: 16 ,
        title: "Director" ,
        name: "Greg Jurna" ,
        company: "Albina Community Bank" ,
        website: "http://albinabank.com/" ,
        email: "gjurna@albinabank.com" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/w_233,h_351,c_crop,c_fill/v1485909010/greg_jurma_otex5f.jpg" ,
        bio : "Greg Jurna has been a Board member of CCA since 2015.  He began his career in commercial banking more than 16 years ago and currently holds the position of Commercial Relationship Manager and Vice President with Albina Community Bank.  Greg’s work focus includes relationship management and business development for small to middle market business clients throughout greater Portland and Clark County.  His services include the origination of operating lines of credit, real estate term loans for purchase and refinancing, and he has a sub-specialty in new construction lending.  Greg is a graduate of Portland State University with a Bachelor’s Degree in Finance and he has formal training in the field of investment securities.  Greg loves to spend time with his wife of 23 years Adina, and their two children Michael and Sydney.  For recreation he enjoys golf, tennis, and landscape photography. \“I always love attending our monthly CCA meetings as we have the most interesting speakers from business, government, and local organizations.  The topics are always compelling and thoroughly informative\”." ,
      } ,

    ]

    this.setState({
      board: board
    })
  }
});
