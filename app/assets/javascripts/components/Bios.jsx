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
              <b>{ this.state.member.company }</b>
            </div>

          </div>

          <div className="four wide column">
            <img className="ui image fluid" src={ this.state.member.img }></img>
          </div>
        </div>
      </div>
    )
  }
});
