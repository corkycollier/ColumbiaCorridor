const Main = React.createClass({

  getInitialState () {
    // all application views are set into main component
    // whenever adding a new view give it a name and add here

    var views = {
      // name : view ,
      "home" : <Home parent={ this } key="home" /> ,
      "resources"  : <Resources parent={ this } key="resources" /> ,
      "member-area" : <MemberArea parent={ this } key="member-area" /> ,
      "directory" : <Directory parent={ this } key="directory" /> ,
      "edit-profile" : <EditProfile parent={ this } key="edit-profile" />,
      "make-news" : <MakeNews parent={ this } key="make-news" />,
      "about-us" : <AboutUs parent={ this } key="about-us" />,
      "events" : <Events parent={ this } key="events" /> ,
      "make-event" : <MakeEvent parent={ this } key="make-event" /> ,
      "join" : <Join parent={ this } key="join" /> ,
      "sponsor"  : <Sponsor parent={ this } key="sponsor" /> ,
      "contact"  : <Contact parent={ this } key="contact" /> ,
      "sign-in"  : <SignIn parent={ this } key="sign-in" /> ,
      "sign-up"  : <SignUp parent={ this } key="sign-up" /> ,
      "mailing-list"  : <MailingList parent={ this } key="mailing-list" /> ,
      "admin"  : <Admin parent={ this } key="admin" /> ,
      "make-ad"  : <MakeAd parent={ this } key="ad" /> ,
    }

    // log app data and set it
    console.log( this.props.data )
    this.props.data['views'] = views ;
    return( this.props.data )
  },

  componentDidMount () {
    this.initRouter();
    setTimeout(this.customMethods, 0);
  },

  initRouter () {
    this.setState({
      router: new router(this),
    })
  },

  customMethods() {
    // specific functionality for your application

    // disable member area on menu
    if (!this.state.user) {
      $('.member-area').addClass('disabled');
    }
  },

  render () {
    return (
      <div>
        <SidebarMenu parent = { this } />
        <Header parent = { this } />
        <Menu parent = { this } />

        <div>
          {
            this.state.activePage
          }
        </div>

        <Footer parent={ this } />
      </div>
    )
  }
});
