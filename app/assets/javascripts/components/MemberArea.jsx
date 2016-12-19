const CMemberArea = React.createClass({
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

        <MemberDirectory parent={ this.props.parent } />
        <MemberProfile parent={ this.props.parent } />
        <MemberNews parent={ this.props.parent } />
      </div>
    )
  }
});

const MemberDirectory = React.createClass({
  getInitialState () {

    var style = {
      "color" : "#262262" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {
    $('table').tablesort();
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <h3>
          Member Directory
        </h3>


        <table className="ui single striped line table" style={{"color":"#262262"}}>
          <thead>
            <tr>
              <th>
                Level
              </th>

              <th>
                Name
              </th>

              <th>
                Email
              </th>

              <th>
                Phone
              </th>

              <th>
                State
              </th>

              <th>
                Company
              </th>
            </tr></thead>
            <tbody>
              {
                this.props.parent.state.user.members.map((el) => {
                  return (
                    <tr key={ el.id }>

                      <td className="collapsing">
                        level
                      </td>

                      <td className="collapsing">
                        { "firstname" + " " + "lastname" + " - " + "(" + "username" + ")" }
                      </td>

                      <td className="collapsing">
                        { el.email }
                      </td>

                      <td className="collapsing">
                        phone
                      </td>

                      <td className="collapsing">
                        state
                      </td>

                      <td className="collapsing">
                        company
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>

          <div className="ui divider">
          </div>
        </div>
      )
    }
  });


  const MemberProfile = React.createClass({
    getInitialState () {

      var style = {
        "color" : "#262262" ,
      }

      return({
        style: style,
      })
    },

    componentDidMount () {
      $('table').tablesort();
    },

    render () {
      return (
        <div className="" style={this.state.style}>
          <h3>
            My Profile
          </h3>

          <div className="ui grid doubling stackable">
            <div className="eight wide column">
              <i>profile</i>
            </div>

            <div className="eight wide column">
              <i>profile</i>
            </div>
          </div>

          <div className="ui divider">
          </div>

        </div>
      )
    }
  });



  const MemberNews = React.createClass({
    getInitialState () {

      var style = {
        "color" : "#262262" ,
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
        debugger
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
            debugger
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
        <div className="" style={this.state.style}>
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
