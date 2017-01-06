
const AdminNews = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "marginBottom" : "40px" ,

    }

    return({
      style: style,
    })
  },

  deleteNew() {
    var confirmDelete = confirm('Are you sure?');
    if ( confirmDelete ) {
      $.ajax({
        url: 'api/events/'
      })
    }
  },

  goToMakeNew () {
    Backbone.history.navigate('make-event', { trigger : true } )
  },

  render() {
    return (
      <div style={ this.state.style }>
        <h2 className="ui header">
          News
        </h2>

        <table className="ui table">
          <thead>
            <tr>
              <th className="collapsing">ID</th>
              <th>Title</th>
                <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              this.props.parent.state.events.map( (el) => {
                return(
                  <AdminNewsRow event={ el } key={ el.id } />
                )
              })
            }
          </tbody>

          <tfoot>
            <tr>
              <th colSpan="6" onClick={ this.goToAdminNewUser }>
                <div className="ui button blue" onClick={ this.goToMakeNew }>
                  New news
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
});

const AdminNewsRow = React.createClass({

  deleteNew() {
    var confirmDelete = confirm('Are you sure?');
    if ( confirmDelete ) {
      $.ajax({
        url: 'api/events/'
      })
    }
  },

  goToMakeNew () {
    Backbone.history.navigate('make-event', { trigger : true } )
  },

  render() {
    return (
      <tr>
        <td style={{ "textAlign" : "center" ,}}>
          { this.props.event.id }
        </td>

        <td>
          { this.props.event.title }
        </td>

        <td>
        </td>

        <td className="collapsing">
          <a onClick={ this.deleteNew }>
            delete
          </a>
        </td>
      </tr>
    );
  }
});
