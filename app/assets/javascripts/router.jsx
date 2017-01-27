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
    "about-cca" : "aboutCCA" ,
    "columbia-corridor" : "columbiaCorridor" ,
    "board/:id" : "boardId" ,
    "board" : "board" ,
    "staff" : "staff" ,
    "events" : "events" ,
    "members" : "members" ,
    "resourcesfull-use" : "resourceFullUse" ,
    "groundwater" : "groundwater" ,
    "resources" : "resources" ,
    "join" : "join" ,
    "sponsor" : "sponsor" ,
    "membership" : "membership" ,
    "cca-news" : "ccaNews" ,
    "contact" : "contact" ,
    "mailing-list" : "mailingList" ,
    "sign-up" : "signUp" ,
    "sign-in" : "signIn" ,
    "directory" : "directory" ,
    "edit-profile" : "editProfile",
    "make-news" : "makeNews" ,
    "year-in-review" : "yearInReview" ,
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
    var page = <Home parent={ this.parent } key="home" /> ;
    this.go( page )
  },

  resourceFullUse () {
    var page = <ResourceFullUse parent={ this.parent } key="resourceFullUse" /> ;
    this.go( page )
  },

  yearInReview () {
    var page = <YearInReview parent={ this.parent } key="yearInReview" /> ;
    this.go( page )
  },

  groundwater () {
    var page = <Groundwater parent={ this.parent } key="groundwater" /> ;
    this.go( page )
  },

  membership () {
    var page = <Membership parent={ this.parent } key="membership" /> ;
    this.go( page )
  },

  mailingList () {
    var page = <MailingList parent={ this.parent } key="mailingList" /> ;
    this.go( page )
  },

  ccaNews () {
    var page = <CCANews parent={ this.parent } key="ccaNews" /> ;
    this.go( page )
  },

  aboutCCA () {
    var page = <AboutCCA parent={ this.parent } key="aboutCCA" /> ;
    this.go( page )
  },

  columbiaCorridor () {
    var page = <ColumbiaCorridor parent={ this.parent } key="columbiaCorridor" /> ;
    this.go( page )
  },

  staff () {
    var page = <Staff parent={ this.parent } key="staff" /> ;
    this.go( page )
  },

  board () {
    var page = <Board parent={ this.parent } key="board" /> ;
    this.go( page )
  },

  boardId ( id ) {
    var page = <Bios parent={ this.parent } id={ id } key="board" /> ;
    this.go( page )
  },

  aboutUs () {
    var page = <AboutUs parent={ this.parent } key="aboutUs" /> ;
    this.go( page )
  },

  events () {
    var page = <Events parent={ this.parent } key="events" /> ;
    this.go( page )
  },

  resources () {
    var page = <Resources parent={ this.parent } key="resources" /> ;
    this.go( page )
  },

  join () {
    var page = <Join parent={ this.parent } key="join" /> ;
    this.go( page )
  },

  sponsor () {
    var page = <Sponsor parent={ this.parent } key="sponsor" /> ;
    this.go( page )
  },

  contact () {
    var page = <Contact parent={ this.parent } key="contact" /> ;
    this.go( page )
  },

  signIn () {
    var page = <SignIn parent={ this.parent } key="signIn" /> ;
    this.go( page )
  },

  signUp () {
    var page = <SignUp parent={ this.parent } key="signUp" /> ;
    this.go( page )
  },

  editProfile () {
    var page = <EditProfile parent={ this.parent } key="editProfile" /> ;
    this.go( page )
  },

  makeNews () {
    var pagepage = <MakeNews parent={ this.parent } key="makeNews" /> ;
    this.go( pagepage )
  },

  makeEvent () {
    var id;
    if (this.parent.state.user) {
      id = this.parent.state.user.id
    }

    if ( id < 4 ) {
      var page = <MakeEvent parent={ this.parent } key="makeEvent" /> ;
      this.go( page )
    } else {
      this.home();
    }

  },

  makeAd () {
    var page = <MakeAd parent={ this.parent } key="makeAd" /> ;
    this.go( page )
  },

  members () {
    var page = <MemberOnlyDirectory parent={ this.parent } key="members" /> ;
    this.go( page )
  },

  directory () {
    var page = <Directory parent={ this.parent } key="directory" /> ;
    this.go( page )
  },

  memberArea () {
    if (!this.parent.state.user) {
      this.home();
    } else {
      var page = <MemberArea parent={ this.parent } key="member-area" /> ;
      this.go( page );
    }
  },

  admin () {
    var id;
    if (this.parent.state.user) {
      id = this.parent.state.user.id
    }

    if ( id < 4 ) {
      var page = <Admin parent={ this.parent } key="admin" /> ;
      this.go( page );
    } else {
      this.home();
    }

  },

  event ( id ) {
    var page = <Event parent={this.parent} id={ id } key={ "event" + id } /> ;
    this.go( page )
  },

  news (id) {
    var page = <News parent={this.parent} id={ id } key={ "news" + id } /> ;
    this.go( page )
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
    var page = <MakeAd parent={ this.parent } key="makeAd" /> ;
    this.go( page )
  },

  editSponsor ( id ) {
    var ad;

    this.parent.state.ads.forEach(function(el) {
      if (el.id == id) {
        ad = el ;
      }
    });


    var page = <EditAd parent={ this.parent } ad={ ad } key="editAd" /> ;
    this.go( page )
  },


  go ( page ) {
    var page = page || Backbone.history.getFragment() || "home" ;

    this.parent.setState({
      activePage: [ page ]
    });
  },
})
