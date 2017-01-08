
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
              <th className="collapsing">ID</th>
              <th>Title</th>
              <th></th>
              <th></th>
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
                  New sponsor
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

  render() {
    return (
      <tr>
        <td style={{ "textAlign" : "center" ,}}>
          { this.props.news.id }
        </td>

        <td>
          { this.props.news.title }
        </td>

        <td>
        </td>

        <td className="collapsing">
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
