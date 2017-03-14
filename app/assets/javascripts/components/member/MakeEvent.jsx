const MakeEvent = React.createClass({
  getInitialState () {
    return ({})
  },

  componentDidMount () {
    $('#event-title').froalaEditor();
    $('#event-body').froalaEditor()

    setTimeout(function() {
      $('.fr-toolbar').css('position', "relative")
    }.bind(this), 0)
    $('.dropdown').dropdown();
  },

  update(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  updateTitle(e) {
    var state = this.state;
    state['title'] = $('.title-field').find('.fr-view').html() ;
    this.setState( state );
  },

  updateBody(e) {
    var state = this.state;
    state['body'] = $('.body-field').find('.fr-view').html() ;
    this.setState( state );
  },


  handleSave () {
    $.ajax({
      url: '/api/events',
      type: 'POST',
      data: { event: this.state },
      success: function (app_data, resp, obj) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( "admin/events" , { trigger : true } );
      }.bind(this), error: function (a, b, c) {
        alert("There was an error.")
      }
    })
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
          <div className="field" data-field="basic-title" onChange={ this.update }>
            <label>Basic Title</label>
            <input type="text" />
          </div>

          <div className="field title-field" onBlur={ this.updateTitle }>
            <label>Event Page Title</label>
            <textarea id="event-title"></textarea>
          </div>

          <div className="field body-field" onBlur={ this.updateBody } >
            <label>Body</label>
            <textarea id="event-body"></textarea>
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" data-field="date" onChange={ this.update } required/>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Start</label>
              <input type="time" data-field="start" onChange={ this.update } required />
            </div>

            <div className="field">
              <label>End</label>
              <input type="time" data-field="end" onChange={ this.update } required />
            </div>
          </div>

          <div className="field">
            <label>Location</label>
            <input type="text" data-field="location"  onChange={this.update} value={this.state.location || ""} required></input>
            <label style={{ "marginTop" : "12px" , }}>Past locations</label>
            <select className="ui search dropdown" data-field="location" onChange={this.update} >
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
            <label>Special instructions</label>
            <input type="text" data-field="custom" onChange={ this.update }  />
          </div>

          <div className="field">
            <label>Event Url</label>
            <input type="text" data-field="url" onChange={ this.update } />
          </div>

          <div className="field" >
            <label>Event type</label>
            <select className="ui select dropdown" data-field="event_type" onChange={ this.update } >
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
            <textarea type="text" data-field="paypal" onChange={ this.update }></textarea>
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
    $('#event-title').froalaEditor();
    $('#event-body').froalaEditor();
    setTimeout(function() {
      $('.fr-toolbar').css('position', "relative")
    }.bind(this), 0)
    $('.dropdown').dropdown();
  },

  update(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  updateTitle(e) {
    var state = this.state;
    state['title'] = $('.title-field').find('.fr-view').html() ;
    this.setState( state );
  },

  updateBody(e) {
    var state = this.state;
    state['body'] = $('.body-field').find('.fr-view').html() ;
    this.setState( state );
  },

  handleSave () {
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
          <div className="field" data-field="basic-title" onChange={ this.update }>
            <label>Basic Title</label>
            <input type="text" defaultValue={this.state.basic_title}/>
          </div>

          <div className="field title-field" onBlur={ this.updateTitle }>
            <label>Event Page Title</label>
            <textarea id="event-title" defaultValue={this.state.title}></textarea>
          </div>

     

          <div className="field body-field" onBlur={ this.updateBody } >
            <label>Body</label>
            <textarea id="event-body" defaultValue={this.state.body}></textarea>
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" data-field="date" onChange={ this.update } defaultValue={this.state.date} required/>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Start</label>
              <input type="time" data-field="start" onChange={ this.update }  defaultValue={this.state.start} required />
            </div>

            <div className="field">
              <label>End</label>
              <input type="time" data-field="end" onChange={ this.update } defaultValue={this.state.end} required />
            </div>
          </div>

          <div className="field">
            <label>Location</label>
            <input type="text" data-field="location" onChange={ this.update } value={this.state.location || ""}></input>
            <label style={{ "marginTop" : "12px" , }}>Past locations</label>
            <select className="ui search dropdown" data-field="location" onChange={ this.update } >
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
            <label>Special instructions</label>
            <input type="text" data-field="custom" onChange={ this.update } defaultValue={this.state.custom}  />
          </div>

          <div className="field">
            <label>Event Url</label>
            <input type="text" data-field="url" onChange={ this.update } defaultValue={this.state.url}/>
          </div>

          <div className="field" >
            <label>Event type</label>
            <select className="ui select dropdown" data-field="event_type" onChange={ this.update } defaultValue={this.state.event_type}>
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
            <textarea type="text" data-field="paypal" onChange={ this.update } defaultValue={this.state.paypal}></textarea>
          </div>

          <button type="submit" className="ui button" style={{ "background" : "#262262" , "color" : "white" }}>
            Update Event
          </button>
        </form>
      </div>
    )
  }
});
