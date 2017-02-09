const Archives = React.createClass({
  render () {
    return (
      <div className="ui container" style={{
          "color" : "#262262" ,
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
                <th>Title</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {
                this.props.parent.state.archives.map(function(el, idx) {
                  return (
                    <tr className="card" key={ "go" + idx }>
                      <td>
                        <i className={el.icon + " icon"}></i>
                      </td>

                      <td>
                        <a href={ el.href } target="_blank">
                          { el.title }
                        </a>
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
