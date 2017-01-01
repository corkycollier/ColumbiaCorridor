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
    "":"home",
    "about-us":"aboutUs",
    "events/:id":"event",
    "events":"events",
    "admin/:resource":"adminResource",
    "admin":"admin",
    "resources":"resources",
    "member-area":"memberArea",
    "join":"join",
    "sponsor":"sponsor",
    "contact":"contact",
    "directory":"directory",
    "make-news":"makeNews",
    "edit-profile":"editProfile",
    "sign-up":"signUp",
    "make-event":"makeEvent",
    "sign-in":"signIn",
    "news/:id":"news",
    "mailing-list":"mailingList",
  },

  allViews() {
    this.home = <Home parent={this.parent} key="home" /> ;
    this.resources  = <Resources parent={this.parent} key="resources" /> ;
    this.memberArea = <MemberArea parent={this.parent} key="member-area" /> ;
    this.directory = <Directory parent={this.parent} key="directory" />
    this.editProfile = <EditProfile parent={this.parent} key="edit-profile" />;
    this.makeNews = <MakeNews parent={this.parent} key="make-news" />;
    this.aboutUs = <AboutUs parent={this.parent} key="about-us" />;
    this.events = <Events parent={this.parent} key="events" /> ;
    this.makeEvent = <MakeEvent parent={this.parent} key="make-event" /> ;
    this.join= <Join parent={this.parent} key="join" /> ;
    this.sponsor = <Sponsor parent={this.parent} key="sponsor" /> ;
    this.contact = <Contact parent={this.parent} key="contact" /> ;
    this.signIn = <SignIn parent={this.parent} key="sign-in" /> ;
    this.mailingList = <MailingList parent={this.parent} key="mailing-list" /> ;
    this.admin = <Admin parent={this.parent} key="admin" /> ;

  },

  home () {
    this.go( this.home );
  },

  memberArea () {
    if (!this.parent.state.user) {
      this.go( this.home );
    } else {
      this.go( this.memberArea )
    }
  },

  directory () {
    this.go( this.directory );
  },

  editProfile () {
    this.go( this.editProfile );
  },

  makeNews () {
    this.go( this.makeNews )
  },

  makeEvent () {
    this.go( this.makeEvent )
  },

  aboutUs () {
    this.go( this.aboutUs )
  },

  events () {
    this.go( this.events )
  },

  event ( id ) {
    var page = <Event parent={this.parent} id={ id } key="event" /> ;
    this.go( page )
  },

  news (id) {
    var page = <News parent={this.parent} id={ id } key="news" /> ;
    this.go( page );
  },

  resources () {
    this.go( this.resources )
  },

  join () {
    this.go( this.join )
  },

  sponsor () {
    this.go( this.sponsor )
  },


  contact () {
    this.go( this.contact )
  },

  signIn () {
    this.go( this.signIn )
  },


  mailingList () {
    this.go( this.mailingList )
  },

  admin () {
    if (this.parent.state.user.level == "Admin" || this.parent.state.user.id == 2 ) {
      this.go( this.admin );
    } else {
      this.go( this.home );
    }
  },

  go ( page ) {
    this.parent.setState({
      activePage: [ page ]
    });
  }
})
