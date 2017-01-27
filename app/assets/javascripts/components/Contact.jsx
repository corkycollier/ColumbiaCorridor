
const Contact = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "30px 20px" ,

    }

    return({
      style: style,
    })
  },

  componentDidMount () {

  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <div className="ui grid doubling stackable">
          <div className="eight wide column" style={{ "fontSize" : "16px" }}>
            <h1>
              Contact
            </h1>

            <div>
              <i className="phone icon" style={{"fontSize" : "16px", "marginRight" : "12px" }}/> <a href="tel:503-287-8686">+1 (503) 287-8686</a>
            </div>

            <div>
              <i className="mail icon" style={{"fontSize" : "16px", "marginRight" : "12px" }}/> <a href="mailto:info@columbiacorridor.org">info@columbiacorridor.org</a>
            </div>

            <h3 style={{ "marginTop" : "30px" }}>
              Mailing Address:
            </h3>

            <div>
              PO Box 55651
            </div>

            <div>
              Portland, OR 97238
            </div>

            <h3 style={{ "marginTop" : "30px" }}>
              Office Address:
            </h3>

            <div>
              <i>(Please call ahead as our staff is often out of the office working hard for CCA members)</i>
            </div>

            <div>
              6015 NE 80th Ave., Suite 125
            </div>

            <div>
              Portland, OR 97218
            </div>

            <h3 style={{ "marginTop" : "30px" }}>
              Staff:
            </h3>

            <div>
              Marissa King
            </div>

            <div>
              Office Manager
            </div>

            <div>
              <a href="mailto:mking@columbiacorridor.org">
                mking@columbiacorridor.org
              </a>
            </div>

            <div style={{ "marginTop" : "30px" }}>
              Corky Collier
            </div>

            <div>
              Executive Director
            </div>

            <div>
              <a href="mailto:corky@columbiacorridor.org">
                corky@columbiacorridor.org
              </a>

            </div>

            <div>
              cell: <a href="tel:503-241-1888">
                +1 (503) 241-1888
              </a>

            </div>
          </div>

          <div className="eight wide column" style={{ "paddingTop" : "34px" ,}}>
            <iframe style={{ "border" : "0" , "width" : "100%" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5586.383147810138!2d-122.581017!3d45.566586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee00ba2afc23b49c!2sColumbia+Corridor+Association!5e0!3m2!1sen!2sph!4v1470938661219" height="532" frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
          </div>
        </div>
      </div>
    )
  }
});
