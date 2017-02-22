
const AdminBoard = React.createClass({

  componentDidMount() {
    $('table').tablesort();
  },

  delete (e) {
    var sure = confirm('Are you sure?');

    if (sure) {
      $.ajax({
        url: '/api/boards/' + e.currentTarget.dataset.id ,
        type: 'DELETE' ,
        success: function( app_data , resp , obj ) {
          this.props.parent.setState(app_data)
          this.props.mom.setState({
            news: app_data.news
          })
        }.bind(this), error: function ( app_data , resp , obj ) {
          this.props.parent.setState( app_data )
          Backbone.history.navigate( 'admin' , { trigger : true } );
        }.bind(this)
      })

    }
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render() {

    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "marginBottom" : "40px" ,
          "padding" : "25px 0px" ,
        }}>

        <Admin />
        
        <h2>
          Board
        </h2>

        <a href="#new-board" className="ui button small blue" >
          New
        </a>

          <table className="ui table" style={{ "color" : "#262262" , }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Name</th>
                <th>Company</th>
                <th>Img</th>
                <th style={{ "width" : "100px" , }}>Bio</th>
                <th className="collapsing">Action</th>
              </tr>
            </thead>

            <tbody style={{
                "height" : "40vh" ,
                "overflowY" : "scroll" ,
              }}>
              {

                this.props.parent.state.board.map( (el) => {
                  return(
                    <AdminBoardsRow
                      key={'abr' + el.id}
                      parent={ this.props.parent }
                      board={ el }
                      mom={ this }
                      />

                  )
                })
              }
            </tbody>

          </table>


        <a href="#admin" className="ui button left labeled icon small" style={{ "marginTop" : "18px" , }}>
          <i className="left caret icon"></i>
          Back
        </a>
      </div>
    );
  }
});


const AdminBoardsRow = React.createClass({

  delete (e) {
    var sure = confirm('Are you sure?');

    if (sure) {
      $.ajax({
        url: '/api/boards/' + e.currentTarget.dataset.id ,
        type: 'DELETE' ,
        success: function( app_data , resp , obj ) {
          this.props.parent.setState(app_data)
          this.props.mom.setState({
            board: app_data.board
          })
        }.bind(this), error: function ( app_data , resp , obj ) {
          alert('Error.')
        }.bind(this)
      })

    }
  },

  go (e) {
    var fragment = e.currentTarget.dataset.url;
    Backbone.history.navigate( fragment , { trigger : true });
  },

  render() {

    return (
      <tr id={ this.props.board.id }>
        <td>
          {this.props.board.title}
        </td>
        <td>{this.props.board.name}</td>
        <td>
          <a href={this.props.board.website} target="_blank">
            {this.props.board.company}
          </a>
        </td>
        <td>
          <img className="ui image small" src={this.props.board.img} style={{ "height" : "144px" ,  "width" :"auto"}}></img>
        </td>
        <td>
          { this.props.board.bio.slice(0,40) + "..." }
        </td>

        <td className="collapsing">
          <a data-url={"edit/board/" + this.props.board.id}
            onClick={ this.go }
            style={{ "marginRight" : "8px" ,}}>
            edit
          </a>

          <a data-id={this.props.board.id} onClick={ this.delete }>
            delete
          </a>
        </td>
      </tr>
    );
  }
});

const EditBoard = React.createClass({
  getInitialState () {
    return( this.props.member || {} )
  },

  componentDidMount () {
  },

  update (e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        var pic = result[0].secure_url;
        this.setState({
          img : pic
        })
      }
    }.bind(this));
  },

  save () {
    $.ajax({
      url  : '/api/boards/' + this.state.id ,
      type : "PATCH" ,
      data : { board: this.state } ,
      success : function ( app_data , resp , obj ) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( 'admin/board' , { trigger : true } );
      }.bind(this),
      error : function ( app_data , resp , obj ) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( 'admin/board' , { trigger : true } );
      }.bind(this)
    });
  },

  render () {
    return (
      <div className="ui container" style={{"padding" : "30px 20px" , "color" : "#262262"}}>
        <h2>
          Edit Board Member
        </h2>

        <form className="ui form" onSubmit={ this.save }>
          <div className="field">
            <label>Title</label>
            <input type="text" data-field="title" onChange={ this.update } value={ this.state.title} />
          </div>

          <div className="field">
            <label>Name</label>
            <input type="text" data-field="name" onChange={ this.update } value={ this.state.name} />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" data-field="email" onChange={ this.update } value={ this.state.email} />
          </div>

          <div className="field">
            <label>Company</label>
            <input type="text" data-field="company" onChange={ this.update } value={ this.state.company} />
          </div>

          <div className="field">
            <label>Website</label>
            <input type="text" data-field="website" onChange={ this.update } value={ this.state.website} />
          </div>

          <div className="field">
            <label>Bio</label>
            <textarea data-field="bio" onChange={ this.update } value={ this.state.website} ></textarea>
          </div>

          <div className="field">
            <label>Image Url</label>
            <input
              type="text"
              data-field="img"
              onChange={ this.update }
              value={ this.state.img}
              />
            <div className="ui button blue mini"
              style={{ "position" : "absolute" , "right" : "0px" , "bottom" : "55px" }}
              onClick={ this.uploadWidget }
              id="upload_widget_opener"
              >
              Upload
            </div>
          </div>

          <button type="submit" className="ui button" style={{ "background" : "#262262" , "color" : "white" }}>
            Submit
          </button>
        </form>
      </div>
    )
  }
});

const NewBoard = React.createClass({
  getInitialState () {
    return({})
  },

  componentDidMount () {

  },

  uploadWidget () {
    cloudinary.openUploadWidget({ cloud_name: 'djjldnjz7', upload_preset: 'vyzjbttv'},
    function(error, result) {
      if (result) {
        var pic = result[0].secure_url
        this.setState({
          img : pic
        })
      }
    }.bind(this));
  },

  save () {
    $.ajax({
      url  : '/api/boards' ,
      type : "POST" ,
      data : { board: this.state } ,
      success : function ( app_data , resp , obj ) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( 'admin/board' , { trigger : true } );
      }.bind(this),
      error : function ( app_data , resp , obj ) {
        this.props.parent.setState( app_data )
        Backbone.history.navigate( 'admin/board' , { trigger : true } );
      }.bind(this)
    });
  },

  update (e) {
    var state = this.state;
    state[ e.currentTarget.dataset.field ] = e.currentTarget.value
    this.setState( state );
  },

  render () {
    return (
      <div className="ui container" style={{"padding" : "30px 20px" , "color" : "#262262"}}>
        <h2>
          New Board Member
        </h2>

        <form className="ui form" onSubmit={ this.save }>
          <div className="field">
            <label>Title</label>
            <input type="text" data-field="title" onChange={ this.update } />
          </div>

          <div className="field">
            <label>Name</label>
            <input type="text" data-field="name" onChange={ this.update } />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" data-field="email" onChange={ this.update } />
          </div>

          <div className="field">
            <label>Company</label>
            <input type="text" data-field="company" onChange={ this.update } />
          </div>

          <div className="field">
            <label>Website</label>
            <input type="text" data-field="website" onChange={ this.update } />
          </div>

          <div className="field">
            <label>Bio</label>
            <textarea data-field="bio" onChange={ this.update }></textarea>
          </div>

          <div className="field">
            <label>Image Url</label>
            <input
              type="text"
              data-field="img"
              onChange={ this.update }
              />
            <div className="ui button blue mini"
              style={{ "position" : "absolute" , "right" : "0px" , "bottom" : "55px" }}
              onClick={ this.uploadWidget }
              id="upload_widget_opener"
              >
              Upload
            </div>
          </div>

          <button type="submit" className="ui button" style={{ "background" : "#262262" , "color" : "white" }}>
            Submit
          </button>
        </form>
      </div>
    )
  }
});
