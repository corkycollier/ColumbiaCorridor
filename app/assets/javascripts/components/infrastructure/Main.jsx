const Main = React.createClass({
  getInitialState () {
    return( this.props.data )
  },

  componentDidMount () {
    this.initRouter();
    this.customMethods();
    this.setBoard();
    this.setStaff();
  },

  save () {
    $.ajax({
      url : 'api/save' ,
      type : 'PATCH' ,
      data : this.state ,
      success : function (app_data, resp, obj) {
        debugger
      }.bind(this) ,
      error : function (app_data, resp, obj) {
        debugger
      }.bind(this)
    })
  },

  initRouter () {
    this.setState({
      router: new router(this),
    })
  },

  customMethods() {
    setTimeout(function() {
      if (!this.state.user) {
        $('.member-area').addClass('disabled');
      }
    }.bind(this), 0)


  },

  render () {
    return (
      <div>
        <SidebarMenu parent = { this } />
        <Header parent = { this } />
        <Menu parent = { this } />

        <div>
          {
            this.state.activePage
          }
        </div>

        <Footer parent={ this } />
      </div>
    )
  },

  setBoard () {
    var board = this.state.board.sort(function(a, b) {
      var nameA = a.name.split(" ")[1]; // ignore upper and lowercase
      var nameB = b.name.split(" ")[1]; // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    this.setState({
      board: board
    })
  },

  setStaff () {
    var staff = [
      {
        id: 1 ,
        title: "Executive Director" ,
        name: "Corky Collier" ,
        email: "corky@columbiacorridor.org" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481673214/Staff_Corky-e1474958983360_h6iyzp.jpg" ,
        bio : "Corky Collier has been Executive Director of the Columbia Corridor Association since 2004, combining his eclectic business, environmental and political experience. Corky works on a wide variety of issues affecting the economic prosperity of the largest economic corridor in Oregon, including transportation, land use, and natural resources. He helped establish and manages two business education programs: ResourceFull Use and the Groundwater Protection Program. From 1987 to 1998, Corky co-owned a whitewater outfitting company in northern California. During those years, he led efforts to combine business and environmental concerns into cooperative action. Dam construction and operation, government regulations and fees, law enforcement and development were targets for reform. Significant successes were achieved at the local, state and federal levels. In 1998, Corky managed a ballot measure campaign to protect small business interests. By working with environmental organizations, neighborhoods and businesses, the campaign won 65% of the vote. He went on to work in media and public outreach. He serves on the Portland Freight Committee, Columbia Slough Watershed Council, and Brownfield Redevelopment Coalition. He holds degrees in Biology and Geography from the University of Texas. Old awards include Eagle Scout; new awards include the Columbia Slough Watershed Council Leadership Award. Corky lives in North Portland within view of the St. Johns Bridge and Forest Park with his wife Sara and son Henry." ,
      } ,
      {
        id: 2 ,
        title: "Office Manager" ,
        name: "Marissa King" ,
        email: "mking@columbiacorridor.org" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481673230/Staff_Marissa-e1474957970362_mz1vh0.jpg" ,
        bio : "Marissa King has been the CCA Office Manager since 2000. She was previously employed at two Portland institutions, US Bank and Standard Insurance Company. She is a graduate of Southern Oregon University, with a Bachelor of Science in Psychology. With two children, Marissa spends most of her spare time shuttling between gymnastics competitions, baseball and football games, leaving just enough time for camping and hiking. Having grown up near the Columbia Corridor and being a graduate of Parkrose High School, Marissa has a natural interest in the growth and prosperity of the area." ,
      } ,
    ]

    this.setState({
      staff: staff
    })
  }
});
