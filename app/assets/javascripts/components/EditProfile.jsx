
const EditProfile = React.createClass({
  getInitialState () {
    var businessCodes = [
      "11: Agriculture, Forestry, Fishing and Hunting" ,
      "21: Mining, Quarrying, and Oil and Gas Extraction" ,
      "22: Utilities" ,
      "23: Contruction" ,
      "31-33: Manufacturing" ,
      "42: Wholesale Trade" ,
      "44-45: Retail Trade" ,
      "48-49: Transportation and Warehousing" ,
      "51: Information" ,
      "52: Finance and Insurance" ,
      "53: Real Estate and Rental and Leasing" ,
      "54: Professional, Scientific, and Technical Services" ,
      "55: Management of Companies and Enterprises" ,
      "56: Administrative and Support and Waste Management and Remediation Services" ,
      "61: Educational Services" ,
      "62: Health Care and Social Assistance" ,
      "71: Arts, Entertainment, and Recreation" ,
      "72: Accommodation and Food Services" ,
      "81: Other Services (except Public Administration)" ,
      "92: Public Administration" ,
    ]

    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
      "marginBottom" : "60px" ,
    }

    var state = this.props.parent.state.user ;
    state['businessCodes'] = businessCodes ;
    state['style'] = style ;
    return( state );
  },

  componentDidMount () {
    $('table').tablesort();
  },

  updateUser () {
    $.ajax({
      url: '/api/users/' + this.state.id ,
      type: 'PATCH' ,
      data: { user: this.state } ,
      success (a, b, c) {
        alert('Profile was updated.')
      } , error (a, b, c) {
        alert("There was an error. Your profile was not udpated.")
      }
    })
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
          Edit Profile
        </h2>

        <div className="ui grid doubling stackable">
          <div className="sixteen wide column">

            <form className="ui small form" onSubmit={ this.signUp }>

              <h3>Personal</h3>

              <div className="field">
                <label>Username</label>
                <input type="text" required data-field="username" onChange={ this.updateState } defaultValue={this.state.username} />
              </div>

              <div className="field">
                <label>Email </label>
                <input type="email" data-field="email" onChange={ this.updateState } defaultValue={this.state.email}  />
              </div>

              <div className="field">
                <label>Password</label>
                <div className="ui mini basic button">
                  Reset password
                </div>
              </div>

              <div className="two fields">
                <div className="field">
                  <label>First Name</label>
                  <input type="text" data-field="first_name" onChange={ this.updateState } defaultValue={this.state.first_name} />
                </div>

                <div className="field">
                  <label>Last Name</label>
                  <input type="text" data-field="last_name" onChange={ this.updateState } defaultValue={this.state.last_name} />
                </div>
              </div>

              <div className="field">
                <label>Phone</label>
                <input type="text" data-field="phone" onChange={ this.updateState } defaultValue={this.state.phone}  />
              </div>

              <div className="field">
                <label>Physical Address</label>
                <input type="text" data-field="user_address" onChange={ this.updateState } defaultValue={this.state.user_address} />
              </div>

              <div className="three fields">
                <div className="field">
                  <label>City</label>
                  <input type="text" data-field="user_city" onChange={ this.updateState } defaultValue={this.state.user_city}  />
                </div>

                <div className="field">
                  <label>State</label>
                  <input type="text" data-field="user_state" onChange={ this.updateState } defaultValue={this.state.user_state}  />
                </div>

                <div className="small field">
                  <label>Zip</label>
                  <input type="text" data-field="user_zip" onChange={ this.updateState } defaultValue={this.state.user_zip}  />
                </div>
              </div>

              <div className="field">
                <label>Country</label>
                <input type="text" data-field="user_country" onChange={ this.updateState } defaultValue={ this.state.user_country } />
              </div>

              <h3>Company</h3>

              <div className="field">
                <label>Company Name</label>
                <input type="text" data-field="company_name" onChange={ this.updateState } defaultValue={this.state.company_name} />
              </div>

              <div className="field">
                <label>Mailing Address</label>
                <input type="text" data-field="company_address" onChange={ this.updateState } defaultValue={this.state.company_address}  />
              </div>

              <div className="three fields">
                <div className="field">
                  <label>City</label>
                  <input type="text" data-field="company_city" onChange={ this.updateState } defaultValue={this.state.company_city} />
                </div>

                <div className="field">
                  <label>State</label>
                  <input type="text" data-field="company_state" onChange={ this.updateState } defaultValue={this.state.company_state} />
                </div>

                <div className="field">
                  <label>Zip</label>
                  <input type="text" data-field="company_zip" onChange={ this.updateState } defaultValue={this.state.company_zip} />
                </div>
              </div>

              <div className="field">
                <label>Country</label>
                <input type="text" data-field="company_country" onChange={ this.updateState } defaultValue={this.state.company_country} />
              </div>

              <div className="field">
                <label>Business Type (NAICS Code)</label>
                <select className="ui dropdown" data-field="company_business_type" onChange={ this.updateState } defaultValue={this.state.company_business_type}  >
                  <option></option>

                  {
                    this.state.businessCodes.map( function (el) {
                      var selected ;
                      if (this.state.company_business_type) {
                        selected = "selected" ;
                      }

                      return (
                        <option key = { el } value = { el } selected={ selected }>
                          { el }
                        </option>
                      )
                    }.bind(this))
                  }
                </select>
              </div>

              <button className="ui button" type="submit" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "18px" }} onClick={ this.updateUser }>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});