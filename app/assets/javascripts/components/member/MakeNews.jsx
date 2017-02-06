
const MakeNews = React.createClass({
  getInitialState () {
    return( this.props.news || {} )
  },

  componentDidMount () {
    $('#text-area').froalaEditor();
  },

  submitNews () {
    var confirmation = confirm("Are you sure?")
    if ( confirmation ) {
      $.ajax({
        url: '/api/news',
        type: 'POST',
        data: { news: this.state },
        success: function (app_data, resp, obj) {
          this.props.parent.setState(app_data)
          alert('The news was created.')
          Backbone.history.navigate('member-area' , { trigger : true })
        }.bind(this), error: function (a, b, c) {
          alert('There was an error. News was not created.')
        }
      })
    }
  },

  updateBody(e) {
    var state = this.state;
    state['body'] = $('.fr-view').html() ;
    this.setState( state );
  },


  updateState (e) {
    var newData = {};
    newData[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( newData );
  },

  setCheckbox () {
    if ( this.state.cca_only ) {
      this.setState({
        cca_only: false
      })
    } else {
      this.setState({
        cca_only: true
      })
    }
  },

  render () {
    return (
      <div className="ui container"
        style={{
          "color" : "#262262" ,
          "marginBottom" : "100px" ,
          "padding" : "30px 20px" ,
        }}
        >
        <h1 >
          News
        </h1>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">

            <form className="ui form" onSubmit={this.submitNews }>
              <div className="field">
                <label>Title</label>
                <input type="text" data-field="title" onChange={ this.updateState } required/>
              </div>


              <div className="field" onBlur={ this.updateBody }>
                <label>Body</label>
                <textarea id="text-area" type="text" data-field="body" required />
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
    $('.checkbox').checkbox();
    $('#text-area').froalaEditor();
    if (this.props.news.cca_only) {
      $('.ui.checkbox').checkbox('check');
    }
  },

  submitNews () {
    var sure = confirm("Are you sure?");

    if ( sure ) {
      $.ajax({
        url: '/api/news/' + this.props.news.id ,
        type: 'PATCH',
        data: { news: this.state },
        success: function (app_data, resp, obj) {
          this.props.parent.setState(app_data)
          alert('The news was successfully edited.')
          Backbone.history.navigate('news/' + this.state.id  , { trigger : true })
        }.bind(this), error: function (app_data, resp, obj) {
          alert('There was an error. News was not editted properly.')
          Backbone.history.navigate('news/' + this.state.id  , { trigger : true })
        }
      })
    }
  },

  updateBody(e) {
    var state = this.state;
    state['body'] = $('.fr-view').html() ;
    this.setState( state );
  },

  updateState (e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },

  setCheckbox () {
    if ( this.state.cca_only ) {
      this.setState({
        cca_only: false
      })
    } else {
      this.setState({
        cca_only: true
      })
    }
  },

  render () {
    return (
      <div className="ui container" style={{ "color" : "#262262" ,"marginBottom" : "100px" ,"padding" : "25px" ,}}>
        <h1 style={{ "marginBottom" : "36px" , "marginTop" : "18px"}} >
          News
        </h1>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">

            <form className="ui form" onSubmit={this.submitNews }>
              <div className="two fields">
                <div className="field">
                  <label>Title</label>
                  <input type="text" data-field="title" onChange={ this.updateState } defaultValue={ this.props.news.title } required/>
                </div>

                <div className="field">
                  <div className="ui checkbox" style={{"position" : "relative" , "top" : "31px" , "left" : "22px"}} onClick={ this.setCheckbox }>
                    <input type="checkbox" tabIndex="0" className="hidden" />
                    <label>CCA only</label>
                  </div>
                </div>
              </div>

              <div className="field" onBlur={ this.updateBody }>
                <label>Body</label>
                <textarea id="text-area" type="text" data-field="body" defaultValue={ this.props.news.body } required />
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
