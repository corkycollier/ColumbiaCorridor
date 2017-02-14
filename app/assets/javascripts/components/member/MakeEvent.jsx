const MakeEvent = React.createClass({

  componentDidMount () {
    $('#text-area').froalaEditor();
    $('.checkbox').checkbox();
    $('.dropdown').dropdown();
  },

  updateState(e) {
    var state = this.state || {};
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
        success: function (app_data, resp, obj) {
          this.props.parent.setState( app_data )
          alert("An event was created.")
          Backbone.history.navigate( "admin/events" , { trigger : true } );
        }.bind(this), error: function (a, b, c) {
          alert("There was an error.")
          Backbone.history.navigate( "admin/events" , { trigger : true } );
        }
      })
    }
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "25px" ,
          "paddingBottom" : "125px" ,
        }}>

        <h1 className="ui header" style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          New Event
        </h1>

        <form className="ui form" onSubmit={ this.handleSave }>
          <div className="field">
            <label>Title</label>
            <input type="text" data-field="title" onChange={ this.updateState } />
          </div>

          <div className="field" onBlur={ this.updateBody } >
            <label>Body</label>
            <textarea id="text-area"></textarea>
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" data-field="date" onChange={ this.updateState } />
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
            <input type="text" data-field="location" onChange={ this.updateState }></input>
            <label style={{ "marginTop" : "12px" , }}>Past locations</label>
            <select className="ui search dropdown" data-field="location" onChange={ this.updateState }>
              <option></option>
              {
                this.props.parent.state.event_locations.map(function(el) {
                  return(
                    <option value={el} key={el}>
                      { el }
                    </option>
                  )
                })
              }
            </select>

          </div>

          <div className="field">
            <label>Event Url</label>
            <input type="text" data-field="url" onChange={ this.updateState } />
          </div>

          <div className="field" >
            <label>Event type</label>
            <select className="ui select dropdown" data-field="event_type" onChange={ this.updateState } >
              <option value=""></option>
              <option value="Breakfast Forums">Breakfast Forums</option>
              <option value="Special Events">Special Events</option>
              <option value="Lunch w/ Leaders">Lunch w/ Leaders</option>
              <option value="ResourceFULL Use Workshops">ResourceFULL Use Workshops</option>
              <option value="Tours & Member Exchanges">Tours & Member Exchanges</option>
            </select>
          </div>

          <div className="field">
            <label>Paypal Form</label>
            <textarea type="text" data-field="paypal" onChange={ this.updateState }></textarea>
          </div>

          <button type="submit" className="ui button" style={{ "background" : "#262262" , "color" : "white" }}>
            Create Event
          </button>
        </form>
      </div>
    )
  }
});


const EditEvent = React.createClass({
  getInitialState () {

    return(this.props.event || {})
  },

  componentDidMount () {
    $('#text-area').froalaEditor();
    $('.checkbox').checkbox();
    $('.dropdown').dropdown();
  },

  updateState(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  updateBody(e) {
    var state = this.state || {};
    state['body'] = $('.fr-view').html() ;
    this.setState( state );
  },

  handleSave () {
    var confirmation = confirm("Are you sure?")
    if ( confirmation ) {
      $.ajax({
        url: '/api/events/' + this.state.id ,
        type: 'PATCH',
        data: { event: this.state },
        success: function (app_data, resp, obj) {
          this.props.parent.setState( app_data )
          Backbone.history.navigate( 'admin/events' , { trigger : true } );
        }.bind(this), error: function (a, b, c) {
          alert("There was an error. Try again later.")
          Backbone.history.navigate( 'admin/events' , { trigger : true } );
        }
      })
    }
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "25px" ,
          "paddingBottom" : "125px" ,
        }}>

        <h1 className="ui header" style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          Edit Event
        </h1>

        <form className="ui form" onSubmit={ this.handleSave }>
          <div className="field">
            <label>Title</label>
            <input type="text" data-field="title" onChange={ this.updateState } defaultValue={this.props.event.title} />
          </div>

          <div className="field" onBlur={ this.updateBody } >
            <label>Body</label>
            <textarea id="text-area" defaultValue={this.props.event.body}></textarea>
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" data-field="date" onChange={ this.updateState } defaultValue={this.props.event.date} />
          </div>

          <div className="field" style={{ "display" : "none" ,}}>
            <div className="ui checkbox" data-field="allDay" onChange={ this.updateState }>
              <input type="checkbox" tabIndex="0" className="hidden" />
              <label>All day</label>
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Start</label>
              <input type="time" data-field="start" onChange={ this.updateState }  defaultValue={this.props.event.start}/>
            </div>

            <div className="field">
              <label>End</label>
              <input type="time" data-field="end" onChange={ this.updateState } defaultValue={this.props.event.end}  />
            </div>
          </div>

          <div className="field">
            <label>Location</label>
            <input type="text" data-field="location" onChange={ this.updateState } defaultValue={this.props.event.location} ></input>
            <label style={{ "marginTop" : "12px" , }}>Past locations</label>
            <select className="ui search dropdown" data-field="location" onChange={ this.updateState } defaultValue={this.props.event.location} >
              <option></option>
              {
                this.props.parent.state.event_locations.map(function(el) {
                  return(
                    <option value={el} key={el}>
                      { el }
                    </option>
                  )
                })
              }
            </select>
          </div>

          <div className="field">
            <label>Event Url</label>
            <input type="text" data-field="url" onChange={ this.updateState } defaultValue={this.props.event.url}/>
          </div>

          <div className="field" >
            <label>Event type</label>
            <select className="ui select dropdown" data-field="event_type" onChange={ this.updateState } defaultValue={this.props.event.event_type}>
              <option value=""></option>
              <option value="Breakfast Forums">Breakfast Forums</option>
              <option value="Special Events">Special Events</option>
              <option value="Lunch w/ Leaders">Lunch w/ Leaders</option>
              <option value="ResourceFULL Use Workshops">ResourceFULL Use Workshops</option>
              <option value="Tours & Member Exchanges">Tours & Member Exchanges</option>
            </select>
          </div>

          <div className="field">
            <label>Paypal Form</label>
            <textarea type="text" data-field="paypal" onChange={ this.updateState } defaultValue={this.props.event.paypal}></textarea>
          </div>

          <button type="submit" className="ui button" style={{ "background" : "#262262" , "color" : "white" }}>
            Update Event
          </button>
        </form>
      </div>
    )
  }
});
