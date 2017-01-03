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

  goToMakeEvent () {
    Backbone.history.navigate('make-event', { trigger : true } )
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <AdminUsers parent={ this.props.parent } />

        <div className="ui button blue" onClick={ this.goToMakeEvent }>
          Make event
        </div>
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

  goToAdminNewUser () {
    Backbone.history.navigate( 'new-user-admin' , { trigger : true } )
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
              <th>Level</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.members.map( (el) => {
                return(
                  <tr key={ "adminUsers" + el.id }>

                    <td >
                      { el.username }
                    </td>

                    <td>
                      { el.first_name + " " + el.last_name }
                    </td>

                    <td >
                      { el.email }
                    </td>

                    <td  className="collapsing">
                      { el.phone }
                    </td>


                    <td  className="collapsing">
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


                    </td>
                    <td className="collapsing">
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

          <tfoot>
            <tr>
              <th colSpan="6" onClick={ this.goToAdminNewUser }>
                <div className="ui button blue">
                  New
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
});
