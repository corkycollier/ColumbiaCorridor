
const AdminBoard = React.createClass({

  componentDidMount() {
    $('table').tablesort();
  },

  delete (e) {
    var sure = confirm('Are you sure?');

    if (sure) {
      $.ajax({
        url: '/api/boards/' + e.currentTarget.dataset.id ,
        type: 'DELETE' ,
        success: function( app_data , resp , obj ) {
          this.props.parent.setState(app_data)
          this.props.mom.setState({
            news: app_data.news
          })
        }.bind(this), error: function ( app_data , resp , obj ) {
          this.props.parent.setState( app_data )
          Backbone.history.navigate( 'admin' , { trigger : true } );
        }.bind(this)
      })

    }
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render() {

    return (
      <div className="" style={{
          "color" : "#262262" ,
          "marginBottom" : "40px" ,
          "position" : "relative" ,
        }}>
        <h2 className="ui header">
          Board
        </h2>

        <div className="ui button small blue" data-url="new-board" onClick={ this.go } style={{
            "position" : "absolute" ,
            "top" : "0px" ,
            "left" : "75px" ,
          }}>
          New
        </div>

        <div style={{
            "height" : "40vh" ,
            "overflowY" : "scroll" ,
          }}>

          <table className="ui table" style={{ "color" : "#262262" , }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Name</th>
                <th>Company</th>
                <th>Img</th>
                <th style={{ "width" : "100px" , }}>Bio</th>
                <th className="collapsing">Action</th>
              </tr>
            </thead>

            <tbody>
              {

                this.props.parent.state.board.map( (el) => {
                  return(
                    <AdminBoardsRow
                      key={'abr' + el.id}
                      parent={ this.props.parent }
                      board={ el }
                      mom={ this }
                      />

                  )
                })
              }
            </tbody>

          </table>
        </div>
      </div>
    );
  }
});


const AdminBoardsRow = React.createClass({

  delete (e) {
    var sure = confirm('Are you sure?');

    if (sure) {
      $.ajax({
        url: '/api/boards/' + e.currentTarget.dataset.id ,
        type: 'DELETE' ,
        success: function( app_data , resp , obj ) {
          this.props.parent.setState(app_data)
          this.props.mom.setState({
            board: app_data.board
          })
        }.bind(this), error: function ( app_data , resp , obj ) {
          alert('There was an erorr.')
        }.bind(this)
      })

    }
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render() {

    return (
      <tr>

        <td>
          {this.props.board.title}
        </td>
        <td>{this.props.board.name}</td>
        <td>
          <a href={this.props.board.website} target="_blank">
            {this.props.board.company}
          </a>
        </td>
        <td>
          <img className="ui image small" src={this.props.board.img}></img>
        </td>
        <td>
          { this.props.board.bio.slice(0,80) + "..." }
        </td>

        <td className="collapsing">
          <a data-url={"edit/board/" + this.props.board.id}
             onClick={ this.go }
             style={{ "marginRight" : "8px" ,}}>
            edit
          </a>

          <a data-id={this.props.board.id} onClick={ this.delete }>
            delete
          </a>
        </td>
      </tr>
    );
  }
});
