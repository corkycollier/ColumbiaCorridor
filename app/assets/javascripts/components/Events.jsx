const Events = React.createClass({
  getInitialState () {
    var style = {
      "color" : "#262262" ,
      "padding" : "25px" ,
    }

    return({
      style: style,
    })
  },

  componentDidMount () {
    return;
    $(".events").isotope({
      itemSelector: ".event-item" ,
      layoutMode: "fitRows" ,
    })
  },

  render () {
    return (
      <div className="ui container" style={this.state.style}>
        <h2>
          Events
        </h2>

        <div className="ui grid doubling stackable">
          <div className="eight wide column">
            <div className="ui segment orange">
              <b>Breakfast Forums</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment violet">
              <b>Lunch w/ Leaders</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment red">
              <b>ResourceFULL Use Workshops</b>
              <p>
                <i>Something here</i>
              </p>
            </div>
          </div>

          <div className="eight wide column">
            <div className="ui segment yellow">
              <b>Special Events</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment brown">
              <b>Tours & Member Exchanges</b>
              <p>
                <i>Something here</i>
              </p>
            </div>

            <div className="ui segment green">
              <b>All</b>
            </div>
          </div>
        </div>

        <div className="ui clearing divider"></div>

        <Calendar parent={ this.props.parent }/>
      </div>
    )
  }
});


const Calendar = React.createClass({
  getInitialState() {

    var rules = [
      {
        month : "January" ,
        days : 31 ,
      } ,
      {
        month : "February" ,
        days : function ( yr ) {
          this.isLeapYear( yr ) ? 28 : 29 ;
        }.bind(this) ,
      } ,
      {
        month : "March" ,
        days : 31 ,
      } ,
      {
        month : "April" ,
        days : 31 ,
      } ,
      {
        month : "May" ,
        days : 31 ,
      } ,
      {
        month : "June" ,
        days : 30 ,
      } ,
      {
        month : "July" ,
        days : 31 ,
      } ,
      {
        month : "August" ,
        days : 31 ,
      } ,
      {
        month : "September" ,
        days : 30 ,
      } ,
      {
        month : "October" ,
        days : 31 ,
      } ,
      {
        month : "November" ,
        days : 30 ,
      } ,

      {
        month : "December" ,
        days : 31 ,
      } ,
    ]

    return({
      rules : rules ,
    })
  },

  printMonth () {
    var date = new Date ;
    var monthNum = date.getMonth() ;
    var rules = this.state.rules[ monthNum ] ;
    var year = date.getUTCFullYear() ;
    var dayNum = date.getDate() ;
    var dayOfWeekNum = date.getDay() ;
    var start = Math.abs(dayNum % 7 - dayOfWeekNum ) + 1;

    $('td').each(function(idx, el) {
      if (idx < start || idx > rules.days + start ) {
        $(el).css('background' , "#DADADA")
      } else {
        var tagStyle = {
          "position" : "absolute" ,
          "top" : "3px" ,
          "right" : "3px" ,
          "opacity" : "0.7" ,
        }

        var color = "black" ;
        if (idx == dayNum + start - 1) {
          color = "red" ;
        }
        debugger
        var label = <a className={"ui mini circular label " + color } style={ tagStyle }> { idx - start + 1 } </a> ;
          ReactDOM.render( label , el )
        }
      }.bind(this))

      this.setState({
        month: rules.month
      })
    },

    placeCalendarDay () {

    },

    isLeapYear( yr ) {
      if ( yr % 4 == 0 ) {
        if ( yr % 100 == 0 ) {
          if ( yr % 400 != 0 ) {
            return false

          } else {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    },

    componentDidMount () {
      setTimeout(function() {
        this.printMonth() ;
      }.bind(this), 0)


    },

    render() {

      var tdStyle = {
        "position" : "relative" ,
        "height" : "70px" ,
      }
      var thStyle = {
        "width" : "12%" ,
      }
      return (
        <div className="" style={{ "color" : "#262262" ,}}>
          <h2 className="ui header centered">
            {
              this.state.month
            }
          </h2>

          <table className="ui table celled equal width stackable">
            <thead>
              <tr style={{ "textAlign" : "center" ,}}>
                <th style={ thStyle }>Sunday</th>
                <th style={ thStyle }>Monday</th>
                <th style={ thStyle }>Tuesday</th>
                <th style={ thStyle }>Wednesday</th>
                <th style={ thStyle }>Thursday</th>
                <th style={ thStyle }>Friday</th>
                <th style={ thStyle }>Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
              </tr>

              <tr>
                <td style={ tdStyle }>a</td>
                <td style={ tdStyle }>a</td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
              </tr>

              <tr>
                <td style={ tdStyle }>a</td>
                <td style={ tdStyle }>a</td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
              </tr>

              <tr>
                <td style={ tdStyle }>a</td>
                <td style={ tdStyle }>a</td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
              </tr>

              <tr>
                <td style={ tdStyle }>a</td>
                <td style={ tdStyle }>a</td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
                <td style={ tdStyle }></td>
              </tr>


            </tbody>

          </table>
        </div>
      );
    }
  });
