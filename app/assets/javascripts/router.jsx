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
    this.parent.setState({
      activePage: [
        <CResources parent={this.parent} key="home" />
      ]
    });
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
})
