const MakeAd = React.createClass({
  getInitialState () {
    return( this.props.ad || {})
  },

  componentDidMount () {
  },

  createAd ( data ) {
    $.ajax({
      url  : '/api/sponsors' ,
      type : "POST" ,
      data : { ad: this.state },
      success : function ( app_data , resp , obj ) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( 'admin/sponsors' , { trigger : true } );
      }.bind(this),
      error   : function ( app_data , resp , obj ) {
        alert('There was an error.')
        Backbone.history.navigate( 'admin/sponsors' , { trigger : true } );
      }.bind(this)
    });
  },


  updateState (e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        var state = this.state
        state['image_url'] = result[0].secure_url
        this.setState( state)
      }
    }.bind(this));
  },

  render () {

    return (
      <div className="ui container" style={{"color"   : "#262262" ,"padding" : "25px" ,}}>
        <h1 style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          New Sponsor
        </h1>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">
            <form className="ui small form" onSubmit={ this.createAd }>

              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  data-field="name"
                  onChange={ this.updateState }
                  defaultValue={ this.state.name }
                  />
              </div>

              <div className="field">
                <label>Image Url</label>
                <input
                  type="text"
                  data-field="image_url"
                  onChange={ this.updateState }
                  value={ this.state.image_url }
                  />
                <div className="ui button blue mini"
                  style={{ "position" : "absolute" , "right" : "0px" , "bottom" : "148px" }}
                  onClick={ this.uploadWidget }
                  id="upload_widget_opener"
                  >
                  Upload
                </div>
              </div>

              <div className="field">
                <label>Link</label>
                <input
                  type="text"
                  data-field="link"
                  onChange={ this.updateState }
                  defaultValue={ this.state.link }
                  />
              </div>

              <button
                className="ui button"
                type="submit"
                style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }}
                >
                Create
              </button>
            </form>
          </div>
        </div>

      </div>
    )
  }
});


const EditAd = React.createClass({
  getInitialState () {
    return( this.props.ad || {})
  },

  componentDidMount () {
  },

  updateAd ( data ) {
    $.ajax({
      url  : '/api/sponsors/' + this.state.id ,
      type : "PATCH" ,
      data : { ad: this.state },
      success : function ( app_data , resp , obj ) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( 'admin/sponsors' , { trigger : true } );
      }.bind(this),
      error   : function ( app_data , resp , obj ) {
        alert('There was an error.')
        Backbone.history.navigate( 'admin/sponsors' , { trigger : true } );
      }.bind(this)
    });
  },


  updateState (e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        var state = this.state
        state['image_url'] = result[0].secure_url
        this.setState( state)
      }
    }.bind(this));
  },

  render () {

    return (
      <div className="ui container" style={{"color"   : "#262262" ,"padding" : "25px" ,}}>
        <h1 style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          New Sponsor
        </h1>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">
            <form className="ui small form" onSubmit={ this.updateAd }>

              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  data-field="name"
                  onChange={ this.updateState }
                  defaultValue={ this.state.name }
                  />
              </div>

              <div className="field">
                <label>Image Url</label>
                <input
                  type="text"
                  data-field="image_url"
                  onChange={ this.updateState }
                  value={ this.state.image_url }
                  />
                <div className="ui button blue mini"
                  style={{ "position" : "absolute" , "right" : "0px" , "bottom" : "148px" }}
                  onClick={ this.uploadWidget }
                  id="upload_widget_opener"
                  >
                  Upload
                </div>
              </div>

              <div className="field">
                <label>Link</label>
                <input
                  type="text"
                  data-field="link"
                  onChange={ this.updateState }
                  defaultValue={ this.state.link }
                  />
              </div>

              <button
                className="ui button"
                type="submit"
                style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }}
                >
                Update
              </button>
            </form>
          </div>
        </div>

        <div className="ui divider">
        </div>

      </div>
    )
  }
});
