const MemberOnlyDirectory = React.createClass({
  getInitialState () {
    var list = {}
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

    return ({
      list : final
    })
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

        <div className="ui grid">
          <div className="eight wide column">
            <div className="member-mods" >
              {
                this.state.list.map(function(el) {

                  return(
                    <div style={{
                        "fontSize" : "20px" ,
                        "margin" : "12px 0px" ,
                        "letterSpacing" : "1.1px" ,
                      }} key={ "mod" + el.id }>
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
          </div>

          <div className="eight wide column">
          </div>


        </div>

      </div>
    )
  }
});
