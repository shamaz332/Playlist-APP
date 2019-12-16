import React, { Component } from 'react';
import {VideoPlaylistData,VideoMetaDataList} from '../videoData'
import PlayListCard from '../playlistcard/playListCard'
import './watchPage.css'
class WatchPage extends Component {
    state = {
        currentVideoCardPos : 0,
        videoMetaData : VideoMetaDataList[0],
        videoPlayList : VideoPlaylistData
    }
    onVideoClick=(pos)=>{
        this.setState({videoMetaData: VideoMetaDataList[pos],currentVideoCardPos:pos})
    }
    
    render() {
        const VideoPlayList = this.state.videoPlayList.map((item, pos) => {
            return (
                <PlayListCard key={item.id} id={item.id} title={item.title} thumbnail={item.thumbnail} onCardClick={this.onVideoClick} cardpos={pos} currentVideo={this.state.currentVideoCardPos}/>
            )
        })
        return (
            <div>
  <div className="mainWrap">
                    <div className="playerSec">
                        <iframe className="VideoPlayer" width="560" height="315" src={`https://player.vimeo.com/video/${this.state.videoMetaData.vimeoId}`} webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen frameBorder='0' title="Video Player"></iframe>
                        <div className="videoIcons">
                            <p className='views'>{this.state.videoMetaData.views}</p>
                            <div>
                                <i className="far fa-heart"></i>
                                <i className="far fa-comment"></i>
                                <i className="far fa-bookmark"></i>

                            </div>

                        </div>
                        <h1 className='videoTitle'>{this.state.videoMetaData.title}</h1>
                        <p className='videoDes'>{this.state.videoMetaData.description}</p>
                    </div>
                    <div className="playList">
                        {VideoPlayList}
                    </div>

                </div>
            </div>
        );
    }
}

export default WatchPage;