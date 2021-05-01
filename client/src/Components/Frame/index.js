import React from 'react';
import { useState } from 'react';
import Collection from '../Collection';
import Identify from '../Identify';

function Frame() {
    const [screen, setScreen] = useState( "search" );

        return(
            <div>
                <button onClick={() => setScreen("search")}>Search</button>
                <button onClick={() => setScreen("collection")}>Collection</button>
                
                {screen == "search" ? <Collection /> : <Identify />}
            </div>
        )
}

export default Frame;