const Columbia = React.createClass({
  getInitialState () {
    var style = {

    }
    return({
      style : style ,
      user : this.props.app_data.user ,
      members : this.props.app_data.members ,
      news : this.props.app_data.news ,
      events : this.props.app_data.events ,
    })
  },

  componentDidMount () {

    this.initRouter();
    this.disableMemberArea();
    this.initAllViews();
  },

  initRouter () {
    this.setState({
      router: new router(this),
    })
  },

  disableMemberArea () {
    setTimeout(function(){
      if (!this.state.user) {
        $('.member-area').addClass('disabled');
      }
    }.bind(this))
  },

  initAllViews() {
    // copy of all views stored in main componentn
    var views = {
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
      "signIn"  : <SignIn parent={ this } key="sign-in" /> ,
      "mailing-list"  : <MailingList parent={ this } key="mailing-list" /> ,
      "admin"  : <Admin parent={ this } key="admin" /> ,
    }

    this.setState({
      views: views
    });
  },

  render () {
    return (
      <div className="" style={this.state.style} >
        <SidebarMenu />

        <div className="pusher" style={{ "paddingTop" : "1px" }}>

          <Header parent = { this } />
          <CMenu parent = { this } />

            {
              this.state.activePage
            }


          <Footer parent={ this } />
        </div>
      </div>
    )
  }
});
