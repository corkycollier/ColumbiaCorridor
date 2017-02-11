
const AdminNews = React.createClass({
  getInitialState () {

    return({
      news  : this.props.parent.state.news
    })
  },

  componentDidMount() {
    $('table').tablesort();
  },

  goToMakeNew () {
    Backbone.history.navigate('make-news', { trigger : true } )
  },

  render() {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "marginBottom" : "40px" ,
          "padding" : "25px 0px" ,
        }}>

        <h2 className="ui header" >
          News
        </h2>

        <a href="#make-news" className="ui button small blue" >
          New
        </a>

        <table className="ui table" style={{
            "color" : "#262262" ,
          }}>
          <thead>
            <tr>
              <th>Title</th>
              <th className="collapsing">Author</th>
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
        </table>

        <a href="#admin" className="ui button left labeled icon small" style={{ "marginTop" : "18px" , }}>
          <i className="left caret icon"></i>
          Back
        </a>
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
    return (
      <tr>

        <td>
          <a href={"#news/" + this.props.news.id} >
          { this.props.news.title }
          </a>
        </td>

        <td className="collapsing">
          { this.props.news.author }
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
