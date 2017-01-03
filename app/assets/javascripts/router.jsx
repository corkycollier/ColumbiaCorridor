// sets active pages on Main app
// handles http requests (ex. http://hello.com/backbone#router )
// see http://backbonejs.org/#Router for more info

const router = Backbone.Router.extend({
  initialize (parent) {
    this.parent = parent;
    Backbone.history.start();
    this.allViews();
  },

  routes: {
    "":"page",
    "about-us":"page",
    "events":"page",
    "resources":"page",
    "member-area":"page",
    "join":"page",
    "sponsor":"page",
    "contact":"page",
    "sign-up":"page",
    "sign-in":"page",
    "directory":"page",
    "make-news":"page",
    "edit-profile":"page",
    "mailing-list":"page",

    "events/:id":"event",
    "news/:id":"news",
    "admin":"admin",
    "make-event":"makeEvent",
  },

  page(){
    debugger
  },


  allViews() {
    var views = {
      "about-us" : <AboutUs parent={this.parent} key="about-us" />,
      "events" : <Events parent={this.parent} key="events" /> ,
      "home" : <Home parent={this.parent} key="home" /> ,
      "admin"  : <Admin parent={this.parent} key="admin" /> ,
      "resources"  : <Resources parent={this.parent} key="resources" /> ,
      "member-area" : <MemberArea parent={this.parent} key="member-area" /> ,
      "directory" : <Directory parent={this.parent} key="directory" /> ,
      "edit-profile" : <EditProfile parent={this.parent} key="edit-profile" />,
      "make-news" : <MakeNews parent={this.parent} key="make-news" />,
      "makeEvent" : <MakeEvent parent={this.parent} key="make-event" /> ,
      "join" : <Join parent={this.parent} key="join" /> ,
      "sponsor"  : <Sponsor parent={this.parent} key="sponsor" /> ,
      "contact"  : <Contact parent={this.parent} key="contact" /> ,
      "signIn"  : <SignIn parent={this.parent} key="sign-in" /> ,
      "mailingList"  : <MailingList parent={this.parent} key="mailing-list" /> ,
    }

    this.parent.setState({
      views: views
    })
  },

  memberArea () {
    if (!this.parent.state.user) {
      this.page( "home" );
    } else {
      this.page( "memberArea" )
    }
  },


  event ( id ) {
    var page = <Event parent={this.parent} id={ id } key="event" /> ;
    setTimeout(function(){
      this.parent.setState({
        activePage: [ page ]
      });
    }.bind(this), 0)
  },

  news (id) {
    var page = <News parent={this.parent} id={ id } key="news" /> ;

  setTimeout(function(){
      this.parent.setState({
        activePage: [ page ]
      });
    }.bind(this), 0)
  },

  admin () {
    if (this.parent.state.user.level == "Admin" || this.parent.state.user.id == 2 ) {
      this.page( "admin" );
    } else {
      this.page( "home" );
    }
  },

  admin () {
    if (this.parent.state.user.level == "Admin" || this.parent.state.user.id == 2 ) {
      this.page( "admin" );
    } else {
      this.page( "home" );
    }
  },
  page ( page ) {
    var page = Backbone.history.getFragment() || "home" ;

    setTimeout(function(){
      this.parent.setState({
        activePage: [ this.parent.state.views[ page ] ]
      });
    }.bind(this), 0)
  }
})
