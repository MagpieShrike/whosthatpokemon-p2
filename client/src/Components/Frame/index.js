import React from 'react';
import { useState } from 'react';
import Collection from '../Collection';
//import Identify from '../Identify';
import RandomPokemon from '../RandomPokemon';
import fCSS from './frame.module.css';

function Frame() {
    const [screen, setScreen] = useState( "search" );

        return(
            <div>
                    <div className={fCSS.ftop}></div>
                    <div className={fCSS.ftitle}></div>
                    <div className={fCSS.fleft}></div>
                    <div className={fCSS.search}>
                        <button name="search" className={fCSS.button} onClick={() => setScreen("search")}>SEARCH</button>
                    </div>
                    <div className={fCSS.collection}>
                        <button name="collection" className={fCSS.button} onClick={() => setScreen("collection")}>POKEMON</button>
                    </div>
                    <div className={fCSS.fright}></div>
                    <div className={fCSS.cbottom}></div>
                    <div className={fCSS.fbottom}></div>
                
                
                <div className={fCSS.screen}>
                {screen == "search" ? <RandomPokemon /> : <Collection />}
                </div>
   
            </div>
        )
}

export default Frame;