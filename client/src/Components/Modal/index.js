import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import mCSS from './modal.module.css';

function Modal(props) {
    
    const [nickname, setNickname] = useState( "" );
    const id = props.id;

    async function addPokemon() {
        const response = await Axios.put("http://localhost:45030/pokemon/" + id, {
            "name": props.name,
            "nickname": ""
        });

        close("correct");
    }

    function close(id) {
        var modal = document.getElementById(id);
        var overlay = document.getElementById("overlay");
        
        modal.remove();
        overlay.remove();
    }

        return(
            <div>
                <div id="overlay" className={mCSS.overlay}>
                    <div id="correct" className={mCSS.modal}>
                        <h1> It's {props.name}! </h1>
                        <p> Add {props.name} to your collection?</p>
                        <br /> <br />
                        <button className={mCSS.nb} onClick={() => close("correct")}>No</button><button className={mCSS.yb} onClick={() => addPokemon()}>Yes</button>
                    </div>
                </div>
   
            </div>
        )
}

export default Modal;