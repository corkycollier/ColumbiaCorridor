const Main = React.createClass({
  getInitialState () {
    return( this.props.data )
  },

  componentDidMount () {
    this.initRouter();
    this.customMethods();
    this.orderBoard();
    this.setStaff();
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

  orderBoard () {
    var board = this.state.board.sort(function(a, b) {

      if (a.title == "President") {
        return 1;
      }

      if (a.title == "Vice-President") {
        return 1;
      }

      if (a.title == "Treasurer") {
        return 1;
      }

      if (a.title == "Secretary") {
        return 1;
      }

      var nameA = a.name.split(" ")[1]; // ignore upper and lowercase
      var nameB = b.name.split(" ")[1]; // ignore upper and lowercase

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    this.setState({
      board: board
    })
  },

  setStaff () {
    var staff = [
      {
        id: 1 ,
        title: "Executive Director" ,
        name: "Corky Collier" ,
        email: "corky@columbiacorridor.org" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481673214/Staff_Corky-e1474958983360_h6iyzp.jpg" ,
        bio : "Corky Collier has been Executive Director of the Columbia Corridor Association since 2004, combining his eclectic business, environmental and political experience. Corky works on a wide variety of issues affecting the economic prosperity of the largest economic corridor in Oregon, including transportation, land use, and natural resources. He helped establish and manages two business education programs: ResourceFull Use and the Groundwater Protection Program. From 1987 to 1998, Corky co-owned a whitewater outfitting company in northern California. During those years, he led efforts to combine business and environmental concerns into cooperative action. Dam construction and operation, government regulations and fees, law enforcement and development were targets for reform. Significant successes were achieved at the local, state and federal levels. In 1998, Corky managed a ballot measure campaign to protect small business interests. By working with environmental organizations, neighborhoods and businesses, the campaign won 65% of the vote. He went on to work in media and public outreach. He serves on the Portland Freight Committee, Columbia Slough Watershed Council, and Brownfield Redevelopment Coalition. He holds degrees in Biology and Geography from the University of Texas. Old awards include Eagle Scout; new awards include the Columbia Slough Watershed Council Leadership Award. Corky lives in North Portland within view of the St. Johns Bridge and Forest Park with his wife Sara and son Henry." ,
      } ,
      {
        id: 2 ,
        title: "Office Manager" ,
        name: "Marissa King" ,
        email: "mking@columbiacorridor.org" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481673230/Staff_Marissa-e1474957970362_mz1vh0.jpg" ,
        bio : "Marissa King has been the CCA Office Manager since 2000. She was previously employed at two Portland institutions, US Bank and Standard Insurance Company. She is a graduate of Southern Oregon University, with a Bachelor of Science in Psychology. With two children, Marissa spends most of her spare time shuttling between gymnastics competitions, baseball and football games, leaving just enough time for camping and hiking. Having grown up near the Columbia Corridor and being a graduate of Parkrose High School, Marissa has a natural interest in the growth and prosperity of the area." ,
      } ,
    ]

    this.setState({
      staff: staff
    })
  },

  setArchives () {
    var archives = [
      {
        title: "Public Opinion Climate in Portland" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426571/Public_Opinion_Climate_in_Portland_bvldfh.pdf" ,
        desc: "2011" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Street Paving" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426585/Portland_Street_Paving_Audit_r62740.pdf" ,
        desc: "A report from the city auditor." ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Portland Brownfield Redevelopment Assessment Summary of Findings" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426585/Portland_Street_Paving_Audit_r62740.pdf" ,
        desc: "Bureau of Planning and Sustainability" ,
        icon: "pdf file outline " ,
      } ,


      {
        title: "Portland's Seismic Vulnerabilities" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426592/Portland_s_Seismic_Vulnerabilities_pru7lb.pdf" ,
        desc: "City of Portland Water Bureau" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Permit Fee Comparison" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426595/Permit_fee_comparison_bqo6ll.pdf" ,
        desc: "Mackenzie" ,
        icon: "pdf file outline " ,
      } ,
      {
        title: "Freight Master Plan" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426601/Portland_Freight_Master_Plan_xwjulx.pdf" ,
        desc: "City Of Portland" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Nature In Neighborhoods Ordinance" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426602/Nature_in_Neighborhoods_Ordinance_mpxj1n.pdf" ,
        desc: "Before the metro council" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Map of Industrial Areas" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426621/Map_of_Industrial_Areas_n09tgk.pdf" ,
        desc: "Title 4 Industrial and Employment Areas" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Metro Brownfields Scoping Project" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426623/Metro_Brownfields_Scoping_Project_jjvl0r.pdf" ,
        desc: "November 12, 2012" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Brownfield Harbor ReDI" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426629/Harbor_ReDI_Brownfield_Report_ngzmb8.pdf" ,
        desc: "Milestone Report" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Cost of Doing Nothing" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426629/Harbor_ReDI_Hovee_Report_wzwvpe.pdf" ,
        desc: "Portland Harbor ReDI Demand Opportunities Analysis" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Portland Watershed Management Plan" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426629/Portland_Watershed_Management_Plan_njot4b.pdf" ,
        desc: "Actions for Watershed Health" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "River Plan/North Reach" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426625/River_Plan_Presentation_v6ycjx.pdf" ,
        desc: "Mayor Sam Adams" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Site Technical Assistance for a Municipal Project " ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426631/Harbor_ReDI_Analysis_k0m0lq.pdf" ,
        desc: "National Brownfield Association" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Don't just write off environmentally suspect properties" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426631/Financing_Dirty_Dirt_nwf1wf.pdf" ,
        desc: "Portland Business Journal" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Don't just write off environmentally suspect properties" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426631/Financing_Dirty_Dirt_nwf1wf.pdf" ,
        desc: "Portland Business Journal" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Prospective Purchaser Program Guidance" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426635/DEQ_Prospective_Purchaser_Program_yvipvb.pdf" ,
        desc: "Oregon’s Environmental Cleanup Law" ,
        icon: "pdf file outline " ,
      } ,

      {
        title: "Multnomah County Drainage Districts Issue Assessment" ,
        href: "http://res.cloudinary.com/djjldnjz7/image/upload/v1485426636/Drainage_Districts_Issue_Assessment_p5myk8.pdf" ,
        desc: "Center For Public Service" ,
        icon: "pdf file outline " ,
      } ,
    ]

    this.setState({
      archives : archives
    })
  }
});
