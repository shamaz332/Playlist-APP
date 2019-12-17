import React, { Component } from 'react';
import '../playlistcard/card.css'
import { Link } from 'react-router-dom';



        const Playlistcard = (props)=>{
            return(
                <Link to={`/watch/${props.id}`}>
            <div className='PlaylistCard'>
            <img src={props.thumbnail} alt="tHUMBNAIL" />
            <h3>{props.title}</h3>
        </div></Link>
            )}
  

export default Playlistcard;
