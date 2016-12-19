const CMemberArea = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "60px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1>
          Member Area
        </h1>

        <h3>
          My Profile
        </h3>

        <div className="ui grid doubling stackable">
          <div className="eight wide column">
            <i>profile</i>
          </div>

          <div className="eight wide column">
            <i>profile</i>
          </div>
        </div>

        <div className="ui divider">
        </div>


        <MemberDirectory parent={ this.props.parent } />
      </div>
    )
  }
});

const MemberDirectory = React.createClass({
  getInitialState () {

    var style = {
      "color" : "#262262" ,
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
      <div className="" style={this.state.style}>
        <h3>
          Member Directory
        </h3>


        <table className="ui single striped line table" style={{"color":"#262262"}}>
          <thead>
            <tr>
              <th>
                Level
              </th>

              <th>
                Name
              </th>

              <th>
                Email
              </th>

              <th>
                Phone
              </th>

              <th>
                State
              </th>

              <th>
                Company
              </th>
            </tr></thead>
            <tbody>
              {
                this.props.parent.state.user.members.map((el) => {
                  return (
                    <tr key={ el.id }>

                      <td className="collapsing">
                        level 
                      </td>

                      <td className="collapsing">
                        { "firstname" + " " + "lastname" + " - " + "(" + "username" + ")" }
                      </td>

                      <td className="collapsing">
                        { el.email }
                      </td>

                      <td className="collapsing">
                        phone
                      </td>

                      <td className="collapsing">
                        state
                      </td>

                      <td className="collapsing">
                        company
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>

          <div className="ui divider">
          </div>
        </div>
      )
    }
  });
