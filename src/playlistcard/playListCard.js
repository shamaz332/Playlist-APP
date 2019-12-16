import React, { Component } from 'react';
import '../playlistcard/card.css'



        const Playlistcard = (props)=>{
            return(
            <div className='PlaylistCard' onClick={()=>
                props.onCardClick(props.cardpos)}>
            <img src={props.thumbnail} alt="tHUMBNAIL" />
            <h3>{props.title}</h3>
        </div>
            )}
  

export default Playlistcard;
