const MemberArea = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "60px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1>
          Member Area
        </h1>

        <div style={{ "fontSize" : "21px" , "lineHeight" : "29px" }}>
          <div>
            <a href="#/directory">Directory</a>
          </div>

          <div>
            <a href="#/edit-profile">
              Edit Profile
            </a>
          </div>

          <div>
            <a href="#/make-news">
              Create News
            </a>
          </div>
        </div>

        <div className="ui clearing divider"></div>
      </div>
    )
  }
});

const MemberNews = React.createClass({
  getInitialState () {

    var style = {
      "color" : "#262262" ,
      "padding" : "60px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {
    $('table').tablesort();
  },

  submitNews () {
    var confirmation = confirm("Are you sure?")
    if ( confirmation ) {
      $.ajax({
        url: '/api/news',
        type: 'POST',
        data: { news: this.state },
        success: function (news, resp, obj) {
          alert('News #' + news.id + " was created. ")
          this.setState({
            title : "" ,
            body : "" ,
          })
        }.bind(this), error: function (a, b, c) {
          alert("There was an error. News was not created.")
        }
      })
    }
  },

  updateState (e) {
    var newData = {};
    newData[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( newData );
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h3>
          New News
        </h3>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">

            <form className="ui form">
              <div className="two fields">
                <div className="field">
                  <label>Title</label>
                  <input type="text" data-field="title" onChange={ this.updateState } value={ this.state.title }/>
                </div>
              </div>

              <div className="field">
                <label>Body</label>
                <textarea id="froala-target" type="text" data-field="body" onChange={ this.updateState } value={ this.state.body } />
              </div>

              <div className="ui button small" onClick={this.submitNews} style={{ "background" : "#262262" , "color" : "white" }}>
                Submit News
              </div>
            </form>
          </div>

        </div>

        <div className="ui divider">
        </div>

      </div>
    )
  }
});
