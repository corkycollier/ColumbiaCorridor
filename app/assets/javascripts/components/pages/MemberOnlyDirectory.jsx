const MemberOnlyDirectory = React.createClass({
  getInitialState () {
    var list = {};


    this.props.parent.state.members.forEach(function(el) {
      if (el.company_name) {
        if (!list[el.company_name]) {
          list[el.company_name]  = {
            id: el.id ,
            company_name: el.company_name ,
            company_website: el.company_website ,
          }
        }
      }
    })

    var final = []

    for (key in list) {
      final.push( list[key] )
    }


    var final2 = [
      {
        company_name: "3J Consulting Inc" ,
        company_website: "http://www.3jconsulting.com/" ,
      } ,

      {
        company_name: "Acme Storage Inc" ,
        company_website: "#" ,
      } ,

      {
        company_name: "Albina Community Bajnk" ,
        company_website: "http://www.albinabank.com/index.cfm" ,
      } ,

      {
        company_name: "AMEC Earth & Environmental" ,
        company_website: "http://www.amecfw.com/" ,
      } ,

      {
        company_name: "Arclin Surfaces Inc." ,
        company_website: "http://www.arclin.com/contact-us" ,
      } ,

      {
        company_name: "Apex Companies" ,
        company_website: "http://www.apexcos.com" ,
      } ,

      {
        company_name: "Black Helterline" ,
        company_website: "http://bhlaw.com/" ,
      } ,

      {
        company_name: "Bob Durgan Development" ,
        company_website: "#" ,
      } ,

      {
        company_name: "Boeing Portland" ,
        company_website: "http://boeing.com/" ,
      } ,

      {
        company_name: "Bridgewater Group Inc" ,
        company_website: "http://www.bridgeh2o.com/" ,
      } ,

      {
        company_name: "Broadmoor Golf Course" ,
        company_website: "http://broadmoorgolfcourse.com/" ,
      } ,

      {
        company_name: "Capacity Commercial Group" ,
        company_website: "http://capacitycommercial.com/" ,
      } ,

      {
        company_name: "Courtyard by Marriott" ,
        company_website: "#" ,
      } ,

      {
        company_name: "Pacific Continental Bank" ,
        company_website: "http://www.therightbank.com/" ,
      } ,

      {
        company_name: "CB Richard Ellis" ,
        company_website: "http://www.cbre.com/EN/Pages/Home.aspx" ,
      } ,

      {
        company_name: "City of Gresham" ,
        company_website: "http://greshamoregon.gov/" ,
      } ,

      {
        company_name: "City of Portland Transportation" ,
        company_website: "https://www.portlandoregon.gov/index.cfm?" ,
      } ,

      {
        company_name: "City of Portland BES" ,
        company_website: "http://www.portlandoregon.gov/bes/" ,
      } ,

      {
        company_name: "City of Roses Disposal & Recycling" ,
        company_website: "http://www.cityofrosesdisposal.com/" ,
      } ,

      {
        company_name: "City of Troutdale" ,
        company_website: "http://www.troutdaleoregon.gov/" ,
      } ,

      {
        company_name: "Columbia Steel Casting" ,
        company_website: "http://columbiasteel.com/" ,
      } ,

      {
        company_name: "Davis Wright Tremaine LLP" ,
        company_website: "http://dwt.com/" ,
      } ,

      {
        company_name: "Embassy Suites" ,
        company_website: "http://embassysuites1.hilton.com/en_US/es/hotel/PDXESES-Embassy-Suites-Portland-Airport-Oregon/index.do" ,
      } ,

      {
        company_name: "Evraz, Inc." ,
        company_website: "http://www.evrazna.com/LocationsFacilities/OregonSteel/tabid/153/Default.asp" ,
      } ,

      {
        company_name: "Exceed Enterprises Inc" ,
        company_website: "http://www.exceedpdx.com/" ,
      } ,

      {
        company_name: "Farwest Fibers" ,
        company_website: "http://farwestfibers.com/" ,
      } ,

      {
        company_name: "First Citizens Bank" ,
        company_website: "http://www.firstcitizens.com/" ,
      } ,

      {
        company_name: "GeoDesign, Inc." ,
        company_website: "http://geodesigninc.com/" ,
      } ,

      {
        company_name: "GeoEngineers Inc" ,
        company_website: "http://www.geoengineers.com/" ,
      } ,

      {
        company_name: "Graphic Packaging International Inc" ,
        company_website: "http://www.graphicpkg.com/NA/EN/Pages/Home.aspx " ,
      } ,

      {
        company_name: "Gresham Chamber of Commerce" ,
        company_website: "http://www.greshamchamber.org/" ,
      } ,

      {
        company_name: "Mackenzie" ,
        company_website: "http://www.mcknze.com/" ,
      } ,

      {
        company_name: "Halton Co" ,
        company_website: "#" ,
      } ,

      {
        company_name: "Harsch Investment Corp." ,
        company_website: "http://harsch.com/" ,
      } ,

      {
        company_name: "Henkels & McCoy, Inc." ,
        company_website: "http://henkels.com/" ,
      } ,

      {
        company_name: "Henningsen Cold Storage" ,
        company_website: "http://www.henningsen.com/portland_east.html" ,
      } ,

      {
        company_name: "House of Antique Hardware" ,
        company_website: "http://www.houseofantiquehardware.com/ " ,
      } ,

      {
        company_name: "Human Solutions" ,
        company_website: "http://www.humansolutions.org/" ,
      } ,

      {
        company_name: "J.R. Simplot Co." ,
        company_website: "http://simplot.com/" ,
      } ,

      {
        company_name: "Jubitz Corporation" ,
        company_website: "http://jubitz.com/" ,
      } ,

      {
        company_name: "Lamm Investments" ,
        company_website: "#" ,
      } ,

      {
        company_name: "Landau Associates Inc" ,
        company_website: "http://www.landauinc.com/" ,
      } ,

      {
        company_name: "Leatherman Tool Group" ,
        company_website: "http://www.leatherman.com/" ,
      } ,

      {
        company_name: "Lejar Enterprises" ,
        company_website: "http://www.jetexpedited.com/index.php" ,
      } ,

      {
        company_name: "Maul Foster & Alongi" ,
        company_website: "http://www.maulfoster.com/" ,
      } ,

      {
        company_name: "Metro" ,
        company_website: "http://www.oregonmetro.gov/" ,
      } ,

      {
        company_name: "Metro Metals Northwest" ,
        company_website: "http://metrometalsnw.com/" ,
      } ,

      {
        company_name: "Mt. Hood Community College" ,
        company_website: "http://www.mhcc.edu/" ,
      } ,

      {
        company_name: "Multnomah County Drainage" ,
        company_website: "http://www.mcdd.org/" ,
      } ,

      {
        company_name: "Myers Container LLC" ,
        company_website: "http://www.myerscontainer.com/ " ,
      } ,

      {
        company_name: "Norris & Stevens, Inc." ,
        company_website: "http://www.norris-stevens.com/index.html" ,
      } ,

      {
        company_name: "Northside Ford Truck Group" ,
        company_website: "http://northsidetrucks.com/" ,
      } ,

      {
        company_name: "Northwest Natural" ,
        company_website: "https://www.nwnatural.com/index.asp" ,
      } ,

      {
        company_name: "Northwest Regional Re-Entry Center" ,
        company_website: "http://www.nw-rrc.org/" ,
      } ,

      {
        company_name: "The Tire Factory " ,
        company_website: "http://tirefactory.com/" ,
      } ,

      {
        company_name: "Oregon Humane Society" ,
        company_website: "http://www.oregonhumane.org/index.asp" ,
      } ,

      {
        company_name: "Oregon Food Bank" ,
        company_website: "http://www.oregonfoodbank.org/?c=130570983984480273" ,
      } ,

      {
        company_name: "Oregon Transfer Co" ,
        company_website: "http://oregontransfer.com/" ,
      } ,

      {
        company_name: "OTAK, Inc." ,
        company_website: "http://www.otak.com/" ,
      } ,

      {
        company_name: "Owens Illinois" ,
        company_website: "http://www.owens-ill.com/" ,
      } ,

      {
        company_name: "P & C Construction" ,
        company_website: "http://www.builtbypandc.com/" ,
      } ,

      {
        company_name: "PacifiCorp" ,
        company_website: "http://www.pacificorp.com/index.html" ,
      } ,

      {
        company_name: "PacTrust" ,
        company_website: "http://www.pactrust.com/" ,
      } ,

      {
        company_name: "Parametrix" ,
        company_website: "http://www.parametrix.com/ " ,
      } ,

      {
        company_name: "Pavement Maintenance Inc" ,
        company_website: "http://portlandpavement.iarbiz.com/hSihjk%7CeKtM=" ,
      } ,

      {
        company_name: "PBS Engineering and Environmental" ,
        company_website: "http://www.pbsenv.com/" ,
      } ,

      {
        company_name: "Perlo Construction" ,
        company_website: "http://www.perlo.biz/" ,
      } ,

      {
        company_name: "Port of Portland" ,
        company_website: "http://portofportland.com/" ,
      } ,

      {
        company_name: "Portland Business Alliance" ,
        company_website: "http://www.portlandalliance.com/" ,
      } ,

      {
        company_name: "Portland Development Commssion" ,
        company_website: "http://pdc.us/" ,
      } ,

      {
        company_name: "Portland General Electric" ,
        company_website: "http://www.pgn.com/Default.asp?bhcp=1" ,
      } ,

      {
        company_name: "Portland Habilitation Center, Inc." ,
        company_website: "http://www.phcnw.com/" ,
      } ,

      {
        company_name: "PPV Inc/ Bravo Environmental" ,
        company_website: "http://www.bravoenvironmental.com/" ,
      } ,

      {
        company_name: "Prologis" ,
        company_website: "http://www.prologis.com/en/index.html" ,
      } ,

      {
        company_name: "Radisson Hotel" ,
        company_website: "http://www.radisson.com/portland-hotel-or-97218/portarpt" ,
      } ,

      {
        company_name: "Rainier Group I, LLC" ,
        company_website: "http://hansetcorp.com/about" ,
      } ,

      {
        company_name: "Republic Services" ,
        company_website: "http://www.republicservices.com/corporate/home.aspx" ,
      } ,

      {
        company_name: "River City Environmental" ,
        company_website: "http://www.rivercityusa.com/" ,
      } ,

      {
        company_name: "Riverside Golf & Country Club" ,
        company_website: "http://riversidegcc.com/" ,
      } ,

      {
        company_name: "Sapa Profiles Inc" ,
        company_website: "http://www.sapagroup.com/us/Company-sites/Sapa-Profiles-Inc---Portland/" ,
      } ,

      {
        company_name: "Schnitzer Investment Corp." ,
        company_website: "http://www.schnitzersteel.com/" ,
      } ,

      {
        company_name: "Sheraton Portland Airport Hotel" ,
        company_website: "http://www.starwoodhotels.com/sheraton/search/hotel_detail.html?propertyID=881" ,
      } ,

      {
        company_name: "Skanska USA Building" ,
        company_website: "http://www.usa.skanska.com/about-skanska/our-geographic-markets/portland/" ,
      } ,

      {
        company_name: "Skyport Properties" ,
        company_website: "#" ,
      } ,

      {
        company_name: "Sussman Shank LLP" ,
        company_website: "https://www.sussmanshank.com/ " ,
      } ,

      {
        company_name: "Tarr LLC" ,
        company_website: "http://tarrllc.com/" ,
      } ,

      {
        company_name: "The PPI Group" ,
        company_website: "http://theppigroup.com/" ,
      } ,

      {
        company_name: "Three Oaks Development" ,
        company_website: "http://threeoaks.com/" ,
      } ,

      {
        company_name: "TMT Development" ,
        company_website: "http://www.tmtdevelopment.com/" ,
      } ,

      {
        company_name: "Trammell Crow Company" ,
        company_website: "http://trammellcrow.com/" ,
      } ,

      {
        company_name: "TriMet" ,
        company_website: "http://trimet.org/" ,
      } ,

      {
        company_name: "Tweitmeyer Properties LLC" ,
        company_website: "#" ,
      } ,

      {
        company_name: "Union Pacific" ,
        company_website: "http://www.up.com/" ,
      } ,

      {
        company_name: "United Salad" ,
        company_website: "http://www.unitedsalad.com/" ,
      } ,

      {
        company_name: "Vancouver Energy Distribution Terminal" ,
        company_website: "http://www.vancouverenergyusa.com/" ,
      } ,

      {
        company_name: "Verde, Living Cully" ,
        company_website: "http://www.verdenw.org/" ,
      } ,

      {
        company_name: "Walsh Trucking Co. LTD." ,
        company_website: "http://www.walshtruckingco.com/about.php" ,
      } ,

      {
        company_name: "Waste Management" ,
        company_website: "http://www.wmnorthwest.com/" ,
      } ,

      {
        company_name: "Western Container Transport" ,
        company_website: "https://westerncontainertrucking.wordpress.com/ " ,
      } ,

      {
        company_name: "WorkSystems Inc" ,
        company_website: "http://www.worksystems.org/" ,
      } ,
    ]

    return ({
      members: final.concat(final2)
    })
  },
  componentDidMount() {

    $('.ui.container').transition({
        animation  : 'fade in' ,
        duration   : '0.8s'    ,
      });
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
        }}>

        <h1 style={{ "marginBottom" : "36px" , }}>
          Member Directory
        </h1>

        {
          this.state.members.map(function(el, idx) {
            if (el.company_name == "Admin" ) {return;}
            
            return(
              <div style={{
                  "fontSize" : "20px" ,
                  "margin" : "18px 0px" ,
                  "letterSpacing" : "1.1px" ,
                }} key={ "mod" + idx }>
                <a href={ el.company_website } target="blank" style={{ "color" : "#262262" , }}>
                  <i>
                    { el.company_name }
                  </i>
                </a>
              </div>
            )
          })
        }

      </div>
    )
  }
});
