const Main = React.createClass({
  getInitialState () {
    console.log( this.props.data )
    return( this.props.data )
  },

  componentDidMount () {
    this.initRouter();
    this.customMethods();
    this.setBoard();
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
    var board = [
      {
        id: 1 ,
        title: "President" ,
        name: "Debbie Dietz Silva" ,
        email: "debbie.silva@evrazna.com" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481674499/CCA_DebbieDS_l6g2ko.jpg" ,
        bio: "Debbie Deetz Silva is the current CCA Board President.  Debbie has been on the board of CCA for more than 10 years.  As an Environmental Specialist, she is responsible for environmental compliance at EVRAZ.  After a tour in the Peace Corps, Debbie began her career with then Oregon Steel Mills where her initial position was a Chemist beginning in 1990.  During her career at the steel mill and EVRAZ, she has held positions in the technical services, production planning, safety and environmental departments.  Debbie has spent the past 10 years focused on the Portland Harbor Superfund issues.  She has a Bachelor of Science in chemistry from Eastern Oregon University.  She lives in southeast Portland with her husband and son. \“I appreciate that CCA connects with local and regional issues, the processes and the leaders and keeps me informed where it matters.\”" ,
      } ,
      {
        id: 2 ,
        title: "Vice-President" ,
        name: "Bruce Johnson" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481675868/Board_BJohnson_ykc5fb.jpg" ,
      } ,
      {
        id: 3 ,
        title: "Treasurer" ,
        name: "Doug White" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481675965/Board_DougW_tzowuk.jpg" ,
      } ,
      {
        id: 4 ,
        title: "Secretary" ,
        name: "Melissa Huntin" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481676008/Board_MHunting_ksd6du.jpg" ,
      } ,
      {
        id: 5 ,
        title: "Director" ,
        name: "Stark Ackerman" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681410/ackerman_ctasoa.jpg" ,
      } ,
      {
        id: 6 ,
        title: "Director" ,
        name: "Cheryl Carter" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681475/Board_CCarter_w3gzhb.jpg" ,
      } ,
      {
        id: 7 ,
        title: "Director" ,
        name: "John Foxwell" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681535/Board_JohnF_jtkjwk.jpg" ,
      } ,
      {
        id: 8 ,
        title: "Director" ,
        name: "Larry Buckhart" ,
        img: "http://columbiacorridor.com/wp-content/uploads/2016/08/Board_LarryB.jpg" ,
      } ,
      {
        id: 9 ,
        title: "Director" ,
        name: "Lice Glancy" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681592/Board_LGlancy_zm0hud.jpg" ,
      } ,
      {
        id: 10 ,
        title: "Director" ,
        name: "Don Ossey" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681649/Board_DOssey_txxs3j.jpg" ,
      } ,
      {
        id: 11 ,
        title: "Director" ,
        name: "Leah Treat" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681693/Board_LTreat_ofpwar.jpg" ,
      } ,
      {
        id: 12 ,
        title: "Director" ,
        name: "John Haralson" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681767/CCA_JohnF_maqosw.jpg" ,
      } ,
      {
        id: 13 ,
        title: "Director" ,
        name: "Reed Wagner" ,
        img: "http://res.cloudinary.com/djjldnjz7/image/upload/v1481681815/Board_ReedW_auzthe.jpg" ,
      } ,
      {
        id: 14 ,
        title: "Director" ,
        name: "Bob Stacey" ,
        img: "http://columbiacorridor.com/wp-content/uploads/2016/08/Board_BStacey.jpg" ,
      } ,
    ]

    this.setState({
      board: board
    })
  }
});
