import React, { Component } from 'react';

const Coders = ({Coders}) => {
     const coderList = Coders.map(Coders => {
        if (Coders.age >10){
         return (
             <div className="Coders" key={Coders.id}>
                 <div>Name: {Coders.name}</div>
                <div>Age: {Coders.age}</div>
                <div>Skill Level: {Coders.skillLevel}</div>
             </div>
         )
        }else{
             return null
        }
     })    

        
    return(
        <div className="coderList">
            {coderList}
        </div>
    )
}

export default Coders