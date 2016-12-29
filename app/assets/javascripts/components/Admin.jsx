const Admin = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {
  },

  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <AdminUsers parent={ this.props.parent } />
      </div>
    )
  }
});


const AdminUsers = React.createClass({
  getInitialState() {

    return ({
      users :  this.props.parent.state.members
    })
  },

  componentDidMount() {
    $('table').tablesort();
  },

  render() {
    debugger
    return (
      <div className="">
        <table className="ui table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
              {
                this.state.users.map( (el) => {
                  return(
                    <tr key={ "adminUsers" + el.id }>
                      <td>
                        { el.username }
                      </td>

                      <td>
                        { el.first_name + " " + el.last_name }
                      </td>

                      <td>
                        { el.email }
                      </td>

                      <td>
                        { el.phone }
                      </td>

                      <td>
                        {
                          el.user_address + ", " + el.user_city + ", " + el.user_state + " " + el.user_zip
                        }
                      </td>

                      <td>
                        <h5>
                          <a href="#">
                            { el.company_name }
                          </a>
                        </h5>
                        {
                          el.company_address + ", " + el.company_city + ", " + el.company_state + " " + el.company_zip
                        }
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
      </div>
    );
  }
})
