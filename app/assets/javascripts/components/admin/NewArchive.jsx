
const NewArchive = React.createClass({
  getInitialState () {


    return ({})
  },
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  },

  save () {
    $.ajax({
      url: '/api/archives',
      type: 'POST',
      data: {archive: this.state},
      success: function (app_data, resp, obj) {
        this.props.parent.setState(app_data)
        Backbone.history.navigate("/admin/archives", {trigger: true})
      }.bind(this), error: function (a, b, c) {
        alert('There was an error.')
        Backbone.history.navigate("/admin/archives", {trigger: true})
      }
    })
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        var state = this.state
        state['url'] = result[0].secure_url
        this.setState( state)
      }
    }.bind(this));
  },

  update (e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render() {

    return (
      <div className="ui container" style={{
          "padding" : "25px 0px" ,
          "color" : "#262262" ,
        }}>
        <form className="ui form" onSubmit={ this.save }>
          <div className="fields">
            <div className="two wide field">
              <label>Doc Type</label>
              <select className="ui search fluid dropdown" data-field="doc_type" onChange={ this.update } >
                <option value=""></option>
                <option value="file pdf outline">
                  .pdf
                </option>

                <option value="file text outline">
                  .txt
                </option>

                <option value="file powerpoint outline">
                  .ppt
                </option>

                <option value="file excel outline">
                  .exl
                </option>
              </select>
            </div>
            <div className="twelve wide field">
              <label>Title</label>
              <input type="text" data-field="title" onChange={ this.update } />
            </div>

            <div className="two wide field">
              <label>Year</label>
              <input type="text" data-field="year" onChange={ this.update } />
            </div>
          </div>

          <div className="field">
            <label>Category  <small>All options seperated by commas ", "</small></label>
            <input type="text" data-field="category" onChange={ this.update } />
          </div>

          <div className="field" style={{ "position" : "relative" , }}>
            <label>Url</label>
            <input type="text" data-field="url" onChange={ this.update } value={this.state.url} />
            <div className="ui button blue mini"
              style={{ "position" : "absolute" , "right" : "1px" , "bottom" : "5px" }}
              onClick={ this.uploadWidget }
              id="upload_widget_opener"
              >
              Upload
            </div>
          </div>

          <button className="ui button large" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
});

const EditArchive = React.createClass({
  getInitialState () {
    return ( this.props.archive || {} )
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        var state = this.state
        state['url'] = result[0].secure_url
        this.setState( state)
      }
    }.bind(this));
  },

  save () {
    $.ajax({
      url: '/api/archives/' + this.state.id ,
      type: 'PATCH',
      data: {archive: this.state},
      success: function (app_data, resp, obj) {
        this.props.parent.setState(app_data)
        Backbone.history.navigate("/admin/archives", {trigger: true})
      }.bind(this), error: function (app_data, resp, obj) {
        alert('There was an error.')
        Backbone.history.navigate("/admin/archives", {trigger: true})
      }.bind(this)
    })
  },

  update (e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render() {

    return (
      <div className="ui container" style={{
          "padding" : "25px 0px" ,
          "color" : "#262262" ,
        }}>
        <form className="ui form" onSubmit={ this.save }>
          <div className="fields">
            <div className="two wide field">
              <label>Doc Type</label>
              <select className="ui search fluid dropdown" data-field="doc_type" onChange={ this.update } defaultValue={this.state.doc_type} >
                <option value=""></option>
                <option value="file pdf outline">
                  .pdf
                </option>

                <option value="file text outline">
                  .txt
                </option>

                <option value="file powerpoint outline">
                  .ppt
                </option>

                <option value="file excel outline">
                  .exl
                </option>

                <option value="file image outline">
                  .jpg|.png
                </option>
              </select>
            </div>

            <div className="twelve wide field">
              <label>Title</label>
              <input type="text" data-field="title" onChange={ this.update } defaultValue={this.state.title} />
            </div>

            <div className="two wide field">
              <label>Year</label>
              <input type="text" data-field="year" onChange={ this.update } defaultValue={this.state.year} />
            </div>
          </div>

          <div className="field">
            <label>Category  <small>All options seperated by commas ", "</small></label>
            <input type="text" data-field="category" onChange={ this.update }  defaultValue={this.state.category} />
          </div>

          <div className="field" style={{ "position" : "relative" , }}>
            <label>Url</label>
            <input type="text" data-field="url" onChange={ this.update } defaultValue={this.state.url}/>
            <div className="ui button blue mini"
              style={{ "position" : "absolute" , "right" : "1px" , "bottom" : "5px" }}
              onClick={ this.uploadWidget }
              id="upload_widget_opener"
              >
              Upload
            </div>
          </div>

          <button className="ui button large" type="submit">
            Submit
          </button>
        </form>


      </div>
    );
  }
});
