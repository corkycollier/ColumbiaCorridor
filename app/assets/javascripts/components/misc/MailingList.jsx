const MailingList = React.createClass({

  save () {
    $.ajax({
      url: '/api/mail/',
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
          "padding" : "25px" ,
        }}>

        <h1>Join our Mailing List!</h1>

        <form className="ui form" onSubmit={ this.save }>
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
