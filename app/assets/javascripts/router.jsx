// sets active pages on Main app
// handles http requests (ex. http://hello.com/backbone#router )
// see http://backbonejs.org/#Router for more info

const router = Backbone.Router.extend({
  initialize (parent) {
    this.parent = parent;
    Backbone.history.start();
  },


  routes: {
    "" : "home" ,
    "about-us" : "aboutUs" ,
    "events" : "events" ,
    "resources" : "resources" ,
    "join" : "join" ,
    "sponsor" : "sponsor" ,
    "contact" : "contact" ,
    "sign-up" : "signUp" ,
    "sign-in" : "signIn" ,
    "directory" : "directory" ,
    "edit-profile" : "editProfile",
    "make-news" : "makeNews" ,
    "make-ad" : "makeAd" ,
    "make-event" : "makeEvent" ,
    "event/:id" : "event" ,
    "news/:id" : "news" ,
    "admin" : "admin" ,
    "member-area" : "memberArea" ,
    "make-event":"makeEvent",
    "make-ad":"page",
    "edit/user/:id":"editUserId",
    "edit/sponsor/:id":"editSponsorId",
    "edit/news/:id":"editNewsId",
    "new-sponsor":"newSponsor",
    "edit/sponsor/:id":"editSponsor",

  },

  home () {
    var home = <Home parent={ this.parent } key="home" /> ;
    this.go( home )
  },

  aboutUs () {
    var aboutUs = <AboutUs parent={ this.parent } key="aboutUs" /> ;
    this.go( aboutUs )
  },

  events () {
    var events = <Events parent={ this.parent } key="events" /> ;
    this.go( events )
  },

  resources () {
    var resources = <Resources parent={ this.parent } key="resources" /> ;
    this.go( resources )
  },

  join () {
    var join = <Join parent={ this.parent } key="join" /> ;
    this.go( join )
  },

  sponsor () {
    var sponsor = <Sponsor parent={ this.parent } key="sponsor" /> ;
    this.go( sponsor )
  },

  contact () {
    var contact = <Contact parent={ this.parent } key="contact" /> ;
    this.go( contact )
  },

  signIn () {
    var signIn = <SignIn parent={ this.parent } key="signIn" /> ;
    this.go( signIn )
  },

  signUp () {
    var signUp = <SignUp parent={ this.parent } key="signUp" /> ;
    this.go( signUp )
  },

  editProfile () {
    var editProfile = <EditProfile parent={ this.parent } key="editProfile" /> ;
    this.go( editProfile )
  },

  makeNews () {
    var makeNews = <MakeNews parent={ this.parent } key="makeNews" /> ;
    this.go( makeNews )
  },

  makeEvent () {
    var makeEvent = <MakeEvent parent={ this.parent } key="makeEvent" /> ;
    this.go( makeEvent )
  },

  makeAd () {
    var makeAd = <MakeAd parent={ this.parent } key="makeAd" /> ;
    this.go( makeAd )
  },

  directory () {
    var directory = <Directory parent={ this.parent } key="directory" /> ;
    this.go( directory )
  },

  memberArea () {
    if (!this.parent.state.user) {
      this.home();
    } else {
      var memberArea = <MemberArea parent={ this.parent } key="member-area" /> ;
      this.go( memberArea );
    }
  },



  admin () {
    if ( this.parent.state.user.id < 3 ) {
      var admin = <Admin parent={ this.parent } key="admin" /> ;
      this.go( admin );
    } else {
      this.home();
    }
  },


  event ( id ) {
    var page = <Event parent={this.parent} id={ id } key={ "event" + id } /> ;
    this.parent.setState({
      activePage: [ page ]
    });
  },

  news (id) {

    var page = <News parent={this.parent} id={ id } key={ "news" + id } /> ;

    this.parent.setState({
      activePage: [ page ]
    });
  },


  editUserId ( id ) {
    var user;
    this.parent.state.members.forEach(function(el) {
      if (el.id == id ) {
        user = el
      }
    });

    var page = <AdminEditProfile
      parent={ this.parent }
      user={ user }
      key="edit-profile-user"
      /> ;
    this.go( page )
  },

  editNewsId ( id ) {
    var news;
    this.parent.state.news.forEach(function(el) {
      if (el.id == id ) {
        news = el
      }
    });

    var page = <EditNewsAdmin
      parent={ this.parent }
      news={ news }
      key="edit-profile-news"
      /> ;
    this.go( page )
  },

  newSponsor () {
    var makeAd = <MakeAd parent={ this.parent } key="makeAd" /> ;
    this.go( makeAd )
  },

  editSponsor ( id ) {
    var ad;

    this.parent.state.ads.forEach(function(el) {
      if (el.id == id) {
        ad = el ;
      }
    });


    var editAd = <EditAd parent={ this.parent } ad={ ad } key="editAd" /> ;
    this.go( editAd )
  },


  go ( page ) {
    var page = page || Backbone.history.getFragment() || "home" ;

    this.parent.setState({
      activePage: [ page ]
    });
  },
})
