const MailingList = React.createClass({

  update(e) {
    var state = this.state || {};
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container">
        <a href="https://visitor.r20.constantcontact.com/d.jsp?llr=dlpuxoyab&amp;p=oi&amp;m=1125775981923&amp;sit=kizita7kb&amp;f=613e206b-e994-40db-9f1b-f6b30b2b3e8a" className="ui button">
          Sign Up Now!
        </a>
        <div id="ctct_button_footer">
          For Email Newsletters you can trust.
        </div>
      </div>
    );
  }
});
