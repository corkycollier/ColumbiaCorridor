const Directory = React.createClass({
  getInitialState () {

    var style = {
      "color" : "#262262" ,
      "padding" : "30px 20px" ,
      "minHeight" : "50vh" ,
      "marginBottom" : "60px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {
    $('table').tablesort();
  },

  render () {

    return (
      <div className="ui container" style={this.state.style}>
        <h1>
          Directory
        </h1>

        <table className="ui single striped line table" style={{"color":"#262262"}}>
          <thead>
            <tr>
              <th>Contact</th>

              <th>Email</th>

              <th>Phone</th>


              <th>Company</th>
              <th>NAICS</th>

            </tr>
          </thead>

          <tbody>
            {
              this.props.parent.state.members.map((el) => {
                var businessType;
                if ( el.company_business_type ) {
                  businessType = el.company_business_type.split(': ')[1] || "Unknown"
                }

                if (el.private) {
                  return;
                } else {
                  return (
                    <tr key={ el.id }>

                      <td>
                        { el.first_name + " " + el.last_name }
                      </td>

                      <td>
                        { el.email }
                      </td>

                      <td>
                        { el.phone }
                      </td>



                      <td className="collapsing">
                        <a href={el.company_website} target="_blank" style={{ "color" : "#262262" , }}>
                          { el.company_name }
                        </a>

                      </td>

                      <td className="collapsing">
                        { businessType }
                      </td>
                    </tr>
                  )
                }

              })
            }
            </tbody>
          </table>
        </div>
      )
    }
  });
