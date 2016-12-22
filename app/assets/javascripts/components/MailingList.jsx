const MailingList = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "textAlign" : "center" ,
      "padding" : "60px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  signUpUser () {
    $.ajax({
      url: '/api/mailing_list/',
      type: 'POST' ,
      data: { user: this.state } ,
      success (a, b, c) {
        debugger
        alert('You were signed up successfully!')
      } , error (a, b, c) {
        debugger
        alert("Oops there was an error!")
      }
    })
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1>Sign Up for our Mailing List!</h1>
        <div className="ui grid centered">
          <div className="eight wide column">
            <form className="ui form" onSubmit={ this.signUpUser }>
              <div className="field">
                <input type="email" placeholder="@" required />
              </div>

              <button className="ui button purple floated center" style = {{ "marginTop" : "12px" , "background" : "#262262" }} type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});
