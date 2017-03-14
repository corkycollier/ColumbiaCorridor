const AdminEvents = React.createClass({
  getInitialState () {

    return({
      events : this.props.parent.state.events ,
    })
  },

  componentDidMount() {
    $('table').tablesort();
  },

  render() {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "marginBottom" : "40px" ,
          "padding" : "25px 0px" ,
          "position" : "relative" ,
        }}>

        <Admin />

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
                <th>Start</th>
                <th>End</th>
                <th>Location</th>
                <th>Event type</th>
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

  render() {

    var dateString = this.props.event.date.slice(5, 7) + "/" + this.props.event.date.slice(8) + "/" + this.props.event.date.slice(0, 4);
    if (dateString[0] == "0") {
      dateString = dateString.slice(1);
    }

    var startString = this.props.event.start;

    if (startString[0] == "0") {
      startString = startString.slice(1);
    }
    if ( parseInt(startString.split(":")[0]) < 12 ) {
      startString += " AM"
    } else {
      startString += " PM"
    }

    startString[0] = parseInt(startString[0]) % 12


    var endString = this.props.event.end;

    if (endString[0] == "0") {
      endString = endString.slice(1);
    }
    if ( parseInt(endString.split(":")[0]) < 12) {
      endString += " AM"
    } else {
      endString += " PM"
    }

    endString[0] = parseInt(endString[0]) % 12


    return (
      <tr>
        <td >
          <a href={"#event/" +  this.props.event.id} dangerouslySetInnerHTML={{ __html: this.props.event.basic_title }}>
          </a>
        </td>

        <td className="collapsing">
          { dateString }
        </td>

        <td className="collapsing">
          { startString }
        </td>

        <td className="collapsing">
          { endString }
        </td>

        <td>
          { this.props.event.location }
        </td>

        <td className="collapsing">
          { this.props.event.event_type }
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
