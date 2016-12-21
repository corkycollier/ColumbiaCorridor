
const MakeNews = React.createClass({
  getInitialState () {

    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
    }

    return({
      style: style,
      cca_only: false ,
    })
  },

  componentDidMount () {
    $('table').tablesort();
    $('.checkbox').checkbox();
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
          });
          location.href = "/#member-area"
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
      <div className="ui container" style={this.state.style}>
        <h2>
          News
        </h2>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">

            <form className="ui form">
              <div className="two fields">
                <div className="field">
                  <label>Title</label>
                  <input type="text" data-field="title" onChange={ this.updateState } />
                </div>

                <div className="field">
                  <div className="ui checkbox" style={{"position" : "relative" , "top" : "31px" , "left" : "22px"}} onClick={ this.setCheckbox }>
                    <input type="checkbox" tabIndex="0" className="hidden" />
                    <label>CCA only</label>
                  </div>
                </div>
              </div>

              <div className="field">
                <label>Body</label>
                <textarea id="froala-target" type="text" data-field="body" onChange={ this.updateState } />
              </div>

              <div className="ui button small" onClick={this.submitNews} style={{ "background" : "#262262" , "color" : "white" }}>
                Submit
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
