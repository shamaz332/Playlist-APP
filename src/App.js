import React, { Component } from 'react';
import { videoMetaData, VideoPlaylistData } from './videoData'
import PlayListCard from './playlistcard/playListCard'
import './css/module.css'

class App extends Component {

    render() {
        const VideoPlayList = VideoPlaylistData.map((item, key) => {
            return (
                <PlayListCard key={item.id} id={item.id} title={item.title} thumbnail={item.thumbnail} />
            )
        })
        return (
            <div className="App">
                <div className="mainWrap">
                    <div className="playerSec">
                        <iframe className="VideoPlayer" width="560" height="315" src="https://player.vimeo.com/video/190062231" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen frameBorder='0' title="Video Player"></iframe>
                        <div className="videoIcons">
                            <p className='views'>{videoMetaData.views}</p>
                            <div>
                                <i className="far fa-heart"></i>
                                <i className="far fa-comment"></i>
                                <i className="far fa-bookmark"></i>

                            </div>

                        </div>
                        <h1 className='videoTitle'>{videoMetaData.title}</h1>
                        <p className='videoDes'>{videoMetaData.description}</p>
                    </div>
                    <div className="playList">
                        {VideoPlayList}
                    </div>

                </div>
            </div>
        );
    }
}

export default App;