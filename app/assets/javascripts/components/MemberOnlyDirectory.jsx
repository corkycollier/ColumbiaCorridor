const MemberOnlyDirectory = React.createClass({
  componentDidMount() {
    $('.member-mods').isotope({
      itemSelector: '.member-mod'
    })
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
        }}>

        <h1>
          Members
        </h1>
        <div className="member-mods">
          {
            this.props.parent.state.members.map(function(el) {
              return(
                <div className="member-mod" key={ "mod" + el.id } style={{
                    "textAlign" : "center" ,
                    "padding" : "4vw" ,
                    "paddingTop" : "2vw" ,
                  }}>

                  <div style={{ "marginBottom" : "8px" , }}>
                    <b>
                      { el.first_name + " " + el.last_name }
                    </b>
                  </div>


                  <i> {el.company_name } </i>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
});
