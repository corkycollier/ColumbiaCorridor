const Admin = React.createClass({
  render () {
    return (
      <div className="ui container" style={{
        "color" : "#262262" ,
        "padding" : "25px 0px" ,
        "height" : "45vh" ,
      }}>
        <a href="#admin/users" className="ui button large" style={{ "margin" : "8px" , }}>
          Users
        </a>

        <a href="#admin/events" className="ui button blue large" style={{ "margin" : "8px" , }}>
          Events
        </a>

        <a href="#admin/news" className="ui button red large" style={{ "margin" : "8px" , }}>
          News
        </a>

        <a href="#admin/sponsors" className="ui button green large" style={{ "margin" : "8px" , }}>
          Sponsors
        </a>

        <a href="#admin/board" className="ui button orange large" style={{ "margin" : "8px" , }}>
          Board
        </a>

        <a href="#admin/archives" className="ui button yellow large" style={{ "margin" : "8px" , }}>
          Archives
        </a>
      </div>
    )
  }
});
