
const AdminArchives = React.createClass({

  componentDidMount() {
    $('table').tablesort();
  },

  delete (e) {
    var sure = confirm('Are you sure?');

    if (sure) {
      $.ajax({
        url: '/api/archives/' + e.currentTarget.dataset.id ,
        type: 'DELETE' ,
        success: function( app_data , resp , obj ) {
          this.props.parent.setState( app_data );
        }.bind(this), error: function ( app_data , resp , obj ) {
          this.props.parent.setState( app_data );
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
          "padding" : "25px 0px" ,
        }}>
        <Admin />

        <h2>
          Admin: Archives
        </h2>

        <a href="#make-archive" className="ui button small blue" style={{ "marginBottom" : "12px" , }}>
          New
        </a>

        <div>
          <table className="ui table">
            <thead>
              <tr>
                <th className="collapsing">Type</th>
                <th>Title</th>
                <th>Category</th>
                <th>Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.parent.state.archives.map(function(el, idx) {
                  return (
                    <tr className="card" key={ "go" + idx }>
                      <td>
                        <i className={el.doc_type + " icon"}></i>
                      </td>

                      <td>
                        <a href={ el.url } target="_blank">
                          { el.title }
                        </a>
                      </td>

                      <td className="collapsing">
                        { el.category }
                      </td>

                      <td className="collapsing">
                        { el.year }
                      </td>


                      <td className="collapsing">
                        <a href={"#edit/archive/" + el.id} style={{ "marginRight" : "8px" }} >
                          edit
                        </a>

                        <a data-id={el.id} onClick={ this.delete }>
                          delete
                        </a>
                      </td>
                    </tr>
                  )
                }.bind(this))
              }
            </tbody>
          </table>
        </div>

        <a href="#admin" className="ui button left labeled icon small" style={{ "marginTop" : "18px" , }}>
          <i className="left caret icon"></i>
          Back
        </a>
      </div>
    )
  }
});
