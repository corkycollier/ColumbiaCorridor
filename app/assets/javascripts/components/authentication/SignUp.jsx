const SignUp = React.createClass({
  getInitialState () {
    var style = {

    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  signUp (e) {

    $.ajax({
      url: '/users',
      type: 'POST',
      data: {
        authenticity_token: $('meta[name=csrf-token]').attr('content'),
        user: {
          email: this.state.email,
          password: this.state.password,
        }
      }, success: function (model, resp, object) {
        location.href = "/"
      }
    })
  },

  updateEmail (e) {
    this.setState({
      email: e.currentTarget.value
    })
  },

  updatePassword (e) {
    this.setState({
      password: e.currentTarget.value
    })
  },

  openModal () {
    $('.sign-up').modal({
      detachable: false
    }).modal('show');
  },

  checkForEnter (e) {
    if (e.keyCode == 13) {
      e.preventDefault
      this.signUp();
    }
  },

  render () {
    return (
      <div classNameName="" style={this.state.style}>
        <button onClick={this.openModal}>
          Sign Up
        </button>

        <div className="ui modal small sign-up" onKeyDown={this.checkForEnter}>

          <i className="close icon"></i>
          <div className="header">
            Sign Up
          </div>

          <div className="image content">
              <div className="description ui form">
                  <div className="field">
                    <input type="email" placeholder="Email" onChange={this.updateEmail} />
                  </div>

                  <div className="field">
                    <input type="password" placeholder="Password" onChange={this.updatePassword} />
                  </div>
              </div>
          </div>

            <div className="actions">
              <div className="ui black deny button">
                Nope
              </div>

              <div className="ui green right labeled icon button" onClick = { this.signUp }>
                Yep, that's me
                <i className="checkmark icon"></i>
              </div>
            </div>
          </div>
        </div>
      )
    }
  });
