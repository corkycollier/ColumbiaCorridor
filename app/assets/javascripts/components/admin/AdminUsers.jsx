
const AdminUsers = React.createClass({
  getInitialState () {
    return({
      members: this.props.parent.state.members
    })
  },


  componentDidMount() {
    $('table').tablesort();
  },

  delete (e) {
    if ( e.currentTarget.dataset.id == "Admin" ) {
      alert('You cannot remove that user.')
      return;
    } else {
      var sure = confirm('Are you sure?');
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
        });
      } // if (sure)
    }
  },

  edit (e) {
    Backbone.history.navigate(
      '/edit/user/' + e.currentTarget.dataset.id
      , { trigger : true }
    )
  },

  render() {

    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "marginBottom" : "40px" ,
          "padding" : "25px 0px" ,
        }}>

        <Admin />

        <h2>
          Admin: Users
        </h2>


        <table className="ui table" style={{ "color" : "#262262" , }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.members.map( (el) => {
                return(
                  <tr key={ "adminUsers" + el.id }>
                    <td>
                      { el.first_name + " " + el.last_name }
                    </td>

                    <td>
                      <a href={"mailto:" + el.email} style={{ "color" : "#262262" , }}>
                        { el.email }
                      </a>
                    </td>

                    <td>
                      { el.phone }
                    </td>

                    <td>
                      <div>
                        { el.user_address || ""}
                      </div>

                      <div>
                        { el.user_city || "" + ", " + el.user_state || ""  + " " + el.user_zip || "" }
                      </div>
                    </td>

                    <td className="collapsing">
                      <a href={ el.company_website } target="_blank" style={{ "color" : "#262262" , }}>
                        { el.company_name }
                      </a>

                    </td>

                    <td className="collapsing">
                      <a
                        data-id={el.id}
                        style={{ "marginRight" : "8px" }}
                        onClick={ this.edit }
                        >
                        edit
                      </a>

                      <a
                        data-id={el.id}
                        onClick={ this.delete }
                        >
                        delete
                      </a>

                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


        <a href="#admin" className="ui button left labeled icon small" style={{ "marginTop" : "18px" , }}>
          <i className="left caret icon"></i>
          Back
        </a>
      </div>
    );
  }
});
