import React, { Component } from 'react';
import '../playlistcard/card.css'

        const Playlistcard = (props)=>{
            return(
            <div className='playlistCard' key={props.id}>
            <img src={props.thumbnail} alt="tHUMBNAIL" />
            <h3>{props.title}</h3>
        </div>
            )}
  

export default Playlistcard;
