
const AdminMailings = React.createClass({
  getInitialState () {
    return ({
      emails : []
    })
  },

  componentDidMount() {
    $('table').tablesort();

    $.ajax({
      url: 'mailings',
      type: 'GET',
      success: function (emails, b, c) {
        this.setState({
          emails: emails
        })
      }.bind(this)
    })
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

  render() {
    return (
      <div className="" style={{
          "color" : "#262262" ,
          "marginBottom" : "40px" ,
        }}>
        <h2 className="ui header">
          Mailing List
        </h2>

        <table className="ui table" style={{ "color" : "#262262" , }}>
          <thead>
            <tr>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {

              this.state.emails.map( (el) => {
                return(
                  <tr key={'mailing-list' + el.id}>
                    <td>
                      <a href={"mailto:" + el.email} style={{ "color" : "#262262" , }}>
                        { el.email }
                      </a>
                    </td>
                  </tr>

                )
              })
            }
          </tbody>


        </table>
      </div>
    );
  }
});
