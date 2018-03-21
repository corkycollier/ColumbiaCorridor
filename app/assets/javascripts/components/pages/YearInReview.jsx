const YearInReview = React.createClass({
  componentDidMount() {
    $('.ui.container').transition({
      animation  : 'fade in' ,
      duration   : '0.8s'    ,
    });
  },
  updateState(e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value;
    this.setState( state );
  },
  render () {
    return (
      <div className="ui container year-in-review" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <iframe src='/pdfjs/full?file=%2Fpdf%2Fyear-in-review.pdf'
                style={{height: '1000px', width: '100%'}}></iframe>

      </div>

    );
  }
});
