const SignIn = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  updateEmail(e) {
    this.setState({
      password: e.currentTarget.value
    })
  },


  updatePassword(e) {
    this.setState({
      password: e.currentTarget.value
    })
  },

  signIn () {
    $.ajax({
      url: 'session' ,
      type: 'POST' ,
      data: {
        user: {
          email : this.state.email ,
          password : this.state.password ,
        }
      }, success (a, b, c) {
        debugger
      }, error (a, b, c) {
        debugger
      }

    })
  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <h1>Sign In</h1>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input type="text" required onChange={ this.updateEmail } />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" required onChange={ this.updatePassword } />
          </div>
        </div>

        <div className="ui button" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }} onClick={ this.signIn } >
          Sign In
        </div>
      </div>
    )
  }
});


const SignUp = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
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
      email : "",
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="" style={this.state.style}>
        <h1>Sign Up</h1>

        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input type="text" required />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" required />
          </div>

          <div className="field">
            <label>Confirm Password</label>
            <input type="password" required />
          </div>

          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <input type="text" required />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input type="text" required />
            </div>
          </div>

          <div className="field">
            <label>Company Name</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Mailing Address</label>
            <input type="text" />
          </div>

          <div className="three fields">
            <div className="field">
              <label>City</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>State</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>Zip</label>
              <input type="text" />
            </div>
          </div>

          <div className="field">
            <label>Country</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Physical Address</label>
            <input type="text" />
          </div>

          <div className="three fields">
            <div className="field">
              <label>City</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>State</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>Zip</label>
              <input type="text" />
            </div>
          </div>

          <div className="field">
            <label>Country</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Business Type (NAICS Code)</label>
            <select className="ui dropdown">
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


        </div>

        <div className="ui button" style={{ "background" : "#262262" , "color" : "white" , "marginTop" : "24px" }} onClick={ this.signIn } >
          Sign Up
        </div>
      </div>
    )
  }
});
