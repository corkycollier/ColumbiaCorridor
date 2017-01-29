const Directory = React.createClass({
  getInitialState () {

    var style = {
      "color" : "#262262" ,
      "padding" : "30px 20px" ,
      "minHeight" : "50vh" ,
      "marginBottom" : "60px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {
    $('table').tablesort();
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h1>
          Directory
        </h1>


        {
          this.props.parent.state.members.map((el) => {
            if (el.private) {
              return;
            } else {
              return (
                <div style={{ "fontSize" : "20px" , "margin" : "10px 0px"}}>
                  { el.first_name + " " + el.last_name }
                </div>
              )
            }

          })
        }
      </div>
    )
  }
});
