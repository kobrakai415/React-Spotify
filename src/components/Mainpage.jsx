import React from "react"
import SongContainer from "./SongContainer"

class Mainpage extends React.Component {

    

    render() {

        return (
            <>
            <div className="col-12 mainPage">
        <div className="row justify-content-center">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a id="Rock" href="/#">ROCK</a>
            <a id="Pop" href="/#">POP</a>
            <a id="Hip Hop" href="/#">HIP HOP</a>
            <a href="/#">NEW RELEASES</a>
            <a href="/#">DISCOVER</a>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <div id="searchResults" style={{display: 'none'}}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" />
            {this.props.songs.map(song =>{
                
                <SongContainer song={song} />

            })}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <div id="results">
              <h2 className="pl-3 text-white" />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                <div>
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </>
        )
    }

}

export default Mainpage