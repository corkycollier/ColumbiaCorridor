const Admin = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "paddingBottom" : "65px" ,
      "paddingTop" : "15px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  goToNews(e) {
    Backbone.history.navigate("#/news/" + e.currentTarget.dataset.id , {trigger: true})
  },

  createEvent () {
    $.ajax({
      url: '/api/events',
      type: 'POST',
      data: {event: this.state},
      success: function (a, b, c) {
        location.href = ""
      }, error: function (a, b, c) {
        debugger
      }
    })
  },

  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h2>
          Admin Panel
        </h2>

        <h4>
          Create Event
        </h4>


        <form className="ui form" onSubmit={ this.createEvent } style={{"maxWidth" : "700px"}}>
          <div className="two fields">
            <div className="field">
              <label>Title</label>
              <input type="text" data-field="title" onChange={ this.updateState } />
            </div>

            <div className="field">
              <label>Date</label>
              <input type="text" data-field="date" onChange={ this.updateState } />
            </div>
          </div>
          <div className="two fields">

            <div className="field">
              <label>Time</label>
              <input type="text" data-field="time" onChange={ this.updateState } />
            </div>

            <div className="field">
              <label>Location</label>
              <input type="text" data-field="location" onChange={ this.updateState } />
            </div>
          </div>

          <div className="field">
            <label>Body</label>
            <textarea type="text" data-field="location" onChange={ this.updateState } rows="12"/>
          </div>

          <div className="field">
            <select className="ui dropdown" data-field="event_type" onChange={ this.updateState }  >
              <option value></option>
              <option value="Breakfast Forum" style={{ "color" : "#ed6449" }}>Breakfast Forum</option>
              <option value="Lunch w/ Leaders" style={{ "color" : "#8e1986" }}>Lunch w/ Leaders</option>
              <option value="ResourceFULL Use Workshop" style={{ "color" : "#ce0404" }}>ResourceFULL Use Workshop</option>
              <option value="Special Events" style={{ "color" : "#f2e74b" }}>Special Events</option>
              <option value="Tours & Members Exchange" style={{ "color" : "#c7a589" }}>Tours & Members Exchange</option>
            </select>
          </div>

          <button type="submit" className="ui button small" style={{ "background" : "#262262" , "color" : "white" }}>
            Submit
          </button>

        </form>

      </div>
    )
  }
});
