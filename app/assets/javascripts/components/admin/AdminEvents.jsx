const AdminEvents = React.createClass({
  getInitialState () {

    return({
      events : this.props.parent.state.events ,
    })
  },

  render() {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "marginBottom" : "40px" ,
          "padding" : "25px 0px" ,
          "position" : "relative" ,
        }}>

        <h2>
          Admin: Events
        </h2>


        <a href="#make-event" className="ui button small blue">
          New
        </a>

          <table className="ui table" style={{ "color" : "#262262" , }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th className="collapsing">Start</th>
                <th>End</th>
                <th className="collapsing">Action</th>
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

          </table>

        <a href="#admin" className="ui button left labeled icon small" style={{ "marginTop" : "18px" , }}>
          <i className="left caret icon"></i>
          Back
        </a>
      </div>
    );
  }
});

const AdminEventsRow = React.createClass({

  edit () {
    Backbone.history.navigate('edit/event/' + this.props.event.id , { trigger : true } )
  },

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
    Backbone.history.navigate('event/' + this.props.event.id , {trigger : true })
  },

  render() {
    return (
      <tr>
        <td onClick={ this.goToEvent }>
          { this.props.event.title }
        </td>

        <td>
          { this.props.event.date }
        </td>

        <td>
          { this.props.event.start }
        </td>

        <td>
          { this.props.event.end }
        </td>
        <td>
          <a
            data-id={this.props.event.id}
            style={{ "marginRight" : "8px" }}
            onClick={ this.edit }
            >
            edit
          </a>
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
