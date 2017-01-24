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
        <h1>
          Board
        </h1>
        <h2>
          { this.state.member.title }
        </h2>
        <div className="ui grid stackable">
          <div className="twelve wide column">
            <h3>
              { this.state.member.name } - { this.state.member.company }
            </h3>
            <i>{ this.state.member.email }</i>
            <h4>
              { this.state.member.bio }
            </h4>
          </div>

          <div className="four wide column">
            <img className="ui image fluid" src={ this.state.member.img }></img>
          </div>
        </div>
      </div>
    )
  }
});
