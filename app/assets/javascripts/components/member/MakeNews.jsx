
const MakeNews = React.createClass({
  getInitialState () {
    return( this.props.news || {} )
  },

  froala () {
    var cloud_name = "djjldnjz7";
    var unsigned_preset = "vyzjbttv";
    var api_key = "";

    $('#news-title').froalaEditor({
      imageUploadURL: "https://api.cloudinary.com/v1_1/" + cloud_name + "/auto/upload",
      imageUploadParams: {
        upload_preset: unsigned_preset,
        api_key: api_key
      }
    });

    $('#news-body').froalaEditor({
      imageUploadURL: "https://api.cloudinary.com/v1_1/" + cloud_name + "/auto/upload",
      imageUploadParams: {
        upload_preset: unsigned_preset,
        api_key: api_key
      }
    });
  },

  fadeIn () {
    $('.ui.container').transition({
      animation  : 'fade in' ,
      duration   : '0.8s'    ,
    });
  },

  componentDidMount () {
    this.froala();
    this.fadeIn();
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        $(ReactDOM.findDOMNode(this)).find('.image-uploader').val( result[0].secure_url )
      }
    }.bind(this));
  },

  submitNews () {
    $.ajax({
      url: '/api/news',
      type: 'POST',
      data: { news: this.state },
      success: function (app_data, resp, obj) {
        this.props.parent.setState(app_data)
        Backbone.history.navigate('member-news' , { trigger : true })
      }.bind(this), error: function (a, b, c) {
        alert('There was an error.')
        Backbone.history.navigate('member-news' , { trigger : true })
      }
    })
  },

  updateBody(e) {
    var state = this.state;
    state['body'] = $('.body-field').find('.fr-view').html() ;
    this.setState( state );
  },

  updateTitle(e) {
    var state = this.state;
    state['title'] = $('.title-field').find('.fr-view').html() ;
    this.setState( state );
  },

  update (e) {
    var newData = {};
    newData[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( newData );
  },


  render () {
    return (
      <div className="ui container"
        style={{
          "color" : "#262262" ,
          "minHeight" : "74vh" ,
          "marginBottom" : "100px" ,
          "padding" : "30px 20px" ,
        }}>

        <h1>
          News
        </h1>
        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">
            <form className="ui form" onSubmit={this.submitNews }>
              <div className="field">
                <label>Basic Title</label>
                <input type="text"  data-field="basic_title" onChange={ this.update } />
              </div>

              <div className="field" style={{ "position" : "relative" , }}>
                <label>Image Upload</label>
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
              </div>

              <div className="field title-field" onBlur={ this.updateTitle }>
                <label>Title</label>
                <textarea id="news-title" />
              </div>

              <div className="field body-field" onBlur={ this.updateBody }>
                <label>Body</label>
                <textarea id="news-body" />
              </div>

              <button className="ui button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});


const EditNewsAdmin = React.createClass({
  getInitialState () {
    return(this.props.news || {})
  },

  componentDidMount () {
    $('#news-title').froalaEditor();
    $('#news-body').froalaEditor();

    setTimeout(function() {
      $('.fr-toolbar').css('position', "relative");
    }.bind(this), 0);
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        $(ReactDOM.findDOMNode(this)).find('.image-uploader').val( result[0].secure_url )
      }
    }.bind(this));
  },


  submitNews () {
    $.ajax({
      url: '/api/news/' + this.props.news.id ,
      type: 'PATCH',
      data: { news: this.state },
      success: function (app_data, resp, obj) {
        this.props.parent.setState(app_data)
        Backbone.history.navigate('admin/news' , { trigger : true })
      }.bind(this), error: function (app_data, resp, obj) {
        alert('There was an error.')
        Backbone.history.navigate('admin/news' , { trigger : true })
      }
    })
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

  update (e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{ "color" : "#262262" ,"marginBottom" : "100px" ,"padding" : "25px" ,}}>
        <h1>
          Edit News
        </h1>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">
            <form className="ui form" onSubmit={this.submitNews }>
              <div className="field">
                <label>Basic Title</label>
                <input type="text"  data-field="basic_title" onChange={ this.update } defaultValue={ this.props.news.basic_title }/>
              </div>

              <div className="field" style={{ "position" : "relative" , }}>
                <label>Image Upload</label>
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
              </div>

              <div className="field title-field" onBlur={ this.updateTitle }>
                <label>Title</label>
                <textarea id="news-title" defaultValue={ this.props.news.title } />
              </div>

              <div className="field body-field" onBlur={ this.updateBody }>
                <label>Body</label>
                <textarea id="news-body" defaultValue={ this.props.news.body } />
              </div>

              <button className="ui button small" type="submit" style={{ "background" : "#262262" , "color" : "white" }}>
                Submit
              </button>
            </form>
          </div>

        </div>

      </div>
    )
  }
});
