const AdminEvents = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "marginBottom" : "40px" ,
    }

    return({
      style: style,
      events : this.props.parent.state.events ,
    })
  },

  goToMakeEvent () {
    Backbone.history.navigate('make-event', { trigger : true } )
  },



  render() {
    return (
      <div style={ this.state.style }>
        <h2 className="ui header">
          Events
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
              this.state.events.map( (el) => {
                return(
                  <AdminEventsRow event={ el } key={ el.id } parent={ this.props.parent } mom={this} />
                )
              }.bind(this))
            }
          </tbody>

          <tfoot>
            <tr>
              <th colSpan="6">
                <div className="ui button blue" onClick={ this.goToMakeEvent }>
                  New Event
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
});

const AdminEventsRow = React.createClass({
  delete () {
    var confirmDelete = confirm('Are you sure?');
    if ( confirmDelete ) {
      $.ajax({
        url: 'api/events/' + this.props.event.id ,
        type: "DELETE",
        success: function (app_data, resp, obj) {
          this.props.parent.setState(app_data)
          this.props.mom.setState({
            events: app_data.events
          })
        }.bind(this), error: function (a, b, c) {
          alert('There was an error.')
        }
      })
    }
  },

  goToEvent () {
    Backbone.history.navigate('events/' + this.props.event.id , {trigger : true })
  },

  render() {
    return (
      <tr>
        <td style={{ "textAlign" : "center" ,}}>
          { this.props.event.id }
        </td>

        <td onClick={ this.goToEvent }>
          { this.props.event.title }
        </td>

        <td>
        </td>


        <td className="collapsing">
          <a
            data-id={this.props.event.id}
            onClick={ this.delete }
            >
            delete
          </a>
        </td>
      </tr>
    );
  }
});
