const Directory = React.createClass({
  getInitialState () {

    var style = {
      "color" : "#262262" ,
      "padding" : "30px 20px" ,
      "minHeight" : "50vh" ,
      "minHeight" : "74vh" ,
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
              <th className='table-column-sortable'>Contact <i className="sort icon"></i></th>
              <th className='table-column-sortable'>Email <i className="sort icon"></i></th>
              <th className='table-column-sortable' style={{ "minWidth" : "168px" , }}>Phone <i className="sort icon"></i></th>
              <th className='table-column-sortable'>Company <i className="sort icon"></i></th>
              <th className='table-column-sortable' style={{ "minWidth" : "90px" , }}>NAICS <i className="sort icon"></i></th>
            </tr>
          </thead>

          <tbody>
            {
              this.props.parent.state.members.map((el) => {

                if (el.private) {
                  return;
                } else {
                  return (
                    <tr key={ el.id }>

                      <td className="collapsing">
                        { el.first_name + " " + el.last_name }
                      </td>

                      <td>
                        <a href={ "mailto:" + el.email }>
                          { el.email }
                        </a>
                      </td>

                      <td>
                        <a href={ "tel:" + el.phone }>
                          { el.phone }
                        </a>
                      </td>


                      <td className="collapsing">
                        <a href={el.company_website} target="_blank" >
                          { el.company_name }
                        </a>

                      </td>

                      <td className="collapsing">
                        { el.company_business_type }
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
