const MailingList = React.createClass({

  update(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },
  
  render () {
    return (
      <div class="ctct-embed-signup" style={{ 'font' : 'Helvetica Neue', 'line-height' : '1.5', '-webkit-font-smoothing' : 'antialiased' }}>
        <link rel='stylesheet' type='text/css' href='https://static.ctctcdn.com/h/contacts-embedded-signup-assets/1.0.2/css/signup-form.css'></link>
        <span id="success_message" style={{ "display" : "none" }}>
          <div style={{ "text-align" : "center" }}>Thanks for signing up!</div>
        </span>
        <form data-id="embedded_signup:form" class="ctct-custom-form Form" name="embedded_signup" method="POST" action="https://visitor2.constantcontact.com/api/signup">
           <h2 style={ {"margin" : "0" }}>Join our mailing list!</h2>
           <input data-id="ca:input" type="hidden" name="ca" value="a6b1336f-81c8-48cb-ac49-32cb63b70dfb"></input>
           <input data-id="list:input" type="hidden" name="list" value="2080238653"></input>
           <input data-id="source:input" type="hidden" name="source" value="EFD"></input>
           <input data-id="required:input" type="hidden" name="required" value="list,email,first_name,last_name,company"></input>
           <input data-id="url:input" type="hidden" name="url" value=""></input>
           <p data-id="Email Address:p" ><label data-id="Email Address:label" data-name="email" class="ctct-form-required">Email Address</label> <input data-id="Email Address:input" type="text" name="email" value="" maxlength="80"></input></p>
           <p data-id="First Name:p" ><label data-id="First Name:label" data-name="first_name" class="ctct-form-required">First Name</label> <input data-id="First Name:input" type="text" name="first_name" value="" maxlength="50"></input></p>
           <p data-id="Last Name:p" ><label data-id="Last Name:label" data-name="last_name" class="ctct-form-required">Last Name</label> <input data-id="Last Name:input" type="text" name="last_name" value="" maxlength="50"></input></p>
           <p data-id="Company:p" ><label data-id="Company:label" data-name="company" class="ctct-form-required">Company</label> <input data-id="Company:input" type="text" name="company" value="" maxlength="50"></input></p>
           <button type="submit" class="Button ctct-button Button--block Button-secondary" data-enabled="enabled">Sign Up</button>
         <div>
            <p class="ctct-form-footer">By submitting this form, you are granting: Columbia Corridor Association, PO Box 55651, Portland, Oregon, 97238, United States, http://www.columbiacorridor.org permission to email you. You may unsubscribe via the link found at the bottom of every email.  (See our <a href="http://www.constantcontact.com/legal/privacy-statement" target="_blank">Email Privacy Policy</a> for details.) Emails are serviced by Constant Contact.
            </p>
          </div>
        </form>
        <script type='text/javascript'>
           var localizedErrMap = {};
           localizedErrMap['required'] = 		'This field is required.';
           localizedErrMap['ca'] = 			'An unexpected error occurred while attempting to send email.';
           localizedErrMap['email'] = 			'Please enter your email address in name@email.com format.';
           localizedErrMap['birthday'] = 		'Please enter birthday in MM/DD format.';
           localizedErrMap['anniversary'] = 	'Please enter anniversary in MM/DD/YYYY format.';
           localizedErrMap['custom_date'] = 	'Please enter this date in MM/DD/YYYY format.';
           localizedErrMap['list'] = 			'Please select at least one email list.';
           localizedErrMap['generic'] = 		'This field is invalid.';
           localizedErrMap['shared'] = 		'Sorry, we could not complete your sign-up. Please contact us to resolve this.';
           localizedErrMap['state_mismatch'] = 'Mismatched State/Province and Country.';
        	 localizedErrMap['state_province'] = 'Select a state/province';
           localizedErrMap['selectcountry'] = 	'Select a country';
           var postURL = 'https://visitor2.constantcontact.com/api/signup';
        </script>
        <script src="https://static.ctctcdn.com/h/contacts-embedded-signup-assets/1.0.2/js/signup-form.js"></script>
      </div>
    );
  }
});
