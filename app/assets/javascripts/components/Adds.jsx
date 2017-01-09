

const Advertisements = React.createClass({
  getInitialState () {
    return({
      slides: this.props.parent.state.ads || {} ,
      currentSlide: this.props.parent.state.ads[0] || {}
    });
  },

  componentDidMount () {
    this.setState({
    })
  },

  flip () {
    var interval = setInterval(function () {
      var slideNumber = this.state.slides.indexOf ( this.state.currentSlide ) + 1;
      if ( slideNumber > this.state.slides.length - 1 ) slideNumber = 0;
      this.setState({
        currentSlide : this.state.slides[ slideNumber ] ,
      });
    }.bind(this), 4400)
  },

  navigate () {
    var win = window.open( this.state.currentSlide.link , '_blank' );
  },

  render () {
    return (
      <div className="" style = {{ "background" : "green" , "background" : "url(" + this.state.currentSlide.image_url + ")" , "backgroundSize" : "cover"}} >
        <img className="ui image add centered"
          src = { this.state.currentSlide.image_url }
          style = {{ "width" : "100%" , "height" : "10vw" }}
          onClick = { this.navigate }
          />
      </div>
    )
  }
});
