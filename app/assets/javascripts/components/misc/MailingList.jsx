const MailingList = React.createClass({

  update(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },
  
  componentWillMount() {
    const script = document.createElement("script");
    script.src = "https://static.ctctcdn.com/h/contacts-embedded-signup-assets/1.0.2/js/signup-form.js";
    document.body.appendChild(script);
    
    const script2 = document.createElement("script");
    var postUrlText = document.createTextNode("var postURL = 'https://visitor2.constantcontact.com/api/signup'");
    script2.appendChild(postUrlText);
    script2.type="text/javascript";
    document.body.appendChild(script2);
    },
  
  render () {
    return (
      <div class="ctct-embed-signup ui container" style={{ "padding" : "25px" }}>
        <link rel='stylesheet' type='text/css' href='https://static.ctctcdn.com/h/contacts-embedded-signup-assets/1.0.2/css/signup-form.css'></link>
        <span id="success_message" style={{ "display" : "none" }}>
          <div style={{ "text-align" : "center" }}>Thanks for signing up!</div>
        </span>
        <form data-id="embedded_signup:form" class="ctct-custom-form Form ui form" name="embedded_signup" method="POST" action="https://visitor2.constantcontact.com/api/signup">
          <h2 style={ {"margin" : "0" }}>Join our mailing list!</h2>
          
          <input data-id="ca:input" type="hidden" name="ca" value="a6b1336f-81c8-48cb-ac49-32cb63b70dfb"></input>
          
          <input data-id="list:input" type="hidden" name="list" value="2080238653"></input>
          
          <input data-id="source:input" type="hidden" name="source" value="EFD"></input>
          
          <input data-id="required:input" type="hidden" name="required" value="list,email,first_name,last_name,company"></input>
          
          <input data-id="url:input" type="hidden" name="url" value=""></input>
          
          <p data-id="Email Address:p" class="field">
            <label data-id="Email Address:label" data-name="email" class="ctct-form-required">Email Address</label> 
            <input data-id="Email Address:input" type="text" name="email" value="" maxlength="80"></input>
          </p>
          
          <p data-id="First Name:p" class="field">
            <label data-id="First Name:label" data-name="first_name" class="ctct-form-required">First Name</label> 
            <input data-id="First Name:input" type="text" name="first_name" value="" maxlength="50"></input>
          </p>
          
          <p data-id="Last Name:p" class="field">
            <label data-id="Last Name:label" data-name="last_name" class="ctct-form-required">Last Name</label> 
            <input data-id="Last Name:input" type="text" name="last_name" value="" maxlength="50"></input>
          </p>
          
          <p data-id="Company:p" class="field">
            <label data-id="Company:label" data-name="company" class="ctct-form-required">Company</label> 
            <input data-id="Company:input" type="text" name="company" value="" maxlength="50"></input>
          </p>
          
          <button type="submit" class="ui button" data-enabled="enabled">Sign Up</button>
          
        </form>
      </div>
    );
  }
});
