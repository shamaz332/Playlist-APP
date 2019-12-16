import React from 'react';
import {VideoPlaylistData} from '../videoData'
import Playlistcard from '../playlistcard/playListCard'
import '../homePage/homePage.css'
import Axios from 'axios';
class HomePage extends React.Component {
    state = {
        videoList : [],
        showLoader:true
    }
    componentDidMount() {
        Axios.get("http://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
        .then(response=>{
            this.setState({videoList:response.data,showLoader:false})
        })
        .catch(err =>{
            console.log(err)
        })
    }
    
render(){
    const videoPlayListData = this.state.videoList;
    const cardGrid = videoPlayListData.map(item => {

        return(
            <div className='homePageCard'  key={item.id} >
                <Playlistcard key={item.id}   id={item.id} title={item.title} thumbnail={item.thumbnail}/>
            </div>
        )
    })
    
return(
    <div className='homePage'>
       {
           this.state.showLoader ? 
           <h1>Loading...</h1>
           :
           cardGrid
       }
    </div>
)
}}
export default HomePage;