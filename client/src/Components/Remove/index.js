import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import rCSS from './remove.module.css';

function Remove() {
    
    const [id, setId] = useState("");

    async function removePokemon() {
        const response = await Axios.delete("http://localhost:45030/pokemon/" + id, {  
        });

        console.log(response.data);
        console.log(id);
    }

        return(
            <div className={rCSS.box}>
                <h1 className={rCSS.h1}>Want to Remove a Pokemon from your Collection?</h1>
                <p className={rCSS.p}>Enter your the id of the Pokemon you wish to remove.</p>
                <input className={rCSS.input} type="text" onChange={(event) => {
                    setId(event.target.value)
                }} />
                <button className={rCSS.button} onClick={() => removePokemon()}>Remove</button>
            
            </div>
        );
}

export default Remove;