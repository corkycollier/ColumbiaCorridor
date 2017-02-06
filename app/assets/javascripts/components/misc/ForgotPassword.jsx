const ForgotPassword = React.createClass({

  submit () {
    $.ajax({
      url: '/forgot_password',
      type: 'POST' ,
      data: this.state ,
      success (a, b, c) {
        alert('Thanks!')
        location.href = ""
      }
    })
  },

  updateState(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "25px 0px" ,
        }}>

        <h2>
          Password Recovery
        </h2>
        <form className="ui form" onSubmit={ this.submit }>
          <div className="field">
            <label>Email</label>
            <input type="email" data-field="email" onChange={ this.updateState } required/>
          </div>

          <button className="ui button" type="submit" >
            Submit
          </button>
        </form>

      </div>
    )
  }
});
