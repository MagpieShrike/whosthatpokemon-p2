import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import rCSS from './rename.module.css';

function Remove() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    async function renamePokemon() {
        const response =  await Axios.patch("http://localhost:45030/pokemon/" + name, {  
        nickname: nickname });

    }

        return(
            <div className={rCSS.box}>
                <h1 className={rCSS.h1}>Give your Pokemon a Nickname!</h1>
                <p className={rCSS.p}>Enter your the name of the Pokemon you want to nickname</p>
                <label className={rCSS.label}>
                    Name:
                    <input className={rCSS.input} type="text" onChange={(event) => {
                    setName(event.target.value)
                }} />
                </label>
                <br />
                <label className={rCSS.label}>Nickname:
                    <input className={rCSS.input} type="text" onChange={(event) => {
                        setNickname(event.target.value)
                    }} />
                </label>
                <br /><br />
                <button className={rCSS.button} onClick={() => renamePokemon()}>Rename</button>
            </div> 
        );
}

export default Remove;