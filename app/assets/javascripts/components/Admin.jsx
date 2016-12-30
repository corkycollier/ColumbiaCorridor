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
  getInitialState () {
    return({
      members: this.props.parent.state.members
    })
  },

  componentDidMount() {
    $('table').tablesort();
  },

  setDelete (e) {
    if ( e.currentTarget.dataset.id < 3 ) {
      alert('You cannot remove that user.')
      return;
    } else {
      var sure = confirm('Are you sure?')
      if (sure) {
        $.ajax({
          url: '/api/users/' + e.currentTarget.dataset.id ,
          type: 'DELETE' ,
          success: function(model, resp, obj) {
            this.setState({
              members: model.members
            })

          }.bind(this), error: function (a, b, c) {
            alert('There was an error') ;
          }
        })

      }
    }
  },

  setEdit() {
  },

  render() {

    return (
      <div className="">
        <h2 className="ui header">
          Users
        </h2>
        <table className="ui table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Company</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.members.map( (el) => {
                return(
                  <tr key={ "adminUsers" + el.id }>

                    <td className="collapsing">
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
                      <a href={"http://maps.google.com/?q=" + el.user_address + ", " + el.user_city + ", " + el.user_state + " " + el.user_zip } target="_blank" >
                        <div className="ui basic icon button">
                          <i className="home icon"></i>
                        </div>
                      </a>

                    </td>

                    <td>
                      <a href={"http://maps.google.com/?q=" + el.company_address + " " + el.company_city + " " + el.company_state + " " + el.company_zip } target="_blank" >
                        <h5>
                          { el.company_name }
                        </h5>
                      </a>
                    </td>

                    <td>
                      <select value={ el.level || ""} onChange={ this.setDelete }>
                        <option value="">
                        </option>

                        <option value="Admin">
                          admin
                        </option>

                        <option value="Discount">
                          discount
                        </option>

                        <option value="Standard">
                          standard
                        </option>

                        <option value="Foundational">
                          foundational
                        </option>
                      </select>

                      <a data-id={el.id} onClick={ this.setEdit } style={{ "margin" : "0px 4px" ,}}>
                        edit
                      </a>

                      <a data-id={el.id} onClick={ this.setDelete }>
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
    );
  }
})
