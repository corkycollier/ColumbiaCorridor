

const Advertisements = React.createClass({
  getInitialState () {
    return({
      slides: this.props.parent.state.ads || {} ,
      currentSlide: this.props.parent.state.ads[0] || {} ,
      active : true ,
    });
  },

  componentDidMount () {
    var interval = setInterval(this.flip, 8000);
    this.setState({interval: interval});
  },

  flip () {
    $('.ad-image').transition({
      animation  : 'fade in',
      duration   : '1s',
    });

    var slideNumber = this.state.slides.indexOf ( this.state.currentSlide ) + 1;

    if ( slideNumber > this.state.slides.length - 1 ) slideNumber = 0;

    this.setState({
      currentSlide : this.state.slides[ slideNumber ] ,
    });
  },

  componentWillUnmount () {
    clearInterval(this.state.interval);
  },

  render () {
    return (
      <div>
        <a href={this.state.currentSlide.link} target="_blank" >
          <img className="ui image centered ad-image"
            src = { this.state.currentSlide.image_url }
            style = {{ "width" : "100%" , "height" : "12vw" , "minHeight" : "158px"}}
            />
        </a>
      </div>
    )
  }
});
