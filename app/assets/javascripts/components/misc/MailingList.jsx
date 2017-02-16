const MailingList = React.createClass({

  save () {
    $.ajax({
      url: 'api/mail/',
      type: 'POST' ,
      data: {message: this.state} ,
      success (a, b, c) {
        alert('Thanks!')
        location.href = ""
      }, error (a, b, c) {
        debugger
      }
    })
  },

  update(e) {
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
          <div className="two fields">
            <div className="field">
              <label>First <small style={{ "color" : "red" , }}><i>required</i></small></label>
              <input type="text" data-field="first" onChange={ this.update } required/>
            </div>

            <div className="field">
              <label>Last <small style={{ "color" : "red" , }}><i>required</i></small></label>
              <input type="text" data-field="last" onChange={ this.update } required/>
            </div>
          </div>

          <div className="field">
            <label>Email <small style={{ "color" : "red" , }}><i>required</i></small></label>
            <input type="email" data-field="email" onChange={ this.update } required/>
          </div>

          <div className="field">
            <label>Company <small style={{ "color" : "red" , }}><i>required</i></small></label>
            <input type="text" data-field="company" onChange={ this.update } required/>
          </div>

          <div className="field">
            <label>Zip</label>
            <input type="text" data-field="zip" onChange={ this.update } />
          </div>

          <button className="ui button" type="submit" >
            Submit
          </button>
        </form>

      </div>
    )
  }
});
