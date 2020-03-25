const Covid19 = React.createClass({
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
    let default_pdf_subheading;
    if (this.props.parent.state.covid19.url == '/pdfjs/minimal?file=%2Fpdf%2Fcovid-19.pdf') {
      default_pdf_subheading = <p>We are working on this page. For now, below is the PDF version of Executive Order 20-12 below</p>;
    } else {
      default_pdf_subheading = "";
    }
    return (
      <div className="ui container year-in-review" style={{ "color" : "#262262" , "padding" : "30px 20px" ,}}>
        <h1>
          Covid-19
        </h1>

        { default_pdf_subheading }

        <iframe src={this.props.parent.state.covid19.url}
                style={{height: '800px', width: '100%'}}></iframe>

      </div>

    );
  }
});
