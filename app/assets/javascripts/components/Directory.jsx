const Directory = React.createClass({
  getInitialState () {

    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
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
        <h2>
          Directory
        </h2>


        <table className="ui single striped line table" style={{"color":"#262262"}}>
          <thead>
            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>State</th>

              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            {
              this.props.parent.state.members.map((el) => {
                return (
                  <tr key={ el.id }>

                    <td className="collapsing">
                      { el.first_name + " " + el.last_name }
                    </td>

                    <td className="collapsing">
                      { el.email }
                    </td>

                    <td className="collapsing">
                      { el.phone }
                    </td>

                    <td className="collapsing">
                      { el.user_state }
                    </td>

                    <td className="collapsing">
                      { el.company_name }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
});
