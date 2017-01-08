
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
    Backbone.history.navigate( 'make-ad' , { trigger : true } )
  },

  render() {

    return (
      <div className="" style={ this.state.style }>
        <h2 className="ui header">
          Sponsors
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
                  <AdminAdsRow
                    key={'aar' + el.id}
                    parent={ this.props.parent }
                    ad={ el }
                    mom={ this }
                    />

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


const AdminAdsRow = React.createClass({

  delete (e) {
    var sure = confirm('Are you sure?');

    if (sure) {
      $.ajax({
        url: '/api/sponsors/' + e.currentTarget.dataset.id ,
        type: 'DELETE' ,
        success: function( app_data , resp , obj ) {
          this.props.parent.setState(app_data)
          this.props.mom.setState({
            ads: app_data.ads
          })
        }.bind(this), error: function ( app_data , resp , obj ) {
          alert('There was an erorr.')
        }.bind(this)
      })

    }
  },

  edit () {
    Backbone.history.navigate( 'edit/sponsor/' + this.props.ad.id , { trigger : true } )
  },

  render() {

    return (
      <tr>

        <td className="collapsing" style={{ "textAlign" : "center" ,}}>
          { this.props.ad.id }
        </td>

        <td >
          { this.props.ad.name }
        </td>

        <td>
          { this.props.ad.image_url }
        </td>

        <td >
          { this.props.ad.link }
        </td>

        <td className="collapsing">

          <a data-id={this.props.ad.id} onClick={ this.edit } style={{ "marginRight" : "8px" ,}}>
            edit
          </a>

          <a data-id={this.props.ad.id} onClick={ this.delete }>
            delete
          </a>
        </td>
      </tr>
    );
  }
});
