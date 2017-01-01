const MakeEvent = React.createClass({
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
    $('#text-area').froalaEditor();
    $('.checkbox').checkbox();
  },

  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  updateBody(e) {
    var state = this.state;
    state['body'] = $('.fr-view').html() ;
    this.setState( state );
  },

  handleSave () {
    var confirmation = confirm("Are you sure?")
    if ( confirmation ) {
      $.ajax({
        url: '/api/events',
        type: 'POST',
        data: { event: this.state },
        success: function (event, resp, obj) {
          alert('Event #' + event.id + " was created. ")
          Backbone.history.navigate('admin', { trigger: true })
        }.bind(this), error: function (a, b, c) {
          alert("There was an error. Event was not created.")
        }
      })
    }
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1 className="ui header" style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          New Event
        </h1>

        <form className="ui form" onSubmit={ this.handleSave }>
          <div className="field">
            <label>Title</label>
            <input type="text" data-field="title" onChange={ this.updateState } value={ this.state.title }/>
          </div>

          <div className="field" onBlur={ this.updateBody } >
            <label>Body</label>
            <textarea id="text-area"></textarea>
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" data-field="date" onChange={ this.updateState } />
          </div>

          <div className="field">
            <div className="ui checkbox" data-field="allDay" onChange={ this.updateState }>
              <input type="checkbox" tabIndex="0" className="hidden" />
              <label>All day</label>
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Start</label>
              <input type="time" data-field="start" onChange={ this.updateState } />
            </div>

            <div className="field">
              <label>End</label>
              <input type="time" data-field="end" onChange={ this.updateState }  />
            </div>
          </div>

          <div className="field">
            <label>Location</label>
            <input type="text" data-field="location" onChange={ this.updateState } />
          </div>

          <div className="field">
            <label>Event Url</label>
            <input type="text" data-field="url" onChange={ this.updateState } />
          </div>

          <div className="field" >
            <label>Event type</label>
            <select className="ui select dropdown" data-field="event_type" onChange={ this.updateState } >
              <option value=""></option>
              <option value="Breakfast forums">Breakfast forums</option>
              <option value="Special Events">Special Events</option>
              <option value="Lunch w/ leaders">Lunch w/ leaders</option>
              <option value="ResourceFULL Use Workshops">ResourceFULL Use Workshops</option>
              <option value="Tours & Member Exchanges">Tours & Member Exchanges</option>
            </select>
          </div>


          <button type="submit" className="ui button" style={{ "background" : "#262262" , "color" : "white" }}>
            Create Event
          </button>
        </form>
      </div>
    )
  }
});
