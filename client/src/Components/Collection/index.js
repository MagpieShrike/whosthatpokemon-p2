import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import cCSS from './collection.module.css';
import Rename from '../Rename';
import Remove from '../Remove';

function Collection() {

    function getArray() {
        Axios.post("http://localhost:45030/pokemon/").then(res => {return mapper(res.data.pokemon)
    });
    }

    function mapper(data) {
        const array = data.map( (pokemon) => {
            return pokemon;
        })
        display(array);
    }

    let display = (array) => {
        array.forEach(i => {
            
            (
                <div className={cCSS.display}>
                    <p>i.name</p>
                    {console.log(i.name)}
                </div>
            )
        });
    }

    getArray();
    console.log(display);
    

        return(
            <div id="root">
                {display}

                <Rename />
                <Remove />

            </div>
        )
    
}

export default Collection;