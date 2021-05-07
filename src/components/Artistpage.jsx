import React from "react"
import { withRouter } from "react-router-dom"
import AlbumContainer from "./AlbumContainer"

class Artistpage extends React.Component {

    state = {
        artist: "",
        albums: [],
    }

    componentDidMount = async () => {
        console.log(this.props)
        try {  

            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + this.props.match.params.id)
            let json = await response.json()
            console.log(json)

            if(response.ok) {
                this.setState({artist: json})
            }

            let response2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" +  this.props.match.params.id + "/top?limit=50")
            let json2 = await response2.json()
            this.setState({albums: json2.data})

            console.log(json2)
        }
        catch (error) {
            console.log(error)

        }
    }

    render() {

        return (
            <>

        <div class="col-12 mainPage">
          <div class="row justify-content-center mb-3">
            <div class="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a id="Rock" href="#">ROCK</a>
              <a id="Pop" href="#">POP</a>
              <a id="Hip Hop" href="#">HIP HOP</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-10 mt-5">
            <img src={this.state.artist.picture_xl}/>
              <h2 class="titleMain">{this.state.artist.name}</h2>
              <div id="followers">{this.state.artist.nb_fan} followers</div>
              <div class="d-flex justify-content-center" id="button-container">
                <button class="btn btn-success mr-2 mainButton" id="playButton">
                  PLAY
                </button>
                <button
                  class="btn btn-outline-light mainButton"
                  id="followButton"
                >
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-10 col-md-10 col-lg-10 p-0">
              <div class="mt-4 d-flex justify-content-start">
                <h2 class="text-white font-weight-bold">Albums</h2>
              </div>
              <div class="pt-5 mb-5">
                <div class="row" id="apiLoaded">
                

                    {this.state.albums.map(album => {

                        return <AlbumContainer album={album} />

                    })}
                

                  
                </div>
              </div>
            </div>
          </div>
        </div>    

            </>
        )
    }
}

export default withRouter(Artistpage)