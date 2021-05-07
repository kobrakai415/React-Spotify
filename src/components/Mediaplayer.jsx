import React from "react"
import Next from "../assets/Next.png"
// import Pause from "../assets/Pause.png"
import Play from "../assets/Play.png"
import Previous from "../assets/Previous.png"
import Repeat from "../assets/Repeat.png"
import Shuffle from "../assets/Shuffle.png"


class Mediaplayer extends React.Component {

    render() {

        return (
            <>
                <div className="player container-fluid fixed-bottom bg-container pt-1">
                    <div className="row flex-nowrap justify-content-between playBar py-3">
                        <div className="col-auto">
                            <div className="playerArtistInfo d-flex">
                                <img />
                                <div className="d-flex flex-column pl-2">
                                    <h6 />
                                    <p />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="playerControls w-50 d-flex justify-content-between">
                                <a href="/#">
                                    <img src={Shuffle} alt="shuffle" />
                                </a>
                                <a href="/#">
                                    <img src={Previous} alt="previous" />
                                </a>
                                <a href="/#">
                                    <img src={Play} alt="play" />
                                </a>
                                <a href="/#">
                                    <img src={Next} alt="next" />
                                </a>
                                <a href="/#">
                                    <img src={Repeat} alt="repeat" />
                                </a>
                            </div>
                            <div className="progressContainer d-flex align-items-center">
                                <span className="currentTime">00:00</span>
                                <div className="progress w-100" onclick>
                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                        <audio />
                                    </div>
                                </div>
                                <span className="duration">00:00</span>
                            </div>
                        </div>
                        <div className="col-auto mr-3">
                            <div className="playerVolume">
                                <i className="fa fa-volume-up" onclick />
                                <input type="range" defaultValue={100} onchange />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )


    }
}

export default Mediaplayer