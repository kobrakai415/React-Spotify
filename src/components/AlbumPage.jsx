import React from "react"


class Albumpage extends React.Component {

    


    componentDidMount = async () => {

        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + this.props.match.params.id)
        let json = await response.json()
        console.log(json)
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
                        <div id="img-container" class="col-md-3 pt-5 text-center">
                            <img
                                
                                class="card-img img-fluid"
                                alt="Album"
                            />
                            <div class="mt-4 text-center">
                                <p class="album-title">... All this time</p>
                            </div>
                            <div class="text-center">
                                <p class="artist-name">STING</p>
                            </div>
                            <div class="mt-4 text-center">
                                <button id="btnPlay" class="btn btn-success" type="button">
                                    Play
                        </button>
                            </div>
                        </div>
                        <div class="col-md-8 p-5">
                            <div class="row">
                                <div id="trackList" class="col-md-10 mb-5">
                                    <div id="err"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      
            </>
        )

    }
}

export default Albumpage