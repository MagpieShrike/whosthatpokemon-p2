// Random Pokemon Generator
import React from 'react';
import Axios from 'axios';
import Identify from '../Identify';
//import Collection from '../Collection';
import rpCSS from './randomPokemon.module.css';

class RandomPokemon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            pokemon: "",
            collection: []
        };
    }

    updateCollection(newItem) {
        this.setState(() => {
            const collection = this.state.collection;
            collection.push( newItem );
            return { collection: this.state.collection }
        })
    }

    generatePokemon() {
        let min = Math.ceil(1);
        let max = Math.floor(893);
        let num = Math.floor(Math.random() * (max - min + 1) + min);

        Axios("https://pokeapi.co/api/v2/pokemon/" + num)
        .then((response) => {
            this.setState({ 
                pokemon: response.data,
                loading: false 
            });
        })
        .catch((error) => {
            console.log("Error: " + error);
            this.setState({ 
                loading: false,
                error: true 
            });
        });
    }

    render() {
        return(
            <div className={rpCSS.box}>
                <h1 className={rpCSS.h1}>Search for Pokemon</h1>

                <button className={rpCSS.button} onClick={() => this.generatePokemon()}>Search</button>
                {
                    (this.state.loading === true) ? (<><br /><br /></>) : (
                        (this.state.error === true) ? (<p className={rpCSS.p}>Nothing found!</p>) : (
                            <div>
                                <br /><br />
                                <img alt="pokemon" src={this.state.pokemon.sprites.front_default} />
                                <p className={rpCSS.p}>Found a Pokemon!</p>
                                <Identify {...this.state.pokemon} {...this.state} />
                            </div>
                        )

                    )
                }
            </div>
        );
    }

}

export default RandomPokemon;