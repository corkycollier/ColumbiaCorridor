// sets active pages on Main app
// handles http requests (ex. http://hello.com/backbone#router )
// see http://backbonejs.org/#Router for more info

const router = Backbone.Router.extend({
  initialize (parent) {
    this.parent = parent;
    Backbone.history.start();
  },

  routes: {
    "":"page",
    "about-us":"page",
    "events":"page",
    "resources":"page",
    "join":"page",
    "ad":"page",
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
    "member-area":"checkUser",
    "make-event":"page",
    "make-ad":"page",
    "edit/user/:id":"editUserId",
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

  checkUser() {
    if (!this.parent.state.user) {
      Backbone.history.navigate('' , { trigger : true } );
    } else {
      this.page();
    }
  },

  event ( id ) {
    var page = <Event parent={this.parent} id={ id } key="event" /> ;
    this.parent.setState({
      activePage: [ page ]
    });
  },



  news (id) {
    var page = <News parent={this.parent} id={ id } key="news" /> ;

    this.parent.setState({
      activePage: [ page ]
    });
  },

  admin () {
    if ( this.parent.state.user.id < 3 ) {
      this.go( <Admin parent={ this.parent } key="admin" />);
    } else {
      this.go( <Home parent={ this.parent } key="home" /> );
    }
  },


  page () {
    var page = Backbone.history.getFragment() || "home" ;
    this.parent.setState({
      activePage: [ this.parent.state.views[ page ] ]
    });
  },

  go ( page ) {
    var page = page || Backbone.history.getFragment() || "home" ;

    this.parent.setState({
      activePage: [ page ]
    });
  },
})
