
const Ad = React.createClass({
  getInitialState () {
    var style = {
      "color"   : "#262262" ,
      "padding" : "25px" ,
    }

    return({
      style : style ,
      ad    : this.props.ad ,
    })
  },

  componentDidMount () {

  },

  new ( data ) {
    $.ajax({
      url  : '/api/ads' ,
      type : "POST" ,
      data : this.state.ad ,
      success : function ( a , b , c ) {
        debugger
      }.bind(this),
      error   : function ( a , b , c ) {
        debugger
      }.bind(this)
    });
  },

  delete () {
    $.ajax({
      url  : '/api/ads/' + this.state.ad ,
      type : "POST" ,
      success : function ( a , b , c ) {
        debugger
      }.bind(this),
      error   : function ( a , b , c ) {
        debugger
      }.bind(this)
    });
  },

  updateState (e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h2>
          Profiles
        </h2>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">
            <h3>Ad</h3>

            <form className="ui small form" onSubmit={ this.signUp }>

              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  data-field="name"
                  onChange={ this.updateState }
                  value={ this.state.name }
                  />
              </div>

              <div className="field">
                <label>Image Url</label>
                <input
                  type="text"
                  data-field="image_url"
                  onChange={ this.updateState }
                  value={ this.state.image_url }
                  />
              </div>

              <div className="field">
                <label>Link</label>
                <input
                  type="text"
                  data-field="link"
                  onChange={ this.updateState }
                  value={ this.state.link }
                  />
              </div>

              <button className="ui button" type="submit" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }} >
                Create
              </button>
            </form>
          </div>
        </div>

        <div className="ui divider">
        </div>

      </div>
    )
  }
});



const AdForm = React.createClass({
  getInitialState () {
    var style = {
      "padding" : "25px" ,
      "color" : "#262262" ,
    }

    return({
      ad : this.props.ad
    })
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h2>
          Profiles
        </h2>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">
            <h3>Personal</h3>

            <form className="ui small form" onSubmit={ this.signUp }>


              <div className="field">
                <label>Email </label>
                <input type="email" data-field="email" onChange={ this.updateState } />
              </div>

              <div className="field">
                <label>Password</label>
                <input type="password" data-field="password" onChange={ this.updateState } />
              </div>

              <div className="field">
                <label>Confirm Password</label>
                <input type="password" data-field="password2" onChange={ this.updateState } />
              </div>

              <div className="two fields">
                <div className="field">
                  <label>First Name</label>
                  <input type="text" data-field="first_name" onChange={ this.updateState } />
                </div>

                <div className="field">
                  <label>Last Name</label>
                  <input type="text" data-field="last_name" onChange={ this.updateState } />
                </div>
              </div>

              <div className="field">
                <label>Phone</label>
                <input type="text" data-field="phone" onChange={ this.updateState } />
              </div>

              <div className="field">
                <label>Physical Address</label>
                <input type="text" data-field="user_address" onChange={ this.updateState } />
              </div>

              <div className="three fields">
                <div className="field">
                  <label>City</label>
                  <input type="text" data-field="user_city" onChange={ this.updateState }  />
                </div>

                <div className="field">
                  <label>State</label>
                  <input type="text" data-field="user_state" onChange={ this.updateState }   />
                </div>

                <div className="small field">
                  <label>Zip</label>
                  <input type="text" data-field="user_zip" onChange={ this.updateState }   />
                </div>
              </div>

              <div className="field">
                <label>Country</label>
                <input type="text" data-field="user_country" onChange={ this.updateState }  />
              </div>

              <h3>Company</h3>

              <div className="field">
                <label>Company Name</label>
                <input type="text" data-field="company_name" onChange={ this.updateState } />
              </div>

              <div className="field">
                <label>Mailing Address</label>
                <input type="text" data-field="company_address" onChange={ this.updateState } />
              </div>

              <div className="three fields">
                <div className="field">
                  <label>City</label>
                  <input type="text" data-field="company_city" onChange={ this.updateState }  />
                </div>

                <div className="field">
                  <label>State</label>
                  <input type="text" data-field="company_state" onChange={ this.updateState } />
                </div>

                <div className="field">
                  <label>Zip</label>
                  <input type="text" data-field="company_zip" onChange={ this.updateState } />
                </div>
              </div>

              <div className="field">
                <label>Country</label>
                <input type="text" data-field="company_country" onChange={ this.updateState } />
              </div>

              <div className="field">
                <label>Business Type (NAICS Code)</label>
                <select className="ui dropdown" data-field="company_business_type" onChange={ this.updateState }  >
                  <option></option>

                  {
                    this.state.businessCodes.map( function (el) {
                      return (
                        <option key = { el } value = { el } >
                          { el }
                        </option>
                      )
                    })
                  }
                </select>
              </div>

              <button className="ui button" type="submit" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }} >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="ui divider">
        </div>

      </div>
    )
  }
});
