
const NewComponent = React.createClass({

  componentDidMount() {
    $('table').tablesort();
  },

  delete (e) {
    var sure = confirm('Are you sure?');

    if (sure) {
      $.ajax({
        url: '/api/sponsors/' + e.currentTarget.dataset.id ,
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

  setEdit() {
  },


  makeAd () {
    Backbone.history.navigate( 'new-sponsor' , { trigger : true } )
  },

  render() {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
        }}>

        <h2>
          Archives
        </h2>

        <div >
          <table className="ui table">
            <thead>
              <tr>
                <th className="collapsing">Type</th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.parent.state.archives.map(function(el, idx) {
                  return (
                    <tr className="card" key={ "go" + idx }>
                      <td>
                        <i className={el.icon + " icon"}></i>
                      </td>

                      <td>
                        <a href={ el.href } target="_blank">
                          { el.title }
                        </a>
                      </td>

                      <td className="collapsing">
                        <a data-id={el.id} style={{ "marginRight" : "8px" }} onClick={ this.edit } >
                          edit
                        </a>

                        <a data-id={el.id} onClick={ this.delete }>
                          delete
                        </a>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});
