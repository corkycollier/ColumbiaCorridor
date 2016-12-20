// sets active pages on Main app
// handles http requests (ex. http://hello.com/backbone#router )
// see http://backbonejs.org/#Router for more info

const router = Backbone.Router.extend({
  initialize (parent) {
    this.parent = parent;
    Backbone.history.start();
  },

  routes: {
    "":"home",
    "about-us":"aboutUs",
    "events":"events",
    "resources":"resources",
    "member-area":"memberArea",
    "join":"join",
    "sponsor":"sponsor",
    "contact":"contact",
    "directory":"directory",
    "make-news":"makeNews",
    "edit-profile":"editProfile",
    "sign-up":"signUp",
    "sign-in":"signIn",
    "news/:id":"news",
    "mailing-list":"mailingList",
  },

  home () {
    var page = <Home parent={this.parent} key="home" />;
    this.go( page );
  },

  news (id) {
    var page;

    if (!this.parent.state.user) {
      page = <Home parent={this.parent} key="home" /> ;
    } else {
      page = <News parent={this.parent} id={ id } key="news" /> ;
    }

    this.go( page );
  },

  memberArea () {
    var page;

    if (!this.parent.state.user) {
      page = <Home parent={this.parent} key="home" /> ;
    } else {
      page = <MemberArea parent={this.parent} key="member-area" /> ;
    }

    this.go( page );
  },

  directory () {
    var page = <Directory parent={this.parent} key="directory" />
    this.go( page );
  },

  editProfile () {
    var page = <Profile parent={this.parent} key="edit-profile" />;
    this.go( page );
  },

  makeNews () {
    var page = <MemberNews parent={this.parent} key="make-news" />;
    this.go( page )
  },

  aboutUs () {
    var page = <AboutUs parent={this.parent} key="about-us" />;
    this.go( page )
  },

  events () {
    var page = <Events parent={this.parent} key="events" /> ;
    this.go( page )
  },

  resources () {
    var page = <Resources parent={this.parent} key="resources" /> ;
    this.go( page )
  },

  join () {
    var page = <Join parent={this.parent} key="join" /> ;
    this.go( page )
  },

  sponsor () {
    var page = <Sponsor parent={this.parent} key="sponsor" /> ;
    this.go( page )
  },


  contact () {
    var page = <Sponsor parent={this.parent} key="contact" /> ;
    this.go( page )
  },

  signIn () {
    var page = <SignIn parent={this.parent} key="sign-in" /> ;
    this.go( page )
  },

  signUp () {
    var page = <SignIn parent={this.parent} key="sign-up" /> ;
    this.go( page )
  },

  mailingList () {
    var page = <MailingList parent={this.parent} key="mailing-list" /> ;
    this.go( page )
  },

  go ( page ) {
    this.parent.setState({
      activePage: [ page ]
    });
  }
})
