const SignIn = React.createClass({
  getInitialState () {
    var style = {

    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  signIn (e) {
    $.ajax({
      url: '/session',
      type: 'POST',
      data: {
        authenticity_token: $('meta[name=csrf-token]').attr('content'),
        user: {
          email: this.state.email,
          password: this.state.password,
        }
      }, success: function (model, resp, object) {
        alert('Welcome Back!');
        location.href = "/";
      }, error: function (model, resp, object) {
        alert('Email/Password combination not found.');
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
    $('.sign-in').modal({
      detachable: false
    }).modal('show');
  },

  checkForEnter (e) {
    if (e.keyCode == 13) {
      e.preventDefault
      this.signIn();
    }
  },

  render () {
    return (
      <div classNameName="" style={this.state.style}>
        <button onClick={this.openModal}>
          Sign In
        </button>

        <div className="ui modal small sign-in" onKeyDown={this.checkForEnter}>
          <i className="close icon"></i>
          <div className="header">
            Sign In
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

              <div className="ui green right labeled icon button" onClick={this.signIn}>
                Yep, that's me
                <i className="checkmark icon"></i>
              </div>
            </div>
          </div>
        </div>
      )
    }
  });
