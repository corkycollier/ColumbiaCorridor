
const Staff = React.createClass({

  componentDidMount() {

    $('.ui.container').transition({
        animation  : 'fade in' ,
        duration   : '0.8s'    ,
      });

    $(ReactDOM.findDOMNode(this)).find('.linkify.icon')
      .transition({
        animation  : 'fade in' ,
        duration   : '1s'    ,
    });
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render() {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "padding" : "30px 20px" ,
          "minHeight" : "54vh" ,
        }}>
        <h1>
          Staff
        </h1>

        <div className="ui grid stackable" style={{ "margin" : "20px" }}>
          <div className="eight wide column" style={{ "fontSize" : "18px", "position" : "relative" , "left" : "-32px"  }}>
            <p>
              Even our longtime members are surprised at how small the CCA office is. There’s not a lot of staff, but we manage to get a lot done. It’s another way you get value for your membership.
            </p>

            <p>
              In addition to Corky and Marissa, there’s often an intern working on one of our current projects. Feel free to drop by our office in the Corridor. But it’s smart to call first…we’re often out of the office assisting our members.
            </p>
          </div>

          <div className="four wide column" >
            <a href={"#staff/1"}>
              <img className="ui fluid image staff-image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481673214/Staff_Corky-e1474958983360_h6iyzp.jpg" />
              <p style={{ "textAlign" : "center" , "marginTop" : "12px" , "color" : "#262262" }}>
                <b>Executive Director</b> - Corky Collier
                </p>
              </a>


              <div>
                <i className="linkify icon" style={{
                    "position" : "absolute" ,
                    "top" : "10%" ,
                    "left" : "7%" ,
                    "fontSize": "41px" ,
                  }}></i>
                </div>
              </div>
              <div className="four wide column" >
                <a href={"#staff/2"}>

                  <img className="ui fluid image staff-image" src="http://res.cloudinary.com/djjldnjz7/image/upload/v1481673230/Staff_Marissa-e1474957970362_mz1vh0.jpg" />

                  <p style={{ "textAlign" : "center" , "marginTop" : "12px" , "color" : "#262262" }}>
                    <b>Office Manager</b> - Marissa King
                    </p>
                  </a>


                  <div>
                    <i className="linkify icon" style={{
                        "position" : "absolute" ,
                        "top" : "10%" ,
                        "left" : "7%" ,
                        "fontSize": "41px" ,
                      }}></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        });
