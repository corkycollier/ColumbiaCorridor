const Archives = React.createClass({
  getInitialState () {
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

    return({
      archives: archives,
    })
  },

  componentDidMount () {

  },


  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
        }}>

        <h2>
          Archives
        </h2>

        <div >
          <table className="ui table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.archives.map(function(el, idx) {
                  return (
                    <tr className="card" key={ "go" + idx }>
                      <td>
                        <i className={el.icon + " icon"}></i>
                      </td>

                      <td>
                        <a href={ el.href } target="_blank">
                          { el.title }
                        </a>
                      </td>

                      <td className="collapsing">
                        <a data-id={el.id} style={{ "marginRight" : "8px" }} onClick={ this.edit } >
                          edit
                        </a>

                        <a data-id={el.id} onClick={ this.delete }>
                          delete
                        </a>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});
