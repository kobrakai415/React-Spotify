import Sidebar from "./Sidebar"
import Mainpage from "./Mainpage"
import Mediaplayer from "./Mediaplayer"

import React from "react"

class Home extends React.Component {

    state = {
        songs: [],
        query: "drake",


    }


    componentDidUpdate = async (previousProps, previousState) => {


        try {
            if (previousState.query != this.state.query) {


                let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + this.state.query)
                let json = await response.json()

                this.setState({ songs: json.data })
                console.log(json)
            }

        } catch (error) {
            console.log(error)
        }
    
    }


    queryHandler = (e) => {

        this.setState({ query: e.target.value })

    }


    render() {

        return (
            <>
                <div class="container-fluid">
                    <div class="row">
                        <Sidebar query={this.state.query} queryHandler={this.queryHandler} />
                        <Mainpage songs={this.state.songs}/>
                        <Mediaplayer />
                    </div>
                </div>

            </>
        );
    }
}

export default Home;
