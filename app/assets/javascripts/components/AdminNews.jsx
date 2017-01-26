
const AdminNews = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "marginBottom" : "40px" ,

    }

    return({
      style : style,
      news  : this.props.parent.state.news
    })
  },

  goToMakeNew () {
    Backbone.history.navigate('make-news', { trigger : true } )
  },

  render() {
    return (
      <div style={ this.state.style }>
        <h2 className="ui header">
          News
        </h2>

        <table className="ui table">
          <thead>
            <tr>
              <th>Title</th>
              <th style={{ "maxWidth" : "150px" , }}>CCA Only</th>
              <th className="collapsing">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.news.map( (el) => {
                return(
                  <AdminNewsRow news={ el } key={ el.id } parent={this.props.parent} mom={this}/>
                )
              }.bind(this))
            }
          </tbody>

          <tfoot>
            <tr>
              <th colSpan="6" onClick={ this.goToAdminNewUser }>
                <div className="ui button blue" onClick={ this.goToMakeNew }>
                  New News
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
});

const AdminNewsRow = React.createClass({

  delete () {
    var confirmDelete = confirm('Are you sure?');
    if ( confirmDelete ) {
      $.ajax({
        url: 'api/news/' + this.props.news.id ,
        type: "DELETE",
        success: function (app_data, resp, obj) {
          this.props.parent.setState(app_data)
          this.props.mom.setState({
            news: app_data.news
          })
        }.bind(this), error: function (a, b, c) {
          alert('There was an error.')
        }
      })
    }
  },

  edit () {
    Backbone.history.navigate('edit/news/' + this.props.news.id , { trigger : true } )
  },

  goToNews () {
    Backbone.history.navigate('news/' + this.props.news.id , { trigger : true } )
  },

  cca_only () {
    if (this.props.news.cca_only ) {
      return(
        <div>
        <i className="check icon">
        </i>

        <div style={{ "display" : "none" , }}>
          { this.props.news.cca_only.toString() }
        </div>
        </div>
      )
    } else {
      <div style={{ "display" : "none" , }}>
        { this.props.news.cca_only.toString() }
      </div>
    }
  },

  render() {
    debugger
    return (
      <tr>

        <td onClick={ this.goToNews }>
          { this.props.news.title }
        </td>

        <td>
          {
            this.cca_only()
          }
        </td>

        <td >
          <a
            data-id={this.props.news.id}
            style={{ "marginRight" : "8px" }}
            onClick={ this.edit }
            >
            edit
          </a>

          <a
            data-id={this.props.news.id}
            onClick={ this.delete }
            >
            delete
          </a>
        </td>
      </tr>
    );
  }
});
