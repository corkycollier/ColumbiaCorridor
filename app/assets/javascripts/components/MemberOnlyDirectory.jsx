const MemberOnlyDirectory = React.createClass({

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
        }}>

        <h1 style={{ "marginBottom" : "36px" , }}>
          Member Directory
        </h1>

        <div className="member-mods" >
          {
            this.props.parent.state.members.map(function(el) {
              if (el.private) {
                return
              } else {
                return(
                  <div style={{
                      "fontSize" : "20px" ,
                      "margin" : "40px 0px" ,
                      "letterSpacing" : "1.1px" ,
                    }} key={ "mod" + el.id }>
                    <a href={ el.company_website } target="blank" style={{ "color" : "#262262" , }}>
                      { el.company_name }
                    </a>
                  </div>
                )
              }

            })
          }
        </div>
      </div>
    )
  }
});
