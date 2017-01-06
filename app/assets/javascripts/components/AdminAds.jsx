
const AdminAds = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "marginBottom" : "40px" ,
    }

    return({
      style: style,
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
      <div className="" style={ this.state.style }>
        <h2 className="ui header">
          Ads
        </h2>
        <table className="ui table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.members.map( (el) => {
                return(
                  <tr key={ "adminUsers" + el.id }>

                    <td className="collapsing" style={{ "textAlign" : "center" ,}}>
                      { el.id }
                    </td>

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

                    <td className="collapsing">
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
});
