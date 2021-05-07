import React from "react"
import { withRouter } from "react-router-dom"

class AlbumContainer extends React.Component {



    render() {

        
        return (
            <>
          
            <div key={this.props.album.id} className="mb-3 col-md-4" >
           
            <img id={this.props.album.artist.id} onClick={ () => this.props.history.push('/album/' + this.props.album.artist.id)} className="img-fluid"  src={this.props.album.album.cover_xl}/>
            
            <h6 style={{color: "white"}} id={this.props.album.id} onClick={(e) => {
                console.log("Hello tom")
            this.props.selectedSongHandler(e)
            }} className="text-center">{this.props.album.album.title}</h6>
            <span style={{color: "white"}} className="text-muted ">{this.props.album.artist.name}</span>
            </div>
           

            </>
        )
    }
}

export default withRouter(AlbumContainer)