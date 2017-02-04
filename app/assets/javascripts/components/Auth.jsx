const SignIn = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "30px 20px" ,
      "paddingBottom" : "40px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  signIn () {
    $.ajax({
      url: 'session' ,
      type: 'POST' ,
      data: { user: this.state } ,
      success (a, b, c) {
        location.href = "" ;
      } , error (a, b, c) {
        alert("Email/password combination not found.")
      }
    })
  },

  updateState (e) {
    var newData = {};
    newData[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( newData );
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1  >
          Sign In
        </h1>

        <form className="ui form" onSubmit={ this.signIn }>
          <div className="field">
            <label>Email</label>
            <input type="email" required data-field="email" onChange={ this.updateState } />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" required data-field="password" onChange={ this.updateState } />
          </div>

          <button className="ui button" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }} type="submit" >
            Sign In
          </button>
        </form>
      </div>
    )
  }
});


const SignUp = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "30px 20px" ,
    }

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

    return({
      style : style ,
      businessCodes : businessCodes ,
      user : {},
    })
  },

  updateState (e) {
    var user = this.state.user;
    user[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState({
      user : user
    });
  },

  signUp () {
    $.ajax({
      url: '/users',
      type: 'POST',
      data: {user: this.state.user},
      success: function (a, b, c) {
        location.href = "";
      }, error: function (a, b, c) {
        alert("Please try again later.")
        location.href = window.location
      }
    })
  },

  componentDidMount() {
    $('.ui.form').form({
      fields: {
        password  : ['minLength[6]'],
      }
    });
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1>
          Sign Up
        </h1>

        <form className="ui form" onSubmit={ this.signUp }>

          <h3>Personal</h3>

          <div className="field">
            <label>Email <i className="asterisk icon" style={{"color":"red" , "fontSize" : "8px" ,"position" : "relative" , "bottom":"1px"}}/> </label>
            <input type="email" required data-field="email" onChange={ this.updateState } required />
          </div>

          <div className="field">
            <label>Password <i className="asterisk icon" style={{"color":"red" , "fontSize" : "8px" ,"position" : "relative" , "bottom":"1px"}}/></label>
            <input type="password" required data-field="password" onChange={ this.updateState } required />
          </div>

          <div className="two fields">
            <div className="field">
              <label>First Name <i className="asterisk icon" style={{"color":"red" , "fontSize" : "8px" ,"position" : "relative" , "bottom":"1px"}}/></label>
              <input type="text" required data-field="first_name" onChange={ this.updateState } required />
            </div>

            <div className="field">
              <label>Last Name <i className="asterisk icon" style={{"color":"red" , "fontSize" : "8px" ,"position" : "relative" , "bottom":"1px"}}/></label>
              <input type="text" required data-field="last_name" onChange={ this.updateState } required />
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

            <div className="field">
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
            <label>Company Website</label>
            <input type="text" data-field="company_website" onChange={ this.updateState } />
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
    )
  }
});
