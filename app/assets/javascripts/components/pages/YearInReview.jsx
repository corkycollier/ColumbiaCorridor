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
        <h1>
          Year in Review {this.props.parent.state.year_in_review.year}
        </h1>

        <iframe src={this.props.parent.state.year_in_review.url}
                style={{height: '800px', width: '100%'}}></iframe>

      </div>

    );
  }
});
