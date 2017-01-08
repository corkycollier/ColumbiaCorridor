const MakeAd = React.createClass({
  getInitialState () {
    var style = {
      "color"   : "#262262" ,
      "padding" : "25px" ,
    }

    return({
      style : style ,
      ad    : this.props.ad || {} ,
    })
  },

  componentDidMount () {

  },

  createAd ( data ) {
    $.ajax({
      url  : '/api/sponsors' ,
      type : "POST" ,
      data : this.state ,
      success : function ( app_data , resp , obj ) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( 'admin' , { trigger : true } );
      }.bind(this),
      error   : function ( app_data , resp , obj ) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( 'admin' , { trigger : true } );
      }.bind(this)
    });
  },

  delete () {
    $.ajax({
      url  : '/api/sponsors/' + this.state.ad ,
      type : "POST" ,
      success : function ( a , b , c ) {
        debugger
      }.bind(this),
      error   : function ( a , b , c ) {
        debugger
      }.bind(this)
    });
  },

  updateState (e) {
    var ad = this.state.ad;
    ad[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState({ ad : ad });
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        var ad = this.state.ad
        ad['image_url'] = result[0].secure_url
        this.setState({
          ad : ad
        })
      }
    }.bind(this));
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
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
                  value={ this.state.ad.name }
                  />
              </div>

              <div className="field">
                <label>Image Url</label>
                <input
                  type="text"
                  data-field="image_url"
                  onChange={ this.updateState }
                  value={ this.state.ad.image_url }
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
                  value={ this.state.ad.link }
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

        <div className="ui divider">
        </div>

      </div>
    )
  }
});
