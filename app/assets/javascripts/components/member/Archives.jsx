const Archives = React.createClass({
  componentDidMount() {
    $('table').tablesort();
  },
  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
          "minHeight" : "74vh" ,
          "padding" : "30px 20px" ,
        }}>

        <h2>
          Archives
        </h2>

        <div>
          <table className="ui table">
            <thead>
              <tr>
                <th className="collapsing">Type</th>
                <th className='table-column-sortable'>Title <i className="sort icon"></i></th>
                <th className='table-column-sortable'>Category <i className="sort icon"></i></th>
                <th style={{ "minWidth" : "80px" , }}>Year <i className="sort icon"></i></th>
              </tr>
            </thead>

            <tbody>
              {
                this.props.parent.state.archives.map(function(el, idx) {
                  return (
                    <tr className="card" key={ "go" + idx }>
                      <td>
                        <i className={el.doc_type + " icon"}></i>
                      </td>

                      <td>
                        <a href={ el.url } target="_blank">
                          { el.title }
                        </a>
                      </td>

                      <td>
                        { el.category }
                      </td>

                      <td className="collapsing">
                        { el.year }
                      </td>

                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});
