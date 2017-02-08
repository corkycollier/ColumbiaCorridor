const Bios = React.createClass({
  getInitialState () {
    var member;

    this.props.parent.state.board.forEach(function (el) {
      if (el.id == this.props.id ) {
        member = el;
      }
    }.bind(this))

    return ({
      member : member
    })
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render () {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>


        <div className="ui grid stackable">
          <div className="twelve wide column">
            <h1>
              { this.state.member.name }
            </h1>

            <h3>
              CCA { this.state.member.title }
            </h3>

            <div>
              <a href={"mailto:" + this.state.member.email }>
              { this.state.member.email }
              </a>
            </div>

            <div style={{ "margin" : "12px 0px" , }}>
              { this.state.member.bio }
            </div>

            <div>
              <a href={ this.state.member.website} target="_blank">
                <b>{ this.state.member.company }</b>
              </a>
            </div>

          </div>

          <div className="four wide column">
            <img className="ui image fluid" src={ this.state.member.img }></img>
          </div>
        </div>

        <div className="ui button mini left icon labeled" data-url="board" onClick={this.go}>
          <i className="left caret icon"></i>
          Back to board
        </div>
      </div>
    )
  }
});


const StaffBio = React.createClass({
  getInitialState () {
    var member;

    this.props.parent.state.staff.forEach(function (el) {
      if (el.id == this.props.id ) {
        member = el;
      }
    }.bind(this))

    return ({
      member : member
    })
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render () {
    return (
      <div className="ui container" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1>
          { this.state.member.name } - { this.state.member.title }
        </h1>

        <div className="ui grid stackable">
          <div className="twelve wide column">

            <div style={{ "margin" : "12px 0px" , }}>
              { this.state.member.bio }
            </div>

            <div>
              <a href={"mailto:" + this.state.member.email }>
              { this.state.member.email }
              </a>
            </div>

          </div>

          <div className="four wide column">
            <img className="ui image fluid" src={ this.state.member.img }></img>
          </div>
        </div>

        <div className="ui button mini left icon labeled" data-url="staff" onClick={this.go} style={{ "margin" : "12px 0px" , }}>
          <i className="left caret icon"></i>
          Back
        </div>
      </div>
    )
  }
});
