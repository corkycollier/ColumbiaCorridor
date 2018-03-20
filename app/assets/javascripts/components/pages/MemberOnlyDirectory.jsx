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

    final.sort(function(a, b){
      return a.company_name.localeCompare(b.company_name)
    });

    // Returns unqiue companies sorted by company names.
    return ({
      members: final
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
