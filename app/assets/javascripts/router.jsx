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
    "new-board" : "newBoard" ,
    "staff/:id" : "staffId" ,
    "staff" : "staff" ,
    "event-list" : "eventList" ,
    "calendar" : "calendar" ,
    "members" : "members" ,
    "resourcesfull-use" : "resourceFullUse" ,
    "groundwater" : "groundwater" ,
    "resources" : "resources" ,
    "join" : "join" ,
    "sponsor" : "sponsor" ,
    "membership" : "membership" ,
    "archives" : "archives" ,
    "cca-news" : "ccaNews" ,
    "contact" : "contact" ,
    "mailing-list" : "mailingList" ,
    "forgot-password" : "forgotPassword" ,
    "register" : "register" ,
    "sign-in" : "signIn" ,
    "directory" : "directory" ,
    "edit-profile" : "editProfile",
    "year-in-review" : "yearInReview" ,
    "covid-19":"covid19",
    "make-ad" : "makeAd" ,
    "make-event" : "makeEvent" ,
    "event/:id" : "event" ,
    "news/:id" : "news" ,
    "admin/users" : "adminUsers" ,
    "admin/events" : "adminEvents" ,
    "admin/news" : "adminNews" ,
    "admin/board" : "adminBoard" ,
    "admin/sponsors" : "adminSponsors" ,
    "admin/archives" : "adminArchives" ,
    "admin" : "admin" ,
    "make-event":"makeEvent",
    "make-archive":"makeArchive",
    "make-ad":"page",
    "edit/user/:id":"editUser",
    "edit/news/:id":"editNews",
    "edit/event/:id":"editEvent",
    "edit/board/:id":"editBoard",
    "edit/archive/:id":"editArchive",
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

  covid19 () {
    var page = <Covid19 parent={ this.parent } key="covid19" /> ;
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

  archives () {
    if ( !this.parent.state.user ) {
      this.home();
    } else {
      var page = <Archives parent={ this.parent } key="archives" /> ;
      this.go( page )
    }
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

  staffId ( id ) {
    var page = <StaffBio parent={ this.parent } id={ id } key="staffId" /> ;
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

  calendar () {
    var page = <Calendar parent={ this.parent } key="calendar" /> ;
    this.go( page )
  },

  eventList () {
    var page = <EventList parent={ this.parent } key="eventList" /> ;
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

  register () {
    var page = <SignUp parent={ this.parent } key="register" /> ;
    this.go( page )
  },

  forgotPassword () {
    var page = <ForgotPassword parent={ this.parent } key="forgotPassword" /> ;
    this.go( page )
  },

  editProfile () {
    if ( !this.parent.state.user ) {
      this.home();
    } else {
      var page = <EditProfile parent={ this.parent } key="editProfile" /> ;
      this.go( page )
    }
  },

  makeEvent () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <MakeEvent parent={ this.parent } key="makeEvent" /> ;
      this.go( page )
    }
  },

  makeArchive () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <NewArchive parent={ this.parent } key="makeArchive" /> ;
      this.go( page )
    }
  },

  makeAd () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <MakeAd parent={ this.parent } key="makeAd" /> ;
      this.go( page )
    }
  },

  members () {
    var page = <MemberOnlyDirectory parent={ this.parent } key="members" /> ;
    this.go( page )
  },

  directory () {
    if (!this.parent.state.user) {
      this.home();
    } else {
      var page = <Directory parent={ this.parent } key="directory" /> ;
      this.go( page )
    }
  },

  admin () {

    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <Admin parent={ this.parent } key="admin" /> ;
      this.go( page );
    }

  },

  adminUsers () {

    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <AdminUsers parent={ this.parent } key="adminUsers" /> ;
      this.go( page );
    }

  },

  adminEvents () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <AdminEvents parent={ this.parent } key="adminEvents" /> ;
      this.go( page );
    }
  },

  adminNews () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <AdminNews parent={ this.parent } key="adminNews" /> ;
      this.go( page );
    }
  },

  adminBoard () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <AdminBoard parent={ this.parent } key="adminBoard" /> ;
      this.go( page );
    }
  },

  adminSponsors () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <AdminAds parent={ this.parent } key="adminSponsors" /> ;
      this.go( page );
    }
  },

  adminArchives () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <AdminArchives parent={ this.parent } key="adminArchives" /> ;
      this.go( page );
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


  editUser ( id ) {
    var user;
    this.parent.state.members.forEach(function(el) {
      if (el.id == id ) {
        user = el
      }
    });


    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <AdminEditProfile
        parent={ this.parent }
        user={ user }
        key="edit-profile-user"
        /> ;
      this.go( page )
    }

  },

  editNews ( id ) {
    var news;
    this.parent.state.news.forEach(function(el) {
      if (el.id == id ) {
        news = el
      }
    });

    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <EditNewsAdmin
        parent={ this.parent }
        news={ news }
        key="edit-profile-news"
        /> ;
      this.go( page )
    }

  },

  editEvent ( id ) {
    var event;
    this.parent.state.events.forEach(function(el) {
      if (el.id == id ) {
        event = el
      }
    });

    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <EditEvent
        parent={ this.parent }
        event={ event }
        key="edit-event"
        /> ;
      this.go( page )
    }

  },

  editArchive ( id ) {
    var archive;
    this.parent.state.archives.forEach(function(el) {
      if (el.id == id ) {
        archive = el
      }
    });

    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <EditArchive
        parent={ this.parent }
        archive={ archive }
        key="edit-archive"
        /> ;
      this.go( page )
    }

  },

  newSponsor () {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <MakeAd parent={ this.parent } key="makeAd" /> ;
      this.go( page )
    }

  },

  editSponsor ( id ) {
    var ad;

    this.parent.state.ads.forEach(function(el) {
      if (el.id == id) {
        ad = el ;
      }
    });

    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <EditAd parent={ this.parent } ad={ ad } key="editAd" /> ;
      this.go( page )
    }
  },

  editBoard ( id ) {
    var boardMember;

    this.parent.state.board.forEach(function(el) {
      if (el.id == id) {
        boardMember = el ;
      }
    });

    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <EditBoard parent={ this.parent } member={ boardMember } key="editBoard" /> ;
      this.go( page )
    }
  },

  newBoard ( ) {
    if ( this.parent.state.user.role != "Admin" ) {
      this.home();
    } else {
      var page = <NewBoard parent={ this.parent } key="newBoard" /> ;
      this.go( page )
    }
  },


  go ( page ) {
    var page = page || Backbone.history.getFragment() || "home" ;

    this.parent.setState({
      activePage: [ page ]
    });
  },
});

var _parseJSON = $.parseJSON;
$.parseJSON = function(j) {
    var response = _parseJSON(j);
    // TODO proper selection of url / secure_url based on the document link
    response.link = response.url; // Froala expects `link`
    return response;
};

