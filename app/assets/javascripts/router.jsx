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
    "sign-up":"signUp",
    "sign-in":"signIn",
  },

  home () {
    this.parent.setState({
      activePage: [
        <Home parent={this.parent} key="home" />
      ]
    });
  },

  aboutUs () {
    this.parent.setState({
      activePage: [
        <CAboutUs parent={this.parent} key="home" />
      ]
    });
  },

  events () {
    this.parent.setState({
      activePage: [
        <CEvents parent={this.parent} key="home" />
      ]
    });
  },

  resources () {
    this.parent.setState({
      activePage: [
        <CResources parent={this.parent} key="home" />
      ]
    });
  },

  memberArea () {
    if (!this.parent.state.user) {
      this.parent.setState({
        activePage: [
          <Home parent={this.parent} key="home" />
        ]
      });
    } else {
      this.parent.setState({
        activePage: [
          <CMemberArea parent={this.parent} key="home" />
        ]
      });
    }
  },

  join () {
    this.parent.setState({
      activePage: [
        <CResources parent={this.parent} key="home" />
      ]
    });
  },

  sponsor () {
    this.parent.setState({
      activePage: [
        <CSponsor parent={this.parent} key="home" />
      ]
    });
  },

  contact () {
    this.parent.setState({
      activePage: [
        <CContact parent={this.parent} key="home" />
      ]
    });
  },

  signIn () {
    this.parent.setState({
      activePage: [
        <SignIn parent={this.parent} key="home" />
      ]
    });
  },

  signUp () {
    this.parent.setState({
      activePage: [
        <SignUp parent={this.parent} key="home" />
      ]
    });
  },
})
