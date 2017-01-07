
const AdminAds = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "marginBottom" : "40px" ,
    }

    return({
      style: style ,
    })
  },


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
          location.href = "/#admin"
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
    Backbone.history.navigate( 'make-ad' , { trigger : true } )
  },

  render() {

    return (
      <div className="" style={ this.state.style }>
        <h2 className="ui header">
          Ads
        </h2>
        <table className="ui table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image url</th>
              <th>Link</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {

              this.props.parent.state.ads.map( (el) => {
                return(
                  <tr key={ "adminUsers" + el.id }>

                    <td className="collapsing" style={{ "textAlign" : "center" ,}}>
                      { el.id }
                    </td>

                    <td >
                      { el.name }
                    </td>

                    <td>
                      { el.image_url }
                    </td>

                    <td >
                      { el.link }
                    </td>

                    <td className="collapsing">
                      <a data-id={el.id} onClick={ this.delete }>
                        delete
                      </a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>

          <tfoot>
            <tr>
              <th colSpan="6">
                <div className="ui button blue" onClick={ this.makeAd }>
                  New Ad
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
});
