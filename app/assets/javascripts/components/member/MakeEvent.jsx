const MakeEvent = React.createClass({
  getInitialState () {
    return ({});
  },

  froala () {
    var cloud_name = "dtizwr3wv";
    var unsigned_preset = "f6zu0cw2";
    var api_key = "688459599666266";

    $('#event-title').froalaEditor({
      requestWithCredentials: false,
      requestWithCORS: false,
      imageUploadURL: "https://api.cloudinary.com/v1_1/" + cloud_name + "/auto/upload",
      imageUploadParams: {
        upload_preset: unsigned_preset,
        api_key: api_key
      }
    });

    $('#event-body').froalaEditor({
      requestWithCredentials: false,
      requestWithCORS: false,
      imageUploadURL: "https://api.cloudinary.com/v1_1/" + cloud_name + "/auto/upload",
      imageUploadParams: {
        upload_preset: unsigned_preset,
        api_key: api_key
      }
    });
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'dtizwr3wv', upload_preset: 'f6zu0cw2'},
    function(error, result) {
      if (result) {
        $(ReactDOM.findDOMNode(this)).find('.image-uploader').val( result[0].secure_url )
      }
    }.bind(this));
  },

  componentDidMount () {
    this.froala();

    setTimeout(function() {
      $('.fr-toolbar').css('position', "relative");
    }.bind(this), 0);
    $('.dropdown').dropdown();
  },

  update(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
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

  updateDate(e) {
    var state = this.state;
    var timestamp = Date.parse(e.currentTarget.value);
    if ( isNaN(timestamp) == false ) {
      state['date'] = moment.utc(timestamp).format('YYYY-MM-DD');
    } else {
      state['date'] = null;
      e.currentTarget.value = null;
    }

    this.setState(state);
  },

  updateTime(e) {
    var state = this.state || {};
    var key = e.currentTarget.dataset.field;
    var value = moment().format('YYYY/MM/DD') + ' ' + e.currentTarget.value;
    var timestamp = Date.parse(value);

    if ( isNaN(timestamp) == false ) {
      state[key] = moment(timestamp).format('HH:mm');
      e.currentTarget.value = moment(timestamp).format('hh:mm A');
    } else {
      state[key] = null;
      e.currentTarget.value = null;
    }

    this.setState(state);
  },

  handleSave (e) {
    e.preventDefault();
    $.ajax({
      url: '/api/events',
      type: 'POST',
      data: { event: this.state },
      success: function (app_data, resp, obj) {
        this.props.parent.setState( app_data );
        Backbone.history.navigate( "admin/events" , { trigger : true } );
      }.bind(this), error: function (a, b, c) {
        alert("There was an error.");
      }
    });
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
            <label>Basic Title</label>
            <input type="text"  data-field="basic_title" onChange={ this.update } />
          </div>

          <div className="field title-field" onBlur={ this.updateTitle }>
            <label>Event Page Title</label>
            <textarea id="event-title"></textarea>
          </div>

          <div className="field body-field" onBlur={ this.updateBody } >
            <label>Body</label>
            <textarea id="event-body"></textarea>
          </div>

          <div className="field" style={{ "position" : "relative" , }}>
            <label>Upload PDF</label>
            <input type="text" className="image-uploader" />
            <div className="ui button mini blue"
                 onClick={ this.uploadWidget }
                 style={{
                "position" : "absolute" ,
                "right" : "2px" ,
                "top" : "28px" ,
              }}>
              Upload
            </div>
            <label className="description">
              1) Click the ‘upload’ button and drag & drop the pdf file.<br/>
              2) Copy the URL created, and use this URL in the ‘insert link’ feature in the body section.
            </label>
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" data-field="date" onBlur={ this.updateDate } required/>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Start</label>
              <input type="text" data-field="start" onBlur={ this.updateTime } required />
            </div>

            <div className="field">
              <label>End</label>
              <input type="text" data-field="end" onBlur={ this.updateTime } required />
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
                  );
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
    );
  }
});


const EditEvent = React.createClass({
  getInitialState () {

    return(this.props.event || {});
  },

  froala () {
    var cloud_name = "dtizwr3wv";
    var unsigned_preset = "f6zu0cw2";
    var api_key = "688459599666266";

    $('#event-title').froalaEditor({
      requestWithCredentials: false,
      requestWithCORS: false,
      imageUploadURL: "https://api.cloudinary.com/v1_1/" + cloud_name + "/auto/upload",
      imageUploadParams: {
        upload_preset: unsigned_preset,
        api_key: api_key
      }
    });

    $('#event-body').froalaEditor({
      requestWithCredentials: false,
      requestWithCORS: false,
      imageUploadURL: "https://api.cloudinary.com/v1_1/" + cloud_name + "/auto/upload",
      imageUploadParams: {
        upload_preset: unsigned_preset,
        api_key: api_key
      }
    });
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'dtizwr3wv', upload_preset: 'f6zu0cw2'},
    function(error, result) {
      if (result) {
        $(ReactDOM.findDOMNode(this)).find('.image-uploader').val( result[0].secure_url )
      }
    }.bind(this));
  },

  componentDidMount () {
    this.froala();

    setTimeout(function() {
      $('.fr-toolbar').css('position', "relative");
    }.bind(this), 0);


    $('.dropdown').dropdown();
  },

  update(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
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

  updateDate(e) {
    var state = this.state;
    var timestamp = Date.parse(e.currentTarget.value);
    if ( isNaN(timestamp) == false ) {
      state['date'] = moment.utc(timestamp).format('YYYY-MM-DD');
    } else {
      state['date'] = null;
      e.currentTarget.value = null;
    }

    this.setState(state);
  },

  updateTime(e) {
    var state = this.state || {};
    var key = e.currentTarget.dataset.field;
    var value = moment().format('YYYY/MM/DD') + ' ' + e.currentTarget.value;
    var timestamp = Date.parse(value);

    if ( isNaN(timestamp) == false ) {
      state[key] = moment(timestamp).format('HH:mm');
      e.currentTarget.value = moment(timestamp).format('hh:mm A');
    } else {
      state[key] = null;
      e.currentTarget.value = null;
    }

    this.setState(state);
  },

  showTime(time) {
    var value = moment().format('YYYY/MM/DD') + ' ' + time;
    var timestamp = Date.parse(value);
    if ( isNaN(timestamp) == false ) {
      return moment(timestamp).format('hh:mm A');
    } else {
      return null;
    }
  },

  handleSave (e) {
    e.preventDefault();
    $.ajax({
      url: '/api/events/' + this.state.id ,
      type: 'PATCH',
      data: { event: this.state },
      success: function (app_data, resp, obj) {
        this.props.parent.setState( app_data );
        Backbone.history.navigate( 'admin/events' , { trigger : true } );
      }.bind(this), error: function (a, b, c) {
        alert("There was an error. Try again later.");
      }
    });
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
            <label>Basic Title</label>
            <input type="text" defaultValue={this.state.basic_title} data-field="basic_title" onChange={ this.update } />
          </div>

          <div className="field title-field" onBlur={ this.updateTitle }>
            <label>Event Page Title</label>
            <textarea id="event-title" defaultValue={this.state.title}></textarea>
          </div>

          <div className="field body-field" onBlur={ this.updateBody } >
            <label>Body</label>
            <textarea id="event-body" defaultValue={this.state.body}></textarea>
          </div>

          <div className="field" style={{ "position" : "relative" , }}>
            <label>Upload PDF</label>
            <input type="text" className="image-uploader" />
            <div className="ui button mini blue"
                 onClick={ this.uploadWidget }
                 style={{
                "position" : "absolute" ,
                "right" : "2px" ,
                "top" : "28px" ,
              }}>
              Upload
            </div>
            <label className="description">
              1) Click the ‘upload’ button and drag & drop the pdf file.<br/>
              2) Copy the URL created, and use this URL in the ‘insert link’ feature in the body section.
            </label>
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" data-field="date" onBlur={ this.updateDate } defaultValue={this.state.date} required/>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Start</label>
              <input type="text" data-field="start" onBlur={ this.updateTime }  defaultValue={this.showTime(this.state.start)} required />
            </div>

            <div className="field">
              <label>End</label>
              <input type="text" data-field="end" onBlur={ this.updateTime } defaultValue={this.showTime(this.state.end)} required />
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
                  );
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
    );
  }
});
