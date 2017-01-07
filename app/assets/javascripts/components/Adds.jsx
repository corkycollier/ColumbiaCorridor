

const Advertisements = React.createClass({
  getInitialState () {
    var style = {
    }

    var slides = [
      {
        name : "NWNatural" ,
        img : "http://res.cloudinary.com/djjldnjz7/image/upload/v1481847922/NWN_Blue_mycsww.jpg" ,
        link : "https://www.nwnatural.com/" ,
      }
      , {
        name : "MacKenzie" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481847927/Mackenzie_qihnbq.jpg" ,
        link: "http://mcknze.com/" ,
      }
      , {
        name : "Capacity Commercial Group - The Ossey Industrial Team" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481847935/CCA_Ad_Ossey_Team_v3_qtanj2.jpg" ,
        link: "http://www.industrialportland.com/" ,
      }
      , {
        name : 'Apex' ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481858786/APEX-00183-Columbia-Corridor-Assoc-Ad_oehurv.jpg" ,
        link: "https://apexcos.com/" ,
      }
      , {
        name : 'Ablina' ,
        img: "http://columbiacorridor.com/wp-content/uploads/2016/08/CCA_Ad8.2016.jpg" ,
        link: "http://albinabank.com/" ,
      }
    ]

    return({
      style: style,
      slides: this.props.parent.state.ads ,
      currentSlide : this.props.parent.state.ads[0] || { img : ""} ,
    });
  },

  componentDidMount () {
    var interval = setInterval(function () {
      this.flip();
    }.bind(this), 4400)
  },

  flip () {
    var slideNumber = this.state.slides.indexOf ( this.state.currentSlide ) + 1;
    if ( slideNumber > this.state.slides.length - 1 ) slideNumber = 0;

    this.setState({
      currentSlide : this.state.slides[ slideNumber ] ,
    });
  },

  navigate () {
    var win = window.open( this.state.currentSlide.link , '_blank' );
  },

  render () {
    return (
      <div className="" style = { this.state.style } >

        <img className="ui image add centered"
          src = { this.state.currentSlide.img }
          style = {{ "width" : "100%" , "height" : "140px" }}
          onClick = { this.navigate }
          />
      </div>
    )
  }
});
